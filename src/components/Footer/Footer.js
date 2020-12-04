import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {Button} from '../../globalStyles'
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, FooterLink, FooterLinksWrapper, FooterLinkItems, FooterLinkTitles, SocialIconLink,SocialLogo, SocialMedia,SocialMediaWrap,SocialIcons, WebsiteRights, SocialIcon} from './Footer.element'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>
          You can unsubscribe at any time
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email"/>
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitles>About Us</FooterLinkTitles>
          <FooterLink to='/'>How it works</FooterLink>
          <FooterLink to='/'>Careers</FooterLink>
          <FooterLink to='/'>Investors</FooterLink>
          <FooterLink to='/'>Terms and Service</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitles>Contact Us</FooterLinkTitles>
          <FooterLink to='/'>How it works</FooterLink>
          <FooterLink to='/'>Careers</FooterLink>
          <FooterLink to='/'>Investors</FooterLink>
          <FooterLink to='/'>Terms and Service</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitles>Videos</FooterLinkTitles>
          <FooterLink to='/'>How it works</FooterLink>
          <FooterLink to='/'>Careers</FooterLink>
          <FooterLink to='/'>Investors</FooterLink>
          <FooterLink to='/'>Terms and Service</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitles>Videos</FooterLinkTitles>
          <FooterLink to='/'>How it works</FooterLink>
          <FooterLink to='/'>Careers</FooterLink>
          <FooterLink to='/'>Investors</FooterLink>
          <FooterLink to='/'>Terms and Service</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'><SocialIcon/>ULTRA</SocialLogo>
          <WebsiteRights>ULTRA @ 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube/></SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label="LinkIn"><FaLinkedin/></SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
