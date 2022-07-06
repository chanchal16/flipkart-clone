import React from 'react'
import { useFilter } from '../contexts/filtersContext';

export const Sidebar = () => {
    const {filterState, filterDispatch} = useFilter();
    const{gender,brands,sizes,sortBy} = filterState
  return (
    <div className="w-48 bg-white container-mid flex items-center flex-col pl-4 pr-4">
        {/* <label className="flex items-center grid-gap-1 py-4 cursor-pointer"> */}
            Sort&nbsp;
            {/* <select
                name="sort"
                value={sortBy}
                id="sort"
                onChange={filterDispatch({type:'LOW_TO_HIGH'})}
            >
                <option value="low">Low to high</option>
                <option value="high">High to low</option>
            </select> */}
           <label htmlFor='radio1'> <input type='radio' id='radio1' checked={sortBy === "LOW_TO_HIGH"} onChange={()=>filterDispatch({type:'LOW_TO_HIGH'})}/>low to high</label>
           <label htmlFor='radio2'> <input type='radio' id='radio2' checked={sortBy === "HIGH_TO_LOW"} onChange={()=>filterDispatch({type:'HIGH_TO_LOW'})} />high to low</label>
        {/* </label> */}
        <div className="flex items-center flex-wrap grid-gap-4">
            <fieldset className="flex items-center grid-gap-4 p-2">
                <legend>&nbsp;Ideal for&nbsp;</legend>
                {gender.map((idealValue) => {
                    return (
                        <label
                            key={idealValue}
                            className="flex items-center grid-gap-1 cursor-pointer"
                        >
                            <input
                                type="radio"
                                // onChange={(event) =>
                                //     applyFilters(event, "ideal")
                                // }
                                value={idealValue}
                                // checked={filters["ideal"]?.includes(
                                //     idealValue
                                // )? true : false}
                                name="filter_ideal"
                                id={idealValue}
                            />
                            {idealValue}
                        </label>
                    );
                })}
            </fieldset>

            <fieldset className="flex items-center grid-gap-4 p-2">
                <legend>&nbsp;Sizes&nbsp;</legend>
                {sizes.map((size) => {
                    return (
                        <label
                            key={size}
                            className="flex items-center grid-gap-1 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                // onChange={(event) =>
                                //     applyFilters(event, "size")
                                // }
                                value={size}
                                // checked={filters["size"]?.includes(size)? true : false}
                                name={"filter_" + size}
                                id={size}
                            />
                            {size}
                        </label>
                    );
                })}
            </fieldset>

            <fieldset className="flex items-center flex-col grid-gap-4 p-2 ">
                <legend>&nbsp;Brands&nbsp;</legend>
                {/* {brands.map((brand) => {
                    {console.log('brand',brand)}
                    return ( */}
                        <label
                            key={brand}
                            className="flex items-center justify-start  grid-gap-1 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'BRAND',payload:e.target.value})
                                }
                                value={brand}
                                checked={brands?.includes(brand)? true : false}
                                name={"filter_" + brand}
                                id={brand}
                            />
                            {brand}
                        </label>
                    {/* );
                })} */}
            </fieldset>

            <button className="p-4 rounded" >
                Clear filters
            </button>
        </div>

        
    </div>
  )
}
