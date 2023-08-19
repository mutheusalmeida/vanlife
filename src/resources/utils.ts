export function slugfy(value: string) {
  return value
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export function formatCurrency(
  value: number,
  options?: Intl.NumberFormatOptions
) {
  const formatOptions = {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'USD',
    ...options,
  }

  return Intl.NumberFormat('en', formatOptions).format(value)
}

export function getMonth(month: number) {
  const date = new Date()
  date.setMonth(month - 1)

  return date.toLocaleString('en-US', { month: 'short' })
}
