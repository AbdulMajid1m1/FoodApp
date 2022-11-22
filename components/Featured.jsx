import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const [state0,setState0]=useState(false);
  const [state1,setState1]=useState(false);
  const [state2,setState2]=useState(false);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
let toggleClass0=state0 ? 'activeBtn':'btn1';
let toggleClass1=state1 ? 'activeBtn':'btn1';
let toggleClass2=state2 ? 'activeBtn':'btn1';

  const handleClasses=(index)=>{
    if(index==='one'){
      setState0(true);
      setState1(false);
      setState2(false);
      setIndex(0);
    }
    else if(index==='two'){
      setState0(false);
      setState1(true);
      setState2(false);
      setIndex(1);
    }
    else if(index==='three'){
      setState0(false);
      setState1(false);
      setState2(true);
      setIndex(2);
    }
  }
  useEffect(()=>{
    setState0(true);
    
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 0) {
        setIndex(1);
        setState0(false);
        setState1(true);
        setState2(false);

      }
      else if (index === 1) {
        setIndex(2);
        setState0(false);
      setState1(false);
      setState2(true);
      }
      else if (index >= 2) {
        setIndex(0);
        setState0(true);
        setState1(false);
        setState2(false);
      
      }
    }
      , 3000);

    return () => clearInterval(interval);
  }, [index]);



  const handleArrow = (direction) => {
    console.log("clicked");
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0, marginLeft:30 }} onClick={() => handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0, marginRight:30 }} onClick={() => handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
      <div className={styles.btnDiv}>
        <div className={styles[`${toggleClass0}`]} onClick={()=>handleClasses("one")}></div>
        <div className={styles[`${toggleClass1}`]} onClick={()=>handleClasses("two")}></div>
        <div className={styles[`${toggleClass2}`]} onClick={()=>handleClasses("three")}></div>
     
      </div>
    </div>
  );
};

export default Featured;
