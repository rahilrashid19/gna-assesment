const DataCards = ({
  name,
  price_per_night,
  ratings,
  travel_time,
  speciality,
  location,
  img_url,
}) => {
  return (
    <div className="w-full px-4 py-2">
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="relative">
            <img
              className="object-cover object-center h-64 w-full"
              src={img_url}
              alt="Travel Destination"
            />
          </div>
        </div>
        <div className="md:col-span-1 p-4">
          <div className="text-2xl font-semibold p-2">{name}</div>
          <div className="text-gray-500 p-2">{location}</div>
          <div className="text-gray-500 p-2">{speciality}</div>
          <div className="text-gray-600 p-2">{travel_time}</div>
        </div>
        <div className="md:col-span-1 p-4 flex flex-col justify-between">
          <div>
            <div className="text-2xl font-semibold text-green-500">
              {price_per_night}
            </div>
            <div className="text-gray-600">{ratings} stars ⭐</div>
          </div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md w-40">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataCards;
