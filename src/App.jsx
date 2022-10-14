import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";

import './styles/App.scss'


const App = () => {

  return (
    <BrowserRouter className="containerPages">
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
