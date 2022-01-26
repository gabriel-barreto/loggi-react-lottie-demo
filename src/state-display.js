import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = styled(SyntaxHighlighter)`
  border-radius: var(--borderRadius);
  width: 40ch;
`;

export function StateDisplay({ state }) {
  return (
    <Code language='json' style={dracula}>
      {JSON.stringify(state, null, 2)}
    </Code>
  );
}
