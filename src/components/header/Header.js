const Header = () => {
  return (
    <div className="bg-blue-900 p-6">
      <div className="flex justify-between items-center container mx-auto">
        <h3 className="text-xl font-normal text-white">TripWeb</h3>
        <nav className="hidden md:flex justify-between font-semibold text-white space-x-4">
          <a href="#Home">Home</a>
          <a href="#Categories">Categories</a>
          <a href="#Destinations">Destinations</a>
          <a href="#Blog">Blog</a>
          <a href="#Pages">Pages</a>
          <a href="#Dashboard">Dashboard</a>
          <a href="#Contact">Contact</a>
        </nav>
        <div className="md:buttons">
          <button className="bg-white text-black p-2 m-2 rounded-md font-normal hover:bg-blue-500 px-4 py-2 transition duration-300 ease-in-out">
            Become An Expert
          </button>
          <button className="p-2 m-2 rounded-md font-thin border border-gray-300 hover:border-white text-white hover:bg-blue-500 px-4 py-2 transition duration-300 ease-in-out">
            Sign In / Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
