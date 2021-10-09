import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckIcon } from 'styles/icons'

export const RegisterBanner = () => (
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    w="416px"
  >
    <Text
      color="white"
      fontSize="24px"
      lineHeight="38px"
      maxW="232px"
      mb={6}
      ml={7}
    >
      Junte-se ao futuro da música.
    </Text>
    <List color="white" w="full" spacing={4}>
      {benefitsList.map((item) => (
        <ListItem key={item.id} display="flex" fontSize="md" lineHeight="27px">
          <ListIcon as={CheckIcon} color="white" mt={1.5} mr={4} />
          <Text>{item.text}</Text>
        </ListItem>
      ))}
    </List>
  </Box>
)

const benefitsList = [
  {
    id: 1,
    text: 'Lance facilmente para + de 200 plataformas'
  },
  {
    id: 2,
    text: 'Libere quantas músicas você quiser, quando quiser.'
  },
  {
    id: 3,
    text: 'Monitore suas vendas, fluxos e dados de ganhos.'
  },
  {
    id: 4,
    text: 'Receba seu link de pré-save para construir o envolvimento dos fãs e atrair novos ouvintes.'
  },
  {
    id: 5,
    text: 'Receba os direitos da sua música de forma fácil e descomplicada.'
  }
]
