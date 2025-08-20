import { Button, Card, CardBody, CardTitle } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type ShopItemProps = {
    id: number
    name: string
    price: number
    imageUrl: string
}
export function ShopItem({ id, name, price, imageUrl}: ShopItemProps){
    const { getItemQunatity,increaseCartQunatity, decreaseCartQunatity, removeFromCart } = useCart()
    const quantity = getItemQunatity(id)
    return (
    <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} height="200px" style={{ objectFit: "cover" }} />
        <CardBody className="d-flex flex-column">
            <CardTitle className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">${price}</span>
            </CardTitle>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQunatity(id)}>+ Add to Cart</Button> ):
                    (<div className="d-flex align-items-center flex-column" style={{ gap:".5rem"}}> 
                    <div className="d-flex align-items-center justify-content-center" style={{ gap:".5rem"}}>
                        <Button onClick={() => decreaseCartQunatity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseCartQunatity(id)}>+</Button>
                    </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div> )}
            </div>
        </CardBody>
    </Card>
    )}