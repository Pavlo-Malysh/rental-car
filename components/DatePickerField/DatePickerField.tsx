"use client"
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerField.module.css';

interface DatePickerFieldProps {
    name: string;
    placeholder?: string;
    className?: string;
}

const DatePickerField = ({ name, placeholder, className }: DatePickerFieldProps) => {
    const [field, , helpers] = useField(name);

    return (
        <DatePicker
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => {
                helpers.setValue(date ? date.toISOString().split('T')[0] : '');
            }}
            dateFormat="yyyy-MM-dd"
            placeholderText={placeholder}
            className={className}
            minDate={new Date()}
        />
    );
};

export default DatePickerField;
