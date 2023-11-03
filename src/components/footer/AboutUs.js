const AboutUs = () => {
  return (
    <div className="flex justify-between p-2 m-2">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Contact</h3>
        <p className="font-semibold text-md text-gray-500">
          Toll Free Customer Care
        </p>
        <a href="contact" className="font-semibold text-md text-gray-500">
          +910000000
        </a>
        <a href="email" className="font-semibold text-md text-gray-500">
          test@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Company</h3>
        <a href="about" className="font-semibold text-md text-gray-500">
          About Us
        </a>
        <a href="careers" className="font-semibold text-md text-gray-500">
          Careers
        </a>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Support</h3>
        <a href="contact" className="font-semibold text-md text-gray-500">
          Contact
        </a>
        <a href="legal" className="font-semibold text-md text-gray-500">
          Legal Notice
        </a>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Other Services</h3>
        <a href="car" className="font-semibold text-md text-gray-500">
          Car hire
        </a>
        <a href="finder" className="font-semibold text-md text-gray-500">
          Activity Finder
        </a>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-lg">Mobile</h3>
        <a href="download" className="font-semibold text-md text-gray-500">
          Download For The Platforms
        </a>
        <a href="android" className="font-semibold text-md text-gray-500">
          Android
        </a>
        <a href="apple" className="font-semibold text-md text-gray-500">
          Apple
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
