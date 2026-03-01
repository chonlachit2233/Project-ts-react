

export interface CartItem {
    id: number
    count: number
    price: number
}

export interface AddtoCartBody  {
    cart: CartItem[]
}