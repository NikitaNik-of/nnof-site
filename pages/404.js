import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import MainButton from "../components/UI/MainButton";

export default function NotFound() {
  const [motd, setMotd] = useState({source: '/images/monoglass.png', title: '', subtitle: ''})


  const setMessage = (min, max) => {
      let rand = Math.floor(Math.random() * (max - min + 1)) + min
      switch (rand) {
        case 1:
          setMotd({source: '/images/monoglass.png', title: 'Хм... Я не сумел отыскать искомое', subtitle: 'Позвольте предложить Вам вернуться домой'})
          break;
      
        case 2:
          setMotd({source: '/images/robot.png', title: 'Биб-боп. Планета Шелезяка.', subtitle: ' Полезных ископаемых нет, воды нет, растительности нет. Населена роботами. Улетаем домой?'})
          break;
        
        default:
          setMotd({source: '/images/flushed.png', title: 'А где... все?..', subtitle: 'В-вернуться домой?'})
          break;
      }
  }
  
  
  useEffect(() => {
    setMessage(0, 2)
  }, [])

  return(
  <div>
    <NavBar/>
    <div className="flex justify-center transition-colors -mt-[4rem]">
        <div className="flex shrink w-4/5 place-content-center items-center flex-col h-screen min-h-[4.75rem] text-center">
          <h1 className="text-7xl mb-1">404</h1>
          <div className="m-8"><Image onBlur={true} src={motd.source} width={110} height={110}/></div>
          <h1 className="text-3xl">{motd.title}</h1>
          <h2 className="text-x m-1 mb-5">{motd.subtitle}</h2>
          <Link href={'/'}>
            <MainButton>Домой</MainButton>
          </Link>
        </div>
    </div>
  </div>
  );
}
