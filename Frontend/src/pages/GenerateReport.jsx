import ReportForm from "../components/ReportForm";
import styles from "./GenerateReport.module.css";

function GenerateReport() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.reportBox}>

        <h1 className={styles.title}>Generate Your Health Report</h1>

        <p className={styles.subtitle}>
          Enter your body metrics to generate a personalized health
          analysis including body composition, fat analysis,
          metabolic indicators, and weight insights.
        </p>

        <div className={styles.formArea}>
          <ReportForm />
        </div>

      </div>

    </div>
  );
}

export default GenerateReport;