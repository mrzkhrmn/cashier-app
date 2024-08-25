import { Modal, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCardPayment,
  setInstallmentOption,
  setSinglePayment,
} from "../redux/reducers/cartReducer";

export const PayWithCardModal = ({ openModal, setOpenModal }) => {
  const { itemsPrice, remainingAmount, totalWithInterest, installmentDetails } =
    useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleInstallmentChange = (installment) => {
    dispatch(setCardPayment(true));
    dispatch(setInstallmentOption(installment));
  };
  const handleSinglePayment = () => {
    dispatch(setSinglePayment());
  };

  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Pay With Card</Modal.Header>
      <Modal.Body>
        <div className="flex  gap-8">
          <div className="flex flex-col space-y-6 ">
            <div className="flex items-center gap-1">
              <p className="text-lg leading-relaxed ">Amount to be paid:</p>
              <p className="text-lg leading-relaxed ">{itemsPrice}$</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="bg-gray-200 hover:bg-gray-300 transition duration-200 py-3 px-4 rounded-md"
                onClick={handleSinglePayment}
              >
                Single Payment
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 transition duration-200 py-3 px-4 rounded-md"
                onClick={() => handleInstallmentChange(2)}
              >
                2 Installment
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 transition duration-200 py-3 px-4 rounded-md"
                onClick={() => handleInstallmentChange(3)}
              >
                3 Installment
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 transition duration-200 py-3 px-4 rounded-md"
                onClick={() => handleInstallmentChange(4)}
              >
                4 Installment
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4 gap-2">
                <p className="text-lg leading-relaxed ">
                  Total with interests:
                </p>
                <p className="text-lg leading-relaxed ">
                  {totalWithInterest.toFixed("2")}$
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {installmentDetails.map((installment, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    Installment {index + 1}: {installment.toFixed(2)}$
                  </p>
                ))}
              </div>
            </div>
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
