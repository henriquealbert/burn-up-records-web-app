import { signIn } from 'next-auth/client'

import { parseCallbackUrl } from 'helpers'
import { useLoginMutation } from 'graphql/generated'

import { AuthLayout } from 'components/AuthLayout'
import { LoginBanner, LoginFooter } from './components'

import { FormValuesTypes } from 'components/AuthLayout/Form'

export const LoginModule = () => {
  const { mutateAsync: login } = useLoginMutation()

  const handleSubmit = async (values: FormValuesTypes) => {
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
    <AuthLayout
      onSubmit={handleSubmit}
      submitButtonText="Entrar"
      renderBannerContent={<LoginBanner />}
      bannerSrc="/img/banner-login.jpeg"
      renderFooter={<LoginFooter />}
    />
  )
}
