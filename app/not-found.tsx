import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-defi-dark">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-medium text-white">Page Not Found</h2>
        <p className="text-slate-400 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild className="gradient-bg text-white mt-4">
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}
