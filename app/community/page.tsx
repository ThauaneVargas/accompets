"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  MessageCircle,
  Search,
  Heart,
  Share2,
  MapPin,
  Clock,
  Star,
  ArrowLeft,
  Send,
  ThumbsUp,
  Eye,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CommunityPage() {
  const [currentPlan, setCurrentPlan] = useState("basic")
  const [activeTab, setActiveTab] = useState("forums")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [newPostContent, setNewPostContent] = useState("")
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

  const forumCategories = [
    { id: "all", name: "Todos", icon: Users, count: 1247 },
    { id: "dogs", name: "Cães", icon: Heart, count: 856 },
    { id: "cats", name: "Gatos", icon: Heart, count: 234 },
    { id: "health", name: "Saúde", icon: Heart, count: 189 },
    { id: "training", name: "Adestramento", icon: Star, count: 156 },
    { id: "nutrition", name: "Alimentação", icon: Heart, count: 123 },
    { id: "local", name: "Grupos Locais", icon: MapPin, count: 89 },
  ]

  const forumPosts = [
    {
      id: 1,
      title: "Dicas para Golden Retriever filhote",
      content: "Acabei de adotar um Golden de 3 meses. Alguém tem dicas de alimentação e cuidados básicos?",
      author: "Maria Silva",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=MS",
      category: "dogs",
      replies: 23,
      likes: 45,
      views: 234,
      timeAgo: "2h",
      isPopular: true,
      tags: ["golden-retriever", "filhote", "cuidados"],
    },
    {
      id: 2,
      title: "Grupo de passeios - São Paulo/SP",
      content: "Criando um grupo para passeios com pets na região da Vila Madalena. Quem tem interesse?",
      author: "João Santos",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=JS",
      category: "local",
      replies: 12,
      likes: 28,
      views: 156,
      timeAgo: "4h",
      isPopular: false,
      tags: ["são-paulo", "passeios", "grupo-local"],
    },
    {
      id: 3,
      title: "Meu gato não quer comer ração nova",
      content: "Troquei a ração do meu gato e ele não está aceitando bem. Como fazer a transição gradual?",
      author: "Ana Costa",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=AC",
      category: "cats",
      replies: 18,
      likes: 32,
      views: 189,
      timeAgo: "6h",
      isPopular: false,
      tags: ["gatos", "alimentação", "transição"],
    },
    {
      id: 4,
      title: "Exercícios para cães idosos",
      content: "Meu labrador tem 12 anos e preciso adaptar os exercícios. Quais atividades são recomendadas?",
      author: "Pedro Lima",
      authorAvatar: "/placeholder.svg?height=40&width=40&text=PL",
      category: "health",
      replies: 31,
      likes: 67,
      views: 345,
      timeAgo: "8h",
      isPopular: true,
      tags: ["cães-idosos", "exercícios", "saúde"],
    },
  ]

  const localGroups = [
    {
      id: 1,
      name: "Pet Lovers SP - Vila Madalena",
      description: "Grupo para tutores da região da Vila Madalena",
      members: 234,
      location: "São Paulo, SP",
      avatar: "/placeholder.svg?height=60&width=60&text=SP",
      isJoined: true,
      lastActivity: "2h",
      category: "Passeios",
    },
    {
      id: 2,
      name: "Golden Retriever Brasil",
      description: "Comunidade nacional de tutores de Golden Retriever",
      members: 1567,
      location: "Nacional",
      avatar: "/placeholder.svg?height=60&width=60&text=GR",
      isJoined: false,
      lastActivity: "1h",
      category: "Raça Específica",
    },
    {
      id: 3,
      name: "Adestramento Positivo RJ",
      description: "Técnicas de adestramento positivo no Rio de Janeiro",
      members: 456,
      location: "Rio de Janeiro, RJ",
      avatar: "/placeholder.svg?height=60&width=60&text=RJ",
      isJoined: true,
      lastActivity: "30min",
      category: "Adestramento",
    },
  ]

  const trendingTopics = [
    { id: 1, name: "Vacinação COVID pets", posts: 45 },
    { id: 2, name: "Ração sem grãos", posts: 32 },
    { id: 3, name: "Adestramento filhotes", posts: 28 },
    { id: 4, name: "Pets idosos", posts: 24 },
    { id: 5, name: "Primeiros socorros", posts: 19 },
  ]

  const filteredPosts = forumPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const createPost = () => {
    if (newPostContent.trim()) {
      setNewPostContent("")
      // Simular criação de post
    }
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
                <Users className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Comunidade</h1>
                <p className="text-xs text-muted-foreground">Conecte-se com outros tutores</p>
              </div>
            </div>
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
                      <p className="text-sm text-muted-foreground">Acesso a grupos exclusivos</p>
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
              placeholder="Buscar discussões..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {forumCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="forums">Fóruns</TabsTrigger>
            <TabsTrigger value="groups">Grupos</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          {/* Forums */}
          <TabsContent value="forums" className="space-y-4">
            {/* Create Post */}
            <Card className="bg-card">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Compartilhe com a comunidade</h3>
                      <p className="text-sm text-muted-foreground">Faça uma pergunta ou compartilhe uma dica</p>
                    </div>
                  </div>
                  <Textarea
                    placeholder="O que você gostaria de compartilhar?"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <div className="flex justify-between items-center">
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dogs">Cães</SelectItem>
                        <SelectItem value="cats">Gatos</SelectItem>
                        <SelectItem value="health">Saúde</SelectItem>
                        <SelectItem value="training">Adestramento</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={createPost} disabled={!newPostContent.trim()}>
                      <Send className="w-4 h-4 mr-2" />
                      Publicar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Post Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={post.authorAvatar || "/placeholder.svg"}
                            alt={post.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-medium">{post.author}</h3>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{post.timeAgo}</span>
                              {post.isPopular && (
                                <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div>
                        <h4 className="font-medium mb-2">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">{post.content}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Post Stats */}
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Groups */}
          <TabsContent value="groups" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Grupos da Comunidade</h2>
              <Badge variant="outline">{localGroups.length} grupos</Badge>
            </div>

            {localGroups.map((group) => (
              <Card key={group.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={group.avatar || "/placeholder.svg"}
                      alt={group.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-medium">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">{group.description}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{group.members} membros</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{group.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {group.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">Ativo há {group.lastActivity}</span>
                        </div>

                        <Button
                          size="sm"
                          variant={group.isJoined ? "outline" : "default"}
                          className={group.isJoined ? "" : "bg-primary hover:bg-primary/90"}
                        >
                          {group.isJoined ? "Participando" : "Participar"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Trending */}
          <TabsContent value="trending" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Tópicos em Alta</h2>
              <Badge variant="outline">Últimas 24h</Badge>
            </div>

            {/* Trending Topics */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Assuntos Populares
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">#{topic.name}</h3>
                        <p className="text-sm text-muted-foreground">{topic.posts} discussões</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Ver Tópico
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Estatísticas da Comunidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Membros ativos</span>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    12,547
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Posts hoje</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    234
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Grupos ativos</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    89
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Respostas hoje</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    1,456
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Featured Members */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Membros em Destaque</CardTitle>
                <CardDescription>Tutores mais ativos da semana</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    name: "Dr. Ana Silva",
                    role: "Veterinária",
                    posts: 45,
                    avatar: "/placeholder.svg?height=40&width=40&text=AS",
                  },
                  {
                    name: "Carlos Santos",
                    role: "Tutor Experiente",
                    posts: 32,
                    avatar: "/placeholder.svg?height=40&width=40&text=CS",
                  },
                  {
                    name: "Maria Oliveira",
                    role: "Adestradora",
                    posts: 28,
                    avatar: "/placeholder.svg?height=40&width=40&text=MO",
                  },
                ].map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {member.posts} posts
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
