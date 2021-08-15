import { ReactNode } from 'react';

interface CanvasProps {
  children: ReactNode;
}

const Canvas= ({ children }: CanvasProps) =>{
  return (
    <div >
      <h1>Canvas</h1>
    </div>
  );
}

export default Canvas;
