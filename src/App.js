import SearchBar from "./components/SearchBar";

function App() {
    const handleClick = (term) => {
        console.log("A search of ", term);
    };

    return (
        <div>
            <SearchBar onSubmit={handleClick} />
        </div>
    );
}

export default App;
