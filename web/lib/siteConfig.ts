// Site configuration - edit this file to customize your landing page
export const siteConfig = {
  name: "GoWebStarter",
  domain: "gowebstarter.dev",
  description:
    "A modern Go and Next.js starter template for building fast, production-ready web applications.",
  seo: {
    keywords: [
      "Go",
      "Golang",
      "Next.js",
      "React",
      "TypeScript",
      "Web Development",
      "Starter Kit",
      "Template",
    ],
    twitterHandle: "@gowebstarter",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "GitHub", href: "https://github.com/yourusername/go-web-starter" },
  ],
  pricing: [
    {
      title: "Free",
      price: "$0",
      period: "",
      description: "Great for personal projects",
      features: [
        "Go API backend",
        "Next.js frontend",
        "TypeScript support",
        "Tailwind CSS styling",
        "Docker configuration",
        "Community support",
      ],
      cta: { label: "Start for Free", href: "https://github.com/yourusername/go-web-starter" },
    },
    {
      title: "Pro",
      price: "$19",
      period: "mo",
      description: "For growing teams",
      features: [
        "Everything in Free",
        "Priority e-mail support",
        "Premium components",
        "Advanced analytics",
        "Team collaboration",
        "Custom branding",
      ],
      popular: true,
      badge: "Most Popular",
      cta: { label: "Start Pro", href: "/signup?plan=pro" },
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored to large organizations",
      features: [
        "Everything in Pro",
        "SAML/SSO integration",
        "On-premise deployment",
        "Custom development",
        "SLA guarantees",
        "Dedicated support",
      ],
      cta: { label: "Contact Sales", href: "mailto:sales@gowebstarter.dev" },
    },
  ],
  features: [
    {
      title: "Go Backend",
      description: "Built with a performant Go API that handles routing, middleware, and more.",
      benefits: [
        "Fast and efficient",
        "Strongly typed",
        "Concurrent by design",
      ],
      icon: "Server",
    },
    {
      title: "Next.js Frontend",
      description: "Modern React framework with TypeScript and Tailwind CSS for rapid UI development.",
      benefits: [
        "Static site generation",
        "TypeScript support",
        "Component library",
      ],
      icon: "LayoutTemplate",
    },
    {
      title: "Developer Experience",
      description: "Optimized workflow with hot reloading, testing tools, and deployment scripts.",
      benefits: [
        "Fast refresh",
        "Docker integration",
        "CI/CD ready",
      ],
      icon: "Code",
    }
  ],
  howItWorks: [
    {
      title: "Clone Repository",
      time: "1 min",
      description: "Get started by cloning the repository to your local machine."
    },
    {
      title: "Install Dependencies",
      time: "2 min",
      description: "Run the setup script to install Go and Node.js dependencies."
    },
    {
      title: "Configure & Customize",
      time: "5 min",
      description: "Edit the configuration files to match your project requirements."
    },
    {
      title: "Build & Deploy",
      time: "2 min",
      description: "Use the included Makefile to build and deploy your application."
    },
  ]
}