import React from 'react';

function SearchInput({setValue}) {
    let timeout = null;

    function onChange(e){
       // Clear the timeout if it has already been set.
      clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
        setValue(e.target.value);
    }, 500);
    }
    
    return (
      <>

        <input type="text" placeholder="Search a Movie" onChange={(e) => onChange(e)}/>    

      </>
    );
}

export default SearchInput;
