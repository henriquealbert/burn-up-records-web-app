import { useState } from 'react'

export const useUploadFile = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const uploadFile = async ({ file, onSuccess }) => {
    try {
      setData(null)
      setLoading(true)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload-to-s3`
      )
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

      setLoading(false)
      setData(imageUrl)

      onSuccess(imageUrl)
    } catch (err) {
      setData(null)
      setLoading(false)
      alert(err)
    }
  }

  return {
    isLoading,
    uploadFile,
    data
  }
}
