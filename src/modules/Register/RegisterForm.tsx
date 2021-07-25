import * as Yup from 'yup'
import NextLink from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/client'
import { RightArrowIcon } from 'styles/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'

import { Input } from 'components/Form/Input'
import { useCreateUserMutation } from 'graphql/generated'
import { parseCallbackUrl } from 'helpers'

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState<Values>()

  const { mutateAsync } = useCreateUserMutation({
    onSuccess: async () =>
      await signIn('credentials', {
        email: formValues?.email,
        password: formValues?.password,
        callbackUrl: parseCallbackUrl('/lancamentos')
      }),
    onError: () => alert('Erro ao tentar criar sua conta')
  })

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setFormValues(values)
    await mutateAsync({
      input: {
        data: {
          username: values.email,
          email: values.email,
          password: values.password
        }
      }
    })
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
          <Input name="email" type="email" placeholder="Email" mb={6} />
          <Input name="password" type="password" placeholder="Senha" />

          <Text fontSize="md" color="brand.gray.3" textAlign="center" mt={6}>
            Ao continuar você concorda com os
            <NextLink passHref href="/termos-politica-privacidade">
              <Button
                as="a"
                variant="link"
                h="full"
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
