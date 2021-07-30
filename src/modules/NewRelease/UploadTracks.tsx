import * as Yup from 'yup'
import {
  Formik,
  FormikHelpers,
  FieldArray,
  FieldArrayRenderProps
} from 'formik'

import { TrackForm } from './TrackForm'

export const UploadTracks = ({ onSubmit }) => {
  const handleSubmit = async (
    values: TracksValues,
    { setSubmitting }: FormikHelpers<TracksValues>
  ) => {
    console.log(values)
    // onSubmit && onSubmit(values)
    // setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        tracks: [
          {
            id: Math.random(),
            name: '',
            mix_name: '',
            track_artist: '',
            remixer_name: '',
            genre: '',
            url: ''
          }
        ]
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
      validateOnMount
      render={() => (
        <FieldArray name="tracks">
          {({ remove, push, form: { values, isValid } }) => (
            <TrackForm {...{ values, remove, push, isValid }} />
          )}
        </FieldArray>
      )}
    />
  )
}

export type TracksValues = {
  tracks: Array<{
    id: number
    name: string
    mix_name: string
    track_artist: string
    remixer_name: string
    genre: string
    url: string
  }>
}

const validationSchema = Yup.object({
  tracks: Yup.array().of(
    Yup.object({
      name: Yup.string().required(),
      mix_name: Yup.string().required(),
      track_artist: Yup.string().required(),
      remixer_name: Yup.string(),
      genre: Yup.string().required(),
      url: Yup.string().required()
    })
  )
})
