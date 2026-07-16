import { Bar, Circle } from './Primitives'

export function TopNavSkeleton() {
  return (
    <header className="flex h-[var(--navbar-height)] items-center justify-between border-b border-[var(--color-border)] bg-navbar px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <Circle className="h-7 w-7" />
        <Bar className="hidden h-4 w-28 sm:block" />
      </div>
      <Bar className="hidden h-9 w-80 max-w-[40vw] rounded-full md:block" />
      <div className="flex items-center gap-3 sm:gap-4">
        <Bar className="hidden h-5 w-14 rounded-md lg:block" />
        <Bar className="hidden h-5 w-16 rounded-md lg:block" />
        <Circle className="h-5 w-5" />
        <Circle className="h-5 w-5" />
        <Circle className="h-8 w-8" />
      </div>
    </header>
  )
}

const NAV_ROWS = 9

export function SidebarSkeleton({ className = '' }) {
  return (
    <aside
      className={`hidden shrink-0 flex-col gap-1 border-r border-[var(--color-border)] bg-sidebar px-3 py-5 lg:flex lg:w-[var(--dashboard-sidebar-width)] ${className}`}
    >
      <Bar className="mb-4 h-3 w-24" />
      {Array.from({ length: NAV_ROWS }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2.5">
          <Circle className="h-4 w-4 shrink-0" />
          <Bar className="h-3 w-[70%]" />
        </div>
      ))}
      <div className="mt-auto space-y-2 rounded-xl border border-[var(--color-border)] p-4">
        <Bar className="h-3 w-2/3" />
        <Bar className="h-2.5 w-full" />
        <Bar className="h-2.5 w-4/5" />
        <Bar className="mt-2 h-8 w-full rounded-lg" />
      </div>
    </aside>
  )
}

export function BottomTabBarSkeleton() {
  return (
    <nav className="flex items-center justify-around border-t border-[var(--color-border)] bg-navbar px-4 py-3 lg:hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <Circle className="h-5 w-5" />
          <Bar className="h-2 w-8" />
        </div>
      ))}
      <Circle className="h-11 w-11" />
    </nav>
  )
}

/**
 * Shared authenticated-app shell: top nav + sidebar (desktop, lg+) + bottom
 * tab bar (mobile/tablet, below lg). Every dashboard-style page skeleton
 * (home, market, user dashboard, creator dashboard, profile) is built on
 * this so the responsive behavior stays identical across all of them.
 */
export function AppShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNavSkeleton />
      <div className="flex flex-1">
        <SidebarSkeleton />
        <main className="min-w-0 flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-10">
          {children}
        </main>
      </div>
      <div className="border-t border-[var(--color-border)] lg:hidden">
        <BottomTabBarSkeleton />
      </div>
    </div>
  )
}
