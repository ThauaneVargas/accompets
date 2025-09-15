import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Clock, Target, CheckCircle, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function ChallengesPage() {
  const activeChallenges = [
    {
      id: 1,
      title: "Exercício Diário",
      description: "Exercite seu pet por 30 minutos todos os dias",
      category: "Exercício",
      progress: 43,
      daysCompleted: 3,
      totalDays: 7,
      points: 50,
      icon: Target,
      color: "text-chart-1",
    },
    {
      id: 2,
      title: "Hidratação Adequada",
      description: "Garanta que seu pet beba água suficiente",
      category: "Saúde",
      progress: 71,
      daysCompleted: 5,
      totalDays: 7,
      points: 30,
      icon: CheckCircle,
      color: "text-chart-2",
    },
    {
      id: 3,
      title: "Escovação Regular",
      description: "Escove os pelos do seu pet 3x na semana",
      category: "Cuidados",
      progress: 33,
      daysCompleted: 1,
      totalDays: 3,
      points: 25,
      icon: Star,
      color: "text-chart-3",
    },
  ]

  const completedChallenges = [
    {
      id: 4,
      title: "Alimentação Balanceada",
      description: "Ofereça ração de qualidade por 7 dias",
      category: "Alimentação",
      points: 40,
      completedAt: "Semana passada",
    },
    {
      id: 5,
      title: "Socialização",
      description: "Leve seu pet para interagir com outros animais",
      category: "Comportamento",
      points: 35,
      completedAt: "Há 2 semanas",
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
            <h1 className="text-xl font-bold text-foreground">Desafios</h1>
            <p className="text-sm text-muted-foreground">Mantenha seu pet saudável</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Weekly Points Summary */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pontos desta semana</p>
                <p className="text-2xl font-bold">105</p>
                <p className="text-xs opacity-75">de 145 possíveis</p>
              </div>
              <div className="text-right">
                <Trophy className="w-8 h-8 opacity-90 mx-auto mb-1" />
                <p className="text-xs opacity-75">Nível 3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Desafios Ativos</h2>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {activeChallenges.length} ativos
            </Badge>
          </div>

          {activeChallenges.map((challenge) => {
            const IconComponent = challenge.icon
            return (
              <Card key={challenge.id} className="bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${challenge.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{challenge.title}</CardTitle>
                        <CardDescription className="text-sm">{challenge.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      +{challenge.points}pts
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {challenge.daysCompleted}/{challenge.totalDays} dias
                    </span>
                    <span className="font-medium">{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Marcar como Feito
                    </Button>
                    <Button variant="outline" size="sm">
                      <Clock className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* New Challenge Suggestion */}
        <Card className="bg-accent text-accent-foreground">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              <div className="flex-1">
                <p className="font-medium">Novo Desafio Disponível!</p>
                <p className="text-sm opacity-90">Treinamento de Comandos Básicos</p>
              </div>
              <Button variant="secondary" size="sm" className="bg-accent-foreground text-accent">
                Aceitar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Completed Challenges */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Desafios Concluídos</h2>

          {completedChallenges.map((challenge) => (
            <Card key={challenge.id} className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-sm">{challenge.title}</p>
                      <p className="text-xs text-muted-foreground">{challenge.completedAt}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    +{challenge.points}pts
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Challenge Categories */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Categorias</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Exercício", count: 5, icon: Target },
              { name: "Saúde", count: 3, icon: CheckCircle },
              { name: "Cuidados", count: 4, icon: Star },
              { name: "Alimentação", count: 2, icon: Trophy },
            ].map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.name} className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4 text-center">
                    <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count} desafios</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
