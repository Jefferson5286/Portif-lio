import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, FileText, Code, Rocket } from "lucide-react"

export function ProcessSection() {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">Processo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Como Trabalhamos Juntos</h2>
          <p className="text-gray-400 text-lg">
            Um processo estruturado e transparente para garantir o sucesso do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-green-500/30 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-green-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Descoberta</h3>
              <p className="text-gray-400">
                Conversamos sobre suas necessidades, objetivos e visão para entender completamente o projeto.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Planejamento</h3>
              <p className="text-gray-400">
                Criamos um plano detalhado com cronograma, tecnologias e arquitetura do sistema.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-purple-500/30 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Desenvolvimento</h3>
              <p className="text-gray-400">
                Desenvolvimento iterativo com entregas frequentes para feedback e ajustes contínuos.
              </p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-teal-500/30 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-teal-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Entrega</h3>
              <p className="text-gray-400">
                Deploy, testes finais e treinamento da equipe com suporte contínuo pós-entrega.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
