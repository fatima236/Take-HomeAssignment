import { Box, Typography } from "@mui/material";

export default function AgenciesHeader() {
  return (
    <Box mb={4}>
      <Typography variant="h4" fontWeight="bold" color="primary">
        Agences
      </Typography>
      <Typography variant="body1" color="textSecondary" mt={1}>
        Liste complète des agences disponibles dans notre base de données.
      </Typography>
    </Box>
  );
}
