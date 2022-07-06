const filterReducer = (state, action) => {
    switch(action.type){
      case "LOW_TO_HIGH":
        return {
          ...state,
          sortBy:action.type
        }
        
      case "HIGH_TO_LOW":
        return {
          ...state,
          sortBy:action.type
        }  

      case 'BRANDS':
        return state.brands.includes(action.payload)? 
        { ...state,brands:[...state.brands.filter(item=> item !== action.payload)]}
           : {...state, brands:[...state.brands,action.payload]}

      case "SIZES":
        return {
            ...state,
            sizes: { ...state.sizes, [action.payload]: !state.sizes[action.payload] },
        };

      case "GENDER":
        return state.gender.includes(action.payload)? 
        { ...state,gender:[state.gender.filter(item=> item !== action.payload)]}
           : {...state, gender:[...state.gender,action.payload]}

      case 'CLEAR':
        return {
          ...state,
          sortBy:'',
          products:[],
          brands:[],
          sizes:{  S: false,M: false,L: false, XL: false,} ,
          gender:[]  
        }
      default:
        return state;
    
    }
}
export { filterReducer };