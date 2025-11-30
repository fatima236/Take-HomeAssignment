'use client';

import { useEffect, useState } from 'react';

export type Agency = {
  id: string;
  name: string;
  state: string;
  state_code: string;
  type: string;
  population: string;
  website: string;
  total_schools: string;
  total_students: string;
  mailing_address: string;
  grade_span: string;
  locale: string;
  csa_cbsa: string;
  domain_name: string;
  physical_address: string;
  phone: string;
  status: string;
  student_teacher_ratio: string;
  supervisory_union: string;
  county: string;
  created_at: string;
  updated_at: string;
};

export default function useAgencies() {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/agencies');
        const data = await response.json();
        setAgencies(data);
      } catch (e) {
        console.error('Erreur chargement agences:', e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { agencies, loading };
}
