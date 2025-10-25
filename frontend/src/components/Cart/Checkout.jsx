import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

const cart = {
  product: [
    {
      name: "AKILA CHIFFON SUIT SET",
      size: "M",
      img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
      price: 40,
      color: "Blue",
    },
    {
      name: "AKILA CHIFFON SUIT SET",
      size: "M",
      img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
      price: 30,
      color: "Red",
    },
    {
      name: "AKILA CHIFFON SUIT SET",
      size: "L",
      img: "https://www.bunaai.com/cdn/shop/files/BunaaiSuit-8556.jpg?v=1752749712&width=540",
      price: 30,
      color: "Green",
    },

  ],
  toalPrice: 100,
}

const Checkout = () => {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
  });

  const handleOrderConfimation = (e) => {
    e.preventDefault();

    const { firstName, lastName, address, city, pinCode, phone } = shippingAddress;
    if (!firstName || !lastName || !address || !city || !pinCode || !phone) {
      toast.error('Please fill all shipping fields before placing the order.');
      return;
    }

    toast.success('Order placed — redirecting to confirmation...');
    navigate('/order-confirmation');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight">
      <div lang="bg-white rounded-lg p-5">
        <h1 className="text-2xl uppercase mb-6">Checkout</h1>
        <form onSubmit={handleOrderConfimation}>
          <h3 className="text-lg mb-4">
            Contact Details
          </h3>
          <div className="mb-4">
            <label>Email</label>
            <input type="email" value="user@gmail.com" className="w-full p-2 border rounded" disabled />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Fist Name</label>
              <input type="text" value={shippingAddress.firstName} onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input type="text" value={shippingAddress.lastName} onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })} className="w-full p-2 border rounded" required />
              </div>
            </div>
          </div>



          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input type="text" value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })} className="w-full p-2 border rounded" required />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input type="text" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} className="w-full p-2 border rounded" required />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Pin Code</label>
              <input type="text" value={shippingAddress.pinCode} onChange={(e) => setShippingAddress({ ...shippingAddress, pinCode: e.target.value })} className="w-full p-2 border rounded" required />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input type="tel" value={shippingAddress.phone} onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })} className="w-full p-2 border rounded" required />
          </div>

          <div className="mt-6">
            <button type="submit" onClick={handleOrderConfimation} className="w-full bg-black text-white py-3 rounded">Place Order</button>
          </div>
        </form>
      </div >

      <div className="bg-gray-50 p-6 rounded-lg ">
        <h3 className="text-lg mb-2">Order Summary</h3>
        <div className="border-t py-2 mb-3 border-gray-400">
          {cart.product.map((product, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
              <div className="flex items-start">
                <img src={product.img} alt={product.name} className="w-20 h-22 object-cover mr-4" />
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-2">
          <p>Subtotal</p>
          <p>${cart.toalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-2 border-t pt-4 border-gray-400">
          <p>Total</p>
          <p>${cart.toalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div >
  )
}

export default Checkout
