import * as Yup from 'yup'
import { Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Form/Input'

export const Form = ({ onSubmit, submitButtonText }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting }
  } = useForm<FormValuesTypes>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  const _onSubmit = async (values: FormValuesTypes) =>
    onSubmit && (await onSubmit(values))

  return (
    <Box as="form" onSubmit={handleSubmit(_onSubmit)}>
      <Input
        variant="flushed"
        showErrorMessage={false}
        control={control}
        name="email"
        type="email"
        placeholder="Email"
        mb={10}
      />
      <Input
        variant="flushed"
        showErrorMessage={false}
        control={control}
        name="password"
        type="password"
        placeholder="Senha"
        mb={10}
      />
      <Button
        type="submit"
        variant="outline"
        w="full"
        isLoading={isSubmitting}
        isDisabled={!isValid}
      >
        {submitButtonText}
      </Button>
    </Box>
  )
}

export type FormValuesTypes = {
  email: string
  password: string
}

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido.').required('Obrigatório.'),
  password: Yup.string()
    .min(8, 'Deve conter no mínimo 8 caracteres.')
    .required('Obrigatório.')
})
