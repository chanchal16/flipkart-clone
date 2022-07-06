const filterReducer = (state, action) => {
    switch(action.type){
        case 'GET_ALL_PRODUCTS':
        return {...state,products:action.payload};
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
          sizes:action.payload
        }
      case "GENDER":
        return {
          ...state,
          range:action.payload
        }
      case 'CLEAR':
        return {
          ...state,
          sortBy:'',
          products:[],
          brands:['Tokyo Talkies','Harpa','HighLander','Raymond'],
          sizes:['S','M','L','XL'] ,
          gender:['male','female']  
        }
      default:
        return state;
    
    }
}
export { filterReducer };