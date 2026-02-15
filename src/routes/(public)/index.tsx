import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Wallet, TrendingUp, PieChart } from 'lucide-react'

export const Route = createFileRoute('/(public)/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  const features = [
    {
      icon: Wallet,
      title: 'Smart Wallet',
      description: 'Manage all your accounts in one place with real-time updates',
    },
    {
      icon: TrendingUp,
      title: 'Budget Tracking',
      description: 'Track your spending and set budgets that work for you',
    },
    {
      icon: PieChart,
      title: 'Insights & Analytics',
      description: 'Get detailed reports on where your money goes',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-secondary/20">
      {/* Navigation Bar */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-pop-bold text-primary">FinMate</div>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate({ to: '/auth/login' })}>
              Login
            </Button>
            <Button
              onClick={() => navigate({ to: '/auth/signup' })}
              className="bg-primary hover:bg-primary/90"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-pop-bold text-foreground leading-tight">
                Manage Your Money with <span className="text-primary">Confidence</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                FinMate helps you track spending, manage budgets, and understand your financial
                habits with simple, powerful tools.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/auth/signup' })}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/auth/login' })}>
                Sign In
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border">
            <div className="text-center">
              <Wallet className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">Your Financial Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-pop-bold text-foreground mb-4">Why Choose FinMate?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with simplicity and power in mind to help you take control of your finances
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-pop-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-r from-primary/5 to-accent/5 border border-border rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-pop-bold text-foreground mb-4">Ready to Take Control?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances smarter with FinMate
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: '/auth/signup' })}
            className="bg-primary hover:bg-primary/90"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-muted-foreground">
            <p>© 2026 FinMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
