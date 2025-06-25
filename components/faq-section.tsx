import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-green-400">
                Qual o prazo médio para landing pages?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                O prazo médio para desenvolvimento de landing pages é de 3-5 dias úteis, dependendo da complexidade do
                projeto e das integrações necessárias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-green-400">
                Como funciona o processo de desenvolvimento?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                O processo começa com uma reunião para entender suas necessidades, seguida por um planejamento
                detalhado. Após aprovação, inicio o desenvolvimento com entregas incrementais para feedback, finalizando
                com testes e deploy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-green-400">
                Quais formas de pagamento são aceitas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Aceito pagamentos via PIX, transferência bancária, boleto e cartão de crédito (parcelado). Projetos
                maiores geralmente são divididos em 50% de entrada e 50% na entrega.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-green-400">
                Ofereço suporte após a entrega do projeto?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim, todos os projetos incluem 30 dias de suporte gratuito após a entrega. Após esse período, ofereço
                planos de manutenção mensal ou atendimento sob demanda.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
