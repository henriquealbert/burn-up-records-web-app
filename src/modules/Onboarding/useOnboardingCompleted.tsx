import React from 'react'
import { useAuth } from 'auth'

export const useOnboardingCompleted = ({ onOpen, onClose }) => {
  const { me, isMeLoading } = useAuth()

  // Open the drawer if the user has NOT completed the onboarding
  React.useEffect(() => {
    if (!me?.onboardingCompleted && !isMeLoading) {
      onOpen()
    } else {
      onClose()
    }
  }, [me, onOpen, onClose, isMeLoading])
}
