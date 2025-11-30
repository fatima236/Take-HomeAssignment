'use client';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

export type Stat = {
  label: string;
  value: string;
  color: string;
};

export type NavCard = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<typeof SvgIcon>>;
  href?: string;
  color: string;
};

export function useDashboardStats() {
  const stats: Stat[] = [
    { label: 'Agences disponibles', value: '250+', color: 'primary.main' },
    { label: 'Contacts journaliers', value: '50', color: 'success.main' },
    { label: 'Utilisateurs actifs', value: '1', color: 'secondary.main' },
  ];

  const navCards: NavCard[] = [
    {
      title: 'Agences',
      description: 'Consultez la liste complète des agences',
      icon: HomeIcon,
      href: '/agencies',
      color: 'primary.main',
    },
    {
      title: 'Contacts',
      description: 'Accédez aux contacts avec limite quotidienne',
      icon: PeopleIcon,
      href: '/contacts',
      color: 'success.main',
    },
    {
      title: 'Votre Compte',
      description: 'Gérez vos paramètres et préférences',
      icon: AccountCircleIcon,
      color: 'secondary.main',
    },
  ];

  return { stats, navCards };
}
