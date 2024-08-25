export const updateCart = (state, action) => {
  state.itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalPaid = state.paymentHistory.reduce(
    (acc, payment) => acc + payment,
    0
  );

  state.paymentAmount = totalPaid;

  state.remainingAmount = Math.max(state.itemsPrice - totalPaid, 0);

  // Calculate the change if the total payment amount exceeds the total price
  state.changeAmount =
    totalPaid > state.itemsPrice ? totalPaid - state.itemsPrice : 0;

  if (state.isCardPayment && state.installmentOption) {
    state.totalWithInterest = state.itemsPrice * 1.1;

    const installmentAmount = state.totalWithInterest / state.installmentOption;
    state.installmentDetails = Array(state.installmentOption).fill(
      installmentAmount
    );
  } else if (state.isSinglePayment) {
    state.totalWithInterest = state.itemsPrice;
    state.installmentDetails = [];
  } else {
    state.totalWithInterest = state.itemsPrice;
    state.installmentDetails = [];
  }

  return state;
};
