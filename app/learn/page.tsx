import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Learn DeFi</h1>
              <p className="text-slate-400">
                Explore educational resources to understand decentralized finance concepts and applications.
              </p>
            </div>

            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="bg-slate-800 border border-slate-700 p-1">
                <TabsTrigger
                  value="courses"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Courses
                </TabsTrigger>
                <TabsTrigger
                  value="articles"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Articles
                </TabsTrigger>
                <TabsTrigger value="videos" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CourseCard
                    title="DeFi Fundamentals"
                    description="Learn the basics of decentralized finance and how it's changing the financial landscape."
                    lessons={5}
                    duration="2 hours"
                    level="Beginner"
                    color="bg-defi-blue"
                  />
                  <CourseCard
                    title="Staking & Yield Farming"
                    description="Understand how to stake tokens and participate in yield farming protocols."
                    lessons={4}
                    duration="1.5 hours"
                    level="Intermediate"
                    color="bg-defi-purple"
                  />
                  <CourseCard
                    title="Liquidity Pools Explained"
                    description="Deep dive into how liquidity pools work and how to provide liquidity to DeFi protocols."
                    lessons={6}
                    duration="2.5 hours"
                    level="Intermediate"
                    color="bg-defi-green"
                  />
                  <CourseCard
                    title="DeFi Security Best Practices"
                    description="Learn how to protect your assets and use DeFi protocols safely."
                    lessons={3}
                    duration="1 hour"
                    level="All Levels"
                    color="bg-defi-orange"
                  />
                </div>
              </TabsContent>

              <TabsContent value="articles" className="mt-4">
                <div className="space-y-4">
                  <ArticleCard
                    title="What is DeFi and Why Does it Matter?"
                    description="An introduction to decentralized finance and its potential impact on traditional financial systems."
                    date="May 10, 2025"
                    readTime="5 min read"
                  />
                  <ArticleCard
                    title="Understanding Smart Contracts"
                    description="A beginner's guide to smart contracts and how they power DeFi applications."
                    date="May 5, 2025"
                    readTime="8 min read"
                  />
                  <ArticleCard
                    title="Top 5 DeFi Protocols on Solana"
                    description="Explore the leading DeFi protocols in the Solana ecosystem and their unique features."
                    date="April 28, 2025"
                    readTime="10 min read"
                  />
                  <ArticleCard
                    title="How to Evaluate DeFi Projects"
                    description="Learn the key metrics and factors to consider when evaluating DeFi projects for investment."
                    date="April 20, 2025"
                    readTime="12 min read"
                  />
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <VideoCard
                    title="DeFi Explained in 5 Minutes"
                    thumbnail="/placeholder.svg?height=200&width=400"
                    duration="5:23"
                  />
                  <VideoCard
                    title="How to Use a DEX on Solana"
                    thumbnail="/placeholder.svg?height=200&width=400"
                    duration="8:47"
                  />
                  <VideoCard
                    title="Yield Farming Strategies"
                    thumbnail="/placeholder.svg?height=200&width=400"
                    duration="12:15"
                  />
                  <VideoCard
                    title="NFTs in DeFi: New Opportunities"
                    thumbnail="/placeholder.svg?height=200&width=400"
                    duration="10:32"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

function CourseCard({
  title,
  description,
  lessons,
  duration,
  level,
  color,
}: {
  title: string
  description: string
  lessons: number
  duration: string
  level: string
  color: string
}) {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-md ${color} bg-opacity-20`}>
            <BookOpen className={`h-6 w-6 ${color.replace("bg-", "text-")}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-white text-lg">{title}</h3>
            <p className="text-sm text-slate-400 mt-1">{description}</p>

            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center text-xs text-slate-400">
                <BookOpen className="h-3.5 w-3.5 mr-1" />
                {lessons} Lessons
              </div>
              <div className="flex items-center text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5 mr-1" />
                {duration}
              </div>
              <div
                className={`text-xs px-2 py-0.5 rounded-full ${color} bg-opacity-20 ${color.replace("bg-", "text-")}`}
              >
                {level}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
              <div className="text-sm text-slate-400">Free with wallet connection</div>
              <Button className="gradient-bg text-white">Start Learning</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ArticleCard({
  title,
  description,
  date,
  readTime,
}: {
  title: string
  description: string
  date: string
  readTime: string
}) {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300 hover:scale-[1.01]">
      <CardContent className="p-6">
        <Link href="#" className="block group">
          <h3 className="font-medium text-white text-lg group-hover:text-defi-blue transition-colors">{title}</h3>
          <p className="text-sm text-slate-400 mt-1">{description}</p>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800">
            <div className="flex items-center text-xs text-slate-400">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
            <span className="text-defi-blue flex items-center text-sm group-hover:translate-x-1 transition-transform">
              Read <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

function VideoCard({
  title,
  thumbnail,
  duration,
}: {
  title: string
  thumbnail: string
  duration: string
}) {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="relative group">
          <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-defi-blue/80 flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-white">{title}</h3>
          <Button variant="link" className="text-defi-blue p-0 h-auto mt-2">
            Watch Now <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
