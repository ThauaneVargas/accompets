"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Crown, CreditCard, Smartphone, FileText, Shield, Check, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simular processamento de pagamento
    setTimeout(() => {
      router.push("/checkout/success")
    }, 3000)
  }

  const planFeatures = [
    "Pets ilimitados",
    "Rastreamento avançado",
    "Análises com IA",
    "Suporte prioritário",
    "Backup na nuvem",
    "Acesso antecipado",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href="/plans">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-foreground">Finalizar Assinatura</h1>
            <p className="text-sm text-muted-foreground">Upgrade para ACCOMPETS Pro</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Form */}
          <div className="space-y-6">
            {/* Plan Summary */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Crown className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">ACCOMPETS Pro</h3>
                    <p className="text-sm text-muted-foreground">Plano mensal</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">R$ 19,90</span>
                  <Badge className="bg-accent text-accent-foreground">7 dias grátis</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Primeiro cobrança em 22/12/2024. Cancele a qualquer momento.
                </p>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Método de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão de Crédito</span>
                      <Badge variant="outline" className="ml-auto">
                        Recomendado
                      </Badge>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Smartphone className="w-4 h-4" />
                      <span>PIX</span>
                      <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800">
                        Instantâneo
                      </Badge>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto" className="flex items-center gap-2 cursor-pointer flex-1">
                      <FileText className="w-4 h-4" />
                      <span>Boleto Bancário</span>
                      <Badge variant="outline" className="ml-auto">
                        1-3 dias úteis
                      </Badge>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Details */}
            {paymentMethod === "credit-card" && (
              <Card>
                <CardHeader>
                  <CardTitle>Dados do Cartão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do Cartão</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Validade</Label>
                      <Input id="expiry" placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Nome no Cartão</Label>
                    <Input id="card-name" placeholder="João Silva" />
                  </div>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "pix" && (
              <Card>
                <CardHeader>
                  <CardTitle>Pagamento via PIX</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">QR Code será gerado após confirmação</p>
                      <p className="text-sm text-muted-foreground">
                        Escaneie com seu app do banco para pagar instantaneamente
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "boleto" && (
              <Card>
                <CardHeader>
                  <CardTitle>Pagamento via Boleto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Boleto será enviado por email</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Processamento em 1-3 dias úteis</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Seu plano será ativado após confirmação do pagamento
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Billing Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Cobrança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nome</Label>
                    <Input id="first-name" placeholder="João" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Sobrenome</Label>
                    <Input id="last-name" placeholder="Silva" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="joao@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>ACCOMPETS Pro (mensal)</span>
                    <span>R$ 19,90</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Teste grátis (7 dias)</span>
                    <span>-R$ 19,90</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total hoje</span>
                    <span>R$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Próxima cobrança (22/12/2024)</span>
                    <span>R$ 19,90</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Incluído no seu plano:</h4>
                  <div className="space-y-2">
                    {planFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    "Processando..."
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Iniciar Teste Grátis
                    </>
                  )}
                </Button>

                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>Ao continuar, você concorda com nossos</p>
                  <p>
                    <Link href="/terms" className="text-primary hover:underline">
                      Termos de Uso
                    </Link>
                    {" e "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Política de Privacidade
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security Badge */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Pagamento Seguro</p>
                    <p className="text-sm text-green-600">Seus dados são protegidos com criptografia SSL</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
