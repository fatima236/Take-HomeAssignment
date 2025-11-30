import fs from "fs";
import path from "path";
import Papa from "papaparse";

export type ParsedContact = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  title: string;
  department: string;
};

export function loadContacts(): ParsedContact[] {
  const filePath = path.join(process.cwd(), "data", "contacts_contact_rows.csv");

  if (!fs.existsSync(filePath)) return [];

  const fileContent = fs.readFileSync(filePath, "utf8");

  const parsed = Papa.parse<ParsedContact>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}
