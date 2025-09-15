import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, AlertTriangle, Plus, Utensils, Scale, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NutritionPage() {
  const currentFood = {
    brand: "Royal Canin Golden Retriever",
    type: "Ração Seca Premium",
    currentAmount: 2.5, // kg
    totalAmount: 15, // kg
    dailyConsumption: 0.35, // kg
    daysRemaining: 7,
    lastRefill: "2024-01-15",
  }

  const feedingSchedule = [
    { time: "07:00", amount: "175g", status: "completed" },
    { time: "12:00", amount: "175g", status: "pending" },
    { time: "18:00", amount: "175g", status: "pending" },
  ]

  const nutritionPlan = {
    calories: { current: 1680, target: 1750, unit: "kcal/dia" },
    protein: { current: 22, target: 25, unit: "%" },
    fat: { current: 12, target: 14, unit: "%" },
    fiber: { current: 3.5, target: 4, unit: "%" },
  }

  const weeklyStats = [
    { day: "Seg", consumed: 350 },
    { day: "Ter", consumed: 340 },
    { day: "Qua", consumed: 360 },
    { day: "Qui", consumed: 350 },
    { day: "Sex", consumed: 345 },
    { day: "Sáb", consumed: 355 },
    { day: "Dom", consumed: 350 },
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
            <h1 className="text-xl font-bold text-foreground">Plano Nutricional</h1>
            <p className="text-sm text-muted-foreground">Max • Golden Retriever</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {/* Food Stock Alert */}
        <Card className="bg-destructive/10 border-destructive/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <div className="flex-1">
                <p className="font-medium text-destructive">Ração acabando!</p>
                <p className="text-sm text-muted-foreground">Restam apenas {currentFood.daysRemaining} dias de ração</p>
              </div>
              <Button size="sm" variant="destructive">
                Comprar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Food Stock */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              Estoque Atual
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{currentFood.brand}</span>
                <Badge variant="outline">{currentFood.type}</Badge>
              </div>
              <Progress value={(currentFood.currentAmount / currentFood.totalAmount) * 100} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{currentFood.currentAmount}kg restantes</span>
                <span>{currentFood.totalAmount}kg total</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{currentFood.dailyConsumption}kg</p>
                <p className="text-xs text-muted-foreground">Consumo diário</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-destructive">{currentFood.daysRemaining}</p>
                <p className="text-xs text-muted-foreground">Dias restantes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Feeding Schedule */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horários de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {feedingSchedule.map((feeding, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      feeding.status === "completed" ? "bg-accent" : "bg-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{feeding.time}</p>
                    <p className="text-sm text-muted-foreground">{feeding.amount}</p>
                  </div>
                </div>
                {feeding.status === "pending" && (
                  <Button size="sm" variant="outline">
                    Marcar
                  </Button>
                )}
                {feeding.status === "completed" && (
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    ✓ Feito
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Nutrition Goals */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Metas Nutricionais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(nutritionPlan).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="capitalize font-medium">
                    {key === "calories"
                      ? "Calorias"
                      : key === "protein"
                        ? "Proteína"
                        : key === "fat"
                          ? "Gordura"
                          : "Fibra"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {value.current}
                    {value.unit} / {value.target}
                    {value.unit}
                  </span>
                </div>
                <Progress value={(value.current / value.target) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Consumption Chart */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Consumo Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-2">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-primary rounded-t w-full" style={{ height: `${(stat.consumed / 400) * 100}%` }} />
                  <span className="text-xs text-muted-foreground">{stat.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Média: 350g/dia • Meta: 350g/dia</p>
            </div>
          </CardContent>
        </Card>

        {/* Food Recommendations */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Recomendações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="font-medium text-accent">Ração Premium Sênior</p>
              <p className="text-sm text-muted-foreground">Para cães acima de 7 anos, rica em glucosamina</p>
              <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                Ver detalhes
              </Button>
            </div>

            <div className="p-3 rounded-lg bg-muted/50">
              <p className="font-medium">Suplemento Ômega 3</p>
              <p className="text-sm text-muted-foreground">Melhora a saúde da pele e pelagem</p>
              <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                Adicionar ao plano
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Refeição
          </Button>
          <Button variant="outline" className="bg-transparent">
            <Scale className="w-4 h-4 mr-2" />
            Registrar Peso
          </Button>
        </div>

        {/* Emergency Foods Warning */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-4">
            <h3 className="font-medium text-foreground mb-2">⚠️ Alimentos Proibidos</h3>
            <p className="text-sm text-muted-foreground mb-3">Chocolate, café, uva, cebola, alho, abacate, xilitol</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Ver lista completa
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
