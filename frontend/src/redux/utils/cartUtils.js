export const updateCart = (state, action) => {
  state.itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalPaid = state.paymentHistory.reduce(
    (acc, payment) => acc + payment,
    0
  );
  state.remainingAmount = Math.max(state.itemsPrice - totalPaid, 0);

  // Calculate the change if the total payment amount exceeds the total price
  state.changeAmount =
    totalPaid > state.itemsPrice ? totalPaid - state.itemsPrice : 0;

  return state;
};
