"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Download, Mail, Smartphone } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Simular upgrade do plano no localStorage
    localStorage.setItem("userPlan", "pro")
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Success Message */}
        <Card className="bg-green-50 border-green-200 text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-800 mb-2">Parabéns!</h1>
            <p className="text-green-700 mb-4">Seu teste grátis do ACCOMPETS Pro foi ativado com sucesso!</p>
            <Badge className="bg-green-600 text-white">
              <Crown className="w-3 h-3 mr-1" />
              Plano Pro Ativo
            </Badge>
          </CardContent>
        </Card>

        {/* Plan Details */}
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="text-center">
              <h2 className="font-semibold mb-2">Detalhes da Assinatura</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Plano:</span>
                  <span className="font-medium">ACCOMPETS Pro</span>
                </div>
                <div className="flex justify-between">
                  <span>Teste grátis:</span>
                  <span className="font-medium text-green-600">7 dias</span>
                </div>
                <div className="flex justify-between">
                  <span>Primeira cobrança:</span>
                  <span className="font-medium">22/12/2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Valor mensal:</span>
                  <span className="font-medium">R$ 19,90</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Próximos Passos</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-sm">Confirmação enviada</p>
                  <p className="text-xs text-muted-foreground">Verifique seu email para detalhes da assinatura</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Smartphone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-sm">App atualizado</p>
                  <p className="text-xs text-muted-foreground">Todos os recursos Pro já estão disponíveis</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Download className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-sm">Recibo disponível</p>
                  <p className="text-xs text-muted-foreground">Baixe seu comprovante na área de configurações</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Crown className="w-4 h-4 mr-2" />
              Explorar Recursos Pro
            </Button>
          </Link>

          <Link href="/plans">
            <Button variant="outline" className="w-full bg-transparent">
              Gerenciar Assinatura
            </Button>
          </Link>
        </div>

        {/* Support */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-blue-800 mb-2">Precisa de ajuda? Nossa equipe está aqui para você!</p>
            <Button variant="outline" size="sm" className="border-blue-300 text-blue-800 bg-transparent">
              Falar com Suporte
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
