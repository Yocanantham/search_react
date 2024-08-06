function SearchBar({ onSubmit }) {
    const handleClick = () => {
        onSubmit("react");
    };

    return (
        <div>
            <input></input>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchBar;
