import { FEATURES, Feature } from '../utils/constants';

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {FEATURES.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
}

// Typage de la prop feature
type FeatureCardProps = {
  feature: Feature;
};

// Composant FeatureCard
function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
