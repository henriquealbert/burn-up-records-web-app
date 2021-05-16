import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Icon
} from '@chakra-ui/react'
import { MdChevronRight } from 'react-icons/md'
import Link from 'next/link'

type Breadcrumb = {
  title: string
  href: string
  isCurrentPage?: boolean
}

type PageHeaderProps = {
  title: string
  onClick?: () => void
  buttonText?: string
  breadcrumbs?: Breadcrumb[]
}

export const PageHeader = ({
  title,
  onClick,
  buttonText,
  breadcrumbs
}: PageHeaderProps) => (
  <Flex justify="space-between" align="center">
    <Box>
      <Heading as="h1" color="gray.700" size="md">
        {title}
      </Heading>
      <Breadcrumb
        separator={<Icon as={MdChevronRight} color="gray.300" />}
        spacing="6px"
      >
        {breadcrumbs?.map((item) => (
          <BreadcrumbItem
            key={item.title}
            isCurrentPage={item.isCurrentPage}
            fontWeight={item.isCurrentPage ? 'medium' : 'normal'}
            fontSize="13px"
            color="gray.400"
          >
            <Link href={item.href} passHref>
              <BreadcrumbLink
                _hover={
                  item.isCurrentPage
                    ? { textDecoration: 'none' }
                    : { textDecoration: 'underline' }
                }
                cursor={item.isCurrentPage ? 'default' : 'pointer'}
              >
                {item.title}
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
    {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
  </Flex>
)
