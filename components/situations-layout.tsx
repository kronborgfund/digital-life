"use client"


export function SituationsLayout({ children }: { children: React.ReactNode }) {



  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Lenes IT</h1>

        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-muted text-muted-foreground p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lenes IT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}