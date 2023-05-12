import React from "react";
// import { backend_url } from "../../server";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";

const EventCard = ({ active }) => {
  // const EventCard = ({ active, data }) => {
  //   const { cart } = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();

  //   const addToCartHandler = (data) => {
  //     const isItemExists = cart && cart.find((i) => i._id === data._id);
  //     if (isItemExists) {
  //       toast.error("Item already in cart!");
  //     } else {
  //       if (data.stock < 1) {
  //         toast.error("Product stock limited!");
  //       } else {
  //         const cartData = { ...data, qty: 1 };
  //         dispatch(addTocart(cartData));
  //         toast.success("Item added to cart successfully!");
  //       }
  //     }
  //   };

  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>iphone 14pro max</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dicta a quos expedita doloremque voluptatum, voluptas ab sequi natus,
          deserunt iure earum possimus illum quidem ipsa accusamus? Aperiam sint
          voluptates vel necessitatibus perferendis magnam repellat voluptate
          porro a architecto, tempora ratione nulla libero aspernatur,
          consequatur veritatis illum consectetur quaerat explicabo?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
