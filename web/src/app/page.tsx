/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Clock,
  Github,
  GitBranch,
  GitPullRequest,
  Sparkle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/marketing/Navbar"
import { EmailSignupForm } from "@/components/marketing/EmailSignupForm"
import {
  FeatureCard,
  PricingCard,
  TimelineItem,
} from "@/components/marketing"

import { siteConfig } from "@/lib/siteConfig"

// SEO metadata for the landing page
export const metadata: Metadata = {
  title: `${siteConfig.name} – AI-Powered Developer Toolkit`,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords.join(", "),
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} – AI-Powered Developer Toolkit`,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – AI-Powered Developer Toolkit`,
    description: siteConfig.description,
    creator: siteConfig.seo.twitterHandle,
    images: ["/og.jpg"],
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- Navbar ----------------------------------------------------- */}
      <Navbar />

      {/* --- HERO ------------------------------------------------------- */}
      <section
        className="container mx-auto px-4 py-20 text-center"
        role="banner"
      >
        <h1 className="mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-5xl font-bold md:text-6xl">
          Ship Code&nbsp;Faster with&nbsp;AI
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground">
          {siteConfig.description}
        </p>

        {/* Primary CTAs */}
        <div className="mx-auto mb-12 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="px-8 py-4 text-lg" asChild>
            <Link href="/signup">
              <Github className="mr-2 h-5 w-5" />
              Start Free with GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg"
            asChild
          >
            <Link href="#pricing">View Pricing</Link>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mb-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            Save hours / week
          </div>
          <div className="flex items-center">
            <Sparkle className="mr-1 h-4 w-4" />
            Powered by GPT-4-o
          </div>
          <div className="flex items-center">
            <GitBranch className="mr-1 h-4 w-4" />
            Seamless GitHub flow
          </div>
        </div>
      </section>

      {/* --- FEATURES --------------------------------------------------- */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Why Developers Choose {siteConfig.name}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Everything you need to plan, build, and ship&nbsp;— in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Check className="h-12 w-12 text-green-600" />}
            title="Understand Your Codebase"
            description="Ask natural-language questions and get instant answers with full context."
            benefits={[
              "Code explanations",
              "Bug detection",
              "Auto-generated docs",
            ]}
          />
          <FeatureCard
            icon={<GitPullRequest className="h-12 w-12 text-yellow-600" />}
            title="Automate PRs"
            description="Generate branches & pull requests with tests, then review in-line."
            benefits={["Auto-created branches", "Suggested reviewers"]}
          />
          <FeatureCard
            icon={<Sparkle className="h-12 w-12 text-blue-600" />}
            title="Smart Suggestions"
            description="Performance, security, and style fixes tailored to your stack."
            benefits={[
              "Performance tuning",
              "Security linting",
              "Unit-test scaffolds",
            ]}
          />
        </div>
      </section>

      {/* --- HOW IT WORKS ---------------------------------------------- */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Get Started in Minutes</h2>
          <p className="text-xl text-muted-foreground">
            Zero-config onboarding & immediate productivity gains.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <ol className="relative space-y-8 border-l border-border">
            <TimelineItem number={1} title="Connect GitHub" time="30 sec">
              One-click OAuth; we begin with read-only permissions.
            </TimelineItem>
            <TimelineItem number={2} title="AI Indexing" time="≈2 min">
              Your repositories are tokenized & understood semantically.
            </TimelineItem>
            <TimelineItem number={3} title="Chat & Build" time="Now">
              Ask questions, request features, fix bugs — in natural language.
            </TimelineItem>
            <TimelineItem number={4} title="Merge & Ship" time="Instant">
              Review diff, then auto-merge with status checks.
            </TimelineItem>
          </ol>

          {/* Sidebar CTA */}
          <div className="rounded-lg border bg-card p-6">
            <div className="text-center">
              <div className="mb-4 text-6xl">⚡</div>
              <h3 className="mb-2 text-2xl font-bold">
                Ready to Boost Productivity?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Join devs already shipping faster.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/signup?plan=trial">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING ---------------------------------------------------- */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Start free, upgrade when you’re ready. Cancel anytime.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {siteConfig.pricing.map((plan) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </section>

      {/* --- FINAL CTA -------------------------------------------------- */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-blue-600/10 p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Start your free trial today — cancel anytime.
          </p>

          <div className="mx-auto mb-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="px-8 py-4 text-lg" asChild>
              <Link href="/signup?plan=trial">
                <Github className="mr-2 h-5 w-5" />
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <EmailSignupForm />
          </div>

          <div className="text-sm text-muted-foreground">
            ✅ 14-day free trial • No credit card required
          </div>
        </div>
      </section>

      {/* --- FOOTER ----------------------------------------------------- */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs">Docs</Link>
              </li>
              <li>
                <Link href="mailto:support@yourproduct.dev">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </footer>
    </div>
  )
}
