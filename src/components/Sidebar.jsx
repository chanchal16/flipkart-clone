import React from 'react'
import { useFilter } from '../contexts/filtersContext';

export const Sidebar = () => {
    const {filterState, filterDispatch} = useFilter();
    const{gender,brands,sizes,sortBy} = filterState
  return (
    <div className="w-48 bg-white container-mid flex  flex-col pl-4 pr-4">
        <fieldset className="flex flex-col grid-gap-4 p-2">   
            <legend>Sort&nbsp;</legend>
           <label htmlFor='radio1'> <input type='radio' id='radio1' checked={sortBy === "LOW_TO_HIGH"} onChange={()=>filterDispatch({type:'LOW_TO_HIGH'})}/>low to high</label>
           <label htmlFor='radio2'> <input type='radio' id='radio2' checked={sortBy === "HIGH_TO_LOW"} onChange={()=>filterDispatch({type:'HIGH_TO_LOW'})} />high to low</label>
        </fieldset> 
        <div className="flex items-center flex-wrap grid-gap-4">
            <fieldset className="flex flex-col  grid-gap-4 p-2">
                <legend>&nbsp;Ideal for&nbsp;</legend>
                        <label htmlFor='male' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'GENDER',payload:e.target.value})
                                }
                                value={'male'}
                                checked={gender?.includes('male')}
                                name="male"
                                id='male'
                            />
                           Men
                        </label>
                        <label htmlFor='female' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'GENDER',payload:e.target.value})
                                }
                                value={'female'}
                                checked={gender?.includes('female')}
                                name="female"
                                id='female'
                            />
                           Women
                        </label>
            </fieldset>

            <fieldset className="flex  grid-gap-4 p-2">
                <legend>&nbsp;Sizes&nbsp;</legend>
                        <label htmlFor='checkbox1' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'SIZES',payload:e.target.value})
                                }
                                value='S'
                                checked={sizes.S}
                                name='S'
                                id='checkbox1'
                            />
                            S
                        </label>
                        <label htmlFor='checkbox2' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'SIZES',payload:e.target.value})
                                }
                                value='M'
                                checked={sizes.M}
                                name='M'
                                id='checkbox2'
                            />
                            M
                        </label>
                        <label htmlFor='checkbox3' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'SIZES',payload:e.target.value})
                                }
                                value='L'
                                checked={sizes?.L}
                                name='L'
                                id='checkbox3'
                            />
                            L
                        </label>
                        <label htmlFor='checkbox4' className="flex items-center grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'SIZES',payload:e.target.value})
                                }
                                value='XL'
                                checked={sizes?.XL}
                                name='XL'
                                id='checkbox4'
                            />
                            XL
                        </label>
            </fieldset>

            <fieldset className="flex  flex-col grid-gap-4 p-2 ">
                <legend>&nbsp;Brands&nbsp;</legend>
                        <label htmlFor='check1' className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'BRANDS',payload:e.target.value})
                                }
                                value='Tokyo Talkies'
                                checked={brands?.includes('Tokyo Talkies')}
                                name='Tokyo Talkies'
                                id='check1'
                            />
                            Tokyo Talkies
                        </label>
                        <label htmlFor='check2'  className="flex items-center justify-start  grid-gap-1 cursor-pointer"  >
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'BRANDS',payload:e.target.value})
                                }
                                value='Harpa'
                                checked={brands?.includes('Harpa')}
                                name= 'Harpa'
                                id='check2'
                            />
                            Harpa
                        </label>
                        <label htmlFor='check3' className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'BRANDS',payload:e.target.value})
                                }
                                value='Raymond'
                                checked={brands?.includes('Raymond')}
                                name='Raymond'
                                id='check3'
                            />
                            Raymond
                        </label>
                        <label htmlFor='check4'  className="flex items-center justify-start  grid-gap-1 cursor-pointer">
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    filterDispatch({type:'BRANDS',payload:e.target.value})
                                }
                                value='HighLander'
                                checked={brands?.includes('HighLander')}
                                name= 'HighLander'
                                id='check4'
                            />
                            HighLander
                        </label>
            </fieldset>

            <button className="p-4 rounded hover:text-blue-500 underline" onClick={()=>filterDispatch({type:'CLEAR'})}>
                Clear filters
            </button>
        </div>

        
    </div>
  )
}
