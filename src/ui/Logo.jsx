import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
        <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;
