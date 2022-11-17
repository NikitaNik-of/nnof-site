import React from "react";
import { useState } from "react";
import Layout from "../Layout";
import mPic1 from "../../public/images/marathons/mara1.png"
import mPic2 from "../../public/images/marathons/mara2.png"
import mPic3 from "../../public/images/marathons/mara3.png"
import mPic4 from "../../public/images/marathons/mara4.png"
import Image from "next/image";

const LastMaraList = ({ streamers, marathons, curMar }) => {
  const [maraPics, setMaraPics] = useState([mPic1, mPic2, mPic3, mPic4])

  return (
    <div className="bg-gray-800/50 my-16 -skew-y-3 py-4 md:p-4 text-center">
      <div className=" text-lg md:text-2xl my-4 skew-y-3">Прошедшие эстафеты</div>
      <Layout>
        <div className=" grid grid-cols-1 md:grid-cols-2 skew-y-3">
          {marathons.map((mar, key) => (key < curMar
            ? <div className="bg-gray-700/30 px-3 pb-3 my-2 md:m-2 rounded-3xl overflow-hidden">
                <div className="my-3 text-base md:text-xl">{"Анонс эстафеты #" + (curMar - key)}</div>
                <Image className=" rounded-xl" src={maraPics[curMar - key - 1]} unoptimized/>
              </div>
            : null))}
        </div>
      </Layout>
    </div>
  );
};

export default LastMaraList;
