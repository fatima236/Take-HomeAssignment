import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

type Agency = {
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

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "agencies_agency_rows.csv");
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Fichier non trouvé' }, { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsed = Papa.parse<Agency>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    return NextResponse.json(parsed.data);
  } catch (error) {
    console.error('Erreur API agencies:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}