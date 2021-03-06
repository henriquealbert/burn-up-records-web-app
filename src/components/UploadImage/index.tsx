import { ChangeEvent, ReactNode } from 'react'
import {
  Avatar,
  Button,
  Spinner,
  FormLabel,
  FormControl,
  FormControlProps,
  Flex
} from '@chakra-ui/react'

import { UserIcon, RadioIcon } from 'styles/icons'
import { useUploadFile } from 'graphql/mutations/useUploadFile'

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
  const { data, isLoading, uploadFile } = useUploadFile()

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0]
    if (!file) return
    uploadFile({ file, onSuccess: onUpload })
  }

  const renderIcon = isLoading ? (
    <Spinner
      thickness="2px"
      color="brand.1"
      emptyColor="brand.8"
      speed="0.6s"
    />
  ) : (
    <>
      {avatar ? (
        <UserIcon w="31px" h="33px" color="brand.6" />
      ) : (
        <RadioIcon w="68px" h="68px" color="brand.6" />
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
      <Flex
        border="1px"
        borderRadius={avatar ? 'full' : '8px'}
        borderColor="brand.5"
      >
        <Avatar
          w={avatar ? '112px' : '285px'}
          h={avatar ? '112px' : '285px'}
          borderRadius={avatar ? 'full' : '8px'}
          src={data || ''}
          icon={renderIcon}
          bgColor="white"
        />
      </Flex>
      <Button
        as="label"
        variant="linkBlack"
        mt={8}
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
          onClick={(e) => (e.target = null)}
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
