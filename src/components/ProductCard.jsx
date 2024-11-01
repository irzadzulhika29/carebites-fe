

const ProductCard = ({ profileImage, title, description, location, imageSrc }) => {
    return (
        <div className="w-48 rounded-lg shadow-md p-3 bg-gray-50">
        
            <div className="flex items-center gap-2 mb-2">
                <img src={profileImage} alt="Profile" className="w-6 h-6 rounded-full" />
                <span className="font-semibold text-gray-800 text-sm">Holland Bakery</span>
            </div>

            <div className="w-full h-24 bg-gray-300 rounded-md mb-2">
                {imageSrc ? (
                    <img src={imageSrc} alt="Product" className="w-full h-full object-cover rounded-md" />
                ) : (
                    <div className="w-full h-full bg-gray-300 rounded-md" />
                )}
            </div>

            {/* Product Title */}
            <h2 className="text-gray-800 text-base font-semibold truncate">{title}</h2>

            {/* Description */}
            <p className="text-gray-500 text-xs mb-2 truncate">{description || "Detail informasi..."}</p>

            {/* Location */}
            <div className="flex items-center text-gray-500 text-xs gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-3 h-3">
                    <path d="M8 0a5 5 0 0 0-5 5c0 4.245 5 11 5 11s5-6.755 5-11a5 5 0 0 0-5-5zM8 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
                <span>{location}</span>
            </div>
        </div>
    );
};

export default ProductCard;
