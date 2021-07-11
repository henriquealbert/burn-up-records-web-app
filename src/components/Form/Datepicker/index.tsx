import { Box } from '@chakra-ui/react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export const Datepicker = () => (
  <Box>
    <DayPickerInput onDayChange={(day) => console.log(day)} />
  </Box>
)
