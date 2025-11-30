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

export default function getContacts(currentPage: number) {
  const contactsPerPage = 10;

  const filePath = path.join(process.cwd(), "data", "contacts_contact_rows.csv");
  let allContacts: ParsedContact[] = [];

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const parsed = Papa.parse<ParsedContact>(fileContent, {
      header: true,
      skipEmptyLines: true,
    });
    allContacts = parsed.data;
  }

  const totalPages = Math.ceil(allContacts.length / contactsPerPage);
  const startIndex = (currentPage - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;
  const currentContacts = allContacts.slice(startIndex, endIndex);

  return { allContacts, currentContacts, totalPages, contactsPerPage };
}
