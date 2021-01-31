import React from 'react';
import {
    FooterComponent,
    Name,
    NavList,
    IconContainer,
    Youtube,
    Facebook,
    CopyrightText,
    CopyrightImage,
    CopyrightImageContainer,
    CopyrightImageText,
} from './styles';
import { Navlink as NavlinkComponent } from '../Navlink';
import { NAV_TITLES } from '../../constants/navTitles';
import styled from 'styled-components';
import copyrightImageEduardus from '../../images/eduardusLee.png';
import copyrightImageMarie from '../../images/mariejeanne.jpg';

export const Footer = () => (
           <FooterComponent>
               <Name>Tatjana Neufeld</Name>
               <NavList>
                   {NAV_TITLES.map(title => (
                       <Navlink key={title} title={title} />
                   ))}
               </NavList>
               <IconContainer>
                   <a aria-label="Youtube" href="https://youtube.com">
                       <Youtube />
                   </a>
                   <a
                       aria-label="Facebook"
                       href="https://www.facebook.com/profile.php?id=100005453388422"
                   >
                       <Facebook />
                   </a>
               </IconContainer>
               <CopyrightText>
                   © Copyright Tatjana Neufeld 2020, Made by{' '}
                   <a
                       href="https://github.com/zlobizlobi"
                       style={{
                           color: 'white',
                       }}
                   >
                       zlobizlobi
                   </a>
               </CopyrightText>
               <CopyrightImageContainer
                   href="https://www.instagram.com/mjvhovelltwesterflier"
                   target="_blank"
               >
                   <CopyrightImage
                       alt="Marie-Jeanne van Hövell"
                       src={copyrightImageMarie}
                   />
                   <CopyrightImageText>
                       Marie-Jeanne van Hövell Photography
                   </CopyrightImageText>
               </CopyrightImageContainer>
               <CopyrightImageContainer
                   href="https://www.instagram.com/eduarduslee"
                   target="_blank"
               >
                   <CopyrightImage
                       alt="Eduardus Lee"
                       src={copyrightImageEduardus}
                   />
                   <CopyrightImageText>
                       Eduardus Lee Photography
                   </CopyrightImageText>
               </CopyrightImageContainer>
           </FooterComponent>
       );

const Navlink = styled(NavlinkComponent)`
    font-size: 10px;
`;
