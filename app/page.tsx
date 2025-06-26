import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Database,
  Bot,
  ShoppingCart,
  Globe,
  Smartphone,
  MessageCircle,
  Mail,
  Instagram,
  Github,
  Linkedin,
  Code,
  Server,
  Terminal,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
// import { FAQSection } from "@/components/faq-section"
// import { ProjectsSection } from "@/components/projects-section"
import { StatsSection } from "@/components/stats-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-gray-100">
      <ThemeToggle />

      {/* Header/Hero Section with Background Image */}
      <header className="relative py-24 md:py-32 overflow-hidden border-b border-gray-800">
        {/* Background Code Pattern */}
        {/*<div className="absolute inset-0 opacity-2">*/}
        {/*  <Image*/}
        {/*    src="/thumb/background.webp"*/}
        {/*    alt="Code background"*/}
        {/*    width={1200}*/}
        {/*    height={800}*/}
        {/*    className="w-full h-full object-cover"*/}
        {/*  />*/}
        {/*</div>*/}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10] via-transparent to-[#0a0c10]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block mb-4">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-sm px-3 py-1">
                  Disponível para novos projetos
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Olá, eu sou o Jefferson Lima,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                  Desenvolvedor Fullstack
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Há mais de 5 anos ajudo empresas e empreendedores a transformarem ideias em soluções digitais reais.
                Combinando visão estratégica, experiência prática e domínio técnico, crio sistemas que geram resultado.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-md">
                  <a href="#contact" className="flex items-center">
                    Ver Projetos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-white hover:bg-gray-800 rounded-md"
                >
                  <a href="https://jefferstech.com.br/" className="flex items-center">
                    Entrar em Contato pela JeffersTech
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur-lg opacity-30"></div>
                <div className="relative rounded-full border-2 border-gray-800 p-1 bg-gray-900">
                  <Image
                    src="/thumb/profile.webp"
                    alt="Jefferson Lima - Desenvolvedor Fullstack"
                    width={400}
                    height={400}
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">5+ anos de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-4">
              Tecnologias Principais
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: 'Python', src: 'python-original.svg', bg: 'bg-blue-500/10' },
                { name: 'Java', src: 'java-plain.svg', bg: 'bg-red-600/10' },
                { name: 'TypeScript', src: 'typescript-plain.svg', bg: 'bg-blue-600/10' },
                { name: 'AWS', src: 'amazonwebservices-original-wordmark.svg', bg: 'bg-orange-500/10' },
                { name: 'Google Cloud', src: 'googlecloud-original.svg', bg: 'bg-blue-400/10' },
                { name: 'MongoDB', src: 'mongodb-plain.svg', bg: 'bg-green-600/10' },
                { name: 'Firebase', src: 'firebase-plain.svg', bg: 'bg-yellow-500/10' },
                { name: 'PostgreSQL', src: 'postgresql-plain.svg', bg: 'bg-sky-700/10' },
              ].map(({ name, src, bg }) => (
                  <div key={name} className="flex items-center gap-2 w-full min-w-0">
                    <div className={`w-10 h-10 ${bg} rounded-md flex items-center justify-center`}>
                      <Image
                          src={`/thumb/icon/${src}`}
                          alt={name}
                          width={24}
                          height={24}
                          className="opacity-80"
                      />
                    </div>
                    <span className="text-gray-300 truncate">{name}</span>
                  </div>
              ))}
            </div>
          </div>


        </div>
      </header>

      {/* Stats Section */}
      <StatsSection />

      {/* Education Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Formação Acadêmica</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Anhanguera Logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Engenharia de Software - Bacharelado</h3>
                      <p className="text-gray-400 mb-3">Anhanguera Educacional</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>2023 - em andamento</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Especialização Logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Python Full-Stack Developer</h3>
                      <p className="text-gray-400 mb-3">Udemy</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>2021 - 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Certificações</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="AWS Logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">React do Zero a Maestria</h3>
                      <p className="text-gray-400 mb-3">Udemy - Matheus Battisti, Hora de Codar</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Emitido em 2023</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Scrum Logo"
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">BackEnd Developers, APIs modernas - FastAPI</h3>
                      <p className="text-gray-400 mb-3">Udemy - Geek University</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Emitido em 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-b border-gray-800 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Tech pattern"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Habilidades Técnicas</h2>
            <p className="text-gray-400 text-lg">
              Combinando conhecimento técnico e experiência prática para desenvolver soluções eficientes e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-green-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-green-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mr-4">
                    <Terminal className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Linguagens</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Python</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Kotlin</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">TypeScript</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frontend */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Frontend</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">NextJS/React</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Vue</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-purple-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Backend</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">FastAPI</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Django</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Django REST</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-teal-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-teal-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Bancos de Dados</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">MongoDB</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Firebase</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">PostgreSQL</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile/Desktop */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-orange-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-orange-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mobile/Desktop</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">React Native</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Kivy</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Kotlin Native</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Automation */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-pink-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-pink-500/10 transition-all duration-500"></div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mr-4">
                    <Bot className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Automação</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">WhatsApp</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Discord</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Instagram</span>
                    <div className="w-32 bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <section id="services" className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">Serviços</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Soluções Personalizadas</h2>
            <p className="text-gray-400 text-lg">
              Desenvolvimento de alta qualidade para transformar suas ideias em realidade digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-green-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/thumb/4.webp"
                    alt="E-commerce example"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-green-500/20 p-2 rounded-lg inline-block">
                      <ShoppingCart className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">E-commerces personalizados</h3>
                  <p className="text-gray-400 mb-4">
                    Lojas virtuais completas com gestão de produtos, pagamentos integrados e logística otimizada para
                    maximizar suas vendas.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                      <span>Integração com gateways de pagamento</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                      <span>Gestão de estoque automatizada</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                      <span>Relatórios de vendas e analytics</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                      src="/thumb/3.webp"
                    alt="WebApp example"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-blue-500/20 p-2 rounded-lg inline-block">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">WebApps e Landing Pages</h3>
                  <p className="text-gray-400 mb-4">
                    Aplicações web e páginas de conversão responsivas e otimizadas para todos os dispositivos e motores
                    de busca.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Design responsivo e moderno</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Otimização para SEO</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Integração com CMS e analytics</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-purple-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/thumb/2.webp"
                    alt="Mobile app example"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-purple-500/20 p-2 rounded-lg inline-block">
                      <Smartphone className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Apps Mobile & Desktop</h3>
                  <p className="text-gray-400 mb-4">
                    Aplicativos multiplataforma para iOS, Android e computadores com a mesma base de código para maior
                    eficiência.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-purple-500" />
                      <span>Experiência nativa em múltiplas plataformas</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-purple-500" />
                      <span>Sincronização entre dispositivos</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-purple-500" />
                      <span>Funcionalidades offline</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-teal-500/30 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                      src="/thumb/1.webp"
                    alt="Bot automation example"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-teal-500/20 p-2 rounded-lg inline-block">
                      <Bot className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Bots de Automação</h3>
                  <p className="text-gray-400 mb-4">
                    Automatize tarefas e interações em plataformas como WhatsApp, Telegram, Discord e Instagram.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-teal-500" />
                      <span>Atendimento automatizado 24/7</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-teal-500" />
                      <span>Integração com CRM e sistemas externos</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-teal-500" />
                      <span>Análise de conversas e métricas</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/*<ProjectsSection />*/}

      {/* Testimonials Section */}
      {/*<TestimonialsSection />*/}

      {/* FAQ Section */}
      {/*<FAQSection />*/}

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgba(0,0,0,.4)]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-25"/>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">Vamos Trabalhar Juntos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Precisa de um projeto rápido, escalável e bem documentado?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Estou disponível para novos projetos e pronto para impulsionar ideias inovadoras.
                Fale com o time comercial da <a href="https://jefferstech.com.br" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">JeffersTech</a> e descubra como podemos transformar sua visão em uma solução digital sob medida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Atendimento via WhatsApp</h3>
                    <p className="text-gray-400">Converse com nosso time em tempo real</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a
                      href="https://jefferstech.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Iniciar conversa
                  </a>
                </Button>
              </div>

              {/* Email */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Contato por E-mail</h3>
                    <p className="text-gray-400">Ideal para propostas e demandas personalizadas</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  <a href="mailto:commercial@jefferstech.com.br" className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar e-mail para a JeffersTech
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Jefferson Lima</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Desenvolvedor Fullstack e Engenheiro de Software especializado em transformar ideias em sistemas
                robustos e escaláveis.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/jefferson_lima5286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <MessageCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                  <span>WhatsApp/Telegram: +55 98 99242-8755</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                  <span>Email: dev@jefferstech.com.br</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                  <span>Disponível: Seg-Sex, 9h-18h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Jefferson Lima. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Política de Privacidade
              </a>
              <span className="mx-2 text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute -inset-1 bg-green-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
        <a
          href="https://wa.me/556181666703"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="sr-only">Contato via WhatsApp</span>
        </a>
      </div>
    </main>
  )
}
