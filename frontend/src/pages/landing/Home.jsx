import React from 'react'
import Main from '../../components/Layout/Main'
import GenderCollection from '../../components/Product/GenderCollection'
import NewArrivals from '../../components/Product/NewArrivals'
import ProductDetails from '../../components/Product/ProductDetails'
import ProductGrid from '../../components/Product/ProductGrid'
import FeaturedCollection from '../../components/Product/FeaturedCollection'
import FeatureSection from '../../components/Product/FeatureSection'

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=2"}],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=3"}],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=1"}],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=4"}],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=5"}],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{url: "https://picsum.photos/500/500?random=6"}],
  },
]


const Home = () => {
  return (
    <div>
      <Main />
      <GenderCollection />
      <NewArrivals />
      
       <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
      <ProductDetails />

      <div className='conatiner mx-auto'>
      <h2 className='text-3xl text-center font-bold mb-4'>Top Wears</h2>
      <ProductGrid products={placeholderProducts} />
        </div>       
       <FeaturedCollection />
       <FeatureSection/>
    </div>
       
  )
}

export default Home
