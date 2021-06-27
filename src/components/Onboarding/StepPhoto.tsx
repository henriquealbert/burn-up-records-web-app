import { Button } from '@chakra-ui/react'

interface Props {
  onClose: () => void
}

export const StepPhoto = ({ onClose }: Props) => {
  return (
    <div>
      <Button onClick={onClose}>Salvar e continuar</Button>
    </div>
  )
}
