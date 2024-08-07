import { useState } from "react";
import "./SearchBar.css";
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
        <div className="search-box">
            {/* 
            // * In order to make the ```enter key``` as the user input we use the form elemnt as the default working behaviour for is submit. 
            
            // ! But form behaves a little weird as it is reloads the entire page after the submission, so we need to prevent it here.

            */}
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label className="search-label">Enter Search Term</label>
                <input
                    className="search-input"
                    value={term}
                    onChange={handleChange}></input>
            </form>
        </div>
    );
}

export default SearchBar;
