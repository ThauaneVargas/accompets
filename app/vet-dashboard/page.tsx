"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Stethoscope, Calendar, Users, FileText, Clock, TrendingUp, Phone, AlertTriangle, Plus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { UserProfileHeader } from "@/components/navigation/user-profile-header"

export default function VetDashboard() {
  const router = useRouter()
  const [userType, setUserType] = useState<string | null>(null)

  useEffect(() => {
    const type = localStorage.getItem("userType")
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn || type !== "veterinario") {
      router.push("/login")
      return
    }

    setUserType(type)
  }, [router])

  if (!userType) {
    return <div>Carregando...</div>
  }

  const todayAppointments = [
    {
      id: 1,
      time: "09:00",
      petName: "Max",
      ownerName: "João Silva",
      type: "Consulta de rotina",
      status: "confirmado",
      avatar: "/cute-golden-retriever-face.png",
    },
    {
      id: 2,
      time: "10:30",
      petName: "Luna",
      ownerName: "Maria Santos",
      type: "Vacinação",
      status: "em-andamento",
      avatar: "/border-collie-face.png",
    },
    {
      id: 3,
      time: "14:00",
      petName: "Thor",
      ownerName: "Pedro Costa",
      type: "Emergência",
      status: "urgente",
      avatar: "/german-shepherd-face.png",
    },
  ]

  const recentPatients = [
    {
      id: 1,
      name: "Bella",
      owner: "Ana Lima",
      lastVisit: "2 dias atrás",
      condition: "Saudável",
      avatar: "/labrador-face.png",
    },
    {
      id: 2,
      name: "Mimi",
      owner: "Carlos Oliveira",
      lastVisit: "1 semana atrás",
      condition: "Em tratamento",
      avatar: "/persian-cat-face.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MobileNav userType={userType} />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">ACCOMPETS</h1>
                <p className="text-xs text-muted-foreground">Painel Veterinário</p>
              </div>
            </div>
          </div>

          <UserProfileHeader userType={userType} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-800">Bem-vindo, Dr. João Silva</h2>
                <p className="text-blue-600">CRMV-SP 12345 • Clínica Veterinária ABC</p>
                <p className="text-sm text-muted-foreground mt-1">Hoje você tem 8 consultas agendadas</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Hoje</p>
                <p className="text-2xl font-bold text-blue-800">
                  {new Date().toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Consultas Hoje</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Emergências</p>
                  <p className="text-2xl font-bold text-red-600">2</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de Cura</p>
                  <p className="text-2xl font-bold text-green-600">94%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Consultas de Hoje
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Consulta
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="text-center min-w-[60px]">
                    <p className="text-sm font-medium">{appointment.time}</p>
                  </div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{appointment.petName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{appointment.petName}</p>
                    <p className="text-sm text-muted-foreground">{appointment.ownerName}</p>
                    <p className="text-xs text-muted-foreground">{appointment.type}</p>
                  </div>
                  <Badge
                    variant={
                      appointment.status === "urgente"
                        ? "destructive"
                        : appointment.status === "em-andamento"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {appointment.status === "confirmado" && "Confirmado"}
                    {appointment.status === "em-andamento" && "Em andamento"}
                    {appointment.status === "urgente" && "Urgente"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Pacientes Recentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPatients.map((patient) => (
                <Link key={patient.id} href={`/vet-dashboard/patient/${patient.id}`}>
                  <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{patient.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">Tutor: {patient.owner}</p>
                      <p className="text-xs text-muted-foreground">Última visita: {patient.lastVisit}</p>
                    </div>
                    <Badge
                      variant={patient.condition === "Saudável" ? "secondary" : "outline"}
                      className={patient.condition === "Saudável" ? "bg-green-100 text-green-800" : ""}
                    >
                      {patient.condition}
                    </Badge>
                  </div>
                </Link>
              ))}

              <Link href="/vet-dashboard/patients">
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Todos os Pacientes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/vet-dashboard/patients">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Pacientes</p>
                <p className="text-xs text-muted-foreground">Gerenciar prontuários</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/vet-dashboard/schedule">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Agenda</p>
                <p className="text-xs text-muted-foreground">Consultas e horários</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/vet-dashboard/prescriptions">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Receitas</p>
                <p className="text-xs text-muted-foreground">Medicações ativas</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/vet-dashboard/reports">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Relatórios</p>
                <p className="text-xs text-muted-foreground">Estatísticas da clínica</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Emergency Alerts */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              Alertas de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-200">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium text-red-800">Pet com sintomas graves</p>
                  <p className="text-sm text-red-600">Thor - Dificuldade respiratória • Tutor: Pedro Costa</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4 mr-1" />
                    Ligar
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Atender
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
