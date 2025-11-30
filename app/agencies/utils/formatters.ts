export const formatNumber = (num: string | null) => {
  if (!num) return 'N/A';
  return parseInt(num).toLocaleString();
};
