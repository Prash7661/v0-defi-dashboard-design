import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, ArrowRight, Flame, DollarSign, Gift } from "lucide-react"
import Link from "next/link"
import { PartnersSection } from "@/components/partners-section"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 space-y-8">
            <HeroSection />
            <DashboardStats />
            <QuestsSection />
            <BadgesSection />
            <GovernanceSection />
            <PartnersSection />
          </main>
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-8">
      <div className="relative z-10">
        <h1 className="text-5xl font-bold tracking-tight mb-4 gradient-text">Learn DeFi. Play. Earn.</h1>
        <p className="text-lg text-slate-300 max-w-3xl mb-8">
          Complete quests, earn NFT badges, and gain governance power in our gamified DAO platform built for crypto
          newcomers on Solana.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="gradient-bg text-white">
            <GraduationCap className="mr-2 h-5 w-5" />
            Start Your Journey
          </Button>
          <Button variant="outline" className="text-white border-slate-700 bg-slate-800/50 hover:bg-slate-800">
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-32 opacity-30">
        <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,200 L0,200 Z"
            fill="url(#gradient)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

function DashboardStats() {
  return (
    <section className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 shadow-lg backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Welcome to DeFi Quest</h2>
        <p className="text-slate-400">
          Start your DeFi journey by connecting your wallet and completing quests to earn NFT badges and governance
          power.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Quests Completed" value="0" color="text-defi-blue" />
        <StatCard title="Badges Earned" value="0" color="text-defi-purple" />
        <StatCard title="Governance Power" value="0" color="text-defi-green" />
      </div>
    </section>
  )
}

function StatCard({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
      <h3 className="text-sm font-medium text-slate-400">{title}</h3>
      <div className={`text-4xl font-bold mt-1 ${color}`}>{value}</div>
      <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
        <div className={`h-1 rounded-full bg-current ${color} animate-pulse`} style={{ width: "0%" }}></div>
      </div>
    </div>
  )
}

function QuestsSection() {
  const quests = [
    {
      id: 1,
      title: "Wallet Connection",
      description: "Connect your wallet to start your journey",
      icon: <DollarSign className="h-6 w-6 text-defi-blue" />,
      reward: "50 XP + Beginner Badge",
      level: "BEGINNER",
      color: "bg-defi-blue",
      action: "Start Quest",
    },
    {
      id: 2,
      title: "Staking Basics",
      description: "Learn how to stake your first tokens",
      icon: <Flame className="h-6 w-6 text-defi-purple" />,
      reward: "100 XP + Staker Badge",
      level: "BEGINNER",
      color: "bg-defi-purple",
      action: "Connect Wallet First",
    },
    {
      id: 3,
      title: "Liquidity Provision",
      description: "Learn to provide liquidity to DeFi protocols",
      icon: <DollarSign className="h-6 w-6 text-defi-green" />,
      reward: "200 XP + LP Provider Badge",
      level: "INTERMEDIATE",
      color: "bg-defi-green",
      action: "Connect Wallet First",
    },
    {
      id: 4,
      title: "Jägermeister Special",
      description: "Complete the branded quest challenge",
      icon: <Gift className="h-6 w-6 text-defi-orange" />,
      reward: "300 XP + Limited Edition Badge",
      level: "PARTNER",
      color: "bg-defi-orange",
      action: "Connect Wallet First",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Available Quests</h2>
        <Link href="/quests" className="text-defi-blue flex items-center text-sm group">
          View All <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  )
}

function QuestCard({ quest }: { quest: any }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-defi-blue/10 transition-all duration-300 hover:scale-[1.02]">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-md bg-slate-800/50">{quest.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-white">{quest.title}</h3>
                <p className="text-sm text-slate-400">{quest.description}</p>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-md ${quest.color} bg-opacity-20 text-${quest.color.split("-")[1]}`}
              >
                {quest.level}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-400">Reward:</p>
            <p className="text-sm text-white">{quest.reward}</p>
          </div>
          <Button
            className={quest.id === 1 ? "gradient-bg text-white" : "bg-slate-800 text-slate-400"}
            disabled={quest.id !== 1}
          >
            {quest.action}
          </Button>
        </div>
      </div>
    </div>
  )
}

function BadgesSection() {
  const badges = [
    { id: 1, name: "Beginner", color: "border-defi-blue", status: "Locked" },
    { id: 2, name: "Staker", color: "border-defi-purple", status: "Locked" },
    { id: 3, name: "LP Provider", color: "border-defi-green", status: "Locked" },
    { id: 4, name: "Jägermeister", color: "border-defi-orange", status: "Locked" },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">NFT Badges</h2>
        <Link href="/badges" className="text-defi-blue flex items-center text-sm group">
          View Collection <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>
    </section>
  )
}

function BadgeCard({ badge }: { badge: any }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-defi-blue/10 transition-all duration-300 hover:scale-[1.05]">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${badge.color} border-2 relative overflow-hidden group`}
      >
        <span className="text-2xl z-10 group-hover:scale-110 transition-transform">?</span>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/30 group-hover:opacity-0 transition-opacity"></div>
      </div>
      <h3 className="mt-3 font-medium text-white">{badge.name}</h3>
      <p className="text-sm text-slate-400">{badge.status}</p>
    </div>
  )
}

function GovernanceSection() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Governance</h2>
        <Link href="/governance" className="text-defi-blue flex items-center text-sm group">
          View Proposals <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <Card className="bg-slate-900/50 border-slate-800/50 shadow-lg">
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Active Proposal</h3>
              <p className="text-sm text-slate-400">New Quest Theme Selection</p>
            </div>
            <span className="text-xs bg-defi-blue/20 text-defi-blue px-3 py-1 rounded-full">Voting Open</span>
          </div>

          <div className="space-y-4 mt-4">
            <VoteOption name="DeFi Lending" percentage={45} color="bg-defi-blue" />
            <VoteOption name="NFT Trading" percentage={30} color="bg-defi-purple" />
            <VoteOption name="DAO Participation" percentage={25} color="bg-defi-green" />
          </div>

          <div className="flex justify-between items-center pt-2">
            <p className="text-sm text-slate-400">Ends in 2 days</p>
            <Button className="bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              Connect Wallet to Vote
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 text-center text-sm text-slate-400">
        Complete quests to earn governance power and have your say in the future of DeFi Quest.
      </div>
    </section>
  )
}

function VoteOption({ name, percentage, color }: { name: string; percentage: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-white">{name}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%`, animation: `growWidth 1.5s ease-out` }}
        ></div>
      </div>
    </div>
  )
}
