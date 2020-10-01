import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Applications from './components/Applications';
import ContactForm from './components/Contact';

function App() {

  const [categories] = useState([
    { name: 'front', description: 'Exclusively Front End Projects' },
    { name: 'back', description: 'Exclusively Back End Projects' },
    { name: 'full', description: 'Front and Back End Projects' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>

        {!contactSelected ? (
          <>
            <Applications currentCategory={currentCategory}></Applications>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}

      </main>
    </div>
  );
}

export default App;