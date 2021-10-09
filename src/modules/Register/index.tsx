import { signIn } from 'next-auth/client'

import { parseCallbackUrl } from 'helpers'
import { useCreateUserMutation, useLoginMutation } from 'graphql/generated'

import { AuthLayout } from 'components/AuthLayout'
import { FormValuesTypes } from 'components/AuthLayout/Form'
import { RegisterBanner, RegisterFooter } from './components'

export const RegisterModule = () => {
  const { mutateAsync: createUser } = useCreateUserMutation()
  const { mutateAsync: login } = useLoginMutation()

  const handleSubmit = async (values: FormValuesTypes) => {
    await createUser(
      {
        data: {
          email: values.email,
          password: values.password
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
    <AuthLayout
      onSubmit={handleSubmit}
      submitButtonText="Criar conta"
      renderBannerContent={<RegisterBanner />}
      bannerSrc="img/banner-register.jpeg"
      renderFooter={<RegisterFooter />}
    />
  )
}
