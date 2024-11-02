const ProductCard = ({ profileImage, title, description, location, imageSrc }) => {
    return (
        <div className="hover:scale-110 transition duration-300 cursor-pointer w-40 rounded-lg shadow-md p-3 bg-gray-50">

            <div className="flex items-center gap-2 mb-2 hover:cursor-pointer">
                <img src={profileImage} alt="Profile" className="w-5 h-5 rounded-full" />
                <span className="font-semibold text-gray-800 text-sm">Holland Bakery</span>
            </div>

            <div className="w-full h-24 bg-gray-300 rounded-md mb-2 hover:cursor-pointer">
                {imageSrc ? (
                    <img src={imageSrc} alt="Product" className="w-full h-full object-cover rounded-md" />
                ) : (
                    <div className="w-full h-full bg-gray-300 rounded-md" />
                )}
            </div>

            <h2 className="text-gray-800 text-md font-semibold truncate hover:cursor-pointer">{title}</h2>
            <p className="text-gray-500 text-xs mb-2 truncate hover:cursor-pointer">{description || "Detail informasi..."}</p>
            <div className="flex items-center text-gray-500 text-xs gap-1 hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-3 h-3">
                    <path d="M8 0a5 5 0 0 0-5 5c0 4.245 5 11 5 11s5-6.755 5-11a5 5 0 0 0-5-5zM8 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
                <span>{location}</span>
            </div>

        </div>
    );
};

export default ProductCard;
