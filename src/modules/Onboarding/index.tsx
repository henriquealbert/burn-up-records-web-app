import { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useTheme
} from '@chakra-ui/react'
import { transparentize } from 'polished'

import { useAuth } from 'auth'
import { StepName } from './StepName'
import { StepPhoto } from './StepPhoto'

export const Onboarding = () => {
  const { colors } = useTheme()
  const { me, isMeLoading } = useAuth()
  const [next, setNext] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Verify if there is an artist name, if not, start the onboarding process
  useEffect(() => {
    if (!me?.onboardingCompleted && !isMeLoading) {
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
        size="xl"
      >
        <ModalOverlay bgColor={transparentize(0.2, colors.brand[4])} />
        <ModalContent borderRadius="24px">
          <ModalBody p={12} h="full" d="flex" flexDirection="column">
            {!next && <StepName setNext={setNext} />}
            {next && <StepPhoto onClose={onClose} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
