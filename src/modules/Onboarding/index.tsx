import React from 'react'
import {
  useDisclosure,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Text
} from '@chakra-ui/react'
import { transparentize } from 'polished'

import { StepName } from './StepName'
import { StepPhoto } from './StepPhoto'
import { useOnboardingCompleted } from './useOnboardingCompleted'

export const Onboarding = () => {
  const { colors } = useTheme()
  const [step, setStep] = React.useState('NAME')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useOnboardingCompleted({ onClose, onOpen })

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      size="lg"
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <DrawerOverlay bgColor={transparentize(0.1, colors.brand[5])} />
      <DrawerContent pt="80px" px="104px">
        <Text color="brand.6">Passo {step === 'NAME' ? '1' : '2'}/2</Text>
        <DrawerBody p={0}>
          {step === 'NAME' && <StepName setStep={setStep} />}
          {step === 'PHOTO' && <StepPhoto onClose={onClose} />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
