

export const addItemtoCart = (cartItems, cartItemToAdd) => {
const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
);

if (existingCartItem){
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id?{...cartItem, quantity: cartItem.quantity +1}: cartItem);
}

return [...cartItems, {...cartItemToAdd, quantity:1}];
};

export const removeItemFromCart = (cartItems, cartItemTORemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemTORemove.id
    );
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemTORemove.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === cartItemTORemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
};