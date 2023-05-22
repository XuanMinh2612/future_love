import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { format } from "date-fns";

function History() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingType, setLoadingType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 25;
  const totalPages = Math.ceil(data.length / resultsPerPage);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);

  const fetchData = async () => {
    try {
      const response = await fetch("http://14.225.7.221:8889/lovehistory/all");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadingTypes = [
      "bars",
      "bubbles",
      "spinningBubbles",
      "spin",
      "cubes",
      "balls",
      "spokes",
      "cylon",
    ];

    const randomIndex = Math.floor(Math.random() * loadingTypes.length);
    const randomType = loadingTypes[randomIndex];
    setLoadingType(randomType);

    fetchData();
  }, []);

  const formatDateTime = (dateTime) => {
    return format(new Date(dateTime), "HH:mm:ss dd/MM/yyyy");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center items-center content-center font-sans">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader-container">
            <ReactLoading type={loadingType} color="#000000" />
            <p className="mt-4 text-gray-500 text-3xl">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="w-[800px] mx-auto">
          {currentResults.map((array, index) => (
            <div key={index} className="my-8">
              {array.length > 0 && (
                <div className="p-4 border-b border-gray-300 text-3xl">
                  <span className="font-semibold mr-20 text-4xl">
                    ID: {array[0].id_toan_bo_su_kien}
                  </span>
                  <a
                    href={`${window.location.href}${array[0].id_toan_bo_su_kien}`}
                  >
                    Xem lại kết quả tại đây
                  </a>
                  <span className="font-semibold mr-20 ml-36 text-4xl">
                    Thời gian: {formatDateTime(array[0].real_time)}
                  </span>
                </div>
              )}
            </div>
          ))}

          <div className="pagination  text-4xl flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination-button ${
                    pageNumber === currentPage ? "active bg-red-700" : ""
                  } 
    bg-[#ff9f9f] hover:bg-[#ff9f9f8c] text-white font-medium py-2 px-4 rounded ml-2`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default History;
