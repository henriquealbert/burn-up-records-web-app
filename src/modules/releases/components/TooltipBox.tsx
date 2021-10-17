import { Text, Box, Flex } from '@chakra-ui/react'
import { format } from 'date-fns'

import { Tooltip } from 'components'

export const TooltipBox = ({ data }: Props) => {
  const formattedDate = format(new Date(data?.date), 'd/MM/yyyy')

  if (data?.status === 'lancado') {
    return (
      <Text color="brand.gray.3" fontSize="xs" my={4}>
        {formattedDate}
      </Text>
    )
  }

  if (data?.status === 'aprovado') {
    return (
      <Flex my={4}>
        <Text color="brand.gray.3" fontSize="xs" mr={2}>
          {formattedDate}
        </Text>
        <Tooltip
          content={`Esta track será lançada em ${formattedDate}`}
          icon="i"
          bgColor="transparent"
          lineHeight="1.25"
          color="brand.gray.3"
          border="2px"
          borderColor="brand.gray.3"
        />
      </Flex>
    )
  }

  if (data?.status === 'corrigir') {
    return <Tooltip content="Error." icon="!" my={4} bgColor="brand.error.1" />
  }

  if (data?.status === 'negado') {
    return (
      <Tooltip
        content="Esta track foi negada por direitos autorais."
        icon="!"
        my={4}
        bgColor="brand.gray.2"
      />
    )
  }

  return (
    <Box my={4}>
      <Tooltip content="Esta track está sendo analisada, em breve você será notificado por e-mail sobre o status." />
    </Box>
  )
}

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}
