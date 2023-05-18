import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { format, zonedTimeToUtc } from "date-fns";

function History() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingType, setLoadingType] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://14.225.7.221:8889/lovehistory/all");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Set isLoading to false in case of error
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
  //sap xep thoi gian theo thu tu tu moi den cu~
  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a[0].real_time);
    const dateB = new Date(b[0].real_time);
    return dateB - dateA;
  });

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
          {sortedData.map((array, index) => (
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
        </div>
      )}
    </div>
  );
}

export default History;
