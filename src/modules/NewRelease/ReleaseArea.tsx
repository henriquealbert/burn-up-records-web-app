import * as Yup from 'yup'
import { Flex, Box, Button } from '@chakra-ui/react'
import { Formik, Form, FormikProps, FormikHelpers } from 'formik'

import { FormikInput, Datepicker } from 'components'

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
      initialValues={{ artist_name: '', artist_name_confirmation: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange
      enableReinitialize
    >
      {({ isSubmitting }: FormikProps<Values>) => (
        <Box as={Form} w="full" h="full" autoComplete="off">
          <FormikInput
            label="Qual o nome deste lançamento?"
            name="artist_name"
            type="text"
            placeholder="Nome artístico"
            mb={4}
          />
          <Datepicker name="date" label="Quando deseja lançar?" />

          <Flex justify="center" mb={10}>
            <Button type="submit" variant="primary" isLoading={isSubmitting}>
              Salvar e continuar
            </Button>
          </Flex>
        </Box>
      )}
    </Formik>
  )
}

type Values = {
  artist_name: string
  artist_name_confirmation: string
}

const validationSchema = Yup.object({
  artist_name: Yup.string().required('Obrigatório.'),
  artist_name_confirmation: Yup.string().oneOf(
    [Yup.ref('artist_name'), null],
    'Nomes devem ser iguais.'
  )
})
