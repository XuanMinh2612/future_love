import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import boy from "../components/image/nam1.png";
import girl from "../components/image/nu1.png";
import { BsFillHeartFill } from "react-icons/bs";
import girls from "../components/image/girl.jpg";

function Home() {
  const Api_key = "4b92af7f16b0fb074cc5e1c7adfa512a";
  const server = "http://14.225.7.221:8889/getdata";
  const [data, setData] = useState([]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState(null);
  const navigate = useNavigate();

  const uploadImage = async (image, setImage) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      if (image) {
        const input = document.getElementById(
          setImage === setImage1 ? "male" : "female"
        );
        if (input) {
          input.style.display = "none";
        }
        const apiResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${Api_key}`,
          formData
        );
        setImage(apiResponse.data.data.url);
      }
    } catch (error) {
      throw error;
    }
  };
  const handleChangeImage = async (event, setImage) => {
    event.preventDefault();
    let file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    uploadImage(image1, setImage1);
    uploadImage(image2, setImage2);
    console.log("useEffect");
  }, [image1, image2]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-custom-pink to-custom-red p-10 h-screen">
      <Header />
      <div className="flex flex-row h-4/5  justify-evenly content-center items-center relative">
        <div className="flex flex-col items-center  relative">
          <img src={boy} alt="" className="w-500 h-500 static" />
          <input
            onChange={(e) => handleChangeImage(e, setImage1)}
            style={{ backgroundImage: `url(${image1})` }}
            type="file"
            className="w-[360px] h-[360px]  rounded-[50%] absolute bottom-8 left-8 z-10 bg-center bg-no-repeat bg-cover"
          />
        </div>

        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-125 ">
          <BsFillHeartFill className="w-48 h-48 text-[#FF9F9F] " />
          <span className="text-4xl font-bold mt-14 absolute text-[#7A1E3E]">
            Start
          </span>
        </div>
        <div className="flex flex-col items-center  relative">
          <img src={girl} alt="" className="w-500 h-500 static" />
          <input
            onChange={(e) => handleChangeImage(e, setImage2)}
            style={{ backgroundImage: `url(${image2})` }}
            type="file"
            className="w-[360px] h-[360px]  rounded-[50%] absolute top-8 right-8  z-10 bg-center bg-no-repeat bg-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
