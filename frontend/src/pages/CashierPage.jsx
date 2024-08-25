import { useState } from "react";
import { CashierHeader } from "../components/CashierHeader";
import { Input } from "../components/Input";
import { ProductCartCard } from "../components/ProductCartCard";
import { ProductListCard } from "../components/ProductListCard";
import { productsData } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/reducers/cartReducer";
import { quickProductsData } from "../data/quickProducts";
import { QuickProductButton } from "../components/QuickProductButton";
import { PayWithCashModal } from "../components/PayWithCashModal";
import { PayWithCardModal } from "../components/PayWithCardModal";
import { ClearCartModel } from "../components/ClearCartModal";
import toast from "react-hot-toast";

export const CashierPage = () => {
  const { cartItems, itemsPrice } = useSelector((state) => state.cart);
  const [products, setProducts] = useState(productsData);
  const [quickProducts, setQuickProducts] = useState(quickProductsData);
  const [sortData, setSortData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openCashModal, setOpenCashModal] = useState(false);
  const [openCardModal, setOpenCardModal] = useState(false);
  const [openClearCartModel, setOpenClearCartModel] = useState(false);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSorting = (e) => {
    const value = e.target.value;
    setSortData(value);

    if (value === "name") {
      const sortedProducts = [...products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProducts(sortedProducts);
    }
    if (value === "price") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    }
    if (value === "category") {
      const sortedProducts = [...products].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      setProducts(sortedProducts);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const filteredItems = productsData.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredItems);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePayWithCash = () => {
    if (cartItems.length === 0) {
      toast.error("There must be at least 1 product at cart!");
      return;
    }
    setOpenCashModal(true);
  };

  const handlePayWithCard = () => {
    if (cartItems.length === 0) {
      toast.error("There must be at least 1 product at cart!");
      return;
    }
    setOpenCardModal(true);
  };

  return (
    <>
      <div className="w-full p-8 bg-black/5">
        <CashierHeader />
        <div className="h-[85vh] flex gap-4">
          <div className=" w-[60%] h-full rounded-md p-4 border border-black/20 overflow-auto">
            <form
              className="w-full flex items-center justify-between gap-4 mb-6"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex">
                <Input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style="w-full py-2 rounded-l-md px-2 outline-none"
                  placeholder={"Search for products..."}
                  required={false}
                />
                <button className="bg-blue-400 px-4 rounded-r-md text-white hover:bg-blue-500 transition duration-200">
                  Search
                </button>
              </div>
              <select
                onChange={handleSorting}
                value={sortData}
                className="py-2 pl-4 pr-2 bg-transparent border outline-none border-black rounded-md"
              >
                <option value="">Sort By</option>
                <option value="price">By Price</option>
                <option value="name">By Name</option>
                <option value="category">By Category</option>
              </select>
            </form>
            <div className="bg-white py-4 ">
              <div className="flex flex-wrap  gap-6  items-center overflow-hidden justify-center">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductListCard key={product.id} product={product} />
                  ))
                ) : (
                  <h1 className=" text-3xl mx-auto">
                    There is no product for looking for!
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="w-[40%] h-full flex flex-col ">
            <div className="w-full h-full rounded-md py-4 border border-black/20 overflow-hidden overflow-y-auto flex flex-col">
              <h1 className="font-semibold text-3xl text-center">Cart</h1>
              <div className="flex justify-between items-center gap-1 px-4 my-6">
                {quickProducts.map((product) => (
                  <QuickProductButton key={product.id} product={product} />
                ))}
                <button
                  onClick={() => setOpenClearCartModel(true)}
                  className="bg-red-400 py-2 px-3 rounded-md hover:bg-red-500 transition duration-200 h-[65px] text-white"
                >
                  Clear Cart
                </button>
              </div>
              <h2 className="text-xl px-4 mb-6">
                {cartItems.length} Products at Cart
              </h2>
              <div className="flex flex-col gap-4 h-full w-full  ">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item) => (
                      <ProductCartCard key={item.id} item={item} />
                    ))}
                  </>
                ) : (
                  <h1 className="text-3xl text-center">
                    There are no any products!
                  </h1>
                )}
              </div>
            </div>
            <div className="h-32 w-full flex flex-col justify-center items-center gap-1">
              <div className="flex items-center justify-between text-xl w-full p-2">
                <p>Total Cash Price:</p>
                <p>{itemsPrice.toFixed(2)}$</p>
              </div>
              <div className="flex items-center gap-1 w-full h-full">
                <button
                  className="w-[50%] bg-green-500 h-full text-lg text-white font-semibold hover:bg-green-600"
                  onClick={handlePayWithCash}
                >
                  Pay with Cash
                </button>
                <button
                  className="w-[50%] bg-blue-500  h-full text-lg text-white font-semibold hover:bg-blue-600 active:scale-105"
                  onClick={handlePayWithCard}
                >
                  Pay with Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PayWithCashModal
        openModal={openCashModal}
        setOpenModal={setOpenCashModal}
      />
      <PayWithCardModal
        openModal={openCardModal}
        setOpenModal={setOpenCardModal}
      />
      <ClearCartModel
        openModal={openClearCartModel}
        setOpenModal={setOpenClearCartModel}
        onClearCart={handleClearCart}
      />
    </>
  );
};
