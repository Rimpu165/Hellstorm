import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/slice';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Logo from "../assets/log.png"

const AddtoCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, size, delta) => {
    const item = products.find((i) => i.id === id && i.size === size);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity >= 1) {
        dispatch(updateQuantity({ id, size, quantity: newQuantity }));
      }
    }
  };

  const handleRemove = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 2000 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          🛒 Your Cart – Hellstorm
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {products.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center gap-4 border-b py-4"
              >
                <Link to={`/men/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </Link>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  {item.size && (
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  )}
                  <p className="text-gray-500">Price: ₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.size, -1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.size, 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right font-medium text-gray-700">
                  ₹{item.price * item.quantity}
                  <button
                    onClick={() => handleRemove(item.id, item.size)}
                    className="ml-4 text-red-500 hover:text-red-700 text-sm"
                  >
                    ❌ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Link to="/checkout">
              <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </Link>
            <img className='h-75 pl-12 pt-10 ' src={Logo} alt="" />
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
};
export default AddtoCart;
