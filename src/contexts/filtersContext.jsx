import React,{ createContext, useContext, useReducer }  from 'react'
import { filterReducer } from '../reducers/filter-reducer';

const filterContext = createContext();
const initialFilterState = {
    sortBy:'',
    products:[],
    brands:[],
    sizes:{
      S: false,
    M: false,
    L: false,
    xl: false,
    } ,
    gender:[] 
}
const FiltersContextProvider = ({children}) => {
const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);
  return (
    <div>
        <filterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </filterContext.Provider>
    </div>
  )
}
const useFilter = () => useContext(filterContext);
export { FiltersContextProvider, useFilter };