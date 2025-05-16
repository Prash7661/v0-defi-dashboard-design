import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Our Partners</h2>
      <p className="text-center text-slate-400 max-w-2xl mx-auto mb-8">
        DeFi Quest collaborates with leading financial institutions and brands to bring you exclusive quests and
        rewards.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        <PartnerCard name="Commerzbank" />
        <PartnerCard name="Jägermeister" />
        <PartnerCard name="Solana" />
      </div>
    </section>
  )
}

function PartnerCard({ name }: { name: string }) {
  return (
    <Card className="bg-slate-800/30 border-slate-700/30 w-full hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300 hover:scale-[1.05]">
      <CardContent className="p-6 flex items-center justify-center">
        <div className="h-12 w-full flex items-center justify-center text-slate-300 font-medium">{name}</div>
      </CardContent>
    </Card>
  )
}
