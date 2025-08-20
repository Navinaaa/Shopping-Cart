import { Stack, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import storeItems from"../data/items.json"

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useCart();

    const item = storeItems.find(i => i.id === id);
    if (!item) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
            src={item.imageUrl}
            style={{width:"125px", height: "75px", objectFit:"cover"}}
        />
        <div className="me-auto">
            <div>
                {item.name}{" "} {quantity > 1 && <span className="text-muted" style={{ fontSize:".65rem"}}>
                    {quantity}x</span>}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>${item.price}</div>
            <div>${(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </div>
        </Stack>
    );
}
