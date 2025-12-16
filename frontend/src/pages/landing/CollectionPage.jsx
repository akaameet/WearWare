import React, { useEffect, useRef, useState } from 'react'
import {FaFilter} from "react-icons/fa"
import FilterSidebar from './FilterSidebar';
import SortOptions from '../../components/Product/SortOptions';
import ProductGrid from '../../components/Product/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    
    const handleClickOutSide = (e) =>{
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false);
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    })

    useEffect(()=> {
        setTimeout(() =>{
            const fetchedProducts = [
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
               ];
               setProducts(fetchedProducts);
              },1000);
            },[]);                

  return (
    <div className='flex flex-col lg:flex-row'>

    <button onClick={toggleSideBar} className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2'/>
    </button>
       
       {/* filter sidebar */}
       <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 
       left-o w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
       <FilterSidebar/>
       </div>
       <div className='flex-grow p-4'>
       <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
            {/* sort option */}
            <SortOptions />
            <ProductGrid products={products}/>
       </div>
        
    </div>
  )
}

export default CollectionPage
