import * as Yup from 'yup'
import { signIn } from 'next-auth/client'
import { RightArrowIcon } from 'styles/icons'
import { Box, Button } from '@chakra-ui/react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'

import { Input } from 'components/Form/Input'
import { parseCallbackUrl } from 'helpers'

export const LoginForm = () => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: parseCallbackUrl('/lancamentos')
      })
    } catch (error) {
      alert(error)
      setSubmitting(false)
    }
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
