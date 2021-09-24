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
import { customAlphabet } from 'nanoid'
import NextLink from 'next/link'
import { BiRocket as RocketIcon, BiMusic as MusicIcon } from 'react-icons/bi'

import { ReleaseArea, ReleaseValues } from './ReleaseArea'
import { TracksValues, UploadTracks } from './UploadTracks'
import { Status, useCreateReleaseMutation } from 'graphql/generated'
import { useAuth } from 'auth'

export const NewRelease = () => {
  const { me } = useAuth()
  const uploadTabRef = useRef(null)
  const [nextStep, setNextStep] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<NewReleaseTypes>()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { mutateAsync: createRelease } = useCreateReleaseMutation()
  // const { mutateAsync: createTrack } = useCreateTrackMutation()

  const handleSubmit = async (values: TracksValues) => {
    setIsLoading(true)
    setData((prevData) => ({ ...prevData, ...values }))

    // await createRelease(
    //   {
    //     data: {
    //       ...data.release,
    //       status: Status.Analise,
    //       userId: me?.id,
    //       catalog: `BUR${nanoid()}`,
    //       artworkUrl: null
    //     }
    //   },
    //   {
    //     onSuccess: ({ createRelease }) => {
    //       // values.tracks.forEach(async (track) => {
    //       //   await createTrack({
    //       //     input: {
    //       //       data: {
    //       //         ...track,
    //       //         release: createRelease.release.id
    //       //       }
    //       //     }
    //       //   })
    //       // })
    //       setIsLoading(false)
    //       onOpen()
    //     },
    //     onError: () => {
    //       setIsLoading(false)
    //       alert('Erro ao criar seu release, tente novamente.')
    //     }
    //   }
    // )
  }

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
            <UploadTracks isLoading={isLoading} onSubmit={handleSubmit} />
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

const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789', 10)
