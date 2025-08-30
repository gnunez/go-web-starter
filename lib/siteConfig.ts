// lib/siteConfig.ts
export const siteConfig = {
  name: "YourProduct",
  domain: "yourproduct.dev",
  description:
    "AI-powered tool that helps developers ship better code, faster.",
  seo: {
    keywords: [
      "AI code assistant",
      "developer productivity",
      "automation",
      "code review",
    ],
    twitterHandle: "@yourproduct",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "/blog" },
  ],
  pricing: [
    {
      title: "Free",
      price: "$0",
      period: "",
      description: "Great for personal projects",
      features: [
        "1 project",
        "Community support",
        "Basic analytics",
        "Limited API access",
        "Public repositories only",
      ],
      cta: { label: "Start for Free", href: "/signup" },
    },
    {
      title: "Pro",
      price: "$19",
      period: "mo",
      description: "For growing teams",
      features: [
        "Unlimited projects",
        "Priority e-mail support",
        "Advanced analytics",
        "Full API access",
        "Private repositories",
        "Team collaboration tools",
      ],
      popular: true,
      badge: "Most Popular",
      cta: { label: "Start Pro Trial", href: "/signup?plan=pro" },
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored to large orgs",
      features: [
        "SAML/SSO",
        "On-prem options",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Advanced security features",
        "Audit logs",
      ],
      cta: { label: "Contact Sales", href: "mailto:sales@yourproduct.dev" },
    },
  ],
}