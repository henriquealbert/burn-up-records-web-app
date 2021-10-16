import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Button, Heading, Text, Flex } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { UploadImage } from 'components'
import { useUpdateUserMutation } from 'graphql/generated'

export const StepPhoto = ({ onClose }: Props) => {
  const { me } = useAuth()
  const queryClient = useQueryClient()
  const [avatarUrl, setAvatarUrl] = useState<string | null>()
  const { mutateAsync, isLoading } = useUpdateUserMutation()

  const handleSubmit = async () => {
    await mutateAsync(
      {
        data: {
          onboardingCompleted: true,
          avatarUrl: avatarUrl
        },
        id: me.id
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
    <Flex direction="column" justify="center" h="full">
      <Heading fontSize="4xl" fontWeight="normal" mb={4}>
        Personalize seu perfil
      </Heading>
      <Text mb={14} color="brand.7" maxW="396px">
        Adicione uma foto ao seu perfil, você sempre poderá alterar sua foto em
        “Minha Conta”.
      </Text>

      <UploadImage
        avatar
        text="Escolher foto"
        name="avatar"
        onUpload={setAvatarUrl}
      />

      <Flex justifyContent="center" mt={16}>
        <Button
          variant="linkSecondary"
          mr={6}
          onClick={handleSubmit}
          isDisabled={isLoading}
        >
          Pular passo
        </Button>

        <Button variant="link" onClick={handleSubmit} isLoading={isLoading}>
          Concluir
        </Button>
      </Flex>
    </Flex>
  )
}

interface Props {
  onClose: () => void
}
