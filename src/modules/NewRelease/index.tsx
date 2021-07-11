import { Tabs, Tab, TabList, TabPanels, TabPanel, Icon } from '@chakra-ui/react'
import { BiRocket as RocketIcon, BiMusic as MusicIcon } from 'react-icons/bi'

import { ReleaseArea } from './ReleaseArea'
import { UploadTracks } from './UploadTracks'

export const NewRelease = () => (
  <Tabs variant="enclosed" h="full">
    <TabList>
      <Tab mr={0.5}>
        Área de lançamento <Icon as={RocketIcon} ml={2} />
      </Tab>
      <Tab>
        Upload de tracks <Icon as={MusicIcon} ml={2} />
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <ReleaseArea />
      </TabPanel>
      <TabPanel>
        <UploadTracks />
      </TabPanel>
    </TabPanels>
  </Tabs>
)
