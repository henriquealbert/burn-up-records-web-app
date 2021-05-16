import { Alert, AlertIcon } from '@chakra-ui/alert'

type ErrorMessageProps = {
  message?: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Alert status="error">
    <AlertIcon />
    {message}
  </Alert>
)
