import styled from 'styled-components'

import { Form as FormComponent, Field as FormFieldComponent } from 'formik'

export const Form = styled(FormComponent)`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`
export const Field = styled(FormFieldComponent)`
    margin-bottom: 5px;
    padding: 8.5px 10px;
    background-color: transparent;
    border: ${({ error }) =>
        error ? '2px solid #cc0000' : '1px solid rgba(255, 255, 255, 0.2)'};
    color: white;
    min-width: 250px;

    &:last-child {
        margin: 0;
    }

    ::placeholder {
        letter-spacing: 1px;
    }
`

export const Label = styled.label`
    color: white;
    font-size: 12px;
    margin-bottom: 5px;
`

export const Button = styled.button.attrs({ type: 'submit' })`
    padding: 9px;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    color: white;
    transition: all 0.2s ease;
    cursor: pointer;
    text-transform: uppercase;

    :hover {
        background-color: white;
        color: black;
    }
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:last-child {
        margin: 0;
    }
`

export const ErrorWrapper = styled.span`
    font-size: 10px;
    color: #cc0000;
`
