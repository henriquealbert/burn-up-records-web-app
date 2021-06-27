import * as Yup from 'yup'
import NextLink from 'next/link'
import { signIn } from 'next-auth/client'
import { RightArrowIcon } from 'styles/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'

import { FormikInput } from 'components/Form/Input'
import { useCreateUserMutation } from 'graphql/generated'
import { parseCallbackUrl } from 'helpers'

export const RegisterForm = () => {
  const { mutate, data, error } = useCreateUserMutation()

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    mutate({
      input: {
        data: {
          username: values.email,
          email: values.email,
          password: values.password
        }
      }
    })
    if (data?.createUser?.user?.email) {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: parseCallbackUrl('/lancamentos')
      })
    }
    if (error) alert(error)

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange
    >
      {({ isSubmitting }: FormikProps<Values>) => (
        <Box as={Form} w="full" h="full">
          <FormikInput name="email" type="email" placeholder="Email" mb={6} />
          <FormikInput name="password" type="password" placeholder="Senha" />

          <Text fontSize="md" color="brand.gray.3" textAlign="center" mt={6}>
            Ao continuar você concorda com os
            <NextLink passHref href="/termos-politica-privacidade">
              <Button
                as="a"
                variant="link"
                h="100%"
                p="0"
                whiteSpace="normal"
                color="brand.gray.3"
                _hover={{ color: 'brand.gray.4' }}
                fontWeight="normal"
              >
                termos de uso e política de privacidade
              </Button>
            </NextLink>
            .
          </Text>
          <Button
            type="submit"
            variant="primary"
            mt={8}
            mb={12}
            w="full"
            isLoading={isSubmitting}
            rightIcon={<RightArrowIcon mt={1} />}
          >
            Começar agora
          </Button>
        </Box>
      )}
    </Formik>
  )
}

interface Values {
  email: string
  password: string
}

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido.').required('Obrigatório.'),
  password: Yup.string()
    .min(8, 'Deve conter no mínimo 8 caracteres.')
    .required('Obrigatório.')
})
