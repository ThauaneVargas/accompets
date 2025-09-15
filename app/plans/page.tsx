import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, X, Crown, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function PlansPage() {
  const currentPlan = "basic" // ou "pro"

  const features = [
    {
      category: "Funcionalidades Básicas",
      items: [
        { name: "Perfil do pet", basic: true, pro: true },
        { name: "Carteira de vacinação", basic: true, pro: true },
        { name: "Lembretes básicos", basic: true, pro: true },
        { name: "1 pet cadastrado", basic: true, pro: false },
        { name: "Pets ilimitados", basic: false, pro: true },
      ],
    },
    {
      category: "Rastreamento",
      items: [
        { name: "Localização básica", basic: true, pro: true },
        { name: "Histórico de 7 dias", basic: true, pro: true },
        { name: "Histórico ilimitado", basic: false, pro: true },
        { name: "Cercas virtuais", basic: false, pro: true },
        { name: "Alertas em tempo real", basic: false, pro: true },
      ],
    },
    {
      category: "Saúde & Nutrição",
      items: [
        { name: "Plano alimentar básico", basic: true, pro: true },
        { name: "Alertas de ração", basic: false, pro: true },
        { name: "Análise nutricional", basic: false, pro: true },
        { name: "Recomendações IA", basic: false, pro: true },
        { name: "Integração com veterinários", basic: false, pro: true },
      ],
    },
    {
      category: "Social & Comunidade",
      items: [
        { name: "Perfil público básico", basic: true, pro: true },
        { name: "Posts ilimitados", basic: false, pro: true },
        { name: "Álbum de fotos", basic: false, pro: true },
        { name: "Memórias automáticas", basic: false, pro: true },
        { name: "Prioridade em adoções", basic: false, pro: true },
      ],
    },
    {
      category: "Suporte & Extras",
      items: [
        { name: "Suporte por email", basic: true, pro: true },
        { name: "Suporte prioritário", basic: false, pro: true },
        { name: "Backup na nuvem", basic: false, pro: true },
        { name: "Relatórios detalhados", basic: false, pro: true },
        { name: "Acesso antecipado", basic: false, pro: true },
      ],
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
            <h1 className="text-xl font-bold text-foreground">Planos ACCOMPETS</h1>
            <p className="text-sm text-muted-foreground">Escolha o melhor para seu pet</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Current Plan Status */}
        <Card className="bg-primary/10 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  {currentPlan === "pro" ? (
                    <Crown className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <Star className="w-5 h-5 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-primary">Plano {currentPlan === "pro" ? "Pro" : "Básico"}</p>
                  <p className="text-sm text-muted-foreground">
                    {currentPlan === "pro" ? "Acesso completo" : "Funcionalidades limitadas"}
                  </p>
                </div>
              </div>
              {currentPlan === "basic" && (
                <Badge className="bg-accent text-accent-foreground">Upgrade Disponível</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Plans Comparison */}
        <div className="grid grid-cols-2 gap-4">
          {/* Basic Plan */}
          <Card className={`${currentPlan === "basic" ? "border-primary" : "border-border"}`}>
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg">Básico</CardTitle>
              <div className="text-2xl font-bold">Grátis</div>
              <p className="text-sm text-muted-foreground">Para começar</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>1 pet cadastrado</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Funcionalidades básicas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Suporte por email</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4" />
                  <span>Recursos avançados</span>
                </div>
              </div>
              {currentPlan !== "basic" && (
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Plano Atual
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className={`${currentPlan === "pro" ? "border-primary" : "border-border"} relative`}>
            {currentPlan !== "pro" && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                Recomendado
              </Badge>
            )}
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Pro</CardTitle>
              <div className="text-2xl font-bold">R$ 19,90</div>
              <p className="text-sm text-muted-foreground">por mês</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Pets ilimitados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Todos os recursos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  <span>IA e análises</span>
                </div>
              </div>
              {currentPlan === "pro" ? (
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Plano Atual
                </Button>
              ) : (
                <Link href="/checkout">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Zap className="w-4 h-4 mr-2" />
                    Fazer Upgrade
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Detailed Features */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Comparação Detalhada</h2>

          {features.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-12 text-center">
                        {item.basic ? (
                          <Check className="w-4 h-4 text-accent mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground mx-auto" />
                        )}
                      </div>
                      <div className="w-12 text-center">
                        {item.pro ? (
                          <Check className="w-4 h-4 text-accent mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground mx-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="bg-accent/10 border-accent/20">
          <CardContent className="p-4">
            <h3 className="font-medium text-accent mb-3">Por que escolher o Pro?</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>Análises inteligentes com IA para melhor cuidado</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-accent" />
                <span>Acesso prioritário a novos recursos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span>Suporte dedicado e resposta rápida</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card className="bg-card">
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">O que nossos usuários dizem</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm italic">
                  "O plano Pro mudou completamente como cuido do meu pet. As análises são incríveis!"
                </p>
                <p className="text-xs text-muted-foreground mt-1">- Ana, tutora da Luna</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm italic">
                  "Vale cada centavo. O rastreamento avançado me dá muita tranquilidade."
                </p>
                <p className="text-xs text-muted-foreground mt-1">- Carlos, tutor do Max</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium text-sm">Posso cancelar a qualquer momento?</p>
              <p className="text-sm text-muted-foreground">
                Sim, você pode cancelar sua assinatura a qualquer momento sem taxas.
              </p>
            </div>
            <div>
              <p className="font-medium text-sm">Há desconto para múltiplos pets?</p>
              <p className="text-sm text-muted-foreground">O plano Pro já inclui pets ilimitados pelo mesmo preço.</p>
            </div>
            <div>
              <p className="font-medium text-sm">Posso fazer upgrade depois?</p>
              <p className="text-sm text-muted-foreground">
                Claro! Você pode fazer upgrade a qualquer momento e pagar apenas a diferença.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Bottom */}
        {currentPlan === "basic" && (
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-4 text-center">
              <Crown className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-medium mb-2">Pronto para o upgrade?</h3>
              <p className="text-sm opacity-90 mb-4">Desbloqueie todo o potencial do ACCOMPETS</p>
              <Link href="/checkout">
                <Button
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Começar Teste Grátis de 7 dias
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
