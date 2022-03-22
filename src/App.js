import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
// BrowserRouter gives us the functionality to navigate around pages ( we moved it one level up so it can also surround the Category component)

// npm install framer-motion react-icons react-router-dom styled-components @splidejs/react-splide

function App() {
  return (
      <div className="App">
        <BrowserRouter>
           <Search/>
           <Category/>
           <Pages/>
        </BrowserRouter>
      </div>
  );
}

export default App;
