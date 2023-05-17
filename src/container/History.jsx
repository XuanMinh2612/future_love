import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ReactLoading from "react-loading";
import { format } from "date-fns";

function History() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingType, setLoadingType] = useState(null);

  const fetchData = async () => {
    const collectionRef = collection(db.getFirestore(), "futurelove");
    const querySnapshot = await getDocs(collectionRef);

    const dataList = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const timestamp = doc.data().timestamp?.toDate();
      dataList.push({ id, timestamp });
    });

    // Sắp xếp dataList theo thứ tự giảm dần của timestamp
    dataList.sort((a, b) => b.timestamp - a.timestamp);

    setData(dataList);
    setIsLoading(false);
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
    return format(dateTime, "HH:mm:ss dd/MM/yyyy");
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
              <span className="font-semibold mr-20 text-4xl">ID:</span>
              <a href={`${window.location.href}${item.id}`}>
                Xem lại kết quả của bạn tại đây
              </a>
              <span className="font-semibold mr-20 ml-36 text-4xl">
                Thời gian:
              </span>{" "}
              {item.timestamp ? formatDateTime(item.timestamp) : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
