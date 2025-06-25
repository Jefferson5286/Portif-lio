import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projetos Recentes</h2>
          <p className="text-gray-400 text-lg">
            Uma seleção dos meus trabalhos mais recentes e relevantes em diferentes áreas de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-green-500/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="E-commerce Project"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">React</Badge>
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Node.js</Badge>
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">MongoDB</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">E-commerce Premium</h3>
                <p className="text-gray-400 mb-4">
                  Plataforma completa de e-commerce com painel administrativo, gateway de pagamentos e sistema de
                  logística integrado.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Dashboard Project"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Next.js</Badge>
                  <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">Tailwind</Badge>
                  <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">Firebase</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">Dashboard Analytics</h3>
                <p className="text-gray-400 mb-4">
                  Dashboard interativo para visualização de dados em tempo real com gráficos personalizáveis e
                  relatórios automatizados.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Mobile App Project"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">React Native</Badge>
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/20">Django</Badge>
                  <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">PostgreSQL</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white">App de Delivery</h3>
                <p className="text-gray-400 mb-4">
                  Aplicativo de delivery completo com rastreamento em tempo real, pagamentos integrados e sistema de
                  avaliações.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
