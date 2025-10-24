import Hero from '../components/Layout/Hero'
import Collection from '../components/Products/Collection';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import VideoCards from '../components/Products/VideoCards';

const Home = () => {
  return (
    <div>
      <Hero />
      <VideoCards />
      <NewArrivals />

      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>

      <ProductDetails />

      <Collection />

      <FeaturedCollection />
    </div>
  )
}

export default Home
