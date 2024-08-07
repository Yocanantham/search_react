function ImageDisplay({ image }) {
    return (
        <div>
            <img
                className="images-single"
                style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "15px",
                }}
                src={image.urls.small}
                alt={image.alt_description}
                title={image.alt_description}
            />
        </div>
    );
}

export default ImageDisplay;
