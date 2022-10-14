import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainHome from '../components/MainHome/MainHome';

import '../styles/App.scss'


const HomePage = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <MainHome className="main"></MainHome>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
