import React, { useState, useEffect } from "react";
import Main from "../../components/Layout/Main";
import GenderCollection from "../../components/Product/GenderCollection";
import NewArrivals from "../../components/Product/NewArrivals";
import ProductDetails from "../../components/Product/ProductDetails";
import ProductGrid from "../../components/Product/ProductGrid";
import FeaturedCollection from "../../components/Product/FeaturedCollection";
import FeatureSection from "../../components/Product/FeatureSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByFilters } from "../../../redux/slices/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    //Fetch product for a specific collection
    dispatch(
      fetchProductByFilters({
        genders: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    //Fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);
  return (
    <div>
      <Main />
      <GenderCollection />
      <NewArrivals />
      {/*Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
      <ProductDetails />

      <div className="conatiner mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears</h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
