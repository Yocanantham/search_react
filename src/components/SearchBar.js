import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div>
            {/* 
            // * In order to make the ```enter key``` as the user input we use the form elemnt as the default working behaviour for is submit. 
            
            // ! But form behaves a little weird as it is reloads the entire page after the submission, so we need to prevent it here.

            */}
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}></input>
            </form>
        </div>
    );
}

export default SearchBar;
