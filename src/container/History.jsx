import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { format } from "date-fns";

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
      setData(jsonData[0]); // Lấy dữ liệu từ mảng nằm trong jsonData
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
    return format(new Date(dateTime), "HH:mm:ss dd/MM/yyyy"); // Chuyển đổi thành đối tượng Date trước khi định dạng
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
        <ul className="flex flex-col w-3/4 mx-auto ">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border-b border-gray-300 text-3xl"
            >
              <span className="font-semibold mr-20 text-4xl">
                ID: {item.id}
              </span>
              <a href={`${window.location.href}${item.id}`}>
                Xem lại kết quả của bạn tại đây
              </a>
              <span className="font-semibold mr-20 ml-36 text-4xl">
                Thời gian: {item.real_time}
              </span>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
