const getSortedProducts = (products,sortBy)=>{
    if(sortBy === 'HIGH_TO_LOW'){
      return [...products].sort((a, b) => b.price - a.price); 
    }
    if(sortBy === 'LOW_TO_HIGH'){
      return [...products].sort((a, b) => a.price - b.price); 
    }
    return products
  }
  // by brand
  const getFliteredByBrands = (sortedproducts,brands) => {
      let filteredlist = sortedproducts;
      if (brands.length !== 0) {
        filteredlist = filteredlist.filter((item => brands.includes(item.brand)))
      }
      return filteredlist;
    };

    const getFilteredBySizes = (sortedproducts,sizes)=>{
        return sortedproducts.filter((product) =>
            Object.values(sizes)?.some((sizeValue) => sizeValue)
            ? product.size?.some((size) => sizes[size])
            : product
        );
    }
    // by gender
    const getFilteredByGender = (sortedproducts,gender)=>{
      let filteredlist = sortedproducts;
      if (gender.length !== 0) {
        filteredlist = filteredlist.filter((item => gender.includes(item.gender)))
      }
      return filteredlist;
    }
  
    export {getSortedProducts,getFilteredByGender,getFliteredByBrands,getFilteredBySizes}