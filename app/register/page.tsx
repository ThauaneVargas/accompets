"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Heart, Shield, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (userType: "tutor" | "veterinario") => {
    setIsLoading(true)
    // Simular cadastro
    setTimeout(() => {
      localStorage.setItem("userType", userType)
      localStorage.setItem("isLoggedIn", "true")
      if (userType === "veterinario") {
        router.push("/vet-dashboard")
      } else {
        router.push("/")
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header com botão voltar */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="p-2">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-green-800">ACCOMPETS</h1>
          </div>
        </div>

        <Tabs defaultValue="tutor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tutor" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Tutor
            </TabsTrigger>
            <TabsTrigger value="veterinario" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Veterinário
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutor">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro do Tutor</CardTitle>
                <CardDescription>Crie sua conta para começar a cuidar do seu pet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sobrenome">Sobrenome</Label>
                    <Input id="sobrenome" placeholder="Sobrenome" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    Aceito os termos de uso e política de privacidade
                  </Label>
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleRegister("tutor")}
                  disabled={isLoading}
                >
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="veterinario">
            <Card>
              <CardHeader>
                <CardTitle>Cadastro de Veterinário</CardTitle>
                <CardDescription>Registre sua clínica na plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-vet">Nome Completo</Label>
                  <Input id="nome-vet" placeholder="Dr. João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crmv">CRMV</Label>
                  <Input id="crmv" placeholder="CRMV-SP 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clinica">Nome da Clínica</Label>
                  <Input id="clinica" placeholder="Clínica Veterinária ABC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="especialidade">Especialidade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinica-geral">Clínica Geral</SelectItem>
                      <SelectItem value="cirurgia">Cirurgia</SelectItem>
                      <SelectItem value="dermatologia">Dermatologia</SelectItem>
                      <SelectItem value="cardiologia">Cardiologia</SelectItem>
                      <SelectItem value="oncologia">Oncologia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço da Clínica</Label>
                  <Textarea id="endereco" placeholder="Rua, número, bairro, cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-vet">Email Profissional</Label>
                  <Input id="email-vet" type="email" placeholder="contato@clinica.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-vet">Senha</Label>
                  <div className="relative">
                    <Input id="password-vet" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms-vet" />
                  <Label htmlFor="terms-vet" className="text-sm">
                    Aceito os termos de uso profissional
                  </Label>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleRegister("veterinario")}
                  disabled={isLoading}
                >
                  {isLoading ? "Registrando clínica..." : "Registrar Clínica"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
