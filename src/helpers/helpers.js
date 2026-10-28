export function truncate(str, maxLength) {
  if (!str) return "";
  return str.length > maxLength ? `${str.slice(0, maxLength - 3)}...` : str;
}
