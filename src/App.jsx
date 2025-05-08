import { useState } from 'react'
import AccordionButton from './components/AccordionButton';
import AccordionContent from './components/AccordionContent';

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState(null)
  return (
    <>
      <div className='big-container'>
        <h1>Learn Web Development</h1>
      </div>
      <div className="container">
        <AccordionButton setActiveLanguage={setActiveLanguage} />
        <AccordionContent activeLanguage={activeLanguage} />
      </div>
    </>
  );
}

export default App
