import { loadContacts, ParsedContact } from "../utils/parseCSV";

export default function useContacts(page: number) {
  const contactsPerPage = 10;

  const allContacts = loadContacts();

  const totalPages = Math.ceil(allContacts.length / contactsPerPage);

  const startIndex = (page - 1) * contactsPerPage;
  const endIndex = startIndex + contactsPerPage;

  const currentContacts: ParsedContact[] = allContacts.slice(startIndex, endIndex);

  return {
    contactsPerPage,
    allContacts,
    currentContacts,
    totalPages,
  };
}
