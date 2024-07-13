import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Shobhit Rastogi</h1>
        <p className={styles.desc}>
        As a passionate and innovative MERN Stack Developer, I thrive on crafting seamless and dynamic web applications. With expertise in MongoDB, Express.js, Node.js, React, TypeScript, Tailwind CSS, authentication, and Next.js, I transform ideas into reality with precision and creativity.


        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/heri.jpg" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
