"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  MapPin,
  Calendar,
  Trophy,
  Plus,
  ChevronDown,
  Crown,
  Settings,
  ShoppingCart,
  Video,
  Shield,
  MessageCircle,
  Bot,
} from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { UserProfileHeader } from "@/components/navigation/user-profile-header"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [currentPlan, setCurrentPlan] = useState("basic")
  const [userType, setUserType] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const type = localStorage.getItem("userType")
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const plan = localStorage.getItem("userPlan") || "basic"

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    if (type === "veterinario") {
      router.push("/vet-dashboard")
      return
    }

    setUserType(type)
    setCurrentPlan(plan)
  }, [router])

  if (!userType) {
    return <div>Carregando...</div>
  }

  const pets = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: "3 anos",
      avatar: "/cute-golden-retriever-face.png",
      status: "Saudável",
    },
    {
      id: 2,
      name: "Luna",
      breed: "Border Collie",
      age: "2 anos",
      avatar: "/border-collie-face.png",
      status: "Saudável",
    },
  ]

  const currentPet = pets[0] // Pet ativo selecionado

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileNav userType={userType} currentPlan={currentPlan} />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">ACCOMPETS</h1>
              </div>
            </div>
          </div>

          <UserProfileHeader userType={userType} currentPlan={currentPlan} />
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Plan Upgrade Banner */}
        {currentPlan === "basic" && (
          <Link href="/plans">
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 cursor-pointer hover:from-accent/20 hover:to-primary/20 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium text-accent">Upgrade para Pro</p>
                      <p className="text-sm text-muted-foreground">Desbloqueie recursos avançados</p>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">7 dias grátis</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Pet Selector */}
        {pets.length > 1 && (
          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {pets.slice(0, currentPlan === "basic" ? 1 : 3).map((pet) => (
                      <img
                        key={pet.id}
                        src={pet.avatar || "/placeholder.svg"}
                        alt={pet.name}
                        className="w-8 h-8 rounded-full border-2 border-background object-cover"
                      />
                    ))}
                    {currentPlan === "basic" && pets.length > 1 && (
                      <Link href="/plans">
                        <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center cursor-pointer hover:bg-accent/30">
                          <Crown className="w-3 h-3 text-accent" />
                        </div>
                      </Link>
                    )}
                    {currentPlan === "pro" && pets.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                        <span className="text-xs font-medium">+{pets.length - 3}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">
                      {currentPlan === "basic" ? "1" : pets.length} pets cadastrados
                      {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent inline ml-1" />}
                    </p>
                    <p className="text-sm text-muted-foreground">Visualizando: {currentPet.name}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pet Status Card */}
        <Link href="/profile">
          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <img
                      src={currentPet.avatar || "/placeholder.svg"}
                      alt="Pet avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{currentPet.name}</CardTitle>
                    <CardDescription>
                      {currentPet.breed} • {currentPet.age}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  {currentPet.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Última localização: Casa • há 2 horas</span>
                {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent" />}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Próxima vacina: Antirrábica em 15 dias</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/tracking">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium">Rastreamento</p>
                <p className="text-xs text-muted-foreground">{currentPlan === "basic" ? "Básico" : "Avançado"}</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/profile">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Carteira</p>
                <p className="text-xs text-muted-foreground">Vacinas e exames</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/clinics">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Clínicas</p>
                <p className="text-xs text-muted-foreground">Veterinários próximos</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/telemedicine">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <Video className="w-8 h-8 text-primary mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium">Telemedicina</p>
                <p className="text-xs text-muted-foreground">
                  {currentPlan === "basic" ? "3 consultas/mês" : "Ilimitado"}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/store">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium">PetStore</p>
                <p className="text-xs text-muted-foreground">
                  {currentPlan === "basic" ? "Produtos básicos" : "Catálogo completo"}
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/nutrition">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <Plus className="w-8 h-8 text-primary mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium">Alimentação</p>
                <p className="text-xs text-muted-foreground">{currentPlan === "basic" ? "Básico" : "IA + Alertas"}</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/adoption">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Adoção</p>
                <p className="text-xs text-muted-foreground">Encontre um amigo</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/community">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium">Comunidade</p>
                <p className="text-xs text-muted-foreground">
                  {currentPlan === "basic" ? "Acesso limitado" : "Grupos exclusivos"}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/emergency">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors border-red-200 dark:border-red-800">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-red-700 dark:text-red-300">Emergência</p>
                <p className="text-xs text-red-600 dark:text-red-400">Ajuda 24h</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ai-assistant">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors border-purple-200 dark:border-purple-800">
              <CardContent className="p-4 text-center">
                <div className="relative">
                  <Bot className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  {currentPlan === "basic" && <Crown className="w-3 h-3 text-accent absolute -top-1 -right-1" />}
                </div>
                <p className="text-sm font-medium text-purple-700 dark:text-purple-300">PetIA</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  {currentPlan === "basic" ? "50 consultas/mês" : "IA Avançada"}
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link href="/plans">
            <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Crown className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Planos</p>
                <p className="text-xs text-muted-foreground">
                  {currentPlan === "basic" ? "Fazer upgrade" : "Gerenciar"}
                </p>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Configurações</p>
              <p className="text-xs text-muted-foreground">Conta e privacidade</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Challenge */}
        <Link href="/challenges">
          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Desafio Semanal
                </CardTitle>
                <Badge variant="outline">3/7 dias</Badge>
              </div>
              <CardDescription>Exercite seu pet por 30 minutos diários</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Progress value={43} className="h-2" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progresso: 43%</span>
                <span className="text-accent font-medium">+50 pontos</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Health Summary */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Resumo de Saúde</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Peso ideal</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                ✓ 28kg
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Atividade diária</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                ✓ 45min
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Hidratação</span>
              <Badge variant="outline">Atenção</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Points and Rewards */}
        <Link href="/rewards">
          <Card className="bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Seus pontos</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
                <Trophy className="w-8 h-8 opacity-90" />
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="w-full mt-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Ver Recompensas
              </Button>
            </CardContent>
          </Card>
        </Link>

        {/* Add Pet Button */}
        <Link href="/add-pet">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Plus className="w-4 h-4 mr-2" />
            {currentPlan === "basic" ? "Adicionar Pet (Pro)" : "Adicionar Novo Pet"}
            {currentPlan === "basic" && <Crown className="w-4 h-4 ml-2" />}
          </Button>
        </Link>
      </main>
    </div>
  )
}
