"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Plus, Pill, Clock, Search, Filter, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function VetPrescriptionsPage() {
  const [showNewPrescription, setShowNewPrescription] = useState(false)

  const activePrescriptions = [
    {
      id: 1,
      petName: "Max",
      ownerName: "João Silva",
      medication: "Antibiótico Amoxicilina",
      dosage: "250mg",
      frequency: "2x ao dia",
      duration: "7 dias",
      startDate: "10/12/2024",
      endDate: "17/12/2024",
      progress: 57,
      avatar: "/cute-golden-retriever-face.png",
      status: "ativo",
      adherence: 95,
    },
    {
      id: 2,
      petName: "Luna",
      ownerName: "Maria Santos",
      medication: "Anti-inflamatório Meloxicam",
      dosage: "0.5ml",
      frequency: "1x ao dia",
      duration: "5 dias",
      startDate: "12/12/2024",
      endDate: "17/12/2024",
      progress: 40,
      avatar: "/border-collie-face.png",
      status: "ativo",
      adherence: 100,
    },
    {
      id: 3,
      petName: "Thor",
      ownerName: "Pedro Costa",
      medication: "Analgésico Tramadol",
      dosage: "50mg",
      frequency: "3x ao dia",
      duration: "3 dias",
      startDate: "14/12/2024",
      endDate: "17/12/2024",
      progress: 20,
      avatar: "/german-shepherd-face.png",
      status: "atrasado",
      adherence: 60,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/vet-dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Prescrições Médicas</h1>
              <p className="text-sm text-muted-foreground">Gerencie medicações dos pacientes</p>
            </div>
          </div>
          <Button onClick={() => setShowNewPrescription(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Prescrição
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* New Prescription Form */}
        {showNewPrescription && (
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Nova Prescrição</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patient">Paciente</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o paciente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="max">Max - João Silva</SelectItem>
                      <SelectItem value="luna">Luna - Maria Santos</SelectItem>
                      <SelectItem value="thor">Thor - Pedro Costa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medication">Medicamento</Label>
                  <Input placeholder="Nome do medicamento" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosagem</Label>
                  <Input placeholder="Ex: 250mg, 0.5ml" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequência</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a frequência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1x">1x ao dia</SelectItem>
                      <SelectItem value="2x">2x ao dia</SelectItem>
                      <SelectItem value="3x">3x ao dia</SelectItem>
                      <SelectItem value="4x">4x ao dia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração</Label>
                  <Input placeholder="Ex: 7 dias, 2 semanas" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Data de Início</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructions">Instruções Especiais</Label>
                <Textarea placeholder="Instruções para administração, cuidados especiais, etc." />
              </div>
              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Prescrever Medicação</Button>
                <Button variant="outline" onClick={() => setShowNewPrescription(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar por paciente ou medicamento..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5" />
              Prescrições Ativas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <div key={prescription.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={prescription.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{prescription.petName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{prescription.petName}</h3>
                      <Badge
                        variant={prescription.status === "ativo" ? "secondary" : "destructive"}
                        className={prescription.status === "ativo" ? "bg-green-100 text-green-800" : ""}
                      >
                        {prescription.status === "ativo" ? "Ativo" : "Atrasado"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Tutor: {prescription.ownerName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Aderência: {prescription.adherence}%</p>
                    <p className="text-xs text-muted-foreground">
                      {prescription.adherence < 80 && (
                        <span className="text-red-600 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Baixa aderência
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium">{prescription.medication}</p>
                      <p className="text-muted-foreground">
                        {prescription.dosage} • {prescription.frequency}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duração</p>
                      <p className="font-medium">{prescription.duration}</p>
                      <p className="text-xs text-muted-foreground">
                        {prescription.startDate} - {prescription.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Progresso</p>
                      <p className="font-medium">{prescription.progress}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${prescription.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    Histórico
                  </Button>
                  <Button size="sm" variant="outline">
                    Editar Prescrição
                  </Button>
                  <Button size="sm" variant="outline">
                    Contatar Tutor
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
