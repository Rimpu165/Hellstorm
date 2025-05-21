import React, { useEffect, useState } from 'react'
import "./Kids.css"
import IMAGE1 from "../kidsimage/image1.webp"
import IMAGE2 from "../kidsimage/image2.webp"
import IMAGE3 from "../kidsimage/image3.webp"

import HM from "../kidsimage/hm.webp"
import Mango from "../kidsimage/mango.webp"
import CHI from "../kidsimage/chicco.webp"
import Marks from "../kidsimage/marks.webp"
import Tomm from "../kidsimage/tmy.webp"

import PR from "../kidsimage/protective.webp"
import BABY from "../kidsimage/babycare.webp"
import SHORT from "../kidsimage/shorts.webp"
import VALUE from "../kidsimage/value.webp"
import SLEEP from "../kidsimage/sleep.webp"
import ETHNIC from "../kidsimage/ethnic.webp"
import ONS from "../kidsimage/onesis.webp"
import FL from "../kidsimage/flipflop.webp"
import DRE from "../kidsimage/dress.webp"
import TOP from "../kidsimage/tops.webp"

import AB from "../kidsimage/imge1.webp"
import CD from "../kidsimage/imge2.webp"
import EF from "../kidsimage/imge3.webp"
import GH from "../kidsimage/imge4.webp"
import IJ from "../kidsimage/imge5.webp"
import KL from "../kidsimage/imge6.webp"

import FOR from "../kidsimage/499.webp"
import SEVEN from "../kidsimage/799.webp"
import NINE from "../kidsimage/999.webp"
import FIVE from "../kidsimage/599.webp"
import SEVE from "../kidsimage/7992.webp"
import SIX from "../kidsimage/699.webp"


import Footer from '../log/Footer'

const images =[IMAGE1,IMAGE2,IMAGE3]
const Kid = () => {
  const [coun , setCoun] = useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCoun(prev => (prev + 1) % images.length);
    },3000)
    return () => clearInterval(interval);
  },[])
  return (
  <div className='kkkk '>
       <div className="slider-container pt-10">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${coun * 100}vw)` }}
        >
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </div>

        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === coun ? 'active' : ''}`}
              onClick={() => goToImage(idx)}
            ></span>
          ))}
        </div>
      </div>

            <div className="iconic">
              <h1>ICONIC BRANDS</h1>
            </div>
            <div className="imagee flex ">
              <img src={HM} alt="" className="iamge " />
              <img src={Mango} alt="" className="iamge" />
              <img src={CHI} alt="" className="iamge" />
              <img src={Marks} alt="" className="iamge" />
              <img src={Tomm} alt="" className="iamge" />
            </div>
            <div className="iconic">
              <h1>FASHION & ESSENTIAL</h1>
            </div>
            <div className="imagee flex ">
              <img src={PR} alt="" className="iamge " />
              <img src={BABY} alt="" className="iamge" />
              <img src={SHORT} alt="" className="iamge" />
              <img src={VALUE} alt="" className="iamge" />
              <img src={SLEEP} alt="" className="iamge" />
            </div>
            <div className="imagee flex ">
              <img src={ETHNIC} alt="" className="iamge " />
              <img src={ONS} alt="" className="iamge" />
              <img src={FL} alt="" className="iamge" />
              <img src={DRE} alt="" className="iamge" />
              <img src={TOP} alt="" className="iamge" />
            </div>
            <div className="iconic">
              <h1 className='mb-3'>FASHION & ESSENTIAL</h1>
            </div>
            <div className="lo flex">
              <img src={AB} alt="" className="bnm" />
              <img src={CD} alt="" className="bnm" />
            </div>
            <div className="lo flex">
              <img src={EF} alt="" className="bnm" />
              <img src={GH} alt="" className="bnm" />
            </div>
            <div className="lo flex ">
              <img src={IJ} alt="" className="bnm" />
              <img src={KL} alt="" className="bnm" />
            </div>
            <div className="iconic">
              <h1 className='mb-10'>BUDGET BUY</h1>
            </div>
            <div className="imga flex ">
              <img src={FOR} alt="" className="for " />
              <img src={SEVEN} alt="" className="for" />
              <img src={NINE} alt="" className="for" />
              <img src={FIVE} alt="" className="for" />
              <img src={SEVE} alt="" className="for" />
              <img src={SIX} alt="" className="for" />
            </div>
           <Footer/>



  </div>
  )
}

export default Kid
