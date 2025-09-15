import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MapPin, Star, Phone, Clock, Calendar, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function ClinicsPage() {
  const clinics = [
    {
      id: 1,
      name: "Clínica Veterinária Pet Care",
      rating: 4.8,
      reviews: 127,
      distance: "0.8 km",
      address: "Rua das Flores, 123 - Centro",
      phone: "(21) 3456-7890",
      hours: "Seg-Sex: 8h-18h | Sáb: 8h-12h",
      specialties: ["Cirurgia", "Dermatologia", "Cardiologia"],
      emergency: true,
      image: "/veterinary-clinic-exterior.png",
    },
    {
      id: 2,
      name: "Hospital Veterinário Animal Life",
      rating: 4.6,
      reviews: 89,
      distance: "1.2 km",
      address: "Av. Principal, 456 - Bairro Novo",
      phone: "(21) 2345-6789",
      hours: "24 horas",
      specialties: ["Emergência", "Oncologia", "Ortopedia"],
      emergency: true,
      image: "/animal-hospital.png",
    },
    {
      id: 3,
      name: "Clínica Amigos Peludos",
      rating: 4.5,
      reviews: 203,
      distance: "2.1 km",
      address: "Rua dos Animais, 789 - Vila Pet",
      phone: "(21) 1234-5678",
      hours: "Seg-Sáb: 7h-19h",
      specialties: ["Vacinação", "Consultas", "Banho e Tosa"],
      emergency: false,
      image: "/pet-clinic.png",
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
            <h1 className="text-xl font-bold text-foreground">Clínicas Veterinárias</h1>
            <p className="text-sm text-muted-foreground">Encontre cuidados próximos</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar clínicas, especialidades..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              <MapPin className="w-4 h-4 mr-2" />
              Próximas
            </Button>
          </div>
        </div>

        {/* Emergency Banner */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
              <div>
                <p className="font-medium text-destructive">Emergência 24h</p>
                <p className="text-sm text-muted-foreground">2 clínicas disponíveis agora</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clinics List */}
        <div className="space-y-4">
          {clinics.map((clinic) => (
            <Card key={clinic.id} className="bg-card">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <img
                    src={clinic.image || "/placeholder.svg"}
                    alt={clinic.name}
                    className="w-16 h-16 rounded-lg object-cover bg-muted"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{clinic.name}</h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{clinic.rating}</span>
                          <span className="text-muted-foreground">({clinic.reviews})</span>
                        </div>
                      </div>
                      {clinic.emergency && (
                        <Badge variant="destructive" className="text-xs">
                          24h
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>
                          {clinic.address} • {clinic.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{clinic.hours}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {clinic.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {clinic.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{clinic.specialties.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Clinic Button */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-6 text-center">
            <h3 className="font-medium text-foreground mb-2">É veterinário?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Cadastre sua clínica e conecte-se com tutores da região
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Cadastrar Clínica
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
