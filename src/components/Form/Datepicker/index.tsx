import 'react-day-picker/lib/style.css'

import {
  Flex,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  useBoolean
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { format as dateFnsFormat, addDays } from 'date-fns'
import { Control, useController } from 'react-hook-form'

export const Datepicker = ({
  label,
  name,
  showErrorMessage,
  labelTooltip,
  control,
  defaultValue,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { invalid, error }
  } = useController({
    name,
    control,
    defaultValue
  })
  return (
    <FormControl
      id={name}
      isInvalid={invalid}
      onFocus={setBlur.off}
      onBlur={setBlur.on}
      {...props}
    >
      {label && (
        <Flex alignItems="center" mb={2}>
          <FormLabel color="brand.gray.5" fontSize="lg" mb={0}>
            {label}
          </FormLabel>
          {labelTooltip}
        </Flex>
      )}
      <InputGroup
        d="flex"
        flexDirection="column"
        maxW="135px"
        css={`
          .DayPickerInput-Overlay {
            border-radius: var(--chakra-radii-lg);
          }
          .DayPicker-Day {
            height: 40px;
            width: 40px;
            padding: 0;
          }
          .DayPicker-Day--disabled {
            cursor: not-allowed;
          }
          .DayPicker:not(.DayPicker--interactionDisabled)
            .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
            background-color: var(--chakra-colors-brand-primary);
            color: var(--chakra-colors-white);
          }
        `}
      >
        <DayPickerInput
          placeholder=""
          formatDate={formatDate}
          format="dd/MM/yyyy"
          dayPickerProps={{
            locale: 'pt-BR',
            months: MONTHS['pt-BR'],
            weekdaysLong: WEEKDAYS_LONG['pt-BR'],
            weekdaysShort: WEEKDAYS_SHORT['pt-BR'],
            labels: LABELS['pt-BR'],
            month: addDays(new Date(), 40),
            fromMonth: addDays(new Date(), 40),
            disabledDays: [
              {
                from: new Date(),
                to: addDays(new Date(), 40)
              },
              {
                before: new Date()
              }
            ]
          }}
          component={Input}
          onDayChange={(day) => onChange(day)}
          ref={ref}
          onBlur={onBlur}
          value={value || ''}
        />
        {invalid && blur && (
          <>
            {showErrorMessage && (
              <FormErrorMessage mt={0.5} ml={1}>
                {error.message}
              </FormErrorMessage>
            )}
          </>
        )}
      </InputGroup>
    </FormControl>
  )
}

const formatDate = (date: number | Date, format: string) =>
  dateFnsFormat(date, format, { locale: ptBR })

const WEEKDAYS_SHORT = {
  'pt-BR': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
}

const MONTHS = {
  'pt-BR': [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
}

const WEEKDAYS_LONG = {
  'pt-BR': [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
}

const LABELS = {
  'pt-BR': { nextMonth: 'Próximo mês', previousMonth: 'Mês anterior' }
}

interface Props extends FormControlProps {
  name: string
  showErrorMessage?: boolean
  label?: string
  labelTooltip?: ReactNode
  defaultValue?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
