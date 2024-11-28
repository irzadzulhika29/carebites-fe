// CharityCard.jsx

import { Link } from 'react-router-dom';

const CharityCard = ({ id, name, location, image_url, campaign }) => {
  const { title, collected, target, campaign_image_url } = campaign;
  const progress = (collected / target) * 100;

  return (
    <div className="bg-white w-[220px] shadow-lg pb-8 flex flex-col p-3 rounded-xl">
      <img
        src={campaign_image_url}
        alt="Campaign Image"
        className="w-full h-28 object-cover rounded-md"
      />

      <div className="flex items-center gap-2 mt-2">
        <img
          src={image_url}
          alt="Profile"
          className="w-7 h-7 object-cover rounded-full"
        />
        <div>
          <h1 className="font-bold text-sm">{name}</h1>
          <p className="text-xs text-[#45c517]">{location}</p>
        </div>
      </div>

      <h2 className="text-base font-bold mt-3 mb-1">{title}</h2>
      <h3 className="text-xs text-[#45c517] mb-1">Terkumpul</h3>

      <div className="w-full bg-gray-300 rounded-full h-2 mb-3">
        <div
          className="bg-[#45c517] h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-xs font-semibold text-gray-600 mb-3 text-center">
        Rp{collected.toLocaleString('id-ID')}/Rp{target.toLocaleString('id-ID')}
      </p>

      <Link
        to={`/charity-campaign/${id}`}
        className="bg-[#45c517] text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition duration-300 text-center text-sm"
      >
        Donasi Sekarang
      </Link>
    </div>
  );
};

export default CharityCard;
