import { Field, useField } from 'formik';

import clsxm from '@/lib/clsxm';

export interface SelectProps {
  id: string;
  label: string;
  options: Option[];
}

export interface Option {
  key: string;
  value: string;
}

export const Select = ({ id, label, options }: SelectProps) => {
  const fieldProps = { label, id, name: id, options };
  const [_, meta] = useField(fieldProps);

  return (
    <label htmlFor={id} className='mb-2 mt-4 flex flex-col font-bold'>
      {label}
      <Field
        as='select'
        name={id}
        id={id}
        className={clsxm(
          'my-2 rounded-md px-4 py-2 ring-1 dark:bg-transparent font-normal',
          {
            'ring-red-600': meta.touched && meta.error,
            'ring-grey-400 dark:ring-slate-500': !meta.touched || !meta.error,
          },
        )}
        defaultValue='none'
      >
        <option value='none'>Please select</option>
        {options.map((option) => (
          <option value={option.value} key={option.key}>
            {option.value}
          </option>
        ))}
      </Field>
      <div className='font-sm font-normal text-red-600'>
        {meta.touched && meta.error}
      </div>
    </label>
  );
};
