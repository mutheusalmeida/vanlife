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
  const formatOptions = options || {
    style: 'currency',
    maximumFractionDigits: 2,
    currency: 'USD',
  }

  return Intl.NumberFormat('en', formatOptions).format(value)
}
