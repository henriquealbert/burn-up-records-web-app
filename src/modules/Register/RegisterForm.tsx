import * as Yup from 'yup'
import NextLink from 'next/link'
import { signIn } from 'next-auth/client'
import { RightArrowIcon } from 'styles/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Form/Input'
import { useCreateUserMutation, useLoginMutation } from 'graphql/generated'
import { parseCallbackUrl } from 'helpers'

export const RegisterForm = () => {
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

  const { mutateAsync: createUser } = useCreateUserMutation()
  const { mutateAsync: login } = useLoginMutation()

  const onSubmit = async (values: Values) => {
    await createUser(
      {
        data: {
          email: values.email,
          password: values.password,
          onboardingCompleted: false
        }
      },
      {
        onSuccess: async () => {
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
        },
        onError: () => alert('Erro ao tentar criar sua conta.')
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
