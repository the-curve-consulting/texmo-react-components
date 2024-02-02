import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';

export interface FormDateTime extends DateTimePickerProps<Date> {}

const FormDateTime = ({ ...rest }: FormDateTime) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        slotProps={{
          textField: {
            fullWidth: true,
          },
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default FormDateTime;
