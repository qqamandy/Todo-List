
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  return (
    <div className='App'>
      <div className='container w-1/2 mx-auto my-10 border-2'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>



  );
}

export default App;
