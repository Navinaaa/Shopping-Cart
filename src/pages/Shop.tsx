import { Col, Row } from "react-bootstrap"
import shopItems from "../data/items.json"
import { ShopItem } from "../components/ShopItems"

function Shop() {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {shopItems.map(item => (
            <Col key={item.id}><ShopItem {...item} /></Col>
        ))}        
    </Row>
    </>
  )
}

export default Shop
