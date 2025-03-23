export const capitalize = (name) => {
  return name
    ?.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const shortUUID = () => {
  const randomPart = 'xxxxxx'
    .replace(/x/g, () => Math.floor(Math.random() * 36).toString(36))
    .toUpperCase()

  const now = new Date()
  const timestamp = now.toISOString().slice(0, 10).replace(/-/g, '')

  return `ORD-${timestamp}-${randomPart}`
}
