"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  Heart,
  Home,
  MapPin,
  Calendar,
  Users,
  Trophy,
  Crown,
  Settings,
  LogOut,
  Stethoscope,
  Pill,
  FileText,
  Shield,
  Plus,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface MobileNavProps {
  userType?: string
  currentPlan?: string
}

export function MobileNav({ userType = "tutor", currentPlan = "basic" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userPlan")
    router.push("/login")
  }

  const tutorMenuItems = [
    { icon: Home, label: "Dashboard", href: "/", description: "Visão geral do seu pet" },
    {
      icon: MapPin,
      label: "Rastreamento",
      href: "/tracking",
      description: "Localização em tempo real",
      premium: currentPlan === "basic",
    },
    { icon: Shield, label: "Perfil do Pet", href: "/profile", description: "Informações e saúde" },
    { icon: Pill, label: "Medicações", href: "/medications", description: "Controle de tratamentos" },
    { icon: FileText, label: "Ficha Médica", href: "/medical-record", description: "Documento completo" },
    { icon: Calendar, label: "Clínicas", href: "/clinics", description: "Veterinários próximos" },
    { icon: Trophy, label: "Desafios", href: "/challenges", description: "Atividades semanais" },
    {
      icon: Users,
      label: "PetSocial",
      href: "/social",
      description: "Rede social de pets",
      premium: currentPlan === "basic",
    },
    { icon: Heart, label: "Adoção", href: "/adoption", description: "Encontre um amigo" },
    {
      icon: Plus,
      label: "Adicionar Pet",
      href: "/add-pet",
      description: "Cadastrar novo pet",
      premium: currentPlan === "basic",
    },
  ]

  const vetMenuItems = [
    { icon: Home, label: "Dashboard", href: "/vet-dashboard", description: "Painel veterinário" },
    { icon: Users, label: "Pacientes", href: "/vet-dashboard/patients", description: "Lista de pacientes" },
    { icon: Calendar, label: "Agenda", href: "/vet-dashboard/schedule", description: "Consultas agendadas" },
    { icon: Pill, label: "Prescrições", href: "/vet-dashboard/prescriptions", description: "Medicações ativas" },
    { icon: FileText, label: "Relatórios", href: "/vet-dashboard/reports", description: "Estatísticas da clínica" },
  ]

  const menuItems = userType === "veterinario" ? vetMenuItems : tutorMenuItems

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                userType === "veterinario" ? "bg-blue-600" : "bg-primary"
              }`}
            >
              {userType === "veterinario" ? (
                <Stethoscope className="w-5 h-5 text-white" />
              ) : (
                <Heart className="w-5 h-5 text-primary-foreground" />
              )}
            </div>
            <div>
              <SheetTitle className="text-left">ACCOMPETS</SheetTitle>
              <p className="text-sm text-muted-foreground">
                {userType === "veterinario" ? "Painel Veterinário" : "Cuidando do seu melhor amigo"}
              </p>
            </div>
          </div>
        </SheetHeader>

        <div className="px-6 pb-4">
          {userType === "tutor" && currentPlan === "basic" && (
            <Link href="/plans" onClick={() => setIsOpen(false)}>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-3 cursor-pointer hover:from-accent/20 hover:to-primary/20 transition-colors">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-accent" />
                  <span className="font-medium text-accent">Upgrade para Pro</span>
                  <Badge className="bg-accent text-accent-foreground ml-auto">7 dias grátis</Badge>
                </div>
              </div>
            </Link>
          )}
        </div>

        <nav className="flex-1 px-3">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.label}</span>
                      {item.premium && <Crown className="w-3 h-3 text-accent" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-6 pt-4 border-t">
          <div className="space-y-3">
            {userType === "tutor" && (
              <Link href="/plans" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Crown className="w-5 h-5 text-accent" />
                  <span className="font-medium">Planos</span>
                </div>
              </Link>
            )}

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Configurações</span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Suporte</span>
            </div>

            <Separator />

            <div
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer text-red-600"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sair</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
