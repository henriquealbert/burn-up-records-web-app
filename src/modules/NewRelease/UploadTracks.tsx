import * as Yup from 'yup'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'

import { Input, Select, Tooltip } from 'components'

import { genreData } from './genreData'

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
      {({
        isSubmitting,
        setFieldValue,
        isValid,
        values
      }: FormikProps<Values>) => (
        <SimpleGrid
          columns={2}
          spacingX={40}
          as={Form}
          w="full"
          h="full"
          autoComplete="off"
        >
          <Box>
            <Input label="Nome da música" name="name" type="text" mb={8} />

            <Select
              label="Nome da versão"
              name="mix_name"
              placeholder="Selecione uma opção..."
              options={[
                { value: 'Original Mix', label: 'Original Mix' },
                { value: 'Extended Mix', label: 'Extended Mix' },
                { value: 'Radio Edit', label: 'Radio Edit' },
                { value: 'Club Mix', label: 'Club Mix' },
                { value: 'Remix', label: 'Remix' }
              ]}
            />
          </Box>
          <Box>
            <Input label="Artista(s)" name="track_artist" type="text" mb={8} />
            <Input
              isDisabled={values.mix_name !== 'Remix'}
              label="Remix(ers)"
              name="remixer_name"
              type="text"
              mb={8}
              labelTooltip={
                <Tooltip
                  content={
                    values.mix_name !== 'Remix'
                      ? `Para habilitar, selecione o nome da versão como "Remix".`
                      : 'Adicionar o nome dos artistas separado por vírgula.'
                  }
                />
              }
            />
            <Select
              label="Gênero"
              name="genre"
              placeholder="Selecione um gênero..."
              options={genreData}
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
