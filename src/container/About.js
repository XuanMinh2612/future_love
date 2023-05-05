import { Fragment, useEffect, useState } from "react";
import "./About.scss";
import axios from "axios";

function About() {
  const Api_key = "e9e2c780a5732849e994f6fdd7a8d358";
  const server = "http://14.225.7.221:8000/hometh2";

  //
  const [data, setData] = useState([]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loadings, setLoadings] = useState(false);

  const uploadImgMale = async () => {
    const formData = new FormData();
    formData.append("image", image1);
    try {
      if (image1 != null) {
        let apiresponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${Api_key}`,
          formData
        );
        setImage1(apiresponse.data.data.url);
      }
    } catch (error) {
      throw error;
    }
  };
  const uploadImgFeMale = async () => {
    const formData = new FormData();
    formData.append("image", image2);
    try {
      if (image2 != null) {
        let apiresponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${Api_key}`,
          formData
        );
        setImage2(apiresponse.data.data.url);
      }
    } catch (error) {
      throw error;
    }
  };
  const fetchData = async () => {
    try {
      setLoadings(true);
      await uploadImgMale();
      await uploadImgFeMale();
      const reponse = await axios.post(
        `${server}`,
        {},
        {
          headers: {
            Link_img1: image1,
            Link_img2: image2,
          },
        }
      );
      setData(reponse.data);
      console.log(reponse.data);
      setLoadings(false);
    } catch (error) {
      setLoadings(false);

      throw error;
    }
  };
  // http://14.225.7.221:7778/hometh2
  useEffect(() => {
    uploadImgFeMale();
    uploadImgMale();

    console.log("useefêcr");
  }, [image1, image2]);

  //
  if (image1 != null) {
    const femaleInput = document.getElementById("male");
    if (femaleInput) {
      femaleInput.style.display = "none";
    }
  }
  if (image2 != null) {
    const femaleInput = document.getElementById("female");
    if (femaleInput) {
      femaleInput.style.display = "none";
    }
  }
  //
  const handleChangeImageMale = async (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    //let id = event.target.id;
    if (file) {
      setImage1(file);
    }
  };
  const handleChangeImageFemale = async (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    if (file) {
      setImage2(file);
    }
  };

  return (
    <div className="wrapper-about">
      <div className="about-top">
        <div className="male">
          <input type="file" id="male" onChange={handleChangeImageMale} />
          <div
            className="image"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <div className="name">
            <p>Name Male</p>
          </div>
        </div>
        <div className="icon-heart"> </div>
        <div className="female">
          <input type="file" id="female" onChange={handleChangeImageFemale} />
          <div
            className="image"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
          <div className="name">Name feMale</div>
        </div>
      </div>
      <div className="about-bottom">
        <button onClick={fetchData}>
          {data.length > 0 ? "Try again" : "Start"}{" "}
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      <div>{loadings && <span>loading...</span>}</div>
      {data?.map((dt, index) => (
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

export default About;
