import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Heart, MapPin, Search, AlertTriangle, DollarSign, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function AdoptionPage() {
  const availablePets = [
    {
      id: 1,
      name: "Mel",
      breed: "Vira-lata",
      age: "2 anos",
      gender: "Fêmea",
      size: "Médio",
      location: "São Paulo, SP",
      organization: "ONG Patinhas Carentes",
      image: "/rescue-dog-1.png",
      description: "Mel é muito carinhosa e adora crianças. Já está castrada e vacinada.",
      urgent: false,
      vaccinated: true,
      neutered: true,
      distance: "3.2 km",
    },
    {
      id: 2,
      name: "Simba",
      breed: "Gato SRD",
      age: "6 meses",
      gender: "Macho",
      size: "Pequeno",
      location: "Rio de Janeiro, RJ",
      organization: "Abrigo Felino Feliz",
      image: "/rescue-cat-1.png",
      description: "Simba é brincalhão e se dá bem com outros gatos. Precisa de lar urgente.",
      urgent: true,
      vaccinated: true,
      neutered: false,
      distance: "1.8 km",
    },
    {
      id: 3,
      name: "Thor",
      breed: "Pitbull",
      age: "4 anos",
      gender: "Macho",
      size: "Grande",
      location: "Belo Horizonte, MG",
      organization: "Resgate Animal BH",
      image: "/rescue-dog-2.png",
      description: "Thor é dócil e protetor. Ideal para famílias com experiência com cães grandes.",
      urgent: false,
      vaccinated: true,
      neutered: true,
      distance: "5.1 km",
    },
  ]

  const missingPets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      lastSeen: "Parque Ibirapuera",
      date: "Há 2 dias",
      contact: "(11) 99999-9999",
      image: "/missing-dog-1.png",
      reward: "R$ 500",
    },
    {
      id: 2,
      name: "Luna",
      breed: "Gata Siamesa",
      lastSeen: "Rua das Flores, 123",
      date: "Há 5 horas",
      contact: "(11) 88888-8888",
      image: "/missing-cat-1.png",
      reward: "R$ 200",
    },
  ]

  const organizations = [
    {
      name: "ONG Patinhas Carentes",
      location: "São Paulo, SP",
      petsAvailable: 23,
      rating: 4.8,
      image: "/ong-1.png",
    },
    {
      name: "Abrigo Felino Feliz",
      location: "Rio de Janeiro, RJ",
      petsAvailable: 15,
      rating: 4.6,
      image: "/ong-2.png",
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
          <div>
            <h1 className="text-xl font-bold text-foreground">Adoção & Resgate</h1>
            <p className="text-sm text-muted-foreground">Encontre seu novo melhor amigo</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome, raça..." className="pl-10" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Select>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Espécie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Cachorro</SelectItem>
                <SelectItem value="cat">Gato</SelectItem>
                <SelectItem value="all">Todos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Idade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="puppy">Filhote</SelectItem>
                <SelectItem value="adult">Adulto</SelectItem>
                <SelectItem value="senior">Idoso</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Porte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Pequeno</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Missing Pets Alert */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-5 h-5" />
              Pets Desaparecidos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {missingPets.slice(0, 1).map((pet) => (
              <div key={pet.id} className="flex items-center gap-3 p-3 rounded-lg bg-background">
                <img
                  src={pet.image || "/placeholder.svg"}
                  alt={pet.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">
                    {pet.name} - {pet.breed}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Visto em {pet.lastSeen} • {pet.date}
                  </p>
                  <p className="text-sm text-accent font-medium">Recompensa: {pet.reward}</p>
                </div>
                <Button size="sm" variant="destructive">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Ver todos os desaparecidos ({missingPets.length})
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Quero Adotar</p>
              <p className="text-xs text-muted-foreground">Encontre seu pet</p>
            </CardContent>
          </Card>

          <Card className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium">Fazer Doação</p>
              <p className="text-xs text-muted-foreground">Ajude uma ONG</p>
            </CardContent>
          </Card>
        </div>

        {/* Available Pets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pets Disponíveis</h2>
            <Badge variant="secondary">{availablePets.length} pets</Badge>
          </div>

          {availablePets.map((pet) => (
            <Card key={pet.id} className="bg-card">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="relative">
                    <img
                      src={pet.image || "/placeholder.svg"}
                      alt={pet.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    {pet.urgent && (
                      <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs">
                        Urgente
                      </Badge>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{pet.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {pet.breed} • {pet.age} • {pet.gender}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {pet.size}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">{pet.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>
                        {pet.location} • {pet.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {pet.vaccinated && (
                        <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                          ✓ Vacinado
                        </Badge>
                      )}
                      {pet.neutered && (
                        <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                          ✓ Castrado
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-muted-foreground">{pet.organization}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm">Candidatar-se</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Organizations */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              ONGs Parceiras
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {organizations.map((org, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <img
                    src={org.image || "/placeholder.svg"}
                    alt={org.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">{org.name}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{org.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{org.petsAvailable} pets disponíveis</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span>{org.rating}</span>
                  </div>
                  <Button size="sm" variant="outline" className="mt-1 bg-transparent">
                    Visitar
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Donation Section */}
        <Card className="bg-accent/10 border-accent/20">
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
            <h3 className="font-medium text-accent mb-2">Faça a Diferença</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sua doação ajuda a cuidar de pets que precisam de um lar
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button size="sm" variant="outline" className="bg-transparent">
                Doar R$ 10
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent">
                Doar R$ 25
              </Button>
            </div>
            <Button size="sm" className="w-full mt-2 bg-accent hover:bg-accent/90">
              Escolher Valor
            </Button>
          </CardContent>
        </Card>

        {/* Report Missing Pet */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h3 className="font-medium text-foreground mb-2">Pet Desaparecido?</h3>
            <p className="text-sm text-muted-foreground mb-4">Cadastre seu pet desaparecido e mobilize a comunidade</p>
            <Button variant="outline" className="w-full bg-transparent">
              Reportar Desaparecimento
            </Button>
          </CardContent>
        </Card>

        {/* Become Partner */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h3 className="font-medium text-foreground mb-2">É uma ONG?</h3>
            <p className="text-sm text-muted-foreground mb-4">Cadastre sua organização e conecte-se com adotantes</p>
            <Button variant="outline" className="w-full bg-transparent">
              Tornar-se Parceiro
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
