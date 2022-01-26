import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
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
