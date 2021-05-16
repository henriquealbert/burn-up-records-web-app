import { Alert, AlertIcon } from '@chakra-ui/alert'

export const ErrorMessage = () => (
  <Alert status="error" borderRadius="4px">
    <AlertIcon />
    Oops! Ocorreu um erro inesperado. Por favor, tente novamente.
  </Alert>
)
