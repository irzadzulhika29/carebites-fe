import NavbarDashboard from "../components/NavbarDashboard"
import Sidebar from "../components/Sidebar"

const BlogArtikel = () => {
  return (
    <div>
      <NavbarDashboard />
      <section className="mt-24 flex px-5">
        <Sidebar />

        {/* Content */}
        <div className="ml-10 w-full">
          <div>
            <h1 className="mb-5 text-3xl font-bold text-[#00712D]">Blog & Article</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogArtikel
