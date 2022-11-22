import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>

        <div className={styles.card}>

          <h2 className={styles.motto}>
            ORDER NOW! AND FEEL THE TASTE.
          </h2>

        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Jersy, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
          <br />
          <a href={"https://www.facebook.com/abdulmajid.abdulmajid.3591267" }  target="_blank">
          <span className={styles.logospan}>
            <Image src="/img/fb.webp" objectFit="cover" height="30px" width="30px" alt=""  className={styles.logo}/>
          </span>
          </a>
          <span className={styles.midSpan}>
          <Image src="/img/jughar.png" width="30px" height="30px" alt="" className={styles.linLogo}/>

          </span>
          <a href={"https://www.linkedin.com/in/abdul-majid-19b1b219a/"}  target="_blank">

          <span className={styles.Linlogos}>
            <Image src="/img/lk.jpg" width="30px" height="30px" alt="" className={styles.linLogo}/>
          </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
