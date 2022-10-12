import { BrowserRouter, Route, Link } from "react-router-dom";

import AllBooks from "./containers/AllBooks";
import AuthorsBooks from "./containers/AuthorsBooks";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Početna</Link>
          </li>
          <li>
            <Link to="/authors-books/">Knjige odabranog autora</Link>
          </li>
          <li>
            <Link to="/contact/">Kontakt</Link>
          </li>
                    
        </ul>
      </nav>

      <Route path="/" exact component={AllBooks} />
      <Route path="/authors-books/" component={AuthorsBooks} />
      <Route path="/contact/" component={Contact} />      
    </div>
    </BrowserRouter>
  );
}

export default App;
