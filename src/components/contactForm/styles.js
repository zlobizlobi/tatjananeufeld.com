import styled from 'styled-components';
import { Form as FormComponent, Field as FormFieldComponent } from 'formik';

export const Form = styled(FormComponent)`
    display: flex;
    flex-direction: column;
`;

export const ErrorWrapper = styled.span`
    font-size: 11px;
    color: #b7b7b7;
    margin-top: 5px;
`;

export const Field = styled(FormFieldComponent)`
    margin-bottom: 5px;
    padding: 15px 12.5px;
    background-color: transparent;
    border: ${({ error }) =>
        error ? '1px solid #cc0000' : '1px solid rgba(255, 255, 255, 0.5)'};
    border-radius: 1px;
    color: white;
    ::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
    padding: 9px;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    color: white;
    transition: all 0.2s ease;
    font-weight: lighter;
    text-transform: uppercase;

    :hover {
        background-color: white;
        color: black;
    }
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    &:last-child {
        margin: 0;
    }

    > textarea {
        min-height: 150px;
        resize: none;
    }
`;
