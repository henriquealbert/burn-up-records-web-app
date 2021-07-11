import { Center, Heading } from '@chakra-ui/react'
import { PrivateLayout } from 'components'

export default function ArtistsPage() {
  return (
    <PrivateLayout pageTitle="Artistas">
      <Center mt={40}>
        <Heading
          maxW="515px"
          color="brand.gray.3"
          fontWeight="medium"
          fontSize="2xl"
          textAlign="center"
          lineHeight={9}
        >
          Em breve aqui, um espaço para você se conectar com outros artistas.
        </Heading>
      </Center>
    </PrivateLayout>
  )
}
