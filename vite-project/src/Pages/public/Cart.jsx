// import { useContext, useEffect, useState } from "react";
// import CartCard from "../../components/CartCard";
import "./Cartpage.css";
// import { useCart } from "../../context/CartProvider";
// import { useNavigate } from "react-router-dom";
// import LoadingCartCard from "../../components/LoadingCartCard";
// import AlertBox from "../../components/AlertBox";

export function CartPage() {
//   const { cartState, cartDispatch } = useContext(useCart);
//   const [ btnClicked, setClicked ] = useState({clicked: false, message: ""}) 
  

//   const totalPrice = Math.floor(
//     (cartState?.mainCart ?? []).reduce(
//       (total, { price, qty }) => qty * (total + price),
//       0
//     )
//   );

//   useEffect(()=>{
//     window.scrollTo({
//       top: 100,
//       left: 100,
//       behavior: "smooth",
//     });
//   },[])

//   const navigate = useNavigate();

//   const wayToCheckout = () => {
//     if(cartState?.mainCart?.length){
//       cartDispatch({type: "checkOut"});
//       navigate("/address");
//     }else {
//       setClicked({clicked: !btnClicked?.clicked, message: "Cart is empty"})
//     }
//   };

  return (
    <>
      <div className="cartpage">
        <div className="left-cart-area">
          <h1>Your Cart</h1>
          {/* <p>
            TOTAL [{(cartState?.mainCart?.length ?? 0)}] <b>₹{totalPrice}</b>
          </p>
          {cartState?.cartLoading ? (
            <>
              <LoadingCartCard />
              <LoadingCartCard />
              <LoadingCartCard />
              <LoadingCartCard />
              <LoadingCartCard />
            </>
          ) : (cartState?.mainCart?.length ? (
            cartState?.mainCart?.map(
              ({ _id, title, description, price, image, qty }) => (
                <CartCard
                  id={_id}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                  qty={qty}
                />
              )
            )
          ) : (
            "Your cart is Empty"
          ))}
        </div>
        <div className="right-cart-area">
          <button className="btn btn-primary" onClick={wayToCheckout}>
            PROCEED TO CHECKOUT
          </button>
          <h2>Order summary</h2>
          <div className="sec1-cart-right">
            <p>{cartState?.mainCart?.length ?? 0} item</p>
            <p>₹{totalPrice}</p>
          </div>
          
            {cartState?.mainCart?.map(({title, price, qty})=><div className="sec1-cart-right"><p>{title} x{qty}</p>
            <p>₹{price}</p></div>)}
           */}
          <div className="sec2-cart-right">
            <p>Delivery</p>
            <p>FREE</p>
          </div>
          <hr />
          <div className="sec3-cart-right">
            <div>
              <p>
                <b>Total : </b>
              </p>
              <p>[Inclusive of all taxes]</p>
            </div>
            {/* <p>₹{totalPrice}</p> */}
          </div>
          <hr />
          <div className="payment-logos">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/visa.png"
              alt="visa"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/mastercard-logo.png"
              alt="mastercard-logo"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/rupay.png"
              alt="rupay"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/banknotes.png"
              alt="banknotes"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bhim-upi.png"
              alt="bhim-upi"
            />
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/100/bank-cards--v1.png"
              alt="bank-cards--v1"
            />
          </div>
        </div>
      </div>
      {/* <AlertBox alertMessage={btnClicked?.message} clicked={btnClicked?.clicked}/> */}
    </>
  );
}
