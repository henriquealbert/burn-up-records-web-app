import * as Yup from 'yup'
import { Button, Heading, Text, Box, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Form/Input'
import { useUpdateUserMutation } from 'graphql/generated'
import { useAuth } from 'auth'

export const StepName = ({ setStep }: Props) => {
  const { me } = useAuth()
  const { mutateAsync: updateUser } = useUpdateUserMutation()

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm<Values>({
    defaultValues: {
      name: '',
      name_confirmation: ''
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async (values: Values) => {
    await updateUser(
      { data: { name: values.name }, id: me.id },
      {
        onSuccess: () => setStep('PHOTO'),
        onError: () => alert('Erro ao conectar com o servidor')
      }
    )
  }
  return (
    <Flex direction="column" justify="center" h="full">
      <Heading fontWeight="normal" fontSize="4xl" color="black" mb={4}>
        Pronto para começar?
      </Heading>
      <Text color="brand.7" mb={12} maxW="320px">
        Insira seu nome artístico e confirme-o, este nome <strong>não</strong>{' '}
        poderá ser alterado depois.
      </Text>

      <Box as="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="name"
          type="text"
          placeholder="Insira seu nome artístico"
          mb={12}
        />
        <Input
          control={control}
          name="name_confirmation"
          type="text"
          placeholder="Repita seu nome artístico"
          mb={12}
        />
        <Flex justify="flex-end" mb={10}>
          <Button
            type="submit"
            variant="link"
            isLoading={isSubmitting}
            isDisabled={!isValid}
          >
            Ok, continuar
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

interface Props {
  setStep: (arg0: 'NAME' | 'PHOTO') => void
}

interface Values {
  name: string
  name_confirmation: string
}

const validationSchema = Yup.object({
  name: Yup.string().required('Obrigatório.'),
  name_confirmation: Yup.string()
    .oneOf([Yup.ref('name'), null], 'Nomes devem ser iguais.')
    .required('Obrigatório.')
})
