import React from "react"
import { Check } from "lucide-react"

/**
 * Re-usable marketing component that renders a single product feature card.
 *
 * Props:
 *  - icon:    JSX.Element – any Lucide (or custom) icon passed from the caller
 *  - title:   string       – short, punchy heading for the feature
 *  - description: string   – supporting copy that explains the value prop
 *  - benefits: string[]    – bullet list of concrete benefits
 *
 * Tailwind classes keep the design consistent with the rest of the landing page
 * (rounded corners, border & hover shadow). You can tweak any styling globally
 * via your Tailwind theme without touching this component.
 */
export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => {
  return (
    <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-muted-foreground mb-6 text-center">{description}</p>

      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center text-sm">
            <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}

FeatureCard.displayName = "FeatureCard";
