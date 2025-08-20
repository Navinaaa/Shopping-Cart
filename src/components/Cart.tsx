import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type CartProps = {
    isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
    const { closeCart, cartItems } = useCart();

    const total = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total: ${total.toFixed(2)}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
