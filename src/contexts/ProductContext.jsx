import React,{createContext,useState,useEffect} from 'react'
import {data} from '../Data';

const ProductContext=createContext();
const {Provider}=ProductContext;

const ProductProvider = ({children}) => {
  const [products,setProducts]=useState(data);
  const [productDetail,setProductDetail]=useState({});
  const [cart,setCart]=useState([]);
  const [cartTotal,setCartTotal]=useState(0);
  const [cartSubTotal,setCartSubTotal]=useState(0);

  const getProduct=(id)=>{
    const selectedProduct=products.find((product)=>product.id===id);
    setProductDetail(selectedProduct);
  }

  const addProductToCart=(id)=>{
    let tempProducts=[...products];
    const selectedProduct=products.find((product)=>product.id===id);
    const index=tempProducts.indexOf(selectedProduct);
    const product=tempProducts[index];
    if(product.inCart===true){
      return;
    }
    else{
      product.inCart=true;
      product.count=1;
      const price=product.price;
      product.total=product.price;
      setProducts(tempProducts);
      setCart(cart=>[...cart,product]);
    }
  }
  useEffect(()=>{
    console.log(cart);
  },[cart])

const increaseQuantityInCart=(id)=>{
  let tempCart=[...cart];
  const selectedProduct=tempCart.find((product)=>product.id===id);
  const index=tempCart.indexOf(selectedProduct);
  const product=tempCart[index];
  product.count=product.count + 1;
  product.total=product.count * product.price;
  setCart(tempCart);
  addTotals();
}

const decreaseQuantityInCart=(id)=>{
  let tempCart=[...cart];
  const selectedProduct=tempCart.find((product)=>product.id===id);
  const index=tempCart.indexOf(selectedProduct);
  const product=tempCart[index];
  product.count=product.count - 1;
  if(product.count===0){
    removeItemFromCart(id);
  }else{
    product.total=product.count * product.price;
    setCart(tempCart);
    addTotals();

  }
}

const removeItemFromCart=(id)=>{
   let tempProducts=[...products];
   let tempCart=[...cart];
   tempCart=tempCart.filter(item=>item.id !== id)
   const selectedProduct=products.find((product)=>product.id===id);
   const index=tempProducts.indexOf(selectedProduct);
   const removedProduct=tempProducts[index];
   removedProduct.inCart=false;
   removedProduct.count=false;
   removedProduct.total=false;
   setCart(tempCart);
   setProducts(tempProducts);
   addTotals()
}

const addTotals=()=>{
  let subTotal=0;
  cart.map(item=>{
    subTotal+=item.total;
  });
  const total=subTotal;
  setCartSubTotal(subTotal);
  setCartTotal(total)
}
useEffect(()=>{
  addTotals();
},[cart])

  return (
    <Provider value={{
        products,
        setProducts,
        getProduct,
        productDetail,
        addProductToCart,
        cart,
        cartTotal,
        cartSubTotal,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        removeItemFromCart,
      }}>
      {children}
    </Provider>
  )
}

export {ProductContext,ProductProvider};
/*


const productRef = useRef(productDetail);
useEffect(() => {
    productRef.current=productDetail;
}, [productDetail]);

*/
