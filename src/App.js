import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Applications from './components/Applications';
import ContactForm from './components/Contact';
import Resume from "./components/Resume"

function App() {

  const [categories] = useState([
    { name: 'front', description: 'Exclusively Front End Projects' },
    { name: 'back', description: 'Exclusively Back End Projects' },
    { name: 'full', description: 'Front and Back End Projects' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>

        {!contactSelected ? (
          <>
            <Applications currentCategory={currentCategory}></Applications>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}

      </main>
    </div>
  );
}

export default App;