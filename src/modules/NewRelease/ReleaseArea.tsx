import * as Yup from 'yup'
import { Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'

import {
  Input,
  Datepicker,
  UploadImage,
  Textarea,
  Radio,
  Tooltip
} from 'components'
import { Enum_Release_Type } from 'graphql/generated'

export const ReleaseArea = () => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        date: null,
        type: Enum_Release_Type.Single,
        description: '',
        artwork: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange
      enableReinitialize
    >
      {({ isSubmitting, setFieldValue }: FormikProps<Values>) => (
        <Flex direction="column" as={Form} w="full" h="full" autoComplete="off">
          <SimpleGrid columns={2}>
            <Box maxW="600px">
              <Input
                label="Qual o nome deste lançamento?"
                name="name"
                type="text"
                mb={4}
              />

              <Datepicker
                name="date"
                label="Quando deseja lançar?"
                maxW="fit-content"
                mb={6}
                labelTooltip={
                  <Tooltip
                    content="Escolha uma data com no mínimo 40 dias a partir da data atual."
                    bgColor="brand.secondary.2"
                  />
                }
              />

              <Radio name="type" options={radioOptions} label="Tipo:" mb={6} />

              <Textarea name="description" label="Descrição:" rows={4} />
            </Box>

            <Flex direction="column" alignItems="center">
              <UploadImage
                label="Arte lançamento:"
                name="artwork"
                text="Fazer Upload de Arte"
                accept=".jpg"
                onUpload={(value) => setFieldValue('artwork', value)}
                labelTooltip={
                  <Tooltip
                    content="A imagem deve ser tamanho 3000x3000 pixels, formato JPG."
                    bgColor="brand.secondary.2"
                  />
                }
              />
            </Flex>
          </SimpleGrid>

          <Flex justify="flex-end" mt="auto">
            <Button type="submit" variant="secondary" isLoading={isSubmitting}>
              Salvar e continuar
            </Button>
          </Flex>
        </Flex>
      )}
    </Formik>
  )
}

const radioOptions = [
  { value: Enum_Release_Type.Single, label: 'Single' },
  { value: Enum_Release_Type.Ep, label: 'EP' },
  { value: Enum_Release_Type.Album, label: 'Álbum' }
]

type Values = {
  name: string
  date: Date
  type: Enum_Release_Type
  description: string
  artwork: string
}

const validationSchema = Yup.object({
  artist_name: Yup.string().required('Obrigatório.'),
  artist_name_confirmation: Yup.string().oneOf(
    [Yup.ref('artist_name'), null],
    'Nomes devem ser iguais.'
  )
})
