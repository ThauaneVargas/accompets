import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Camera, Calendar, Heart, Award, Upload } from "lucide-react"
import Link from "next/link"

export default function AddPetPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-foreground">Adicionar Pet</h1>
            <p className="text-sm text-muted-foreground">Cadastre seu novo companheiro</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* Photo Upload */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                <Camera className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="text-center">
                <p className="font-medium">Foto do Pet</p>
                <p className="text-sm text-muted-foreground">Adicione uma foto especial</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Escolher Foto
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Pet</Label>
              <Input id="name" placeholder="Ex: Max, Luna, Thor..." />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="species">Espécie</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Cachorro</SelectItem>
                    <SelectItem value="cat">Gato</SelectItem>
                    <SelectItem value="bird">Ave</SelectItem>
                    <SelectItem value="fish">Peixe</SelectItem>
                    <SelectItem value="rabbit">Coelho</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="breed">Raça</Label>
                <Input id="breed" placeholder="Ex: Golden Retriever" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="gender">Sexo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Macho</SelectItem>
                    <SelectItem value="female">Fêmea</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input id="weight" type="number" placeholder="Ex: 25.5" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Birth Information */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Certidão de Nascimento
            </CardTitle>
            <CardDescription>Informações sobre o nascimento do seu pet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
              <Input id="birthdate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthplace">Local de Nascimento</Label>
              <Input id="birthplace" placeholder="Ex: Canil São Francisco, Rio de Janeiro" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="mother">Nome da Mãe</Label>
                <Input id="mother" placeholder="Ex: Bella" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="father">Nome do Pai</Label>
                <Input id="father" placeholder="Ex: Rex" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="microchip">Microchip</Label>
              <Input id="microchip" placeholder="Número do microchip (opcional)" />
            </div>
          </CardContent>
        </Card>

        {/* Health Information */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Informações de Saúde
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label>Castrado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Sim</SelectItem>
                    <SelectItem value="no">Não</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Vacinado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete">Completo</SelectItem>
                    <SelectItem value="partial">Parcial</SelectItem>
                    <SelectItem value="none">Não vacinado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Alergias Conhecidas</Label>
              <Textarea
                id="allergies"
                placeholder="Ex: Frango, pólen, medicamentos específicos..."
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conditions">Condições Médicas</Label>
              <Textarea
                id="conditions"
                placeholder="Ex: Displasia, diabetes, problemas cardíacos..."
                className="min-h-[80px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Contato de Emergência</CardTitle>
            <CardDescription>Pessoa para contatar em caso de emergência</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emergency-name">Nome Completo</Label>
              <Input id="emergency-name" placeholder="Ex: Maria Silva" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="emergency-phone">Telefone</Label>
                <Input id="emergency-phone" placeholder="(11) 99999-9999" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="relationship">Parentesco</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Família</SelectItem>
                    <SelectItem value="friend">Amigo(a)</SelectItem>
                    <SelectItem value="neighbor">Vizinho(a)</SelectItem>
                    <SelectItem value="vet">Veterinário</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personality & Preferences */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Personalidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Temperamento</Label>
              <div className="flex flex-wrap gap-2">
                {["Calmo", "Brincalhão", "Protetor", "Sociável", "Tímido", "Energético"].map((trait) => (
                  <Badge key={trait} variant="outline" className="cursor-pointer hover:bg-accent">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="favorite-toy">Brinquedo Favorito</Label>
              <Input id="favorite-toy" placeholder="Ex: Bolinha de tênis, corda..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="favorite-food">Petisco Favorito</Label>
              <Input id="favorite-food" placeholder="Ex: Biscoito de frango, cenoura..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="special-notes">Observações Especiais</Label>
              <Textarea
                id="special-notes"
                placeholder="Comportamentos especiais, medos, preferências..."
                className="min-h-[80px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Heart className="w-4 h-4 mr-2" />
            Cadastrar Pet
          </Button>

          <Button variant="outline" className="w-full bg-transparent">
            Salvar como Rascunho
          </Button>
        </div>
      </main>
    </div>
  )
}
