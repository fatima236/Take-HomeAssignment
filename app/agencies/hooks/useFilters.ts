import { useState, useMemo } from 'react';
import { Agency } from './useAgencies';

export default function useFilters(agencies: Agency[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [stateFilter, setStateFilter] = useState('all');

  const filteredAgencies = useMemo(() => {
    let result = agencies;

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(a =>
        a.name.toLowerCase().includes(lower) ||
        a.county.toLowerCase().includes(lower) ||
        a.type.toLowerCase().includes(lower)
      );
    }

    if (statusFilter !== 'all') {
      result = result.filter(a => a.status === statusFilter);
    }

    if (typeFilter !== 'all') {
      result = result.filter(a => a.type === typeFilter);
    }

    if (stateFilter !== 'all') {
      result = result.filter(a => a.state_code === stateFilter);
    }

    return result;
  }, [agencies, searchTerm, statusFilter, typeFilter, stateFilter]);

  return {
    filteredAgencies,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    typeFilter,
    setTypeFilter,
    stateFilter,
    setStateFilter,
  };
}
