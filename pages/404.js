import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import MainButton from "../components/UI/MainButton";
import iconMono from '../public/images/monoglass.webp';
import iconBot from '../public/images/robot.webp';
import iconFlushed from '../public/images/flushed.webp';
import iconScull from '../public/images/skull.webp';
import iconTeeth from '../public/images/teeth.webp'

export default function NotFound() {
  const [motd, setMotd] = useState({source: {iconMono}, title: '', subtitle: '', cl: ''})


  const setMessage = (min, max) => {
      let rand = Math.floor(Math.random() * (max - min + 1)) + min
      switch (rand) {
        case 1:
          setMotd({source: iconMono, title: 'Хм... Я не сумел отыскать искомое', subtitle: 'Позвольте предложить Вам вернуться домой'})
          break;
      
        case 2:
          setMotd({source: iconBot, title: '{Биб-буп. Планета Шелезяка.}', subtitle: ' Полезных ископаемых нет, воды нет, растительности нет. Населена роботами. Улетаем домой?', cl:' font-consolas'})
          break;
    
        case 3:
          setMotd({source: iconScull, title: '', subtitle: ''})
          break;
        
        case 4:
          setMotd({source: iconFlushed, title: 'А где... все?..', subtitle: 'В-вернуться домой?'})
          break;
        
        default:
          setMotd({source: iconTeeth, title: 'Упс!..', subtitle: 'Кажется такой страницы нет.'})
          break;
      }
  }
  
  
  useEffect(() => {
    setMessage(0, 7)
  }, [])

  return(
  <div>
    <NavBar/>
    <div className="flex justify-center transition-colors h-full overflow-visible">
        <div className={"overflow-visible flex  w-4/5 place-content-center items-center flex-col h-screen min-h-[4.75rem] text-center font-semibold" + motd.cl}>
          <h1 className="text-7xl mb-1">404</h1>
          <div className="m-8 overflow-visible"><Image className=" overflow-visible" placeholder='blur' src={motd.source} width={110} height={110} unoptimized/></div>
          <h1 className="text-3xl empty:hidden">{motd.title}</h1>
          <h2 className="text-x m-1 mb-5 empty:hidden">{motd.subtitle}</h2>
          <Link href={'/'}>
            <MainButton>Домой</MainButton>
          </Link>
        </div>
    </div>
  </div>
  );
}
