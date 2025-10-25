const checkout = {
    id: "12332",
    createdAt: new Date(),
    checkoutItems: [
        {
            productId: 1,
            name: "Jaipuri saree",
            color: "red",
            size: "M",
            price: 1500,
            quantity: 1,
            image: "https://picsum.photos/150?random=1",
        },
        {
            productId: 2,
            name: "Jaipuri Suit",
            color: "yellow",
            size: "XL",
            price: 1000,
            quantity: 1,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    shippingAddress: {
        address: "123 Fashion Street",
        city: "Delhi",
        pinCode: 110053,
    },
};

const OrderConfirmations = () => {
    const CalculateEstimatedDelivey = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 5);
        return orderDate.toLocaleDateString();
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
                Thank You for Your Order!
            </h1>
            {checkout && (
                <div className="p-6 rounded-lg border">
                    <div className="flex justify-between mb-20">
                        <div>
                            <h2 className="text-xl font-semibold">Order ID: {checkout.id}</h2>
                            <p className="text-grsy-500">Order Date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
                        </div>

                        <div className="text-emerald-700 text-sm">
                            Estimated Delivery: {CalculateEstimatedDelivey(checkout.createdAt)}
                        </div>
                    </div>
                    <div className="mb-20">
                        {checkout.checkoutItems.map((item) => (
                            <div key={item.productId} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />

                                <div>
                                    <h4 className="text-md font-semibold">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.color}  | {item.size} </p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="texxt-md">
                                        ${item.price}
                                    </p>
                                    <p className="text-sm text-gray-500">{item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderConfirmations
