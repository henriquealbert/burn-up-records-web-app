import { useMutation } from 'react-query'
import { api } from 'graphql/generated/fetcher'
import { FileInput } from 'graphql/generated'
import { AxiosResponse } from 'axios'

export const useUploadFileMutation = () =>
  useMutation((file: File): Promise<ResponseTypes> => {
    const formData = new FormData()
    formData.append('files', file)

    return api(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formData)
  })

interface ResponseTypes extends AxiosResponse {
  data: FileTypes[]
}

interface FileTypes extends FileInput {
  id: number
  formats?: Formats
}

export type Formats = {
  small: Format
  thumbnail: Format
}

type Format = {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: null
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  size: number
  url: string
  width: number
}
