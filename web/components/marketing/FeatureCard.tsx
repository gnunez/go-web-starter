import React from "react";
import { Check } from "lucide-react";
import { Icon } from "../ui/icon";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-muted-foreground mb-6 text-center">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}