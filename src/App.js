import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Eccomerce from "./pages/Eccomerce";
import Jewelry from "./pages/Jewelry";
function App() {
  return (
    <BrowserRouter>
      <Nav className={`nav_bar  `} style={{ background: "teal" }}>
        <Nav.Item>
          <Nav.Link as={Link} to="/eccommerce" style={{ color: "black" }}>
            Eccommerce
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/jewelry" style={{ color: "black" }}>
            Jwelery
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/eccommerce" element={<Eccomerce />} />
        <Route path="/jewelry" element={<Jewelry />} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
