import React, { useState } from "react";
import DataCards from "./DataCards";
import { data } from "../../commonUtil";

const Cards = () => {
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <ul>
        {currentCards.map((dt) => {
          return <DataCards {...dt} key={dt.id} />;
        })}
      </ul>
      <div className="pagination flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mx-2"
          >
            &larr; Previous
          </button>
        )}
        {pageNumbers.map((number) => {
          return (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-700 text-white hover:text-white"
              } font-bold py-2 px-4 rounded mx-2`}
            >
              {number}
            </button>
          );
        })}
        {currentPage < totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r mx-2"
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
