export function LoadingState() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-slate-700 border-t-defi-blue animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-defi-blue">Loading</span>
        </div>
      </div>
    </div>
  )
}
