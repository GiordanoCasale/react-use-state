import { useState } from 'react'
import AccordionButton from './components/AccordionButton';
import AccordionContent from './components/AccordionContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='big-container'>
        <h1>Learn Web Development</h1>
      </div>
      <AccordionButton />
      <AccordionContent />
    </>
  );
};

export default App
