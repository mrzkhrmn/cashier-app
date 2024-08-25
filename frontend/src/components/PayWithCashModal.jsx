import { Modal, Button } from "flowbite-react";
import { Input } from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removePayment, setPaymentAmount } from "../redux/reducers/cartReducer";
import { MdOutlineClose } from "react-icons/md";

export const PayWithCashModal = ({ openModal, setOpenModal }) => {
  const { itemsPrice, remainingAmount, changeAmount, paymentHistory } =
    useSelector((state) => state.cart);
  const [paymentAmountData, setPaymentAmountData] = useState(0);

  const dispatch = useDispatch();

  const handleEnterPaidAmount = () => {
    dispatch(setPaymentAmount(Number(paymentAmountData)));
  };

  const handleRemoveEnteredPayment = (index) => {
    dispatch(removePayment(index));
  };
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Pay With Cash</Modal.Header>
      <Modal.Body>
        <div className="flex  gap-8">
          <div className="flex flex-col space-y-6 ">
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
          {paymentHistory.length > 0 && (
            <div>
              {paymentHistory.map((payment, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-200 p-2 rounded-md"
                >
                  <p className="text-lg">Paid {payment}$</p>
                  <button
                    onClick={() => handleRemoveEnteredPayment(i)}
                    className="text-lg"
                  >
                    <MdOutlineClose />
                  </button>
                </div>
              ))}
            </div>
          )}
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
