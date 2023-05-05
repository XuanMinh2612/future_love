import "./Happy.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Happy() {
  const Api_key = "938c8d9c19d7ec0c6f5225d69a3ef3ae";
  const server = "http://14.225.7.221:7778/hometh2";

  //
  const [data, setData] = useState([]);
  const [image1, setImage1] = useState(
    "https://raw.githubusercontent.com/thuykieu06012002/cutimage/main/nam.101.png"
  );
  const [image2, setImage2] = useState(
    "https://raw.githubusercontent.com/thuykieu06012002/cutimage/main/nu.101.png"
  );
  const [image3, setImage3] = useState(
    "https://raw.githubusercontent.com/thuykieu06012002/futurelove/main/101.jpg"
  );
  const [image4, setImage4] = useState(
    "https://raw.githubusercontent.com/thuykieu06012002/futurelove/main/101.jpg"
  );
  //trang này mới có call thôi đã làm gì đou bên about đã làm xong dou

  // http://14.225.7.221:7778/hometh2
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(`${server}`, {
        headers: {
          Link_img1: image1,
          Link_img2: image2,
          //Link_img3: image3,
          //Link_img4: image4,
        },
      });
      setData(reponse.data);
    };

    fetchData();
  }, []);

  return <div>hôm nay làm cái lày </div>;
}

export default Happy;
