// React context

import { get, writable } from 'svelte/store';

export const cartItems = writable<CartItem[]>([]);
// [ {id:"1", quantity:"3"}, {id:"2", quantity: "5"}]

// add to cart (add one)
export const addToCart = (id: string) => {
	// cartItems is a writable , not a value
	const items = get(cartItems);
	const itemPosition = items.findIndex((item) => {
		return item.id == id;
	});

	if (itemPosition !== -1) {
		//  Item is in the cart. add the quantity of the item
		cartItems.update(() => {
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					return { ...items, quantity: item.quantity + 1 };
				}
				return item;
			});
			return updatedItems;
		});
	} else {
		// Item is not in the cart, so add the object to the car
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	}
};

// remove from cart (remove one) ->  change the value of the writable
export const removeFromCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex((item) => {
		return item.id == id;
	});

	if (items[itemPosition]?.quantity === 0) {
		items.splice(itemPosition, 1);
	}

    cartItems.update(() => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...items, quantity: item.quantity - 1 };
            }
            return item;
        });
        return updatedItems;
    });
};
