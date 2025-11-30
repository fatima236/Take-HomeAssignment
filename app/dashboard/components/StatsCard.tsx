'use client';
import { Card, Typography, Box } from "@mui/material";

type Props = {
  label: string;
  value: string;
  color: string;
};

export default function StatsCard({ label, value, color }: Props) {
  return (
    <Card 
      sx={{ 
        borderRadius: 2, 
        p: 3, 
        height: '100%',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'grey.200',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        }
      }} 
      variant="outlined"
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: color,
            mr: 1.5,
          }}
        />
        <Typography variant="body2" color="text.secondary" fontWeight="500">
          {label}
        </Typography>
      </Box>
      <Typography variant="h4" fontWeight="bold" color="text.primary">
        {value}
      </Typography>
    </Card>
  );
}