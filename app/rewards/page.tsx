import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Trophy, Gift, Star, ShoppingBag, Heart, Zap, Crown, Award } from "lucide-react"
import Link from "next/link"

export default function RewardsPage() {
  const userPoints = 1247
  const nextLevelPoints = 1500
  const currentLevel = 3

  const rewards = [
    {
      id: 1,
      title: "Desconto 20% Ração Premium",
      description: "Válido em pet shops parceiros",
      points: 500,
      category: "Desconto",
      icon: ShoppingBag,
      available: true,
      partner: "PetShop Max",
    },
    {
      id: 2,
      title: "Consulta Veterinária Gratuita",
      description: "Uma consulta de rotina grátis",
      points: 800,
      category: "Serviço",
      icon: Heart,
      available: true,
      partner: "Clínica VetCare",
    },
    {
      id: 3,
      title: "Kit Brinquedos Premium",
      description: "3 brinquedos interativos para seu pet",
      points: 600,
      category: "Produto",
      icon: Gift,
      available: true,
      partner: "ToyPet",
    },
    {
      id: 4,
      title: "Banho e Tosa Completo",
      description: "Serviço completo de higiene",
      points: 700,
      category: "Serviço",
      icon: Star,
      available: true,
      partner: "Pet Spa Deluxe",
    },
    {
      id: 5,
      title: "Doação para ONG",
      description: "Contribua com 50kg de ração",
      points: 300,
      category: "Doação",
      icon: Heart,
      available: true,
      partner: "ONG Patinhas Felizes",
    },
    {
      id: 6,
      title: "Coleira GPS Premium",
      description: "Rastreamento avançado",
      points: 1500,
      category: "Produto",
      icon: Zap,
      available: false,
      partner: "TechPet",
    },
  ]

  const recentRedemptions = [
    {
      id: 1,
      title: "Desconto 15% Petiscos",
      points: 200,
      date: "Há 3 dias",
      status: "Usado",
    },
    {
      id: 2,
      title: "Doação para ONG",
      points: 300,
      date: "Há 1 semana",
      status: "Concluído",
    },
  ]

  const achievements = [
    { name: "Primeiro Desafio", icon: Trophy, unlocked: true },
    { name: "Semana Completa", icon: Star, unlocked: true },
    { name: "Cuidador Dedicado", icon: Heart, unlocked: true },
    { name: "Mestre dos Desafios", icon: Crown, unlocked: false },
    { name: "Protetor Animal", icon: Award, unlocked: false },
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
            <h1 className="text-xl font-bold text-foreground">Recompensas</h1>
            <p className="text-sm text-muted-foreground">Troque seus pontos</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Points Summary */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm opacity-90">Seus pontos</p>
                <p className="text-3xl font-bold">{userPoints.toLocaleString()}</p>
              </div>
              <Trophy className="w-10 h-10 opacity-90" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Nível {currentLevel}</span>
                <span className="opacity-90">{nextLevelPoints - userPoints} para próximo nível</span>
              </div>
              <Progress value={(userPoints / nextLevelPoints) * 100} className="h-2 bg-primary-foreground/20" />
            </div>
          </CardContent>
        </Card>

        {/* How to Earn Points */}
        <Card className="bg-accent text-accent-foreground">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Como ganhar pontos:</h3>
            <div className="space-y-1 text-sm">
              <p>• Complete desafios semanais (+50 pts)</p>
              <p>• Mantenha vacinas em dia (+30 pts)</p>
              <p>• Registre atividades diárias (+10 pts)</p>
              <p>• Avalie o aplicativo (+25 pts)</p>
            </div>
          </CardContent>
        </Card>

        {/* Available Rewards */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recompensas Disponíveis</h2>

          {rewards.map((reward) => {
            const IconComponent = reward.icon
            const canAfford = userPoints >= reward.points

            return (
              <Card key={reward.id} className={`bg-card ${!canAfford ? "opacity-60" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-sm">{reward.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {reward.points} pts
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{reward.description}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-muted-foreground">{reward.partner}</p>
                        <Button size="sm" disabled={!canAfford || !reward.available} className="h-7 text-xs">
                          {!reward.available ? "Indisponível" : canAfford ? "Resgatar" : "Pontos insuficientes"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Conquistas
            </CardTitle>
            <CardDescription>Desbloqueie badges especiais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-1 ${
                        achievement.unlocked ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.name}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Redemptions */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              Resgates Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentRedemptions.length > 0 ? (
              recentRedemptions.map((redemption, index) => (
                <div key={redemption.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">{redemption.title}</p>
                      <p className="text-xs text-muted-foreground">{redemption.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={redemption.status === "Usado" ? "secondary" : "outline"}
                        className={redemption.status === "Usado" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {redemption.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">-{redemption.points} pts</p>
                    </div>
                  </div>
                  {index < recentRedemptions.length - 1 && <Separator />}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                Nenhum resgate ainda. Complete desafios para ganhar pontos!
              </p>
            )}
          </CardContent>
        </Card>

        {/* Partner Information */}
        <Card className="bg-muted/50">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium mb-1">Parceiros ACCOMPETS</p>
            <p className="text-xs text-muted-foreground">
              Trabalhamos com pet shops, clínicas e ONGs para oferecer as melhores recompensas
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
