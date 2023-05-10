import { Fragment, useEffect, useState } from "react";
import "./About.scss";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
function ViewResult() {
  //
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const docRef = doc(db.getFirestore(), "futurelove", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
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
          <div className="name">Name feMale</div>
        </div>
      </div>

      {data?.data?.map((dt, index) => (
        <Fragment key={index}>
          <div className="img-swap">
            <div
              className="img-swap-image"
              style={{ backgroundImage: `url(${dt.Link_img})` }}
            ></div>
            <div className="name">Image Swap</div>
          </div>
          <div className="about-main">
            <div className="future-love">{dt.thongtin}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default ViewResult;
