import * as Yup from 'yup'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'

import { Input, Select } from 'components'

export const UploadTracks = ({ onSubmit }) => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    onSubmit && onSubmit(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        mix_name: '',
        track_artist: '',
        remixer_name: '',
        genre: '',
        url: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange
      enableReinitialize
      validateOnMount
    >
      {({ isSubmitting, setFieldValue, isValid }: FormikProps<Values>) => (
        <SimpleGrid
          columns={2}
          spacingX={40}
          as={Form}
          w="full"
          h="full"
          autoComplete="off"
        >
          <Box>
            <Input label="Título da música" name="name" type="text" mb={8} />

            <Select label="Nome da versão" name="mix_name" />
          </Box>
          <Box>
            <Input label="Artista(s)" name="track_artist" type="text" mb={8} />
            <Input
              label="Artista Remix"
              name="remixer_name"
              type="text"
              mb={8}
            />
          </Box>
        </SimpleGrid>
      )}
    </Formik>
  )
}

type Values = {
  name: string
  mix_name: string
  track_artist: string
  remixer_name: string
  genre: string
  url: string
}

const validationSchema = Yup.object({
  name: Yup.string().required('Obrigatório.'),
  mix_name: Yup.string().required('Obrigatório.')
})
