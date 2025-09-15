"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ArrowLeft, Calendar, Phone, FileText, Heart, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VetPatientsPage() {
  const patients = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      age: "3 anos",
      owner: "João Silva",
      phone: "(11) 99999-1111",
      lastVisit: "15/12/2024",
      condition: "Saudável",
      avatar: "/cute-golden-retriever-face.png",
      status: "ativo",
    },
    {
      id: 2,
      name: "Luna",
      breed: "Border Collie",
      age: "2 anos",
      owner: "Maria Santos",
      phone: "(11) 99999-2222",
      lastVisit: "12/12/2024",
      condition: "Em tratamento",
      avatar: "/border-collie-face.png",
      status: "tratamento",
    },
    {
      id: 3,
      name: "Thor",
      breed: "Pastor Alemão",
      age: "5 anos",
      owner: "Pedro Costa",
      phone: "(11) 99999-3333",
      lastVisit: "Hoje",
      condition: "Emergência",
      avatar: "/german-shepherd-face.png",
      status: "emergencia",
    },
    {
      id: 4,
      name: "Bella",
      breed: "Labrador",
      age: "4 anos",
      owner: "Ana Lima",
      phone: "(11) 99999-4444",
      lastVisit: "10/12/2024",
      condition: "Saudável",
      avatar: "/labrador-face.png",
      status: "ativo",
    },
    {
      id: 5,
      name: "Mimi",
      breed: "Persa",
      age: "6 anos",
      owner: "Carlos Oliveira",
      phone: "(11) 99999-5555",
      lastVisit: "08/12/2024",
      condition: "Em tratamento",
      avatar: "/persian-cat-face.png",
      status: "tratamento",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/vet-dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">Lista de Pacientes</h1>
            <p className="text-sm text-muted-foreground">Gerencie todos os seus pacientes</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar por nome do pet ou tutor..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Patients List */}
        <div className="grid gap-4">
          {patients.map((patient) => (
            <Card key={patient.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{patient.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{patient.name}</h3>
                      <Badge
                        variant={
                          patient.status === "emergencia"
                            ? "destructive"
                            : patient.status === "tratamento"
                              ? "default"
                              : "secondary"
                        }
                        className={patient.status === "ativo" ? "bg-green-100 text-green-800" : ""}
                      >
                        {patient.condition}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {patient.breed} • {patient.age}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>Tutor: {patient.owner}</span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {patient.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Última visita: {patient.lastVisit}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link href={`/vet-dashboard/patient/${patient.id}`}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <FileText className="w-4 h-4 mr-2" />
                        Prontuário
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Contatar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Pacientes Saudáveis</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Em Tratamento</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Casos Urgentes</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
