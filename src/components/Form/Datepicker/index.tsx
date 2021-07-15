import 'react-day-picker/lib/style.css'

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  useBoolean
} from '@chakra-ui/react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { format as dateFnsFormat, addWeeks, addMonths, addDays } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Field, FieldProps } from 'formik'

export const Datepicker = ({
  label,
  name,
  showErrorMessage,
  ...props
}: Props) => {
  const [blur, setBlur] = useBoolean()

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        const isInvalid = !!form.errors[name] && !!form.touched[name]

        return (
          <FormControl
            id={name}
            isInvalid={isInvalid}
            onFocus={setBlur.off}
            onBlur={setBlur.on}
            {...props}
          >
            {label && (
              <FormLabel color="brand.gray.5" fontSize="lg">
                {label}
              </FormLabel>
            )}
            <InputGroup d="flex" flexDirection="column">
              <DayPickerInput
                {...field}
                placeholder={new Date().toLocaleDateString()}
                formatDate={formatDate}
                format="dd/MM/yyyy"
                dayPickerProps={{
                  locale: 'pt-BR',
                  months: MONTHS['pt-BR'],
                  weekdaysLong: WEEKDAYS_LONG['pt-BR'],
                  weekdaysShort: WEEKDAYS_SHORT['pt-BR'],
                  labels: LABELS['pt-BR'],
                  month: addMonths(new Date(), 1),
                  fromMonth: addMonths(new Date(), 1),
                  disabledDays: [
                    {
                      from: new Date(),
                      to: addDays(addWeeks(new Date(), 6), 2)
                    },
                    {
                      before: new Date()
                    }
                  ]
                }}
                onDayChange={(day) => form.setFieldValue(name, day)}
                component={Input}
              />
              {isInvalid && blur && (
                <>
                  {showErrorMessage && (
                    <FormErrorMessage mt={0.5} ml={1}>
                      {form.errors[name]}
                    </FormErrorMessage>
                  )}
                </>
              )}
            </InputGroup>
          </FormControl>
        )
      }}
    </Field>
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
}
