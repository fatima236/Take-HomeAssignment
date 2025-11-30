export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: '👥',
    title: 'Gestion des Contacts',
    description: 'Accédez à votre réseau avec une limite intelligente de 50 contacts par jour',
  },
  {
    icon: '📊',
    title: 'Analytiques Avancées',
    description: 'Suivez les performances de vos agences avec des tableaux de bord détaillés',
  },
  {
    icon: '🔒',
    title: 'Sécurité Maximale',
    description: 'Authentification sécurisée avec Clerk pour protéger vos données',
  },
];

export const ANIMATION_STYLES = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
