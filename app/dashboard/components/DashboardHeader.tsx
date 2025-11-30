'use client';
import { Typography, Box } from "@mui/material";

export default function DashboardHeader() {
  return (
    <Box mb={4} textAlign="center">
      <Typography 
        variant="h3" 
        fontWeight="bold" 
        color="text.primary"
        gutterBottom
      >
        Tableau de Bord
      </Typography>
      <Typography 
        variant="h6" 
        color="text.secondary" 
        sx={{ opacity: 0.8 }}
      >
        Gérez et consultez vos agences et contacts
      </Typography>
    </Box>
  );
}