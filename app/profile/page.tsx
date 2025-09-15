import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Edit, Camera, MapPin, Phone, Calendar, Heart, Shield, Activity, Pill, FileText } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const vaccinations = [
    { name: "Antirrábica", date: "15/03/2024", nextDue: "15/03/2025", status: "Em dia" },
    { name: "V10", date: "10/02/2024", nextDue: "10/02/2025", status: "Em dia" },
    { name: "Giárdia", date: "05/01/2024", nextDue: "05/07/2024", status: "Vencida" },
    { name: "Leishmaniose", date: "20/12/2023", nextDue: "20/06/2024", status: "Vencida" },
  ]

  const healthMetrics = [
    { label: "Peso atual", value: "28kg", target: "26-30kg", status: "ideal" },
    { label: "Altura", value: "65cm", target: "60-70cm", status: "ideal" },
    { label: "Atividade diária", value: "45min", target: "30-60min", status: "ideal" },
    { label: "Frequência cardíaca", value: "85 bpm", target: "70-120 bpm", status: "ideal" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Perfil do Pet</h1>
              <p className="text-sm text-muted-foreground">Informações completas</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Pet Basic Info */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="/cute-golden-retriever-face.png" alt="Max" className="w-20 h-20 rounded-full object-cover" />
                <Button size="icon" variant="secondary" className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Max</h2>
                <p className="text-muted-foreground">Golden Retriever</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    3 anos
                  </Badge>
                  <Badge variant="outline">Macho</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Métricas de Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{metric.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-bold">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.target}</p>
                  </div>
                </div>
                {index < healthMetrics.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Medical Record Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <FileText className="w-5 h-5" />
              Ficha Médica Completa
            </CardTitle>
            <CardDescription className="text-blue-600">Documento oficial para clínicas veterinárias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Registro completo de saúde</p>
                <p className="text-xs text-blue-600">Vacinas, medicações e histórico médico</p>
              </div>
              <Badge className="bg-blue-600 text-white">Pronto para imprimir</Badge>
            </div>
            <Link href="/medical-record">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                Ver Ficha Médica
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Medications Card */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-primary" />
              Medicações
            </CardTitle>
            <CardDescription>Controle de tratamentos ativos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Antibiótico Amoxicilina</p>
                  <p className="text-xs text-muted-foreground">Próxima dose: 14:00 (em 2h)</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Ativo
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Anti-inflamatório</p>
                  <p className="text-xs text-muted-foreground">Próxima dose: 08:00 (amanhã)</p>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Ativo
                </Badge>
              </div>
            </div>
            <Link href="/medications">
              <Button variant="outline" className="w-full mt-4 bg-transparent">
                <Pill className="w-4 h-4 mr-2" />
                Gerenciar Medicações
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Vaccination Card */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Carteira de Vacinação
            </CardTitle>
            <CardDescription>Mantenha as vacinas em dia</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {vaccinations.map((vaccine, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">{vaccine.name}</p>
                    <p className="text-xs text-muted-foreground">Aplicada em {vaccine.date}</p>
                  </div>
                  <Badge
                    variant={vaccine.status === "Em dia" ? "secondary" : "destructive"}
                    className={vaccine.status === "Em dia" ? "bg-accent text-accent-foreground" : ""}
                  >
                    {vaccine.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Próxima: {vaccine.nextDue}</p>
                {index < vaccinations.length - 1 && <Separator />}
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Vacina
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Informações de Contato
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Veterinário Principal</p>
              <p className="text-sm text-muted-foreground">Dr. Carlos Silva</p>
              <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Contato de Emergência</p>
              <p className="text-sm text-muted-foreground">Maria Silva</p>
              <p className="text-sm text-muted-foreground">(11) 88888-8888</p>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Endereço</p>
              <p className="text-sm text-muted-foreground">Rua das Flores, 123 - São Paulo, SP</p>
            </div>
          </CardContent>
        </Card>

        {/* Medical History */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Histórico Médico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Consulta de Rotina</p>
                  <p className="text-xs text-muted-foreground">15/03/2024</p>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Normal
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Exame de Sangue</p>
                  <p className="text-xs text-muted-foreground">10/02/2024</p>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Normal
                </Badge>
              </div>
              <Separator />
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">Tratamento Pulgas</p>
                  <p className="text-xs text-muted-foreground">05/01/2024</p>
                </div>
                <Badge variant="outline">Concluído</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Ver Histórico Completo
            </Button>
          </CardContent>
        </Card>

        {/* Tracking Settings */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Configurações de Rastreamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Rastreamento Ativo</p>
                <p className="text-xs text-muted-foreground">Localização em tempo real</p>
              </div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Ativo
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Cerca Virtual</p>
                <p className="text-xs text-muted-foreground">Raio de 500m da casa</p>
              </div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Configurada
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">Alertas</p>
                <p className="text-xs text-muted-foreground">Notificações push ativas</p>
              </div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Ativo
              </Badge>
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Configurar Rastreamento
            </Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Edit className="w-4 h-4 mr-2" />
            Editar Perfil
          </Button>
          <Button className="flex-1">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Consulta
          </Button>
        </div>
      </main>
    </div>
  )
}
