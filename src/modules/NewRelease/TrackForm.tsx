import { useFieldArray } from 'react-hook-form'
import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { useAuth } from 'auth'
import { Input, Select, Tooltip } from 'components'
import { genreData } from './genreData'
import { TracksValues } from './UploadTracks'

export const TrackForm = ({ control, watch, isValid, isLoading }) => {
  const { me } = useAuth()
  const { fields, append, remove } = useFieldArray<TracksValues>({
    control,
    name: 'tracks'
  })

  return (
    <>
      {fields.map((field, index) => {
        const watchMixName = watch(`tracks.${index}.mix_name`)
        return (
          <Flex
            direction="column"
            h="full"
            w="full"
            key={field.id}
            borderBottom="1px"
            borderColor="brand.gray.4"
            mb={10}
            pb={10}
          >
            {fields.length > 1 && (
              <Flex justifyContent="space-between" mb={4}>
                <Text fontSize="sm">- Track {index + 1}</Text>
                <Button
                  variant="link"
                  fontSize="sm"
                  onClick={() => remove(index)}
                >
                  Remover track
                </Button>
              </Flex>
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
                  control={control}
                  defaultValue={field.name}
                  name={`tracks.${index}.name`}
                  label="Nome da música"
                  type="text"
                  mb={8}
                />
                <Select
                  control={control}
                  defaultValue={field.mix_name}
                  name={`tracks.${index}.mix_name`}
                  label="Nome da versão"
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
                  control={control}
                  defaultValue={field.url}
                  name={`tracks.${index}.url`}
                  label="URL da música"
                  placeholder="Link para download da música"
                  type="text"
                  labelTooltip={
                    <Tooltip content="Formato WAV 16bits 44100hz mixada e masterizada." />
                  }
                />
              </Box>

              <Box>
                <Input
                  control={control}
                  defaultValue={field.track_artist}
                  name={`tracks.${index}.track_artist`}
                  label="Artista(s)"
                  type="text"
                  mb={8}
                />
                <Input
                  control={control}
                  defaultValue={field.remixer_name}
                  name={`tracks.${index}.remixer_name`}
                  isDisabled={watchMixName !== 'Remix'}
                  label="Remix(ers)"
                  type="text"
                  mb={8}
                  labelTooltip={
                    <Tooltip
                      content={
                        watchMixName !== 'Remix'
                          ? `Para habilitar, selecione o nome da versão como "Remix".`
                          : 'Adicionar o nome dos artistas separado por vírgula.'
                      }
                    />
                  }
                />
                <Select
                  control={control}
                  defaultValue={field.genre}
                  name={`tracks.${index}.genre`}
                  label="Gênero"
                  placeholder="Selecione um gênero..."
                  options={genreData}
                />
              </Box>
            </SimpleGrid>
          </Flex>
        )
      })}
      <Flex justify="space-between">
        <Button
          variant="linkSecondary"
          alignSelf="flex-start"
          onClick={() => {
            append({
              name: '',
              mix_name: '',
              track_artist: me?.user.artist_name,
              remixer_name: '',
              genre: '',
              url: ''
            })
          }}
        >
          {'[+] Adicionar mais tracks'}
        </Button>
        <Button
          variant="primary"
          type="submit"
          isLoading={isLoading}
          isDisabled={!isValid}
        >
          Enviar para análise
        </Button>
      </Flex>
    </>
  )
}
