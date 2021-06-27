export const imgUrl = (url?: string) => {
  if (!url) return
  const formattedUrl = process.env.NEXT_PUBLIC_API_URL + url

  return formattedUrl
}
