export default function cart(prevState = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...prevState, action.product];
    default:
      return prevState;
  }
}
