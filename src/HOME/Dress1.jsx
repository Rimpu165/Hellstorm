import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { dress } from './Dress';
import Footer from '../log/Footer';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slice';
import { useDispatch } from 'react-redux';


const Dress1 = () => {
    const {id}=useParams();
    const top=dress.find((item) => item.id === Number(id))
    console.log("pro",top);
    
    const[size,setSize]=useState("")
    const [quantity, setQuantity] = useState(1);
    
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
    const dispatch = useDispatch()
 const handleAddToCart = () => {   
  if (!size) {
    alert("Please select a size!");
    return;
  }
  const itemToAdd={
      id : top.id,
      title : top.title,
      img : top.img,
      price : top.discountPrice,
      quantity: Number(quantity),size,    
      brandname: top.brandName
    }; 
    dispatch(addToCart(itemToAdd));
    alert("Product added to cart");
  }
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      
        <div className=" bg-white">
          <img
            src={top. img} 
            alt={top.title}
            className="w-2xl h-150  object-contain rounded-t-lg md:rounded-l-lg"
          />
        </div>

   
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{top.title}</h2>
          
          <p>{top.rating}</p>
         
            <span className="text-green-600 text-2xl font-semibold">₹{top.discountPrice}</span>
        
          <p className="text-gray-600 mb-6">{top.description}</p>


          <div className="mb-4">
            <h3 className="text-lg font-semibold">Select Size:</h3>
            <select
              value={size}
              onChange={handleSizeChange}
              className="border border-gray-300 rounded-lg p-2 mt-2 w-full"
            >
              <option value="">-- Choose Size --</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

       
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Quantity:</h3>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max="10"
              className="border border-gray-300 rounded-lg p-2 mt-2 w-24"
            />
          </div>    

         
          <div className="flex gap-4 mb-6">
            <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>

          <Link to="/dress" className="text-blue-600 hover:underline text-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
   
    </div>
       <Footer/>
       </>
  )
}

export default Dress1;
