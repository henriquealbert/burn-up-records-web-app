import { useMutation, useQuery } from 'react-query'
import axios from 'axios'

export const useUploadFileMutation = () => {
  const { data } = useQuery(
    `${process.env.NEXT_PUBLIC_API_URL}/api/upload-to-s3`
  )

  console.log(data)
  return useMutation((file: File) => {
    const formData = new FormData()
    formData.append('files', file)

    return axios.put('', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  })
}
