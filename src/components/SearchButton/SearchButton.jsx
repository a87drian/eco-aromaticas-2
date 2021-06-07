import React, {useState,useEffect} from 'react';

export  const SearchButton = (props) => {
    const [filter, setFilter] = useState('')
    const items = props.items;
    console.log(props.items)

    useEffect(() => {
        const filteredItems = Object.values(items).filter(items => items.name.toLowerCase().includes(filter.toLowerCase()))
        console.log(filteredItems)

    }, [filter])
    return (
        
             
        <input value={[filter]} 
        className="form-control mr-sm-2" 
        onChange={(e) => setFilter(e.target.value)}
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        />

                
            
        
    )
}

