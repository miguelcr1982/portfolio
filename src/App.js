import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';

const App = () => {
  return (
    <div >
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App;
