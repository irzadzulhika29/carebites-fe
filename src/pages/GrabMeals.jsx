import NavbarDashboard from "../components/NavbarDashboard"
import ProductCard from "../components/ProductCard"
import Sidebar from "../components/Sidebar"

const GrabMeals = () => {
    return (
        <div>
            <NavbarDashboard />
            <section className="mb-5 mt-24 flex px-5">
                <Sidebar />

                {/* Content */}
                <div className="ml-10 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h1 className="mb-5 text-3xl font-bold text-[#00712D]">Grab Meals</h1>
                        <div className="flex flex-wrap gap-7">
                            <ProductCard
                                profileImFage="https://example.com/profile1.jpg"
                                title="Roti Pane pane"
                                description="Detail informasi..."
                                location="Malang"
                                imageSrc="https://example.com/product-image1.jpg"
                            />
                            <ProductCard
                                profileImage="https://example.com/profile2.jpg"
                                title="Roti Coklat"
                                description="Info lebih lanjut..."
                                location="Surabaya"
                                imageSrc="https://example.com/product-image2.jpg"
                            />
                            <ProductCard
                                profileImage="https://example.com/profile2.jpg"
                                title="Roti Coklat"
                                description="Info lebih lanjut..."
                                location="Surabaya"
                                imageSrc="https://example.com/product-image2.jpg"
                            />



                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default GrabMeals
