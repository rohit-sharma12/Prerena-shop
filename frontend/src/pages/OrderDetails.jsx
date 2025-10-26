import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const OrderDetails = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
            id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "Cash on Delivery",
            shippingAddress: { city: "Delhi", pincode: 110053 },
            orderItems: [
                {
                    productId: '1',
                    name: "Jaipuri Suit",
                    price: 1200,
                    quantity: 1,
                    image: "https://picsum.photos/150?.random=1",
                },
                {
                    productId: '1',
                    name: "Jaipuri Suit",
                    price: 1200,
                    quantity: 1,
                    image: "https://picsum.photos/150?.random=1",
                },
            ]
        }
        setOrderDetails(mockOrderDetails);
    }, [id]);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
            {!orderDetails ? (<p>No Order details found</p>
            ) : (
                <div className="p-4 sm:p-6 rounded-lg border">
                    <div className="flex flex-col sm:flex-row justify-between mb-8">
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold">Order ID: #{orderDetails.id}</h3>
                            <p className="text-gra-600">{new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                            <span className={`${orderDetails.isDelivered ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isDelivered ? "Deliverd" : "Pending Delivery"}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                            <p>Payment Method: {orderDetails.paymentMethod}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Address Info</h4>
                            <p>Address:{""} {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.pincode}`}</p>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <table className="min-w-full text-gray-600 mb-4">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Unit Price</th>
                                    <th className="py-2 px-4">Quantity</th>
                                    <th className="py-2 px-4">Total</th>

                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.orderItems.map((item) => (
                                    <tr key={item.productId} className="borderr-b">
                                        <td className="py-2 px-4 flex items-center">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg mr-4" />

                                            <Link to={`/product/${item.productId}`} className="text-blue-500 hover:underline">{item.name}</Link>
                                        </td>
                                        <td className="py-2 px-4">${item.price}</td>
                                        <td className="py-2 px-4">${item.quantity}</td>
                                        <td className="py-2 px-4">${item.price * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/profile" className="text-blue-500 hover:underline">Back to My Orders</Link>
                </div>
            )
            }
        </div>
    )
}

export default OrderDetails
