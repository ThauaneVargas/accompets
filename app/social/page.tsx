import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Heart, MessageCircle, Share2, Search, MapPin, Camera, Users, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function SocialPage() {
  const posts = [
    {
      id: 1,
      pet: {
        name: "Buddy",
        breed: "Labrador",
        owner: "Ana Silva",
        avatar: "/labrador-face.png",
        location: "São Paulo, SP",
        followers: 234,
      },
      content: "Primeiro dia na praia! Buddy está adorando as ondas 🌊",
      image: "/dog-beach.png",
      likes: 42,
      comments: 8,
      timeAgo: "2h",
      milestone: "Primeira vez na praia",
    },
    {
      id: 2,
      pet: {
        name: "Mia",
        breed: "Persa",
        owner: "Carlos Santos",
        avatar: "/persian-cat-face.png",
        location: "Rio de Janeiro, RJ",
        followers: 156,
      },
      content: "Mia completou 2 anos hoje! Festa com muito carinho e petiscos especiais 🎂",
      image: "/cat-birthday.png",
      likes: 67,
      comments: 15,
      timeAgo: "4h",
      milestone: "2º Aniversário",
    },
    {
      id: 3,
      pet: {
        name: "Thor",
        breed: "Pastor Alemão",
        owner: "Mariana Costa",
        avatar: "/german-shepherd-face.png",
        location: "Belo Horizonte, MG",
        followers: 89,
      },
      content: "Thor passou no teste de obediência com nota máxima! Muito orgulhosa do meu menino 🏆",
      image: "/dog-training.png",
      likes: 28,
      comments: 5,
      timeAgo: "6h",
      milestone: "Certificado de Obediência",
    },
  ]

  const suggestedPets = [
    {
      name: "Luna",
      breed: "Border Collie",
      owner: "Pedro Lima",
      avatar: "/border-collie-face.png",
      distance: "1.2 km",
      mutualFriends: 3,
    },
    {
      name: "Simba",
      breed: "Maine Coon",
      owner: "Julia Ferreira",
      avatar: "/maine-coon-face.png",
      distance: "2.8 km",
      mutualFriends: 1,
    },
  ]

  const memories = [
    {
      date: "1 ano atrás",
      title: "Primeiro banho do Max",
      image: "/puppy-bath.png",
    },
    {
      date: "6 meses atrás",
      title: "Max aprendeu a sentar",
      image: "/dog-sitting.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">PetSocial</h1>
            <p className="text-sm text-muted-foreground">Conecte-se com outros pets</p>
          </div>
          <Button variant="ghost" size="icon">
            <Camera className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar pets, tutores..." className="pl-10" />
        </div>

        {/* Memories Section */}
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Memórias de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {memories.map((memory, index) => (
                <div key={index} className="flex-shrink-0 w-24 text-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mb-2 bg-muted">
                    <img
                      src={memory.image || "/placeholder.svg"}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{memory.date}</p>
                  <p className="text-xs font-medium">{memory.title}</p>
                </div>
              ))}
              <div className="flex-shrink-0 w-24 text-center">
                <div className="w-20 h-20 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-2">
                  <Camera className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-xs font-medium">Criar memória</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Pets */}
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Pets Próximos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {suggestedPets.map((pet, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={pet.avatar || "/placeholder.svg"}
                      alt={pet.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{pet.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{pet.distance}</span>
                        <span>•</span>
                        <span>{pet.mutualFriends} amigos em comum</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    Seguir
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.pet.avatar || "/placeholder.svg"}
                      alt={post.pet.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{post.pet.name}</p>
                        {post.milestone && (
                          <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                            <Award className="w-3 h-3 mr-1" />
                            Marco
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>{post.pet.owner}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Seguir
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {post.milestone && (
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <p className="text-sm font-medium text-accent">🎉 {post.milestone}</p>
                  </div>
                )}

                <p className="text-sm">{post.content}</p>

                {post.image && (
                  <div className="rounded-lg overflow-hidden bg-muted">
                    <img src={post.image || "/placeholder.svg"} alt="Post image" className="w-full h-48 object-cover" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <Heart className="w-5 h-5 mr-2" />
                      <span className="text-sm">{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm">{post.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{post.pet.location}</span>
                  <span>•</span>
                  <span>{post.pet.followers} seguidores</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Create Post Button */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-4 text-center">
            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="font-medium text-foreground mb-1">Compartilhe um momento especial</p>
            <p className="text-sm text-muted-foreground mb-3">Mostre como seu pet está hoje</p>
            <Button variant="outline" className="w-full bg-transparent">
              Criar Post
            </Button>
          </CardContent>
        </Card>

        {/* Pet Profile Stats */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Perfil do Max</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-muted-foreground">Seguidores</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-xs text-muted-foreground">Seguindo</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                Editar Perfil
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Ver Perfil Público
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
