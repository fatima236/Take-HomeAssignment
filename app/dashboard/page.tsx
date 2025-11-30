'use client';

import Navbar from '../Layout/Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StatsCard from './components/StatsCard';
import NavCard from './components/NavCard';
import DashboardHeader from './components/DashboardHeader';
import { useDashboardStats } from './hooks/useDashboardStats';

export default function DashboardPage() {
  const { stats, navCards } = useDashboardStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <DashboardHeader />

        <Grid container spacing={3} mb={4}>
          {stats.map((stat) => (
            <Grid
              component="div"
              key={stat.label}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 33.33%' },
              }}
            >
              <StatsCard {...stat} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {navCards.map((card) => (
            <Grid
              component="div"
              key={card.title}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 33.33%' },
              }}
            >
              <NavCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}