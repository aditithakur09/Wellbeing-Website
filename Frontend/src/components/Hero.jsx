import styles from "./Hero.module.css";
import heroGif from "../assets/hero-bg.gif"; // apna GIF path yahan lagao

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroGif} alt="hero" className={styles.heroGif} />
    </div>
  );
}

export default Hero;