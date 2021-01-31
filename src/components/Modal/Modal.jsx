import React, { useRef } from 'react';
import { useScrollLock, useHideModal, useModal } from '@hooks';
import { FiX } from 'react-icons/fi';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { media } from '@styles';

export const Modal = ({ children, ...props }) => {
    const { hideModal, open } = useModal();

    const modalVisibilityAnimation = useSpring({
        opacity: open ? '1' : '0',
        transform: open ? 'translateY(0px)' : 'translateY(-100%)',
    });

    const modalRef = useRef(null);

    useScrollLock(open);

    const { useKeyEscapeModal, useClickEscapeModal } = useHideModal();

    useClickEscapeModal(modalRef);

    useKeyEscapeModal();

    return (
        <ModalContainer style={modalVisibilityAnimation}>
            <IconContainer>
                <CloseIcon onClick={hideModal} />
            </IconContainer>
            <ContentContainer {...props} ref={modalRef}>
                {children}
            </ContentContainer>
        </ModalContainer>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 1;
    min-width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 61px;
    z-index: 50;
`;

const ModalContainer = animated(props => <Container {...props} />);

const ContentContainer = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    max-width: 100%;
    height: 100vh;

    ${media.md(`
        max-width: 600px;
        height: calc(100vh - 150px);
    `)}
`;

const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 4;
    top: 0;
    padding: 5px 5px 0 0;

    ${media.md(`
        padding: 30px 30px 0 0;
    `)}
`;

const CloseIcon = styled(FiX)`
    width: 25px;
    height: 25px;
    color: white;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    :hover {
        opacity: 1;
    }

    ${media.md(`
        max-width: 600px;
        width: 40px;
        height: 40px;
    `)}
`;
