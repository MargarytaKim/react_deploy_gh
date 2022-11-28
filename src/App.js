
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Additem from './Components/Additem';

function App() {
  return (
    <div className="App">
      <Header title="React title" />
      <main>
        {/* <Additem/> */}
        <Content/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
