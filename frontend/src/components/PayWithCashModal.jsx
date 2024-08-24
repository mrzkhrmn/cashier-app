import { Modal, Button } from "flowbite-react";
import { Input } from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setPaymentAmount } from "../redux/reducers/cartReducer";

export const PayWithCashModal = ({ openModal, setOpenModal }) => {
  const { itemsPrice, remainingAmount, changeAmount } = useSelector(
    (state) => state.cart
  );
  const [paymentAmountData, setPaymentAmountData] = useState(0);

  const dispatch = useDispatch();

  const handleEnterPaidAmount = () => {
    dispatch(setPaymentAmount(Number(paymentAmountData)));
  };
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Pay With Cash</Modal.Header>
      <Modal.Body>
        <div className="space-y-6 flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-lg leading-relaxed ">Amount to be paid:</p>
            <p className="text-lg leading-relaxed ">{itemsPrice}$</p>
          </div>
          <div className="flex items-center">
            <div>
              <Input
                type="number"
                placeholder="Enter paid amount..."
                style="outline-none"
                onChange={(e) => setPaymentAmountData(e.target.value)}
              />
            </div>
            <button
              onClick={handleEnterPaidAmount}
              className="bg-green-400 hover:bg-green-500 py-2 px-2 text-white rounded-r-md border border-black border-l-transparent"
            >
              Confirm
            </button>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg leading-relaxed ">Remaining amount:</p>
            <p className="text-lg leading-relaxed ">
              {remainingAmount.toFixed("2")}$
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-lg leading-relaxed ">Change:</p>
            <p className="text-lg leading-relaxed ">
              {changeAmount.toFixed("2")}$
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Complete and print</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
