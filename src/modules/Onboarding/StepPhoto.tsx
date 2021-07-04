import { Button, Heading, Text, Flex } from '@chakra-ui/react'
import { useAuth } from 'auth'
import { AvatarUpload } from 'components'
import { useUpdateUserMutation } from 'graphql/generated'
import { useState } from 'react'
import { useQueryClient } from 'react-query'

export const StepPhoto = ({ onClose }: Props) => {
  const { me } = useAuth()
  const queryClient = useQueryClient()
  const [avatarId, setAvatarId] = useState<string | null>()
  const { mutateAsync, isLoading } = useUpdateUserMutation()

  const handleSubmit = async () => {
    await mutateAsync(
      {
        input: {
          where: {
            id: me?.user?.id as string
          },
          data: {
            avatar: avatarId,
            onboarding: true
          }
        }
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('getMe')
          onClose()
        }
      }
    )
  }

  return (
    <Flex direction="column" maxW="412px" mx="auto" flex={1} h="full">
      <Heading fontSize="4xl" fontWeight="medium" textAlign="center" mb={6}>
        Personalize seu perfil
      </Heading>
      <Text mb={8} fontSize="lg" textAlign="center" color="brand.gray.4">
        Adicione uma foto de perfil. Você sempre poderá alterar sua foto em
        “Minha Conta”.
      </Text>

      <AvatarUpload onUpload={setAvatarId} />

      <Flex justify="center" mt="auto">
        <Button
          variant="link"
          color="brand.gray.4"
          _hover={{ color: 'brand.gray.3' }}
          _active={{ color: 'brand.gray.3' }}
          fontSize="lg"
          mr={8}
          onClick={handleSubmit}
          isDisabled={isLoading}
        >
          Pular passo
        </Button>

        <Button variant="primary" onClick={handleSubmit} isLoading={isLoading}>
          Salvar e continuar
        </Button>
      </Flex>
    </Flex>
  )
}

interface Props {
  onClose: () => void
}
