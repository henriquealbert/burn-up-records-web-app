import * as Yup from 'yup'
import { signIn } from 'next-auth/react'
import { RightArrowIcon } from 'styles/icons'
import { Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Form/Input'
import { parseCallbackUrl } from 'helpers'
import { useLoginMutation } from 'graphql/generated'

export const LoginForm = () => {
  const { mutateAsync: login } = useLoginMutation()

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm<Values>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async (values: Values) => {
    await login(
      { data: { email: values.email, password: values.password } },
      {
        onSuccess: async (data) =>
          await signIn('credentials', {
            user: data.login.user,
            jwt: data.login.token,
            callbackUrl: parseCallbackUrl('/lancamentos')
          }),
        onError: () => alert('Erro ao realizar o login.')
      }
    )
  }

  return (
    <Box as="form" w="full" h="full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="email"
        type="email"
        placeholder="Email"
        mb={6}
      />
      <Input
        control={control}
        name="password"
        type="password"
        placeholder="Senha"
      />
      <Button
        type="submit"
        variant="primary"
        mt={8}
        mb={12}
        w="full"
        isLoading={isSubmitting}
        rightIcon={<RightArrowIcon mt={1} />}
        isDisabled={!isValid}
      >
        Começar agora
      </Button>
    </Box>
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
