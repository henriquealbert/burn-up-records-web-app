import * as Yup from 'yup'
import { Button, Heading, Text, Box, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { RightArrowIcon } from 'styles/icons'
import { Input } from 'components/Form/Input'
import { useUpdateUserMutation } from 'graphql/generated'
import { useAuth } from 'auth'

export const StepName = ({ setNext }: Props) => {
  const { me } = useAuth()
  const { mutateAsync: updateUser } = useUpdateUserMutation()

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm<Values>({
    defaultValues: {
      artist_name: '',
      artist_name_confirmation: ''
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async (values: Values) => {
    await updateUser(
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

      <Box
        as="form"
        w="full"
        h="full"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          control={control}
          name="artist_name"
          type="text"
          placeholder="Nome artístico"
          mb={4}
        />
        <Input
          control={control}
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
            isDisabled={!isValid}
          >
            Continuar
          </Button>
        </Flex>
      </Box>

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
