export const imgUrl = (url: string) => {
  const formattedUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`

  return formattedUrl
}
