import { useState } from 'react';
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('section1');

  const handleChangeActiveSection = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="App">
      <ul className="list">
        <li>
          <a
            onClick={() => handleChangeActiveSection('section1')}
            href="#section1"
            className={activeSection === 'section1' ? 'active' : ''}
          >
            *
          </a>
        </li>
        <li>
          <a
            onClick={() => handleChangeActiveSection('section2')}
            href="#section2"
            className={activeSection === 'section2' ? 'active' : ''}
          >
            *
          </a>
        </li>
        <li>
          <a
            onClick={() => handleChangeActiveSection('section3')}
            href="#section3"
            className={activeSection === 'section3' ? 'active' : ''}
          >
            *
          </a>
        </li>
        <li>
          <a
            onClick={() => handleChangeActiveSection('section4')}
            href="#section4"
            className={activeSection === 'section4' ? 'active' : ''}
          >
            *
          </a>
        </li>
      </ul>
      <header className="topnav">
        <div className="topnav-content">
          <a
            onClick={() => handleChangeActiveSection('section1')}
            href="#section1"
            className={activeSection === 'section1' ? 'active' : ''}
          >
            Section 1
          </a>
          <a
            onClick={() => handleChangeActiveSection('section2')}
            href="#section2"
            className={activeSection === 'section2' ? 'active' : 'none'}
          >
            Section 2
          </a>
          <a
            onClick={() => handleChangeActiveSection('section3')}
            href="#section3"
            className={activeSection === 'section3' ? 'active' : 'none'}
          >
            Section 3
          </a>
          <a
            onClick={() => handleChangeActiveSection('section4')}
            href="#section4"
            className={activeSection === 'section4' ? 'active' : 'none'}
          >
            Section 4
          </a>
        </div>
      </header>
      <section id='section1'>
        <h1>Section 1</h1>
      </section>
      <section id='section2'>
        <h1>Section 2</h1>
      </section>
      <section id='section3'>
        <h1>Section 3</h1>
      </section>
      <section id='section4'>
        <h1>Section 4</h1>
      </section>
    </div>
  )
}

export default App
