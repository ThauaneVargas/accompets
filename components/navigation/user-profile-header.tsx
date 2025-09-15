"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Crown, Settings, LogOut, User, Stethoscope } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface UserProfileHeaderProps {
  userType?: string
  currentPlan?: string
}

export function UserProfileHeader({ userType = "tutor", currentPlan = "basic" }: UserProfileHeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userPlan")
    router.push("/login")
  }

  const currentPet = {
    name: "Max",
    avatar: "/cute-golden-retriever-face.png",
  }

  const currentUser = {
    name: userType === "veterinario" ? "Dr. João Silva" : "João Silva",
    email: userType === "veterinario" ? "vet@demo.com" : "tutor@demo.com",
    avatar: userType === "veterinario" ? null : "/cute-golden-retriever-face.png",
  }

  return (
    <div className="flex items-center gap-3">
      {/* Notifications */}
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="w-5 h-5" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">2</span>
        </div>
      </Button>

      {/* User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 h-auto p-2">
            <div className="flex items-center gap-2">
              {userType === "tutor" ? (
                <>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={currentPet.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{currentPet.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium">{currentPet.name}</p>
                    <p className="text-xs text-muted-foreground">Tutor: {currentUser.name}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium">{currentUser.name}</p>
                    <p className="text-xs text-muted-foreground">CRMV-SP 12345</p>
                  </div>
                </>
              )}
            </div>
            {userType === "tutor" && currentPlan === "basic" && <Crown className="w-3 h-3 text-accent ml-1" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.email}</p>
            {userType === "tutor" && (
              <Badge variant="outline" className="mt-1">
                Plano {currentPlan === "pro" ? "Pro" : "Básico"}
              </Badge>
            )}
          </div>
          <DropdownMenuSeparator />

          {userType === "tutor" ? (
            <>
              <Link href="/profile">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Perfil do Pet
                </DropdownMenuItem>
              </Link>
              {currentPlan === "basic" && (
                <Link href="/plans">
                  <DropdownMenuItem>
                    <Crown className="w-4 h-4 mr-2 text-accent" />
                    Upgrade para Pro
                  </DropdownMenuItem>
                </Link>
              )}
            </>
          ) : (
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Perfil Profissional
            </DropdownMenuItem>
          )}

          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleLogout} className="text-red-600">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
