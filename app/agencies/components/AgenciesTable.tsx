import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";
import { Agency } from "../hooks/useAgencies";
import { formatNumber } from "../utils/formatters";

type Props = {
  agencies: Agency[];
};

export default function AgenciesTable({ agencies }: Props) {
  return (
    <TableContainer component={Paper} sx={{ mb: 4 }}>
      <Table>
        <TableHead sx={{ bgcolor: 'grey.100' }}>
          <TableRow>
            {["Nom", "État", "Type", "Population", "Comté", "Statut"].map(col => (
              <TableCell key={col} sx={{ fontWeight: 'bold' }}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {agencies.map(a => (
            <TableRow key={a.id} hover>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.state_code}</TableCell>
              <TableCell>{a.type}</TableCell>
              <TableCell>{formatNumber(a.population)}</TableCell>
              <TableCell>{a.county}</TableCell>
              <TableCell>
                {a.status === 'active' ? (
                  <Chip label="Actif" color="success" size="small" />
                ) : (
                  <Chip label="Inactif" color="error" size="small" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
