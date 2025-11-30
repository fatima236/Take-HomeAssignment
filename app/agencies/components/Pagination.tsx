import { Box, Button } from "@mui/material";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const pages: number[] = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) pages.push(i);
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      mt={3}
      gap={{ xs: 0.5, sm: 1 }}
    >
      <Button
        size="small"
        variant="outlined"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        sx={{
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:disabled': {
            borderColor: 'grey.400',
            color: 'grey.400',
          },
        }}
      >
        Précédent
      </Button>

      {pages.map(num => (
        <Button
          key={num}
          size="small"
          variant={currentPage === num ? "contained" : "outlined"}
          color="primary"
          onClick={() => goToPage(num)}
          sx={{
            borderColor: 'primary.main',
            color: currentPage === num ? '#fff' : 'primary.main',
            minWidth: { xs: 32, sm: 40 },
          }}
        >
          {num}
        </Button>
      ))}

      <Button
        size="small"
        variant="outlined"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        sx={{
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:disabled': {
            borderColor: 'grey.400',
            color: 'grey.400',
          },
        }}
      >
        Suivant
      </Button>
    </Box>
  );
}
