import "./Home.css"

import IMA from "../assets/neon-8726714_1280.jpg"
import SH from "../assets/f2.jpg"
import HOM from "../assets/decore.jpg"
import Jak from "../assets/jacket.jpg"
import Jean from "../assets/Jean.jpg"
import Kids from "../assets/kids.jpg"
import Kurtas from "../assets/kurtas.jpg"
import INN from "../assets/inner.jpg"
import TR from "../assets/trouser.jpg"
import Loung from "../assets/lounge.jpg"
import Party from "../assets/party.jpg"
import SPO from "../assets/sports.jpg"
import Sun from "../assets/sunglass.jpg"
import Track from "../assets/track.jpg"
import ACT from "../assets/active.jpg"
import Wal from "../assets/belt.jpg"
import Flip from "../assets/flip.jpg"

import Footer from "../log/Footer"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="main">
        <div class="hidden sm: mb-8 sm:flex sm:justify-center p-3 ">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-black-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Sale Ends In 12 H : 51 M : 49 S 
          </div>
          
        </div>
        <div class=" text-center ">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"> Discover amazing features and learn more about our services.</h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Discover amazing features and learn more about our services.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="first text-5xl font-semibold tracking-tight text-balance text-blue-900 sm:text-7xl">
          <h1>EXPLORE BY CATEGORY</h1>
        </div >
        <div className=" qw   p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-10 mt-20">
     <Link to="/tshirt"> <div className=" qa    bg-white text-center    border-2 border-white rounded-md shadow p-2">
        <img src={IMA} alt="T-Shirts" className="iam"  />
        <p className="font-small mt-2">T-Shirts</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div> </Link>
      
      
      <Link to="/shoes"> <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={SPO} alt="Sports Shoes" className="iam"  />
        <p className="font-small mt-2">Sports Shoes</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>  </Link> 


      <Link to="/shirt" > <div className="qa bg-white text-center  border-2 border-cyan-300 rounded-md shadow p-2">
                       <img src={SH} alt="Shirts" className="iam"  />
                       <p className="para">Shirts</p>
                       <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
                       <button className="text-sm text-gray-700">Shop Now</button>
                     </div>  </Link>  

                     
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Jean} alt="Jeans" className="iam"  />
        <p className="para">Jeans</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center border-2 border-white rounded-md shadow p-2">
        <img src={Kurtas} alt="Jeans" className="iam"  />
        <p className="para">Kurtas & Sets</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center border-2 border-white rounded-md shadow p-2">
        <img src={TR} alt="Jeans" className="iam"  />
        <p className="para">Trousers</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Track} alt="Jeans" className="iam"  />
        <p className="para">Track Pants</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Loung} alt="Jeans" className="iam"  />
        <p className="para">Loungewear</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div> 
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={INN} alt="Jeans" className="iam"  />
        <p className="para">Innerwear</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Wal} alt="Jeans" className="iam"  />
        <p className="para">Belts % Wallets</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div> 
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Sun} alt="Jeans" className="iam"  />
        <p className="para">Sunglases % Frames</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <buttonp className="text-sm text-gray-700">Shop Now</buttonp>
      </div>  
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Kids} alt="Jeans" className="iam"  />
        <p className="para">Kids Wear</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={SPO} alt="Jeans" className="iam"  />
        <p className="para">Casual Shoes</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div> 
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Flip} alt="Jeans" className="iam"  />
        <p className="para">Flip-Flops</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>  
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={HOM} alt="Jeans" className="iam"  />
        <p className="para">Home Furnishing</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={ACT} alt="Jeans" className="iam"  />
        <p className="para">Active Wear</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div> 
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Party} alt="Jeans" className="iam"  />
        <p className="para">Part Wear</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>  
      <div className="qa bg-white text-center  border-2 border-white rounded-md shadow p-2">
        <img src={Jak} alt="Jeans" className="iam"  />
        <p className="para">Jakets</p>
        <p className="text-blue-700 font-bold text-lg">40-80% OFF</p>
        <button className="text-sm text-gray-700">Shop Now</button>
      </div>
    </div>

    <div className="t-n  mb-25 ">
          <h2 className="text-4xl font-semibold text-center text-gray-800">What Our Customers Say</h2>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="td p-6 bg-white rounded-lg shadow-lg text-center ">
              <p className="italic text-gray-600">"I love shopping here! The products are great, and shipping is always on time."</p>
              <p className="mt-4 font-semibold text-gray-800">Mohit C.</p>
            </div>
            <div className="td p-6 bg-white rounded-lg shadow-lg text-center">
              <p className="italic text-gray-600">"The quality of the products is exceptional, and customer service is always helpful."</p>
              <p className="mt-4 font-semibold text-gray-800">Virat K.</p>
            </div>
            <div className="td p-6 bg-white rounded-lg shadow-lg text-center">
              <p className="italic text-gray-600">"I’m so happy with my purchase! Will definitely be shopping here again."</p>
              <p className="mt-4 font-semibold text-gray-800">Thala.</p>
            </div>
          </div>
        </div>
    <Footer/>

      </div>



    </>
  )
}
export default Home;