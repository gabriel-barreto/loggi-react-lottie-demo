import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 4rem 0 0 0;
  width: 100%;

  @media screen and (min-height: 768px) {
    margin: 0;
    position: fixed;
    padding: 1rem;
    bottom: 0;
  }
`;

const Author = styled.a`
  color: var(--white);
  font-size: 0.875rem;
  text-decoration: none;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Author href='https://github.com/gabriel-barreto' target='_blank' rel='noreferrer; noopener'>
        Made with ❤️ by gabriel-barreto
      </Author>
    </FooterWrapper>
  );
}
