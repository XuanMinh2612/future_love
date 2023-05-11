import { Fragment, useEffect, useState } from "react";
import "./About.scss";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";

function ViewResult() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [timestamp, setTimestamp] = useState(null);

  const fetchData = async () => {
    const docRef = doc(db.getFirestore(), "futurelove", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
      setTimestamp(docSnap.data().timestamp?.toDate());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper-about">
      <div className="about-top">
        <div className="male">
          <div
            className="image"
            style={{ backgroundImage: `url(${data?.image1})` }}
          ></div>
          <div className="name">
            <p>Name Male</p>
          </div>
        </div>
        <div className="icon-heart"> </div>
        <div className="female">
          <div
            className="image"
            style={{ backgroundImage: `url(${data?.image2})` }}
          ></div>
          <div className="name">Name Female</div>
        </div>
      </div>

      {data?.data?.map((dt, index) => (
        <Fragment key={index}>
          <div className="img-swap">
            <div
              className="img-swap-image"
              style={{ backgroundImage: `url(${dt.Link_img})` }}
            ></div>
            <div className="name">{dt.tensukien}</div>
          </div>
          <div className="about-main flex justify-center   ">
            <div className="future-love  max-w-7xl">{dt.thongtin}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default ViewResult;
