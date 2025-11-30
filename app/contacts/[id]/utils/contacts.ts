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

const userLimits = new Map<string, number>();

export function getUserDailyLimit(userId: string): number {
  const today = new Date().toDateString();
  const key = `${userId}-${today}`;
  if (!userLimits.has(key)) userLimits.set(key, 0);
  return userLimits.get(key)!;
}

export function incrementUserDailyLimit(userId: string): number {
  const today = new Date().toDateString();
  const key = `${userId}-${today}`;
  const current = getUserDailyLimit(userId);
  userLimits.set(key, current + 1);
  return current + 1;
}

export function getContactById(id: string): ParsedContact | null {
  const filePath = path.join(process.cwd(), "data", "contacts_contact_rows.csv");
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse<ParsedContact>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data.find(c => c.id === id) || null;
}
