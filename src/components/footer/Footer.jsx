import {
  ContainerFooter,
  RiGithubFillSt,
  RiLinkedinBoxLinSt,
  RiTelegramLineSt,
  SocialLi,
  SocialLink,
  WrapperSocial,
} from './Footer.styled';

const Footer = () => {
  return (
    <ContainerFooter>
      <WrapperSocial>
        <SocialLi>
          <SocialLink href="https://t.me/nechaev_roma" target="_blanc">
            <RiTelegramLineSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://github.com/Roman-Nechaev/goit-react-hw-05-movies"
            target="_blanc"
          >
            <RiGithubFillSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://www.linkedin.com/in/roman-kolenko/"
            target="_blanc"
          >
            <RiLinkedinBoxLinSt />
          </SocialLink>
        </SocialLi>
      </WrapperSocial>
    </ContainerFooter>
  );
};

export default Footer;
