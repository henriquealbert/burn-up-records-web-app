import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useBoolean
} from '@chakra-ui/react'
import { useEffect } from 'react'

import { useAuth } from 'auth'
import { StepName } from './StepName'
import { StepPhoto } from './StepPhoto'

export const Onboarding = () => {
  const { me, isMeLoading } = useAuth()

  const [next, setNext] = useBoolean()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Verify if there is an artist name, if not, start the onboarding process
  useEffect(() => {
    if (!me?.user?.artist_name && !isMeLoading) {
      onOpen()
    } else {
      onClose()
    }
  }, [me, onOpen, onClose, isMeLoading])

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            {!next && <StepName setNext={setNext} />}
            {next && <StepPhoto onClose={onClose} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
