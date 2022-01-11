import React from 'react';
import Accordion from './utilities/Accordion';
import { accordionData } from './utilities/content';

const App = () => {
 
  return (
    <div>
      <h1>Accordions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;