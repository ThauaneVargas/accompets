"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Printer, Download, Upload, QrCode, Shield, Calendar, Pill, Heart, Camera } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function MedicalRecordPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const petData = {
    name: "Max",
    breed: "Golden Retriever",
    age: "3 anos",
    weight: "28kg",
    gender: "Macho",
    birthDate: "15/03/2021",
    microchip: "982000123456789",
    owner: "João Silva",
    ownerPhone: "(11) 99999-9999",
    ownerEmail: "joao@email.com",
    address: "Rua das Flores, 123 - São Paulo, SP",
    veterinarian: "Dr. Carlos Silva",
    vetClinic: "Clínica Veterinária ABC",
    vetPhone: "(11) 3333-4444",
    avatar: "/cute-golden-retriever-face.png",
  }

  const vaccinations = [
    {
      name: "Antirrábica",
      date: "15/03/2024",
      nextDue: "15/03/2025",
      batch: "VAC123456",
      veterinarian: "Dr. Carlos Silva",
      status: "Em dia",
      hasProof: true,
    },
    {
      name: "V10 (Múltipla)",
      date: "10/02/2024",
      nextDue: "10/02/2025",
      batch: "VAC789012",
      veterinarian: "Dr. Carlos Silva",
      status: "Em dia",
      hasProof: true,
    },
    {
      name: "Giárdia",
      date: "05/01/2024",
      nextDue: "05/07/2024",
      batch: "VAC345678",
      veterinarian: "Dr. Ana Santos",
      status: "Vencida",
      hasProof: false,
    },
  ]

  const medications = [
    {
      name: "Antibiótico Amoxicilina",
      dosage: "250mg",
      frequency: "2x ao dia",
      startDate: "10/12/2024",
      endDate: "17/12/2024",
      veterinarian: "Dr. Carlos Silva",
      status: "Ativo",
    },
    {
      name: "Vermífugo Drontal",
      dosage: "1 comprimido",
      date: "05/12/2024",
      veterinarian: "Dr. Carlos Silva",
      status: "Concluído",
    },
  ]

  const medicalHistory = [
    {
      date: "15/12/2024",
      type: "Consulta de Rotina",
      veterinarian: "Dr. Carlos Silva",
      diagnosis: "Animal saudável",
      treatment: "Manutenção dos cuidados atuais",
      observations: "Peso ideal, boa condição corporal",
    },
    {
      date: "10/11/2024",
      type: "Exame de Sangue",
      veterinarian: "Dr. Carlos Silva",
      diagnosis: "Hemograma normal",
      treatment: "Nenhum tratamento necessário",
      observations: "Todos os parâmetros dentro da normalidade",
    },
  ]

  const allergies = ["Penicilina", "Dipirona", "Corantes artificiais"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Hidden in print */}
      <header className="bg-card border-b border-border px-4 py-3 print:hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ficha Médica</h1>
              <p className="text-sm text-muted-foreground">Registro completo de saúde</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Imprimir
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6 print:p-0 print:space-y-4">
        {/* Medical Record Header */}
        <Card className="print:shadow-none print:border-0">
          <CardContent className="p-6 print:p-4">
            <div className="flex items-center justify-between mb-6 print:mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={petData.avatar || "/placeholder.svg"}
                  alt={petData.name}
                  className="w-20 h-20 rounded-full object-cover print:w-16 print:h-16"
                />
                <div>
                  <h1 className="text-3xl font-bold print:text-2xl">{petData.name}</h1>
                  <p className="text-lg text-muted-foreground print:text-base">
                    {petData.breed} • {petData.age} • {petData.gender}
                  </p>
                  <p className="text-sm text-muted-foreground">Microchip: {petData.microchip}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center print:w-20 print:h-20">
                  <QrCode className="w-12 h-12 text-muted-foreground print:w-10 print:h-10" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Código de verificação</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Dados do Animal
                </h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Data de Nascimento:</strong> {petData.birthDate}
                  </p>
                  <p>
                    <strong>Peso Atual:</strong> {petData.weight}
                  </p>
                  <p>
                    <strong>Raça:</strong> {petData.breed}
                  </p>
                  <p>
                    <strong>Sexo:</strong> {petData.gender}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dados do Tutor</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Nome:</strong> {petData.owner}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {petData.ownerPhone}
                  </p>
                  <p>
                    <strong>Email:</strong> {petData.ownerEmail}
                  </p>
                  <p>
                    <strong>Endereço:</strong> {petData.address}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Veterinário Responsável</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Nome:</strong> {petData.veterinarian}
                  </p>
                  <p>
                    <strong>Clínica:</strong> {petData.vetClinic}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {petData.vetPhone}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-red-800">
                  <Shield className="w-4 h-4" />
                  Alergias e Restrições
                </h3>
                <div className="space-y-1 text-sm">
                  {allergies.map((allergy, index) => (
                    <p key={index} className="text-red-700">
                      • {allergy}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vaccination Record */}
        <Card className="print:shadow-none print:border-0">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Carteira de Vacinação
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Vacina</th>
                    <th className="text-left py-2">Data Aplicação</th>
                    <th className="text-left py-2">Próxima Dose</th>
                    <th className="text-left py-2">Lote</th>
                    <th className="text-left py-2">Veterinário</th>
                    <th className="text-left py-2 print:hidden">Comprovante</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {vaccinations.map((vaccine, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-medium">{vaccine.name}</td>
                      <td className="py-2">{vaccine.date}</td>
                      <td className="py-2">{vaccine.nextDue}</td>
                      <td className="py-2">{vaccine.batch}</td>
                      <td className="py-2">{vaccine.veterinarian}</td>
                      <td className="py-2 print:hidden">
                        {vaccine.hasProof ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            <Camera className="w-3 h-3 mr-1" />
                            Anexado
                          </Badge>
                        ) : (
                          <Button size="sm" variant="outline" onClick={() => setShowUploadModal(true)}>
                            <Upload className="w-3 h-3 mr-1" />
                            Anexar
                          </Button>
                        )}
                      </td>
                      <td className="py-2">
                        <Badge
                          variant={vaccine.status === "Em dia" ? "secondary" : "destructive"}
                          className={vaccine.status === "Em dia" ? "bg-green-100 text-green-800" : ""}
                        >
                          {vaccine.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Current Medications */}
        <Card className="print:shadow-none print:border-0">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2">
              <Pill className="w-5 h-5" />
              Medicações Atuais
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <div className="space-y-3">
              {medications.map((med, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 border rounded-lg print:border-gray-300"
                >
                  <div>
                    <p className="font-medium">{med.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {med.dosage} • {med.frequency || med.date}
                    </p>
                    <p className="text-xs text-muted-foreground">Prescrito por: {med.veterinarian}</p>
                  </div>
                  <Badge
                    variant={med.status === "Ativo" ? "secondary" : "outline"}
                    className={med.status === "Ativo" ? "bg-blue-100 text-blue-800" : ""}
                  >
                    {med.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medical History */}
        <Card className="print:shadow-none print:border-0">
          <CardHeader className="print:pb-2">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Histórico Médico
            </CardTitle>
          </CardHeader>
          <CardContent className="print:pt-0">
            <div className="space-y-4">
              {medicalHistory.map((record, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{record.type}</h4>
                    <span className="text-sm text-muted-foreground">{record.date}</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Veterinário:</strong> {record.veterinarian}
                    </p>
                    <p>
                      <strong>Diagnóstico:</strong> {record.diagnosis}
                    </p>
                    <p>
                      <strong>Tratamento:</strong> {record.treatment}
                    </p>
                    {record.observations && (
                      <p>
                        <strong>Observações:</strong> {record.observations}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer - Only in print */}
        <div className="hidden print:block text-center text-xs text-muted-foreground mt-8 pt-4 border-t">
          <p>Documento gerado pelo ACCOMPETS em {new Date().toLocaleDateString("pt-BR")}</p>
          <p>Para verificar a autenticidade, acesse accompets.com/verify com o código QR acima</p>
        </div>
      </main>

      {/* Upload Modal - Hidden in print */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 print:hidden">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Anexar Comprovante de Vacina</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Clique para selecionar ou arraste a foto aqui</p>
                <Button variant="outline" size="sm">
                  Selecionar Arquivo
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Anexar Comprovante</Button>
                <Button variant="outline" onClick={() => setShowUploadModal(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          .print\\:p-4 {
            padding: 1rem !important;
          }
          .print\\:pt-0 {
            padding-top: 0 !important;
          }
          .print\\:pb-2 {
            padding-bottom: 0.5rem !important;
          }
          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }
          .print\\:space-y-4 > * + * {
            margin-top: 1rem !important;
          }
          .print\\:gap-4 {
            gap: 1rem !important;
          }
          .print\\:text-2xl {
            font-size: 1.5rem !important;
          }
          .print\\:text-base {
            font-size: 1rem !important;
          }
          .print\\:w-16 {
            width: 4rem !important;
          }
          .print\\:h-16 {
            height: 4rem !important;
          }
          .print\\:w-20 {
            width: 5rem !important;
          }
          .print\\:h-20 {
            height: 5rem !important;
          }
          .print\\:w-10 {
            width: 2.5rem !important;
          }
          .print\\:h-10 {
            height: 2.5rem !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border-0 {
            border: none !important;
          }
          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }
          .print\\:border-gray-400 {
            border-color: #9ca3af !important;
          }
        }
      `}</style>
    </div>
  )
}
