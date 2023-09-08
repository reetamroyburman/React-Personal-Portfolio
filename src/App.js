import './App.css';
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navbar/NavBar.jsx'
function App() {
  return (
    <div>
      <NavBar/>

      <main className='main'>
        <Home/>
        <About/>
      </main>
    </div>
  );
}

export default App;
