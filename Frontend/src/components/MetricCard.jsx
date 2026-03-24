import styles from "./MetricCard.module.css";

function MetricCard({ title, description, points = [], img }) {
  return (
    <div className={styles.card}>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {description}
        </p>

        <ul className={styles.points}>
          {points.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.image}>
        <img src={img} alt={title} loading="lazy" />
      </div>

    </div>
  );
}

export default MetricCard;