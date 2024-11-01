import NavbarDashboard from "../components/NavbarDashboard"
import ProductCard from "../components/ProductCard"
import Sidebar from "../components/Sidebar"

const GrabMeals = () => {
    return (
        <div>
            <NavbarDashboard />
            <section className="mt-24 flex px-5">
                <Sidebar />


                {/* Content */}
                <div className="ml-10 w-full">
                    <h1 className="mb-5 text-3xl font-bold text-[#00712D]">Grab Meals</h1>
                    <div className="flex flex-wrap gap-3.5">

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
                        <ProductCard
                            profileImage="https://example.com/profile3.jpg"
                            title="Roti Keju"
                            description="Deskripsi singkat..."
                            location="Jakarta"
                            imageSrc="https://example.com/product-image3.jpg"
                        />
                        <ProductCard
                            profileImage="https://example.com/profile4.jpg"
                            title="Roti Gandum"
                            description="Info lengkap..."
                            location="Bandung"
                            imageSrc="https://example.com/product-image4.jpg"
                        />
                        <ProductCard
                            profileImage="https://example.com/profile5.jpg"
                            title="Roti Srikaya"
                            description="Detail produk..."
                            location="Bali"
                            imageSrc="https://example.com/product-image5.jpg"
                        />
                    </div>
                </div>


            </section>
        </div>
    )
}

export default GrabMeals
