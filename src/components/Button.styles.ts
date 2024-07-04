import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';

interface ButtonContainerPros {
    variant?: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger: 'red',
    sucess: 'green'

};

export const ButtonContainer = styled.button<ButtonContainerPros>`
width: 100px;
height: 40px;
border-radius: 4px;
border: 0;
margin: 0px;

background-color: ${props => props.theme['gray-500']};
color: ${props => props.theme['gray-500']};


`