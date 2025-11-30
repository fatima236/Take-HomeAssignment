'use client';

import { useState } from "react";
import Navbar from "../Layout/Navbar";
import useAgencies from "./hooks/useAgencies";
import useFilters from "./hooks/useFilters";

import AgenciesHeader from "./components/AgenciesHeader";
import AgenciesFilters from "./components/AgenciesFilters";
import AgenciesTable from "./components/AgenciesTable";
import Pagination from "./components/Pagination";
import { Box } from "@mui/material";

export default function AgenciesPage() {
  const { agencies, loading } = useAgencies();
  const filters = useFilters(agencies);

  const {
    filteredAgencies,
    searchTerm,
    setSearchTerm,
    stateFilter,
    setStateFilter,
    typeFilter,
    setTypeFilter,
    statusFilter,
    setStatusFilter
  } = filters;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredAgencies.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredAgencies.length / itemsPerPage);

  if (loading) return <Box p={4}>Chargement...</Box>;

  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <Navbar />

      <Box sx={{ width: '100%', py: 4, px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <AgenciesHeader />

        <AgenciesFilters
          agencies={agencies}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          stateFilter={stateFilter}
          setStateFilter={setStateFilter}
        />

        <AgenciesTable agencies={currentItems} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Box>
  );
}
