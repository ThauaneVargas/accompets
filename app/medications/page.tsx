"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Pill, Clock, AlertTriangle, CheckCircle, Plus, Calendar, Bell } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MedicationsPage() {
  const [notifications, setNotifications] = useState(true)

  const activeMedications = [
    {
      id: 1,
      name: "Antibiótico Amoxicilina",
      dosage: "250mg",
      frequency: "2x ao dia",
      duration: "7 dias",
      startDate: "10/12/2024",
      endDate: "17/12/2024",
      progress: 57,
      nextDose: "14:00",
      timeLeft: "2 horas",
      pillsLeft: 6,
      totalPills: 14,
      veterinarian: "Dr. Carlos Silva",
      instructions: "Administrar com comida. Não interromper o tratamento.",
      status: "ativo",
    },
    {
      id: 2,
      name: "Anti-inflamatório Meloxicam",
      dosage: "0.5ml",
      frequency: "1x ao dia",
      duration: "5 dias",
      startDate: "12/12/2024",
      endDate: "17/12/2024",
      progress: 40,
      nextDose: "08:00 (amanhã)",
      timeLeft: "18 horas",
      pillsLeft: 3,
      totalPills: 5,
      veterinarian: "Dr. Carlos Silva",
      instructions: "Administrar pela manhã, em jejum.",
      status: "ativo",
    },
  ]

  const completedMedications = [
    {
      id: 3,
      name: "Vermífugo Drontal",
      dosage: "1 comprimido",
      completedDate: "05/12/2024",
      veterinarian: "Dr. Carlos Silva",
      status: "concluido",
    },
    {
      id: 4,
      name: "Suplemento Vitamínico",
      dosage: "5ml",
      completedDate: "01/12/2024",
      veterinarian: "Dr. Ana Santos",
      status: "concluido",
    },
  ]

  const allergies = ["Penicilina", "Dipirona", "Corantes artificiais"]

  const todaySchedule = [
    { time: "08:00", medication: "Anti-inflamatório", status: "pendente" },
    { time: "14:00", medication: "Antibiótico", status: "pendente" },
    { time: "20:00", medication: "Antibiótico", status: "agendado" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Medicações</h1>
              <p className="text-sm text-muted-foreground">Controle de tratamentos</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Today's Schedule */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Clock className="w-5 h-5" />
              Horários de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaySchedule.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="text-center min-w-[50px]">
                    <p className="text-sm font-bold text-blue-800">{schedule.time}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{schedule.medication}</p>
                    <p className="text-xs text-muted-foreground">
                      {schedule.status === "pendente" ? "Aguardando" : "Agendado"}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={schedule.status === "pendente" ? "default" : "outline"}
                  className={schedule.status === "pendente" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {schedule.status === "pendente" ? "Administrar" : "Lembrar"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications Settings */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notificações de Medicação</p>
                <p className="text-sm text-muted-foreground">Receber lembretes automáticos</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>

        {/* Active Medications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-primary" />
              Medicações Ativas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeMedications.map((med) => (
              <div key={med.id} className="space-y-3 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{med.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {med.dosage} • {med.frequency} • {med.duration}
                    </p>
                    <p className="text-xs text-muted-foreground">Prescrito por: {med.veterinarian}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Ativo
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso do tratamento</span>
                    <span className="font-medium">{med.progress}%</span>
                  </div>
                  <Progress value={med.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Próxima dose</p>
                    <p className="font-medium">{med.nextDose}</p>
                    <p className="text-xs text-muted-foreground">em {med.timeLeft}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Restante</p>
                    <p className="font-medium">
                      {med.pillsLeft} de {med.totalPills}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {med.pillsLeft <= 2 && (
                        <span className="text-orange-600 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Acabando
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded text-xs">
                  <p className="font-medium mb-1">Instruções:</p>
                  <p className="text-muted-foreground">{med.instructions}</p>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Marcar Dose
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Calendar className="w-3 h-3 mr-1" />
                    Histórico
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Allergies */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="w-5 h-5" />
              Alergias e Restrições
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {allergies.map((allergy, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-sm font-medium text-red-800">{allergy}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 border-red-200 text-red-800 bg-transparent">
              <Plus className="w-3 h-3 mr-1" />
              Adicionar Alergia
            </Button>
          </CardContent>
        </Card>

        {/* Completed Medications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Tratamentos Concluídos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {completedMedications.map((med) => (
              <div key={med.id} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">{med.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {med.dosage} • Concluído em {med.completedDate}
                  </p>
                  <p className="text-xs text-muted-foreground">Por: {med.veterinarian}</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Concluído
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              Ver Histórico Completo
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <div className="flex-1">
                <p className="font-medium text-orange-800">Emergência Médica</p>
                <p className="text-sm text-orange-600">Em caso de reação adversa, contate imediatamente</p>
              </div>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                Ligar
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
