import MetricCard from "../components/MetricCard";

import subcutaneousImg from "../assets/subcutaneous-fat.png";
import bodyFatImg from "../assets/body fat percentage.png";
import visceralImg from "../assets/visceral fat.png";

function FatAnalysis() {
  return (
    <div className="section-container">

      <h1 className="section-title">Fat Analysis</h1>

      <p className="section-intro">
        Fat analysis helps understand how fat is distributed throughout the body.
        Instead of simply measuring weight, it evaluates different types of body
        fat and their potential impact on health. Understanding fat distribution
        can help identify health risks and guide better lifestyle choices.
      </p>

      <p className="section-intro">
        Not all body fat behaves the same way. Some fat plays essential roles in
        protecting organs and maintaining hormonal balance, while excessive fat
        accumulation can increase the risk of metabolic disorders, heart disease,
        and other health conditions.
      </p>

      <MetricCard
        title="Subcutaneous Fat"
        img={subcutaneousImg}
        description="Subcutaneous fat is the fat stored just beneath the skin. It is the type of fat that you can pinch with your fingers and is commonly found around the hips, thighs, and abdomen."
        points={[
          { title: "Primary Function", text: "Acts as insulation and helps regulate body temperature." },
          { title: "Energy Storage", text: "Stores energy that the body can use during periods of calorie deficit." },
          { title: "Health Impact", text: "Moderate levels are normal and necessary for healthy body function." },
          { title: "Too High", text: "Excess accumulation may contribute to obesity and increased metabolic risk." },
          { title: "How to Reduce", text: "Regular physical activity, balanced nutrition, and calorie control help reduce excess subcutaneous fat." }
        ]}
      />

      <MetricCard
        title="Body Fat Percentage"
        img={bodyFatImg}
        description="Body fat percentage represents the proportion of fat relative to your total body weight. It is one of the most important indicators used to evaluate overall body composition and health."
        points={[
          { title: "Health Indicator", text: "Provides a more accurate health picture than body weight alone." },
          { title: "Healthy Range", text: "Typically 10–20% for men and 18–28% for women depending on age." },
          { title: "Low Levels", text: "Extremely low body fat may affect hormonal balance and immune function." },
          { title: "High Levels", text: "Higher percentages increase risk of cardiovascular disease and metabolic disorders." },
          { title: "How to Improve", text: "Maintain a healthy diet, engage in regular exercise, and monitor lifestyle habits." }
        ]}
      />

      <MetricCard
        title="Visceral Fat Index"
        img={visceralImg}
        description="Visceral fat is fat stored deep within the abdominal cavity surrounding internal organs such as the liver, pancreas, and intestines. It is considered the most harmful type of fat."
        points={[
          { title: "Location", text: "Stored deep inside the abdomen around vital organs." },
          { title: "Health Risk", text: "High visceral fat levels are linked to diabetes, heart disease, and metabolic syndrome." },
          { title: "Inflammation", text: "Visceral fat releases inflammatory substances that affect metabolic health." },
          { title: "Normal Range", text: "Healthy visceral fat index is generally below 10 depending on measurement method." },
          { title: "How to Reduce", text: "Aerobic exercise, strength training, stress management, and proper sleep help reduce visceral fat." }
        ]}
      />

      <div className="section-summary">

        <h2>Why Fat Analysis Matters</h2>

        <p>
          Understanding different types of body fat helps identify potential
          health risks that may not be visible through body weight alone.
        </p>

        <p>
          Monitoring fat distribution can guide better fitness, nutrition,
          and lifestyle decisions while supporting long-term metabolic health.
        </p>

        <p>
          Regular fat analysis allows individuals to track progress, manage
          body composition effectively, and reduce the risk of chronic diseases.
        </p>

      </div>

    </div>
  );
}

export default FatAnalysis;