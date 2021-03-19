import React from 'react';

function SearchInput({value, setValue}) {
    
    function onChange(e){

        setValue(e.target.value);

    }
    
    return (
      <>

        <input type="text" value={value} placeholder="Search a Movie" onChange={(e) => onChange(e)}/>    

      </>
    );
}

export default SearchInput;
