"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Heart, Shield, Users } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (userType: "tutor" | "veterinario") => {
    setIsLoading(true)
    // Simular login
    setTimeout(() => {
      localStorage.setItem("userType", userType)
      localStorage.setItem("isLoggedIn", "true")
      if (userType === "veterinario") {
        router.push("/vet-dashboard")
      } else {
        router.push("/")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-800">ACCOMPETS</h1>
          </div>
          <p className="text-gray-600">Cuidando do seu melhor amigo</p>
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
                <CardTitle>Login do Tutor</CardTitle>
                <CardDescription>Acesse sua conta para cuidar do seu pet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-tutor">Email</Label>
                  <Input id="email-tutor" type="email" placeholder="seu@email.com" defaultValue="tutor@demo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-tutor">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password-tutor"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      defaultValue="123456"
                    />
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
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => handleLogin("tutor")}
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar como Tutor"}
                </Button>
                <div className="text-center">
                  <Link href="/register" className="text-sm text-green-600 hover:underline">
                    Não tem conta? Cadastre-se
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="veterinario">
            <Card>
              <CardHeader>
                <CardTitle>Login do Veterinário</CardTitle>
                <CardDescription>Acesse o painel profissional</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-vet">Email Profissional</Label>
                  <Input
                    id="email-vet"
                    type="email"
                    placeholder="veterinario@clinica.com"
                    defaultValue="vet@demo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crmv">CRMV</Label>
                  <Input id="crmv" placeholder="CRMV-SP 12345" defaultValue="CRMV-SP 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-vet">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password-vet"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      defaultValue="123456"
                    />
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
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleLogin("veterinario")}
                  disabled={isLoading}
                >
                  {isLoading ? "Entrando..." : "Entrar como Veterinário"}
                </Button>
                <div className="text-center">
                  <Link href="/register" className="text-sm text-blue-600 hover:underline">
                    Cadastrar clínica
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Dados de demonstração já preenchidos</p>
          <p>Clique em "Entrar" para testar o app</p>
        </div>
      </div>
    </div>
  )
}
