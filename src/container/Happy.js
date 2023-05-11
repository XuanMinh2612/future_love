import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Happy() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const collectionRef = collection(db.getFirestore(), "futurelove");
    const querySnapshot = await getDocs(collectionRef);

    const dataList = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const timestamp = doc.data().timestamp?.toDate();
      dataList.push({ id, timestamp });
    });

    setData(dataList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center content-center font-sans">
      <ul className="flex flex-col w-3/4 mx-auto">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 border-b border-gray-300 text-lg"
          >
            <span className="font-semibold mr-20">ID:</span>
            <a href={`${window.location.href}${item.id}`}>
              Xem lại kết quả của bạn tại đây
            </a>
            <span className="font-semibold mr-20 ml-36">Thời gian:</span>{" "}
            {item.timestamp?.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Happy;
