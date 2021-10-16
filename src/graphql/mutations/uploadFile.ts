export const uploadFile = async ({ file }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload-to-s3`)
  const { url } = await res.json()

  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: file
  })
  const s3ImageId = url.split('?')[0].split('/').pop()
  const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${s3ImageId}`

  return imageUrl
}
