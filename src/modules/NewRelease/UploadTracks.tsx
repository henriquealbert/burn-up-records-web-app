import * as Yup from 'yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from 'auth'
import { TrackForm } from './TrackForm'

export const UploadTracks = ({ onSubmit, isLoading }: Props) => {
  const { me } = useAuth()
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isValid }
  } = useForm<TracksValues>({
    defaultValues: {
      tracks: [
        {
          genre: '',
          mix_name: '',
          name: '',
          remixer_name: '',
          track_artist: me?.name,
          url: ''
        }
      ]
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  useEffect(() => {
    reset({ tracks: [{ track_artist: me?.name }] })
  }, [me?.name, reset])

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))} autoComplete="off">
      <TrackForm {...{ control, watch, isValid, isLoading }} />
    </form>
  )
}

export type TracksValues = {
  tracks: TrackValues[]
}

export type TrackValues = {
  name: string
  mix_name: string
  track_artist: string
  remixer_name: string
  genre: string
  url: string
}

const validationSchema = Yup.object({
  tracks: Yup.array().of(
    Yup.object({
      name: Yup.string().required('Obrigatório.'),
      mix_name: Yup.string().required('Obrigatório.'),
      track_artist: Yup.string().required('Obrigatório.'),
      remixer_name: Yup.string().when('mix_name', {
        is: (val) => val === 'Remix',
        then: Yup.string().required('Obrigatório.')
      }),
      genre: Yup.string().required('Obrigatório.'),
      url: Yup.string().required('Obrigatório.')
    })
  )
})

type Props = {
  onSubmit: (data: TracksValues) => void
  isLoading: boolean
}
