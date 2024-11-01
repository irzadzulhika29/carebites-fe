import NavbarDashboard from "../components/NavbarDashboard"
import { useState, useRef } from 'react';
import Sidebar from "../components/Sidebar";

const ShareMeals = () => {

  const awalRef = useRef(null);
  const akhirRef = useRef(null);
  const handleFocusAwal = () => {
    awalRef.current && awalRef.current.showPicker();
  };
  const handleFocusAkhir = () => {
    akhirRef.current && akhirRef.current.showPicker();
  };


  const [jumlahMakanan, setJumlahMakanan] = useState(0);
  const handleIncrease = () => {
    setJumlahMakanan(jumlahMakanan + 1);
  };
  const handleDecrease = () => {
    if (jumlahMakanan > 0) {
      setJumlahMakanan(jumlahMakanan - 1);
    }
  };

  const [images, setImages] = useState(Array(5).fill(null));
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
     <NavbarDashboard />
      <section className="mt-24 flex px-5">
        <Sidebar />

        {/* Content */}
        <div className="ml-10 w-full">
          <div>
            <h1 className="mb-5 text-3xl font-bold text-[#00712D]">Share Meals</h1>
            {/* Share Meals Container I */}
            <div className="mb-5 bg-[#00712D] text-white p-5 rounded-xl">
              <h1 className="mb-5">Informasi Donasi</h1>
              <form action="">
                <div className="w-3/4 mb-4">
                  <h1 className="text-xs text-white mb-2">Nama Produk</h1>
                  <input
                    type="text"
                    name="namaProduk"
                    id="namaProduk"
                    placeholder="Tuliskan nama makanan di sini"
                    className="py-2 w-full text-xs p-1 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="w-3/4 mb-4">
                  <h1 className="text-xs text-white mb-2">Deskripsi Produk</h1>
                  <textarea
                    name="namaProduk"
                    id="namaProduk"
                    placeholder="Tuliskan deskripsi produk di sini"
                    className="w-full h-40 text-sm p-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  ></textarea>
                </div>


                <div className="mb-4">
                  <h1 className="text-xs text-white mb-2">Jumlah Makanan*</h1>
                  <div className="inline-flex items-center border border-white rounded-md p-1 bg-transparent h-8">
                    {/* Tombol - */}
                    <button
                      type="button"
                      onClick={handleDecrease}
                      className="px-2 text-white font-bold text-sm"
                    >
                      -
                    </button>

                    {/* Input jumlah makanan */}
                    <span className="text-white text-xs text-center w-6">{jumlahMakanan}</span>

                    {/* Tombol + */}
                    <button
                      type="button"
                      onClick={handleIncrease}
                      className="px-2 text-white font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-3/4 mb-4">
                  <h1 className="text-xs text-white mb-2">Harga Produk</h1>
                  <div className="flex items-center border border-white rounded-md p-1 bg-transparent">
                    <span className="text-white text-xs px-2">Rp</span>
                    <input
                      type="text"
                      name="hargaProduk"
                      id="hargaProduk"
                      placeholder="0"
                      className="w-full text-xs p-1 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <h1 className="text-xs text-white mb-2">Foto Produk</h1>
                  <div className="flex gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="w-24 h-24 border border-white rounded-md flex flex-col items-center justify-center">
                        {image ? (
                          <img src={image} alt={`Foto ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                        ) : (
                          <label className="flex flex-col items-center justify-center text-white cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-8 h-8 mb-1"
                            >
                              <path d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5zm0 2h14a1 1 0 0 1 1 1v8.92l-2.418-2.417a3 3 0 0 0-4.245 0l-.168.168-.597-.596a3 3 0 0 0-4.244 0L4 15.586V5a1 1 0 0 1 1-1zm12.914 9.5L21 16.586V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.586l5.914-5.914a1 1 0 0 1 1.415 0l3.586 3.586a1 1 0 0 0 1.415 0l2.414-2.414a1 1 0 0 1 1.415 0zM5 18h10v-1.5H5V18z" />
                            </svg>
                            <span className="text-xs">Foto {index + 1}</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(e, index)}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>

          </div>

          <div className="bg-[#00712D] text-white p-5 rounded-xl">
            <h1 className="mb-5">Informasi Pengambilan Produk</h1>

            <form action="">


            </form>
            <div className="w-3/4 mb-4 relative">
              <h1 className="text-xs text-white mb-2">Lokasi Pengambilan</h1>
              <input
                type="text"
                name="namaProduk"
                id="namaProduk"
                placeholder="Lokasi pengambilan produk"
                className="py-2 w-full text-xs p-1 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />

              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-geo-alt-fill absolute top-3/4 right-3 -translate-y-1/2 cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>

            {/* Date */}
            <form action="">
              <div className="flex gap-4 w-3/4">

                {/* Waktu Awal Pengambilan */}
                <div className="mb-4 relative w-1/2" onClick={handleFocusAwal}>
                  <h1 className="text-xs text-white mb-2">Waktu Awal Pengambilan</h1>
                  <div className="flex items-center border border-white rounded-md p-1 cursor-pointer">
                    <input
                      type="date"
                      ref={awalRef}
                      className="text-xs bg-transparent text-gray-300 outline-none w-full placeholder-gray-300 text-center"
                    />
                  </div>
                </div>

                {/* Waktu Akhir Pengambilan */}
                <div className="mb-4 relative w-1/2" onClick={handleFocusAkhir}>
                  <h1 className="text-xs text-white mb-2">Waktu Akhir Pengambilan</h1>
                  <div className="flex items-center border border-white rounded-md p-1 cursor-pointer">
                    <input
                      type="date"
                      ref={akhirRef}
                      className="text-xs bg-transparent text-gray-300 outline-none w-full placeholder-gray-300 text-center"
                    />
                  </div>
                </div>



              </div>
              <button className="transition duration-300 w-3/4 text-xs text-white font-bold py-4 px-4 bg-transparent border rounded-xl hover:bg-white hover:text-[#00712D] hover:scale-104">
                Upload
              </button>
            </form>
          </div>
        </div>


      </section >

    </div >
  )
}

export default ShareMeals
