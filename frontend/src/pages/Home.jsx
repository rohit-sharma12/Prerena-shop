import { useEffect, useState } from 'react';
import Hero from '../components/Layout/Hero'
import Collection from '../components/Products/Collection';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import VideoCards from '../components/Products/VideoCards';
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slice/productsSlice";
import axios from 'axios';


const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByFilters({
      category: "Suits",
      limit: 8,
    })
    );

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error("Error fetching best seller:", error);
      }
    }
    fetchBestSeller();
  }, [dispatch]);


  return (
    <div>
      <Hero />
      <VideoCards />
      <NewArrivals />

      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller product ...</p>
      )}
      <Collection products={products} loading={loading} error={error} />


      <FeaturedCollection />
    </div>
  )
}

export default Home
