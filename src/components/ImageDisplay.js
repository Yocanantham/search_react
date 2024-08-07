function ImageDisplay({ image }) {
    return (
        <div>
            <img
                src={image.urls.small}
                alt={image.alt_description}
                title={image.alt_description}
            />
        </div>
    );
}

export default ImageDisplay;
