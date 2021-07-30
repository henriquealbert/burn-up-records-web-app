import { Form } from 'formik'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'

import { Input, Select, Tooltip } from 'components'

import { genreData } from './genreData'
import { TracksValues } from './UploadTracks'

export const TrackForm = ({ values, remove, push, isValid }: Props) => (
  <Form>
    {values.tracks.map((track, index) => (
      <Flex
        direction="column"
        h="full"
        w="full"
        key={track.id}
        borderBottom="1px"
        borderColor="brand.gray.4"
        mb={10}
        pb={10}
      >
        {values.tracks.length > 1 && (
          <Button
            variant="link"
            alignSelf="flex-end"
            onClick={() => remove(index)}
          >
            Remover track
          </Button>
        )}

        <SimpleGrid
          columns={2}
          spacingX={40}
          w="full"
          h="full"
          autoComplete="off"
        >
          <Box>
            <Input
              label="Nome da música"
              name={`tracks[${index}].name`}
              type="text"
              mb={8}
            />

            <Select
              label="Nome da versão"
              name={`tracks[${index}].mix_name`}
              placeholder="Selecione uma opção..."
              options={[
                { value: 'Original Mix', label: 'Original Mix' },
                { value: 'Extended Mix', label: 'Extended Mix' },
                { value: 'Radio Edit', label: 'Radio Edit' },
                { value: 'Club Mix', label: 'Club Mix' },
                { value: 'Remix', label: 'Remix' }
              ]}
              mb={8}
            />

            <Input
              label="URL da música"
              name={`tracks[${index}].url`}
              placeholder="Link para download da música"
              type="text"
              labelTooltip={
                <Tooltip content="Formato WAV 16bits 44100hz mixada e masterizada." />
              }
            />
          </Box>

          <Box>
            <Input
              label="Artista(s)"
              name={`tracks[${index}].track_artist`}
              type="text"
              mb={8}
            />
            <Input
              isDisabled={values.tracks[index].mix_name !== 'Remix'}
              label="Remix(ers)"
              name={`tracks[${index}].remixer_name`}
              type="text"
              mb={8}
              labelTooltip={
                <Tooltip
                  content={
                    values.tracks[index].mix_name !== 'Remix'
                      ? `Para habilitar, selecione o nome da versão como "Remix".`
                      : 'Adicionar o nome dos artistas separado por vírgula.'
                  }
                />
              }
            />
            <Select
              label="Gênero"
              name={`tracks[${index}].genre`}
              placeholder="Selecione um gênero..."
              options={genreData}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    ))}
    <Flex justify="space-between">
      <Button
        variant="linkSecondary"
        onClick={() => {
          push({
            id: Math.random(),
            name: '',
            mix_name: '',
            track_artist: '',
            remixer_name: '',
            genre: '',
            url: ''
          })
        }}
      >
        {'[+] Adicionar mais tracks'}
      </Button>
      <Button variant="primary" type="submit" isDisabled={!isValid}>
        Submit
      </Button>
    </Flex>
  </Form>
)

type Props = {
  values: TracksValues
  remove: <T>(index: number) => T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  push: (obj: any) => void
  isValid: boolean
}
