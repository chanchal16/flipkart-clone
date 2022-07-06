import React,{useEffect} from 'react'
import { useFilter } from '../contexts/filtersContext'
import { ProductCard } from '../components/ProductCard';
import products from '../products.json';
import { getFilteredByGender, getFilteredBySizes, getFliteredByBrands, getSortedProducts } from '../utils/filters';

export const Products = () => {
    const {filterState,filterDispatch} = useFilter();
    const{gender,brands,sizes,sortBy} = filterState;

    const sortedProducts = getSortedProducts(products,sortBy);
    const sortedByGender = getFilteredByGender(sortedProducts,gender);
    const sortedByBrand = getFliteredByBrands(sortedByGender,brands);
    const filteredProducts = getFilteredBySizes(sortedByBrand,sizes)
    console.log('filtered',sortedByGender)
  return (
    <div className="product-list container-mid mt-8 mb-8 grid place-items-center place-self-center  md:grid-cols-4">
        {
            filteredProducts?.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
        </div>
  )
}
