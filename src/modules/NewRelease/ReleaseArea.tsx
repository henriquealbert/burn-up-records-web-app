import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Flex, Box, Button, SimpleGrid } from '@chakra-ui/react'

import {
  Input,
  Datepicker,
  UploadImage,
  Textarea,
  Radio,
  Tooltip
} from 'components'
import { Type } from 'graphql/generated'

export const ReleaseArea = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isValid }
  } = useForm<ReleaseValues>({
    defaultValues: {
      release: {
        name: '',
        date: null,
        type: Type.Single,
        description: '',
        artwork: ''
      }
    },
    mode: 'all',
    resolver: yupResolver(validationSchema)
  })

  return (
    <SimpleGrid
      as="form"
      onSubmit={handleSubmit((data) => onSubmit(data))}
      columns={2}
      w="full"
      h="full"
      autoComplete="off"
    >
      <Box maxW="600px">
        <Input
          name="release.name"
          control={control}
          label="Qual o nome deste lançamento?"
          type="text"
          mb={4}
        />

        <Datepicker
          name="release.date"
          control={control}
          label="Quando deseja lançar?"
          maxW="fit-content"
          mb={6}
          labelTooltip={
            <Tooltip
              content="Escolha uma data com no mínimo 40 dias a partir da data atual."
              bgColor="brand.secondary.2"
            />
          }
        />

        <Radio
          name="release.type"
          control={control}
          options={radioOptions}
          label="Tipo:"
          mb={6}
        />

        <Textarea
          name="release.description"
          control={control}
          label="Descrição:"
          rows={4}
        />
      </Box>

      <Flex direction="column" alignItems="center">
        <UploadImage
          label="Arte lançamento:"
          name="release.artwork"
          text="Fazer Upload de Arte"
          accept=".jpg"
          onUpload={(value) =>
            setValue('release.artwork', value, { shouldValidate: true })
          }
          labelTooltip={
            <Tooltip
              content="A imagem deve ser tamanho 3000x3000 pixels, formato JPG."
              bgColor="brand.secondary.2"
            />
          }
        />
      </Flex>

      <Flex justify="flex-end" mt="auto" gridArea="2/2">
        <Button type="submit" variant="secondary" isDisabled={!isValid}>
          Salvar e continuar
        </Button>
      </Flex>
    </SimpleGrid>
  )
}

const radioOptions = [
  { value: Type.Single, label: 'Single' },
  { value: Type.Ep, label: 'EP' },
  { value: Type.Album, label: 'Álbum' }
]

export type ReleaseValues = {
  release: {
    name: string
    date: Date
    type: Type
    description: string
    artwork: string
  }
}

const validationSchema = Yup.object({
  release: Yup.object({
    name: Yup.string().required('Obrigatório.'),
    date: Yup.date().required('Obrigatório.'),
    type: Yup.string().required('Obrigatório.'),
    description: Yup.string().required('Obrigatório.'),
    artwork: Yup.string().required('Obrigatório.')
  })
})

type Props = {
  onSubmit: (data: ReleaseValues) => void
}
