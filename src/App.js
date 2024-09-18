import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Outlet, json } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { setDataReview } from "./redux/reviewSlice";

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  
  useEffect(()=>{
    (async()=>{
      const [productRes, reviewRes] = await Promise.all([
        fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`),
        fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/review`),
      ]);

      const productData = await productRes.json();
      const reviewData = await reviewRes.json();
      
      dispatch(setDataProduct(productData)); 
      dispatch(setDataReview(reviewData)); 
    })()
  }, [])
  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-300  min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
