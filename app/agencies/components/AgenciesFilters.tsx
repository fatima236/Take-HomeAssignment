'use client';

import { Grid, TextField, MenuItem, Button, Box } from "@mui/material";
import { Agency } from "../hooks/useAgencies";

type Props = {
  agencies: Agency[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
  stateFilter: string;
  setStateFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function AgenciesFilters({
  agencies,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  stateFilter,
  setStateFilter
}: Props) {
  const uniqueTypes = Array.from(new Set(agencies.map(a => a.type)));
  const uniqueStates = Array.from(new Set(agencies.map(a => a.state_code)));
  const uniqueStatuses = Array.from(new Set(agencies.map(a => a.status)));

  return (
    <Box mb={4} p={3} bgcolor="background.paper" borderRadius={2} boxShadow={2}>
      <Grid container spacing={2}>
        <Grid component="div" sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 25%' } }}>
          <TextField
            fullWidth
            label="Rechercher"
            placeholder="Nom, comté, type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid component="div" sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 25%' } }}>
          <TextField
            select
            fullWidth
            label="Statut"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="all">Tous</MenuItem>
            {uniqueStatuses.map(s => (
              <MenuItem key={s} value={s}>
                {s === 'active' ? 'Actif' : 'Inactif'}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid component="div" sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 25%' } }}>
          <TextField
            select
            fullWidth
            label="Type"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <MenuItem value="all">Tous</MenuItem>
            {uniqueTypes.map(t => (
              <MenuItem key={t} value={t}>{t}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid component="div" sx={{ flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 25%' } }}>
          <TextField
            select
            fullWidth
            label="État"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
          >
            <MenuItem value="all">Tous</MenuItem>
            {uniqueStates.map(s => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid component="div" sx={{ display: 'flex', justifyContent: 'flex-end', flex: '1 1 100%' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
              setTypeFilter('all');
              setStateFilter('all');
            }}
          >
            Réinitialiser
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
