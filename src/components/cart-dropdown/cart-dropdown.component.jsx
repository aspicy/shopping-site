import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch(setIsCartOpen(false));
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map((item) => 
                        (<CartItem key={item.id} cartItem={item} />
                        )))
                    :
                    (<EmptyMessage>Your cart is empty</EmptyMessage>) 
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};


export default CartDropdown;