import { ChangeEvent, ReactNode, useState } from 'react'
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
import { uploadFile } from 'graphql/mutations/uploadFile'

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
  const [isLoading, setLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(null)

  const handleUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true)
      setAvatarUrl(null)
      const file = e?.target?.files?.[0]
      if (!file) return

      const imageUrl = await uploadFile({ file })
      onUpload(imageUrl)
      setAvatarUrl(imageUrl)

      setLoading(false)
    } catch (err) {
      setLoading(false)
      alert('Erro ao realizar o upload.')
    }
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
          src={avatarUrl || ''}
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
