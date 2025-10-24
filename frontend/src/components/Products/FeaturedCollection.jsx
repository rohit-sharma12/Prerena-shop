import { Link } from 'react-router-dom'

const FeaturedCollection = () => {
    return (
        <section className='py-6 px-3 lg:px-0'>
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-red-50'>
                <div className='lg:w-1/2 p-5 text-center lg:text-left'>
                    <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                        Comfort and Style
                    </h2>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                        Lorem ipsum dolor sit amet consectetur
                    </h2>
                    <p className='text-lg text-grey-600 mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio praesentium recusandae deleniti harum dolorem rem.
                    </p>

                    <Link to="/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
                        Shop Now
                    </Link>
                </div>

                <div className='lg:w-1/2'>
                    <img src="https://mysanskritam.com/cdn/shop/articles/Indian_Wear_for_Women.png?v=1732537660" alt="featured Image" className='w-full  h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
