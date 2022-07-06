import React,{useEffect} from 'react'
import { useFilter } from '../contexts/filtersContext'
import { ProductCard } from '../components/ProductCard';
import products from '../products.json';
import { getFilteredByGender, getFilteredBySizes, getFliteredByBrands, getSortedProducts } from '../utils/filters';

export const Products = () => {
    const {filterState,filterDispatch} = useFilter();
    const{gender,brands,sizes,sortBy} = filterState;

    // useEffect(() => {
    //       filterDispatch({type:'GET_ALL_PRODUCTS',payload:products})
        
    // }, [])

    const sortedProducts = getSortedProducts(products,sortBy);
    const sortedByGender = getFilteredByGender(sortedProducts,gender);
    const sortedByBrand = getFliteredByBrands(sortedProducts,brands);
    const filteredProducts = getFilteredBySizes(sortedByBrand,sizes)
    console.log('filtered',sortedByBrand)
  return (
    <div className="product-list container-mid mt-8 mb-8 grid place-items-center place-self-center  md:grid-cols-4">
        {
            sortedByBrand?.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
            {/* {
                filteredProducts?.length > 0 && Object.keys(appliedFilters).length > 0 ?
                filteredProducts.map(product => {
                    return(
                        <ProductCard key={product._id} product={product} />
                    )
                })
                :
                filteredProducts?.length < 1 && Object.keys(appliedFilters).length > 0 ?
                <div className="">No matches found..</div>
                :
                productsList.map(product => {
                    return(
                        <ProductCard key={product._id} product={product} />
                    )
                })
            } */}
        </div>
  )
}
