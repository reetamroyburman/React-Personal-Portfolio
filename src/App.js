import './App.css';
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navbar/NavBar.jsx'
import Skills from './components/skills/Skills'
import Services from'./components/services/Services'

function App() {
  return (
    <div>
      <NavBar/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
      </main>
    </div>
  );
}

export default App;
