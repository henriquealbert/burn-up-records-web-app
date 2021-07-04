import { ChangeEvent } from 'react'
import { Flex, Avatar, Button, Spinner } from '@chakra-ui/react'

import { UserHeadphoneIcon } from 'styles/icons'
import { useUploadFileMutation } from 'graphql/mutations/useUploadFile'

export const AvatarUpload = ({ onUpload }: Props) => {
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
    <UserHeadphoneIcon w="60px" h="80px" color="brand.gray.2" />
  )

  return (
    <Flex direction="column" alignItems="center">
      <Avatar
        w="148px"
        h="148px"
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
        Escolher foto
        <input
          type="file"
          name="avatar_url"
          hidden
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleUploadFile}
        />
      </Button>
    </Flex>
  )
}

type Props = {
  onUpload: (arg0: string) => void
}
