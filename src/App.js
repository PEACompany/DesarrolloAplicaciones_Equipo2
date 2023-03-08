import './App.css';
import Banner from './components/banner';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer'

function App() {
  const array = ["Elemento 1","Elemento 2","Elemento 3","Elemento 4","Elemento 5"]
  return (
    <div className="wrapper">
      <Banner title='Texto 1'/>
      <Header />
      <Banner title='Texto 2'/>
      <Body title="Texto 3" array={array} />
      <Footer/>
    </div>
  );
}

export default App;
