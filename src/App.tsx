import { Routes,Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Shop  from "./pages/Shop"
import Navbar from "./components/Navbar"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
    </CartProvider>
  )
}

export default App
