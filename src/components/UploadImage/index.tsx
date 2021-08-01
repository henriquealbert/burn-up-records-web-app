import { ChangeEvent } from 'react'
import {
  Avatar,
  Button,
  Spinner,
  FormLabel,
  FormControl,
  FormControlProps,
  Flex
} from '@chakra-ui/react'

import { UserHeadphoneIcon, RadioIcon } from 'styles/icons'
import { useUploadFileMutation } from 'graphql/mutations/useUploadFile'
import { ReactNode } from 'react'

export const UploadImage = ({
  onUpload,
  avatar,
  name,
  text,
  label,
  labelTooltip,
  accept = 'image/*',
  ...props
}: Props) => {
  const { isLoading, mutateAsync, data } = useUploadFileMutation()

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0]
    if (!file) return

    await mutateAsync(file, {
      onSuccess: ({ data }) => onUpload(String(data[0].id))
    })
  }

  const renderIcon = isLoading ? (
    <Spinner
      thickness="2px"
      color="brand.primary"
      emptyColor="brand.gray.2"
      speed="0.6s"
    />
  ) : (
    <>
      {avatar ? (
        <UserHeadphoneIcon w="60px" h="80px" color="brand.gray.2" />
      ) : (
        <RadioIcon w="68px" h="68px" color="brand.gray.2" />
      )}
    </>
  )

  return (
    <FormControl d="flex" flexDirection="column" alignItems="center" {...props}>
      {label && (
        <Flex alignItems="center" mb={2} w={avatar ? '148px' : '285px'}>
          <FormLabel color="brand.gray.5" fontSize="lg" mb={0}>
            {label}
          </FormLabel>
          {labelTooltip}
        </Flex>
      )}
      <Avatar
        w={avatar ? '148px' : '285px'}
        h={avatar ? '148px' : '285px'}
        borderRadius={avatar ? 'full' : '8px'}
        bgColor="brand.gray.1"
        src={data?.data[0].formats?.thumbnail.url}
        icon={renderIcon}
      />
      <Button
        as="label"
        variant="link"
        mt={6}
        cursor="pointer"
        isDisabled={isLoading}
      >
        {text}
        <input
          type="file"
          name={name}
          hidden
          accept={accept}
          onChange={handleUploadFile}
        />
      </Button>
    </FormControl>
  )
}

interface Props extends FormControlProps {
  onUpload: (arg0: string) => void
  avatar?: boolean
  text: string
  name: string
  label?: string
  labelTooltip?: ReactNode
  accept?: string
}
