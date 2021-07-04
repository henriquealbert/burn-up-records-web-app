import { Box, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'

export const ReleaseListSkeleton = () => (
  <SimpleGrid minChildWidth="215px" spacing="24px">
    {[...new Array(10)].map(() => (
      <Box
        key={Math.random()}
        borderRadius="4px"
        w="215px"
        border="1px solid"
        borderColor="gray.100"
      >
        <Skeleton h="100px" mb="12px" borderRadius="4px 4px 0 0" />
        <SkeletonText noOfLines={5} p="12px" />
      </Box>
    ))}
  </SimpleGrid>
)
