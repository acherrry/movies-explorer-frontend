import React from "react";
import { useCallback } from "react";
import isEmail from 'validator/lib/isEmail';
import regExpUserName from "./config";

export default function useFormWithValidation(initialInputsValues) {
  const [values, setValues] = React.useState(initialInputsValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const validationMessage = target.validationMessage;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setSpecificValuesErrors(name, value, validationMessage);

    setIsValid(target.closest("form").checkValidity());
  };

  function setValuesErrors(name, validationMessage) {
    setErrors((prevState) => ({
      ...prevState,
      [name]: validationMessage,
    }));
  };

  function setSpecificValuesErrors(name, value, validationMessage) {
    switch (name) {
      case 'name':
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: 'Пожалуйста, заполните поле',
          }));
        }
        else if (value.length < 2 || value.length > 30) {
          setErrors((prevState) => ({
            ...prevState,
            [name]: 'Поле должно содержать от 2 до 30 символов',
          }));
        }
        else if (regExpUserName.test(value) !== true) {
          setErrors((prevState) => ({
            ...prevState,
          [name]: 'Поле может включать буквы русского и латинского алфавита, дефис, пробел',
          }));
        } else {
          setValuesErrors(name,  validationMessage);
        }
        break;

        case 'email':
          if (!isEmail(value)) {
            setErrors((prevState) => ({
              ...prevState,
              [name]: 'Пожалуйста, укажите электронную почту',
            }));
          } else if (value.length === 0) {
            setErrors((prevState) => ({
              ...prevState,
              [name]: 'Пожалуйста, укажите электронную почту',
            }));
          } else {
            setValuesErrors(name,  validationMessage);
          }
          break;

          case 'password':
          if (value.length === 0) {
            setErrors((prevState) => ({
              ...prevState,
              [name]: 'Пожалуйста, укажите Ваш пароль',
            }));
          } else {
            setValuesErrors(name,  validationMessage);
          }
          break;

        default:
          setValuesErrors(name,  validationMessage);
  };
};

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}