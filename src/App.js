import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);

    const handleClick = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleClick} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
