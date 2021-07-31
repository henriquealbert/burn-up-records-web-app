import { useRef, useState } from 'react'
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  Text,
  Button,
  Flex
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BiRocket as RocketIcon, BiMusic as MusicIcon } from 'react-icons/bi'

import { ReleaseArea, ReleaseValues } from './ReleaseArea'
import { TracksValues, UploadTracks } from './UploadTracks'

export const NewRelease = () => {
  const uploadTabRef = useRef(null)
  const [data, setData] = useState<NewReleaseTypes>()
  const [nextStep, setNextStep] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(data)

  return (
    <>
      <Tabs variant="enclosed" h="full">
        <TabList>
          <Tab mr={0.5}>
            Área de lançamento <Icon as={RocketIcon} ml={2} />
          </Tab>
          <Tab isDisabled={!nextStep} ref={uploadTabRef}>
            Upload de tracks <Icon as={MusicIcon} ml={2} />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel maxH="calc(100vh - 178px)" overflowY="auto">
            <ReleaseArea
              onSubmit={(values) => {
                setData((prevData) => ({ ...prevData, ...values }))
                setNextStep(true)
                uploadTabRef.current.click()
              }}
            />
          </TabPanel>
          <TabPanel overflowY="auto" maxH="calc(100vh - 178px)">
            <UploadTracks
              onSubmit={(values) => {
                setData((prevData) => ({ ...prevData, ...values }))
                onOpen()
              }}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        size="lg"
      >
        <ModalOverlay bgColor="blackAlpha.800" />
        <ModalContent borderRadius="24px">
          <ModalBody p={12}>
            <Heading fontSize="40px" textAlign="center" mb={6}>
              Boa!
            </Heading>
            <Text color="brand.gray.4" fontSize="lg" textAlign="center" mb={6}>
              Agora sua track passará por uma breve análise.
            </Text>
            <Text color="brand.gray.4" fontSize="lg" textAlign="center" mb={6}>
              <Text as="strong" color="brand.primary" mr={1}>
                Royalties:
              </Text>
              você poderá escolher seus ganhos em direitos autorais assim que
              sua track for aprovada.
            </Text>
            <Text color="brand.gray.4" fontSize="lg" textAlign="center" mb={10}>
              Fique atento às suas notificações para saber o status da sua
              track.
            </Text>

            <Flex justify="center">
              <NextLink href="/lancamentos" passHref>
                <Button as="a" variant="black">
                  Ver meus lançamentos
                </Button>
              </NextLink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

type NewReleaseTypes = ReleaseValues & TracksValues
