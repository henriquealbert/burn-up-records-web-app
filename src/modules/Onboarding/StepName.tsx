import * as Yup from 'yup'
import { Button, Heading, Text, Box, Flex } from '@chakra-ui/react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'

import { RightArrowIcon } from 'styles/icons'
import { Input } from 'components/Form/Input'
import { useUpdateUserMutation } from 'graphql/generated'
import { useAuth } from 'auth'

export const StepName = ({ setNext }: Props) => {
  const { me } = useAuth()
  const { mutateAsync } = useUpdateUserMutation()

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    await mutateAsync(
      {
        input: {
          where: {
            id: me?.user?.id as string
          },
          data: {
            artist_name: values.artist_name
          }
        }
      },
      {
        onSuccess: () => setNext(true),
        onError: () => alert('Erro ao conectar com o servidor')
      }
    )
    setSubmitting(false)
  }
  return (
    <Box maxW="390px" mx="auto">
      <Heading mb={8} fontSize="4xl" fontWeight="medium" textAlign="center">
        Vamos lá!
      </Heading>
      <Text
        mb={6}
        fontSize="lg"
        textAlign="center"
        color="brand.gray.4"
        fontWeight="medium"
      >
        Insira seu nome artístico. Confira seu nome pois ele{' '}
        <Text as="span" color="brand.secondary.2" fontWeight="normal">
          não poderá ser alterado
        </Text>{' '}
        depois.*
      </Text>

      <Formik
        initialValues={{ artist_name: '', artist_name_confirmation: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
        enableReinitialize
      >
        {({ isSubmitting }: FormikProps<Values>) => (
          <Box as={Form} w="full" h="full" autoComplete="off">
            <Input
              name="artist_name"
              type="text"
              placeholder="Nome artístico"
              mb={4}
            />
            <Input
              name="artist_name_confirmation"
              type="text"
              placeholder="Repetir nome artístico"
              mb={8}
            />
            <Flex justify="center" mb={10}>
              <Button
                type="submit"
                variant="primary"
                isLoading={isSubmitting}
                rightIcon={<RightArrowIcon mt={1} />}
              >
                Continuar
              </Button>
            </Flex>
          </Box>
        )}
      </Formik>
      <Text color="brand.gray.3" textAlign="center" fontSize="sm">
        *Você não poderá alterar seu nome artístico pois ele estará atrelado aos
        diretos dos seus lançamentos.
      </Text>
    </Box>
  )
}

interface Props {
  setNext: (arg0: boolean) => void
}

interface Values {
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
