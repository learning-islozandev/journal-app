import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});


    useEffect(() => {
        createValidators();
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {
        const formCheckedValues = {};
        Object.keys(formValidations).forEach((key) => {
            const value = formValidations[key];
            if (Array.isArray(value)) {
                const [validator, message] = value;
                const isValid = validator(formState[key]);
                formCheckedValues[`${key}Valid`] = isValid ? null : message;
            }
        });
        setFormValidation(formCheckedValues);
    }


    // const isFormValid = () => {
    //     return Object.keys(formValidations).every((key) => {
    //         return formValidations[key].required ? formState[key] : true;
    //     });
    // }

    // const validateField = (field) => {
    //     const fieldValidations = formValidations[field];
    //     // if (!fieldValidations) return true;
    //     if (fieldValidations.required && !formState[field]) {
    //         return fieldValidations.required.message;
    //     }   
    //     if (fieldValidations.pattern && !fieldValidations.pattern.value.test(formState[field])) {
    //         return fieldValidations.pattern.message;
    //     }
    //     if (fieldValidations.minLength && formState[field].length < fieldValidations.minLength.value) {
    //         return fieldValidations.minLength.message;
    //     }
    //     // return true;
    // }

    // const validateForm = () => {
    //     const formValidation = {};
    //     Object.keys(formValidations).forEach((key) => {
    //         const error = validateField(key);
    //         if (error) {
    //             formValidation[key] = error;
    //         }
    //     });
    //     setFormValidation(formValidation);
    // }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}