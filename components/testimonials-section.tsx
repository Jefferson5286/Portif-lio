import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">Depoimentos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O que dizem os clientes</h2>
          <p className="text-gray-400 text-lg">
            Feedback real de clientes que confiaram em meu trabalho para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-green-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "Jefferson entregou um e-commerce excepcional que superou todas as nossas expectativas. O projeto foi
                concluído no prazo e com qualidade impecável."
              </p>

              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Cliente"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="text-white font-semibold">Maria Silva</h4>
                  <p className="text-gray-400 text-sm">CEO, Fashion Store</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "O bot de WhatsApp desenvolvido pelo Jefferson revolucionou nosso atendimento. Agora conseguimos atender
                24/7 com qualidade excepcional."
              </p>

              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Cliente"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="text-white font-semibold">Carlos Santos</h4>
                  <p className="text-gray-400 text-sm">Diretor, TechCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "Profissional extremamente competente e dedicado. O aplicativo mobile que desenvolveu para nossa empresa
                é simplesmente perfeito."
              </p>

              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Cliente"
                  width={48}
                  height={48}
                  className="rounded-full mr-3"
                />
                <div>
                  <h4 className="text-white font-semibold">Ana Costa</h4>
                  <p className="text-gray-400 text-sm">Fundadora, StartupXYZ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
