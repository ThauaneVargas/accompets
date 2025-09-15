"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Send,
  Mic,
  Camera,
  Heart,
  Brain,
  Lightbulb,
  Clock,
  ArrowLeft,
  Crown,
  Sparkles,
  MessageCircle,
  Stethoscope,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface Message {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: string
  type?: "text" | "suggestion" | "analysis"
}

export default function AIAssistantPage() {
  const [currentPlan, setCurrentPlan] = useState("basic")
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const plan = localStorage.getItem("userPlan") || "basic"
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    setCurrentPlan(plan)

    // Mensagem de boas-vindas
    setMessages([
      {
        id: 1,
        content:
          "Olá! Sou a PetIA, sua assistente virtual especializada em cuidados com pets. Como posso ajudar você e seu companheiro hoje?",
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
        type: "text",
      },
    ])
  }, [router])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const quickSuggestions = [
    {
      id: 1,
      text: "Meu pet está com diarreia",
      category: "health",
      icon: Stethoscope,
    },
    {
      id: 2,
      text: "Como ensinar comandos básicos?",
      category: "training",
      icon: Brain,
    },
    {
      id: 3,
      text: "Qual ração é melhor para filhotes?",
      category: "nutrition",
      icon: Heart,
    },
    {
      id: 4,
      text: "Sintomas de emergência",
      category: "emergency",
      icon: AlertCircle,
    },
  ]

  const aiResponses = {
    "meu pet está com diarreia": {
      content:
        "Diarreia em pets pode ter várias causas. Aqui estão os primeiros passos:\n\n• Retire a comida por 12-24h (mantenha água)\n• Observe se há sangue ou muco\n• Verifique se o pet está ativo e hidratado\n• Reintroduza comida gradualmente\n\nSe persistir por mais de 24h ou houver outros sintomas, consulte um veterinário.",
      type: "analysis" as const,
    },
    "como ensinar comandos básicos": {
      content:
        "Comandos básicos são fundamentais! Comece com:\n\n• **Senta**: Use petisco, levante a mão sobre a cabeça\n• **Fica**: Comece com poucos segundos, aumente gradualmente\n• **Vem**: Sempre recompense quando vier até você\n• **Deita**: A partir da posição sentado\n\nDicas: Sessões curtas (5-10min), recompensas imediatas, paciência e consistência.",
      type: "suggestion" as const,
    },
    "qual ração é melhor para filhotes": {
      content:
        "Para filhotes, escolha rações específicas para a idade:\n\n• **0-4 meses**: Ração starter ou leite materno\n• **4-12 meses**: Ração para filhotes (puppy/kitten)\n• Ingredientes de qualidade (proteína como primeiro item)\n• Evite corantes e conservantes artificiais\n\nConsidere o porte do animal e consulte seu veterinário para recomendações específicas.",
      type: "suggestion" as const,
    },
    "sintomas de emergência": {
      content:
        "⚠️ **PROCURE AJUDA IMEDIATA se observar:**\n\n• Dificuldade para respirar\n• Convulsões\n• Vômito com sangue\n• Abdômen distendido e rígido\n• Temperatura muito alta ou baixa\n• Letargia extrema\n• Não consegue urinar\n\n🚨 Use nosso botão de emergência para contato 24h com veterinários!",
      type: "analysis" as const,
    },
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simular resposta da IA
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase()
      let aiResponse = aiResponses[lowerInput as keyof typeof aiResponses]

      if (!aiResponse) {
        // Resposta padrão
        aiResponse = {
          content:
            "Entendo sua preocupação. Para uma avaliação mais precisa, recomendo:\n\n• Observar o comportamento do seu pet\n• Anotar sintomas específicos\n• Consultar um veterinário se necessário\n\nPosso ajudar com mais alguma dúvida específica?",
          type: "text" as const,
        }
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        content: aiResponse.content,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
        type: aiResponse.type,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  const conversationHistory = [
    {
      id: 1,
      title: "Dúvidas sobre alimentação",
      lastMessage: "Obrigado pelas dicas sobre ração!",
      timestamp: "Ontem",
      messageCount: 8,
    },
    {
      id: 2,
      title: "Comportamento do Max",
      lastMessage: "Vou tentar o adestramento positivo",
      timestamp: "2 dias atrás",
      messageCount: 12,
    },
    {
      id: 3,
      title: "Sintomas estranhos",
      lastMessage: "Já marquei consulta com veterinário",
      timestamp: "1 semana atrás",
      messageCount: 6,
    },
  ]

  const aiFeatures = [
    {
      title: "Análise de Sintomas",
      description: "Descreva os sintomas e receba orientações iniciais",
      icon: Stethoscope,
      available: true,
    },
    {
      title: "Recomendações Personalizadas",
      description: "Sugestões baseadas no perfil do seu pet",
      icon: Lightbulb,
      available: currentPlan === "pro",
    },
    {
      title: "Análise de Fotos",
      description: "Envie fotos para análise visual de problemas",
      icon: Camera,
      available: currentPlan === "pro",
    },
    {
      title: "Assistente por Voz",
      description: "Converse por áudio com a PetIA",
      icon: Mic,
      available: currentPlan === "pro",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">PetIA</h1>
                <p className="text-xs text-muted-foreground">Assistente inteligente</p>
              </div>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            IA
          </Badge>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Plan Banner */}
        {currentPlan === "basic" && (
          <Link href="/plans">
            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200 cursor-pointer hover:from-purple-500/20 hover:to-blue-500/20 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-700">Upgrade para Pro</p>
                      <p className="text-sm text-purple-600">IA avançada + análise de fotos</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-600 text-white">Premium</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="features">Recursos</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          {/* Chat */}
          <TabsContent value="chat" className="space-y-4">
            {/* Chat Messages */}
            <Card className="bg-card h-96 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">PetIA</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Online • Respondendo em segundos
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto space-y-4 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.type === "analysis"
                            ? "bg-red-50 border border-red-200 text-red-800 dark:bg-red-950/20 dark:border-red-800 dark:text-red-300"
                            : message.type === "suggestion"
                              ? "bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-300"
                              : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
            </Card>

            {/* Quick Suggestions */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-sm">Sugestões Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {quickSuggestions.map((suggestion) => (
                    <Button
                      key={suggestion.id}
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 text-left justify-start bg-transparent"
                      onClick={() => handleSuggestionClick(suggestion.text)}
                    >
                      <suggestion.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">{suggestion.text}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Message Input */}
            <Card className="bg-card">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua pergunta sobre pets..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features */}
          <TabsContent value="features" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recursos da PetIA</h2>
              <Badge variant="outline">IA Avançada</Badge>
            </div>

            {aiFeatures.map((feature, index) => (
              <Card key={index} className={`bg-card ${!feature.available ? "opacity-60" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        feature.available ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-muted"
                      }`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.available ? "text-white" : "text-muted-foreground"}`}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium">{feature.title}</h3>
                        {!feature.available && <Crown className="w-4 h-4 text-purple-600" />}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>

                      {feature.available ? (
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        >
                          Usar Recurso
                        </Button>
                      ) : (
                        <Link href="/plans">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-300 text-purple-600 bg-transparent"
                          >
                            Upgrade Pro
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* AI Stats */}
            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  Estatísticas da IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Consultas respondidas</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    1,247
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Precisão das respostas</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    94.2%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tempo médio de resposta</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    1.3s
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Satisfação dos usuários</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    4.8/5
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History */}
          <TabsContent value="history" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Conversas Anteriores</h2>
              <Badge variant="outline">{conversationHistory.length} conversas</Badge>
            </div>

            {conversationHistory.map((conversation) => (
              <Card key={conversation.id} className="bg-card cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium">{conversation.title}</h3>
                    <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{conversation.lastMessage}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{conversation.messageCount} mensagens</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Continuar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Usage Stats */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Seu Uso da PetIA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Consultas este mês</span>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {currentPlan === "basic" ? "23/50" : "156"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tópico mais consultado</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Alimentação
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tempo total de conversa</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    2h 34min
                  </Badge>
                </div>
                {currentPlan === "basic" && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Limite mensal</span>
                    <Badge variant="outline" className="border-purple-300 text-purple-600">
                      27 consultas restantes
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
