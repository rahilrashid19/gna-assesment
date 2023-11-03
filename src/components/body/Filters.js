import React, { useState } from "react";

const Filters = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    tours: false,
    attractions: false,
    dailyTrips: false,
    outdoorActivities: false,
    freeCancellation: false,
    english: false,
    spanish: false,
    duration1: false,
    duration2: false,
    duration3: false,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };

  return (
    <div className="grid gap-2">
      <div className="pb-2 font-bold">Category types</div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.tours}
          onChange={() => handleOptionChange("tours")}
          className="mr-2"
        />
        Tours
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.attractions}
          onChange={() => handleOptionChange("attractions")}
          className="mr-2"
        />
        Attractions
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.dailyTrips}
          onChange={() => handleOptionChange("dailyTrips")}
          className="mr-2"
        />
        Daily Trips
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.outdoorActivities}
          onChange={() => handleOptionChange("outdoorActivities")}
          className="mr-2"
        />
        Outdoor Activities
      </label>

      <div className="pt-2 pb-2 font-bold">Other</div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.freeCancellation}
          onChange={() => handleOptionChange("freeCancellation")}
          className="mr-2"
        />
        Free Cancellation
      </label>

      <div className="pt-2 pb-2 font-bold">Languages</div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.english}
          onChange={() => handleOptionChange("english")}
          className="mr-2"
        />
        English
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.spanish}
          onChange={() => handleOptionChange("spanish")}
          className="mr-2"
        />
        Spanish
      </label>

      <div className="pt-2 pb-2 font-bold">Duration</div>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.duration1}
          onChange={() => handleOptionChange("duration1")}
          className="mr-2"
        />
        1 Hour
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.duration2}
          onChange={() => handleOptionChange("duration2")}
          className="mr-2"
        />
        2 Hours
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedOptions.duration3}
          onChange={() => handleOptionChange("duration3")}
          className="mr-2"
        />
        3 Hours
      </label>

      <div className="pt-2 pb-2 font-bold">Price</div>
      <div className="flex items-center space-x-2">
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange[0]}
          onChange={(e) =>
            handlePriceRangeChange([+e.target.value, priceRange[1]])
          }
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default Filters;
