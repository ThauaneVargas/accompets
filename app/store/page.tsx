"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Star, Heart, Package, Truck, Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function StorePage() {
  const [currentPlan, setCurrentPlan] = useState("basic")
  const [cartItems, setCartItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const router = useRouter()

  useEffect(() => {
    const plan = localStorage.getItem("userPlan") || "basic"
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    setCurrentPlan(plan)
  }, [router])

  const products = [
    {
      id: 1,
      name: "Ração Premium Golden Retriever Adulto",
      brand: "Royal Canin",
      price: 89.9,
      originalPrice: 109.9,
      discount: 18,
      rating: 4.8,
      reviews: 234,
      image: "/premium-dog-food-bag.png",
      category: "food",
      inStock: true,
      freeShipping: true,
      isPro: false,
    },
    {
      id: 2,
      name: "Brinquedo Interativo Kong Classic",
      brand: "Kong",
      price: 45.9,
      originalPrice: null,
      discount: 0,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder-zra5b.png",
      category: "toys",
      inStock: true,
      freeShipping: false,
      isPro: false,
    },
    {
      id: 3,
      name: "Coleira GPS Inteligente Pro",
      brand: "PetTracker",
      price: 299.9,
      originalPrice: 399.9,
      discount: 25,
      rating: 4.7,
      reviews: 89,
      image: "/placeholder-zqrsa.png",
      category: "accessories",
      inStock: true,
      freeShipping: true,
      isPro: true,
    },
    {
      id: 4,
      name: "Ração Úmida Gatos Castrados",
      brand: "Whiskas",
      price: 3.5,
      originalPrice: 4.2,
      discount: 17,
      rating: 4.6,
      reviews: 312,
      image: "/placeholder-leuk7.png",
      category: "food",
      inStock: true,
      freeShipping: false,
      isPro: false,
    },
    {
      id: 5,
      name: "Cama Ortopédica Memory Foam",
      brand: "PetComfort",
      price: 189.9,
      originalPrice: 249.9,
      discount: 24,
      rating: 4.8,
      reviews: 67,
      image: "/placeholder-hpey0.png",
      category: "accessories",
      inStock: true,
      freeShipping: true,
      isPro: true,
    },
    {
      id: 6,
      name: "Kit Higiene Dental Completo",
      brand: "DentaPet",
      price: 34.9,
      originalPrice: null,
      discount: 0,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder-jv5em.png",
      category: "health",
      inStock: true,
      freeShipping: false,
      isPro: false,
    },
  ]

  const categories = [
    { id: "all", name: "Todos", icon: Package },
    { id: "food", name: "Alimentação", icon: Package },
    { id: "toys", name: "Brinquedos", icon: Heart },
    { id: "accessories", name: "Acessórios", icon: Package },
    { id: "health", name: "Saúde", icon: Heart },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const canAccess = currentPlan === "pro" || !product.isPro

    return matchesSearch && matchesCategory && canAccess
  })

  const addToCart = (productId: number) => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">PetStore</h1>
                <p className="text-xs text-muted-foreground">Marketplace ACCOMPETS</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="relative bg-transparent">
              <ShoppingCart className="w-4 h-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Plan Banner */}
        {currentPlan === "basic" && (
          <Link href="/plans">
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 cursor-pointer hover:from-accent/20 hover:to-primary/20 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-accent">Upgrade para Pro</p>
                      <p className="text-sm text-muted-foreground">Acesse produtos exclusivos</p>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Premium</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Deals */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Ofertas em Destaque
            </CardTitle>
            <CardDescription>Descontos especiais para membros ACCOMPETS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-accent" />
              <span>Frete grátis em compras acima de R$ 99</span>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {selectedCategory === "all"
                ? "Todos os Produtos"
                : categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-sm text-muted-foreground">{filteredProducts.length} produtos</p>
          </div>

          <div className="grid gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                          -{product.discount}%
                        </Badge>
                      )}
                      {product.isPro && <Crown className="absolute top-1 left-1 w-4 h-4 text-accent" />}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-medium text-sm leading-tight">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-primary">R$ {product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                R$ {product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          {product.freeShipping && (
                            <div className="flex items-center gap-1 mt-1">
                              <Truck className="w-3 h-3 text-accent" />
                              <span className="text-xs text-accent">Frete grátis</span>
                            </div>
                          )}
                        </div>

                        <Button
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cupons Section */}
        <Card className="bg-accent/10 border-accent/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Seus Cupons ACCOMPETS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-dashed border-accent">
              <div>
                <p className="font-medium text-accent">PRIMEIRA10</p>
                <p className="text-sm text-muted-foreground">10% OFF na primeira compra</p>
              </div>
              <Badge variant="outline" className="border-accent text-accent">
                Disponível
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-card rounded-lg border border-dashed border-primary">
              <div>
                <p className="font-medium text-primary">PONTOS50</p>
                <p className="text-sm text-muted-foreground">R$ 5 OFF (500 pontos)</p>
              </div>
              <Button size="sm" variant="outline">
                Resgatar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories Quick Access */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Ração Premium</p>
              <p className="text-xs text-muted-foreground">A partir de R$ 29,90</p>
            </CardContent>
          </Card>

          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Brinquedos</p>
              <p className="text-xs text-muted-foreground">Diversão garantida</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
