import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";


import { CartIconContainer, ItemCount, CartIconSvg } from "./cart-icon.styles";

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <CartIconSvg 
                src={ShoppingIcon} 
                alt="cart icon" 
            />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};


export default CartIcon;