import {
  Users,
  Code2,
  CheckCircle2,
  Clock,
  UserPlus,
  GraduationCap,
  Rocket
} from "lucide-react"

export function StatsSection() {
  return (
      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-4 space-y-10">

          {/* Primeira linha de estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">+5 anos</div>
              <p className="text-gray-400 text-sm">de experiência técnica</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">Comprometimento</div>
              <p className="text-gray-400 text-sm">com prazos e qualidade</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">Projetos autorais</div>
              <p className="text-gray-400 text-sm">com foco em inovação</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">Base sólida</div>
              <p className="text-gray-400 text-sm">Formação + prática</p>
            </div>
          </div>
        </div>
      </section>
  )
}
