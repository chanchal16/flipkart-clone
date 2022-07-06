const getSortedProducts = (products,sortBy)=>{
    if(sortBy === 'HIGH_TO_LOW'){
      return [...products].sort((a, b) => b.price - a.price); 
    }
    if(sortBy === 'LOW_TO_HIGH'){
      return [...products].sort((a, b) => a.price - b.price); 
    }
    return products
  }
  // by category
  const getFliteredByBrands = (sortedproducts,brands) => {
      let filteredlist = sortedproducts;
      if (brands.length !== 0) {
        filteredlist = filteredlist.filter((item => brands.includes(item.brand)))
      }
      return filteredlist;
    };

    const getFilteredBySizes = (sortedproducts,sizes)=>{
        let filteredlist = sortedproducts;
        if(sizes.length!==0){
            filteredlist = filteredlist.filter(item=>sizes.includes(item.size))
        }
    }
    // by ratings
    const getFilteredByGender = (sortedproducts,gender)=>{
    //   if(rating){
        return sortedproducts.filter(item=>item.gender === gender)
    //   }
    //   return sortedproducts
    }
  
    export {getSortedProducts,getFilteredByGender,getFliteredByBrands,getFilteredBySizes}