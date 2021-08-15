import { ReactNode } from 'react';

import { Container } from './styles';
interface ToolsProps {
  children: ReactNode;
}

function Tools({ children }: ToolsProps) {
  return (
    <Container>
      <h1>Tools</h1>
      {children}
    </Container>
  );
};

export default Tools;
