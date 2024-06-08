export function DateCell({ date }: { date: Date }) {
  return `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`;
}
