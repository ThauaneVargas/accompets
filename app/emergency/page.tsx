"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  Heart,
  Shield,
  Navigation,
  ArrowLeft,
  Star,
  Zap,
  Info,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmergencyPage() {
  const [currentPlan, setCurrentPlan] = useState("basic")
  const [activeTab, setActiveTab] = useState("emergency")
  const [isEmergencyActive, setIsEmergencyActive] = useState(false)
  const [emergencyTimer, setEmergencyTimer] = useState(0)
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

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isEmergencyActive) {
      interval = setInterval(() => {
        setEmergencyTimer((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isEmergencyActive])

  const emergencyClinics = [
    {
      id: 1,
      name: "Hospital Veterinário 24h",
      address: "Rua das Flores, 123 - Centro",
      distance: "0.8 km",
      phone: "(11) 9999-8888",
      rating: 4.9,
      reviews: 234,
      isOpen: true,
      specialties: ["Emergência", "Cirurgia", "UTI"],
      estimatedTime: "5 min",
    },
    {
      id: 2,
      name: "Clínica Pet Urgência",
      address: "Av. Principal, 456 - Jardins",
      distance: "1.2 km",
      phone: "(11) 8888-7777",
      rating: 4.7,
      reviews: 156,
      isOpen: true,
      specialties: ["Emergência", "Radiologia"],
      estimatedTime: "8 min",
    },
    {
      id: 3,
      name: "Centro Veterinário Express",
      address: "Rua da Saúde, 789 - Vila Nova",
      distance: "2.1 km",
      phone: "(11) 7777-6666",
      rating: 4.6,
      reviews: 89,
      isOpen: false,
      specialties: ["Emergência", "Cardiologia"],
      estimatedTime: "12 min",
    },
  ]

  const firstAidGuides = [
    {
      id: 1,
      title: "Engasgo",
      description: "O que fazer quando o pet está engasgado",
      urgency: "critical",
      steps: [
        "Abra a boca do animal com cuidado",
        "Verifique se consegue ver o objeto",
        "Use uma pinça para remover objetos visíveis",
        "Para cães pequenos: segure de cabeça para baixo",
        "Para cães grandes: levante as patas traseiras",
        "Procure ajuda veterinária imediatamente",
      ],
    },
    {
      id: 2,
      title: "Intoxicação",
      description: "Sinais e primeiros socorros para envenenamento",
      urgency: "critical",
      steps: [
        "NÃO induza o vômito sem orientação",
        "Identifique a substância ingerida",
        "Remova o animal da fonte de intoxicação",
        "Mantenha o animal calmo e aquecido",
        "Ligue imediatamente para emergência veterinária",
        "Leve a embalagem do produto se possível",
      ],
    },
    {
      id: 3,
      title: "Ferimentos",
      description: "Como tratar cortes e feridas",
      urgency: "moderate",
      steps: [
        "Mantenha a calma e acalme o animal",
        "Limpe suas mãos antes de tocar no ferimento",
        "Pressione suavemente com gaze limpa para parar sangramento",
        "Limpe ao redor do ferimento com água morna",
        "Aplique bandagem se necessário",
        "Procure veterinário para avaliação",
      ],
    },
    {
      id: 4,
      title: "Convulsões",
      description: "Como agir durante uma convulsão",
      urgency: "critical",
      steps: [
        "Mantenha a calma e não toque no animal",
        "Remova objetos que possam machucá-lo",
        "Cronometre a duração da convulsão",
        "NÃO coloque nada na boca do animal",
        "Após a convulsão, mantenha-o aquecido e calmo",
        "Procure atendimento veterinário urgente",
      ],
    },
  ]

  const emergencyContacts = [
    {
      id: 1,
      name: "Centro de Controle de Intoxicações",
      phone: "0800-722-6001",
      description: "24h para casos de envenenamento",
      type: "poison",
    },
    {
      id: 2,
      name: "Bombeiros - Resgate Animal",
      phone: "193",
      description: "Emergências e resgates",
      type: "rescue",
    },
    {
      id: 3,
      name: "Hospital Veterinário 24h",
      phone: "(11) 9999-8888",
      description: "Emergência veterinária mais próxima",
      type: "vet",
    },
  ]

  const activateEmergency = () => {
    setIsEmergencyActive(true)
    setEmergencyTimer(0)
    // Simular notificação de emergência
  }

  const cancelEmergency = () => {
    setIsEmergencyActive(false)
    setEmergencyTimer(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  if (isEmergencyActive) {
    return (
      <div className="min-h-screen bg-red-50 dark:bg-red-950/20">
        {/* Emergency Active Header */}
        <header className="bg-red-500 text-white px-4 py-3 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <h1 className="text-lg font-bold">EMERGÊNCIA ATIVA</h1>
                <p className="text-sm opacity-90">Tempo: {formatTime(emergencyTimer)}</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={cancelEmergency}
              className="bg-white text-red-500 hover:bg-gray-100"
            >
              Cancelar
            </Button>
          </div>
        </header>

        <main className="max-w-md mx-auto p-4 space-y-6">
          {/* Emergency Status */}
          <Card className="bg-white border-red-200">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-red-700 mb-2">Emergência Veterinária</h2>
              <p className="text-red-600 mb-4">Veterinários foram notificados automaticamente</p>
              <Badge className="bg-red-500 text-white">Status: Aguardando resposta</Badge>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-3">
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white h-14">
              <Phone className="w-5 h-5 mr-3" />
              Ligar para Hospital 24h
            </Button>

            <Button variant="outline" className="w-full border-red-300 text-red-700 h-14 bg-transparent">
              <Navigation className="w-5 h-5 mr-3" />
              Navegar para Clínica Mais Próxima
            </Button>
          </div>

          {/* Nearest Clinics */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Clínicas Mais Próximas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {emergencyClinics.slice(0, 2).map((clinic) => (
                <div key={clinic.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-red-800">{clinic.name}</h3>
                    <p className="text-sm text-red-600">
                      {clinic.distance} • {clinic.estimatedTime}
                    </p>
                  </div>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600">
                    Ligar
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    )
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
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Emergência</h1>
                <p className="text-xs text-muted-foreground">Ajuda 24h para seu pet</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Emergency Button */}
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-xl font-bold mb-2">Emergência Veterinária</h2>
            <p className="text-red-100 mb-6">Pressione para ativar ajuda imediata</p>
            <Button
              size="lg"
              className="w-full bg-white text-red-500 hover:bg-red-50 font-bold h-14"
              onClick={activateEmergency}
            >
              <Zap className="w-6 h-6 mr-3" />
              ATIVAR EMERGÊNCIA
            </Button>
          </CardContent>
        </Card>

        {/* Quick Emergency Contacts */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500" />
              Contatos de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h3 className="font-medium">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
                <Button size="sm" className="bg-red-500 hover:bg-red-600">
                  {contact.phone}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="emergency">Emergência</TabsTrigger>
            <TabsTrigger value="clinics">Clínicas 24h</TabsTrigger>
            <TabsTrigger value="firstaid">Primeiros Socorros</TabsTrigger>
          </TabsList>

          {/* Emergency Info */}
          <TabsContent value="emergency" className="space-y-4">
            <Card className="bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Info className="w-5 h-5" />
                  Como Funciona a Emergência
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <p>Pressione o botão de emergência</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <p>Veterinários próximos são notificados automaticamente</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <p>Receba orientações por telefone ou chat</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    4
                  </div>
                  <p>Navegue para a clínica mais próxima se necessário</p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Checklist */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Checklist de Emergência</CardTitle>
                <CardDescription>Informações importantes para ter em mãos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Dados do pet (nome, idade, raça, peso)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Histórico médico e alergias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Medicações em uso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Sintomas observados</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 24h Clinics */}
          <TabsContent value="clinics" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Clínicas 24 Horas</h2>
              <Badge variant="outline">{emergencyClinics.filter((c) => c.isOpen).length} abertas</Badge>
            </div>

            {emergencyClinics.map((clinic) => (
              <Card key={clinic.id} className="bg-card">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{clinic.name}</h3>
                        <p className="text-sm text-muted-foreground">{clinic.address}</p>
                      </div>
                      <Badge
                        variant={clinic.isOpen ? "default" : "secondary"}
                        className={clinic.isOpen ? "bg-green-500 text-white" : ""}
                      >
                        {clinic.isOpen ? "Aberto" : "Fechado"}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{clinic.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{clinic.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{clinic.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {clinic.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-500 hover:bg-red-600">
                        <Phone className="w-4 h-4 mr-2" />
                        Ligar
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Navigation className="w-4 h-4 mr-2" />
                        Navegar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* First Aid */}
          <TabsContent value="firstaid" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Primeiros Socorros</h2>
              <Badge variant="outline">{firstAidGuides.length} guias</Badge>
            </div>

            {firstAidGuides.map((guide) => (
              <Card key={guide.id} className="bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                    <Badge
                      variant={guide.urgency === "critical" ? "destructive" : "secondary"}
                      className={guide.urgency === "critical" ? "bg-red-500" : "bg-orange-500"}
                    >
                      {guide.urgency === "critical" ? "Crítico" : "Moderado"}
                    </Badge>
                  </div>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Emergency Statistics */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Estatísticas de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Tempo médio de resposta</span>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                3.2 minutos
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Clínicas parceiras</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                24 disponíveis
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Emergências atendidas</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                1,247 este mês
              </Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
