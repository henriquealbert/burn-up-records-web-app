import { useRef, useState } from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel, Icon } from '@chakra-ui/react'
import { BiRocket as RocketIcon, BiMusic as MusicIcon } from 'react-icons/bi'

import { ReleaseArea } from './ReleaseArea'
import { UploadTracks } from './UploadTracks'

export const NewRelease = () => {
  const uploadTabRef = useRef(null)
  const [data, setData] = useState({})
  const [nextStep, setNextStep] = useState(false)

  console.log(data)

  return (
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
        <TabPanel>
          <ReleaseArea
            onSubmit={(values) => {
              setData((prevData) => ({ ...prevData, ...values }))
              setNextStep(true)
              uploadTabRef.current.click()
            }}
          />
        </TabPanel>
        <TabPanel>
          <UploadTracks onSubmit={null} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
