import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (formType, inputValue) => {
        return setValues({
            ...values,
            [formType]: inputValue
        });
    },
  ];
};
