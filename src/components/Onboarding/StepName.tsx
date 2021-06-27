import { Button } from '@chakra-ui/react'

interface Props {
  setNext: {
    on: () => void
  }
}

export const StepName = ({ setNext }: Props) => (
  <div>
    <Button onClick={setNext.on}>Continuar</Button>
  </div>
)
