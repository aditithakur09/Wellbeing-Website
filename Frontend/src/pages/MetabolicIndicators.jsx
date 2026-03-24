import MetricCard from "../components/MetricCard";

import bmrImg from "../assets/bmr.png";
import proteinImg from "../assets/protein-percentage.png";
import metabolicAgeImg from "../assets/metabolic-age.png";

function MetabolicIndicators() {
  return (
    <div className="section-container">

      <h1 className="section-title">Metabolic Indicators</h1>

      <p className="section-intro">
        Metabolic indicators provide insight into how efficiently your body
        uses energy, builds tissues, and maintains overall health. These
        measurements help understand how the body processes nutrients and
        supports essential physiological functions.
      </p>

      <p className="section-intro">
        Monitoring metabolic indicators can help identify potential health
        risks, guide nutrition strategies, and improve fitness planning.
        These metrics are often used to evaluate metabolism efficiency and
        long-term wellness.
      </p>

      <MetricCard
        title="Basal Metabolic Rate (BMR)"
        img={bmrImg}
        description="Basal Metabolic Rate represents the number of calories your body requires to perform essential functions such as breathing, circulation, and cell production while at complete rest."
        points={[
          { title: "Energy Requirement", text: "Indicates the minimum calories your body needs to sustain vital functions." },
          { title: "Metabolism Indicator", text: "Higher BMR means your body burns more calories even while resting." },
          { title: "Factors Affecting BMR", text: "Age, muscle mass, body composition, and genetics influence metabolic rate." },
          { title: "Low BMR", text: "May lead to slower metabolism and easier weight gain." },
          { title: "How to Improve", text: "Strength training, increasing muscle mass, and maintaining an active lifestyle can boost BMR." }
        ]}
      />

      <MetricCard
        title="Protein Percentage"
        img={proteinImg}
        description="Protein percentage reflects the proportion of protein stored in the body. Proteins play a vital role in building muscles, repairing tissues, and supporting immune function."
        points={[
          { title: "Muscle Development", text: "Protein supports muscle growth and recovery after physical activity." },
          { title: "Cell Repair", text: "Helps repair tissues and maintain structural components of the body." },
          { title: "Healthy Range", text: "A balanced protein level supports metabolism and physical performance." },
          { title: "Low Protein Levels", text: "May lead to muscle weakness, fatigue, and slower recovery." },
          { title: "How to Maintain", text: "Consume protein-rich foods such as lean meat, dairy, legumes, eggs, and nuts." }
        ]}
      />

      <MetricCard
        title="Metabolic Age"
        img={metabolicAgeImg}
        description="Metabolic age compares your basal metabolic rate with the average BMR of people in different age groups. It provides an estimate of how your metabolism compares to typical metabolic levels."
        points={[
          { title: "Health Indicator", text: "Lower metabolic age usually indicates a healthier metabolism." },
          { title: "Fitness Reflection", text: "Better muscle mass and balanced body composition often reduce metabolic age." },
          { title: "Higher Metabolic Age", text: "May indicate slower metabolism or higher body fat levels." },
          { title: "Lifestyle Impact", text: "Diet, exercise habits, sleep quality, and stress levels influence metabolic age." },
          { title: "How to Improve", text: "Regular exercise, strength training, balanced nutrition, and good sleep habits help improve metabolic health." }
        ]}
      />

      <div className="section-summary">

        <h2>Why Metabolic Indicators Matter</h2>

        <p>
          Metabolic indicators help evaluate how efficiently your body uses
          energy and maintains essential biological processes.
        </p>

        <p>
          Understanding these indicators can guide better nutrition choices,
          exercise routines, and lifestyle improvements for overall health.
        </p>

        <p>
          Monitoring metabolic health regularly helps support long-term
          wellness, improve fitness outcomes, and reduce the risk of
          metabolic disorders.
        </p>

      </div>

    </div>
  );
}

export default MetabolicIndicators;