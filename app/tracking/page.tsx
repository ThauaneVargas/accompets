import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Battery,
  Clock,
  Shield,
  Activity,
  Settings,
  AlertTriangle,
  Navigation,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function TrackingPage() {
  const currentLocation = {
    address: "Rua das Flores, 123 - São Paulo, SP",
    coordinates: "-23.5505, -46.6333",
    lastUpdate: "há 2 minutos",
    accuracy: "5m",
  }

  const deviceStatus = {
    battery: 78,
    signal: "Forte",
    status: "Online",
  }

  const recentLocations = [
    { place: "Casa", time: "há 2 min", duration: "2h 15min" },
    { place: "Parque Central", time: "há 2h 17min", duration: "45min" },
    { place: "Pet Shop Max", time: "há 3h 2min", duration: "20min" },
    { place: "Casa", time: "há 3h 22min", duration: "1h 30min" },
  ]

  const activityStats = [
    { label: "Distância hoje", value: "3.2 km", icon: Navigation },
    { label: "Tempo ativo", value: "2h 45min", icon: Clock },
    { label: "Calorias queimadas", value: "180 cal", icon: Zap },
    { label: "Passos", value: "4,250", icon: Activity },
  ]

  const virtualFences = [
    { name: "Casa", radius: "50m", status: "Ativa", alerts: true },
    { name: "Parque", radius: "100m", status: "Ativa", alerts: false },
    { name: "Veterinário", radius: "30m", status: "Inativa", alerts: true },
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
              <h1 className="text-xl font-bold text-foreground">Rastreamento</h1>
              <p className="text-sm text-muted-foreground">Localização do Max</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Current Location */}
        <Card className="bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Localização Atual
              </CardTitle>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {deviceStatus.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Map Placeholder */}
            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Max está em casa</p>
                <p className="text-xs text-muted-foreground">Precisão: {currentLocation.accuracy}</p>
              </div>
              {/* Simulated map elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-accent rounded-full"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-muted-foreground rounded-full"></div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">{currentLocation.address}</p>
              <p className="text-xs text-muted-foreground">Última atualização: {currentLocation.lastUpdate}</p>
              <p className="text-xs text-muted-foreground">Coordenadas: {currentLocation.coordinates}</p>
            </div>
          </CardContent>
        </Card>

        {/* Device Status */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-primary" />
              Status do Dispositivo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Bateria</span>
              <div className="flex items-center gap-2">
                <Progress value={deviceStatus.battery} className="w-16 h-2" />
                <span className="text-sm font-medium">{deviceStatus.battery}%</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Sinal GPS</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {deviceStatus.signal}
              </Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Conexão</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {deviceStatus.status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Activity Stats */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Atividade de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {activityStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-6 h-6 text-primary mx-auto mb-1" />
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Virtual Fences */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Cercas Virtuais
            </CardTitle>
            <CardDescription>Receba alertas quando Max sair das áreas seguras</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {virtualFences.map((fence, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">{fence.name}</p>
                    <p className="text-xs text-muted-foreground">Raio: {fence.radius}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={fence.status === "Ativa" ? "secondary" : "outline"}
                      className={fence.status === "Ativa" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {fence.status}
                    </Badge>
                  </div>
                </div>
                {index < virtualFences.length - 1 && <Separator />}
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              <Shield className="w-4 h-4 mr-2" />
              Configurar Cercas
            </Button>
          </CardContent>
        </Card>

        {/* Recent Locations */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Localizações Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentLocations.map((location, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">{location.place}</p>
                    <p className="text-xs text-muted-foreground">{location.time}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{location.duration}</p>
                </div>
                {index < recentLocations.length - 1 && <Separator />}
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              Ver Histórico Completo
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Alert */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <div className="flex-1">
                <p className="font-medium text-sm">Alerta de Emergência</p>
                <p className="text-xs text-muted-foreground">Toque aqui se Max estiver perdido</p>
              </div>
              <Button variant="destructive" size="sm">
                SOS
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Navigation className="w-4 h-4 mr-2" />
            Navegar até Max
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Button>
        </div>
      </main>
    </div>
  )
}
