import styled from 'styled-components'

import {
    Form as FormComponent,
    Field as FormFieldComponent,
    ErrorMessage,
} from 'formik'

export const Form = styled(FormComponent)`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

export const Field = styled(FormFieldComponent)`
    margin: 20px 0;
    padding: 5px 10px;

    &:last-child {
        margin: 0;
    }
`

export const Label = styled.label`
    color: white;
    font-size: 14px;
`

export const Button = styled.button.attrs({ type: 'submit' })`
    padding: 5px 7.5px;
    border: 1px solid rgba(255, 255, 255, 0.4);
`

export const ErrorMessageField = styled(ErrorMessage)`
    font-size: 12px;
    color: red;
`
