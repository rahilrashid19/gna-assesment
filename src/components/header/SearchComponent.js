const SearchComponent = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="bg-white rounded-lg p-4 shadow-md flex space-x-4 items-center mx-40 mb-4">
        <div className="w-1/3">
          <div className="relative">
            <label htmlFor="location" className="text-gray-600">
              Location
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Where Are You Going?"
                className="pl-8 pr-2 py-2 border-none rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="absolute top-0 left-2 text-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative">
            <label htmlFor="date" className="text-gray-600">
              Check in - Check out
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                defaultValue={getCurrentDate()} // Set the default date
                className="pl-8 pr-2 py-2 border-none rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="absolute top-0 left-2 text-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="relative">
            <label htmlFor="tour" className="text-gray-600">
              Tour Type
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="2 adults - 1 child - 1 room"
                className="pl-8 pr-2 py-2 border-none rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
              />
              <div className="absolute top-0 left-2 text-gray-400"></div>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
