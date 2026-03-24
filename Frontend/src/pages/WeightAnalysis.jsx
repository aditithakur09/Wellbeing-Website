import MetricCard from "../components/MetricCard";
import bmiImg from "../assets/bmi.png";
import standardWeightImg from "../assets/standard-weight.png";

function WeightAnalysis() {
  return (
    <div className="section-container">

      <h1 className="section-title">Weight Analysis</h1>

      <p className="section-intro">
        Weight analysis evaluates whether a person's body weight is within a
        healthy range relative to their height, age, and body composition.
        Instead of focusing only on total weight, it considers important
        indicators such as Body Mass Index (BMI) and standard weight range
        to assess overall health status.
      </p>

      <p className="section-intro">
        Maintaining a healthy body weight plays a key role in preventing
        chronic diseases, improving metabolic function, and supporting
        long-term physical wellbeing. Weight analysis helps individuals
        understand whether they need to maintain, reduce, or gain weight
        for better health outcomes.
      </p>

      <MetricCard
        title="Body Mass Index (BMI)"
        img={bmiImg}
        description="Body Mass Index (BMI) is a widely used indicator that estimates whether a person’s body weight is appropriate for their height. It provides a quick way to classify weight status and identify potential health risks."
        points={[
          { title: "Calculation", text: "BMI is calculated using a person's weight divided by the square of their height." },
          { title: "Underweight", text: "A BMI below 18.5 may indicate insufficient body weight and possible nutritional deficiencies." },
          { title: "Healthy Range", text: "A BMI between 18.5 and 24.9 is generally considered a healthy weight range." },
          { title: "Overweight", text: "BMI between 25 and 29.9 may indicate excess body weight and increased health risks." },
          { title: "Obesity", text: "BMI above 30 is associated with higher risk of heart disease, diabetes, and metabolic disorders." }
        ]}
      />

      <MetricCard
        title="Standard Weight"
        img={standardWeightImg}
        description="Standard weight refers to the recommended body weight range based on a person's height and body structure. It helps determine whether an individual’s weight falls within a healthy range."
        points={[
          { title: "Reference Range", text: "Standard weight is typically calculated using height-based formulas and BMI guidelines." },
          { title: "Health Indicator", text: "Being within the standard weight range generally indicates balanced body composition and metabolic health." },
          { title: "Below Standard", text: "Weight significantly below the recommended range may lead to weakness, fatigue, and nutritional deficiencies." },
          { title: "Above Standard", text: "Excess weight may increase the likelihood of cardiovascular disease, diabetes, and joint stress." },
          { title: "Maintaining Balance", text: "Balanced nutrition, regular exercise, and consistent lifestyle habits help maintain a healthy weight range." }
        ]}
      />

      <div className="section-summary">

        <h2>Why Weight Analysis Matters</h2>

        <p>
          Monitoring body weight relative to height provides valuable insight
          into overall health and potential risk factors for chronic diseases.
        </p>

        <p>
          Indicators such as BMI and standard weight help identify whether a
          person should maintain, lose, or gain weight to achieve optimal
          physical health.
        </p>

        <p>
          Regular weight analysis supports healthier lifestyle choices and
          helps individuals track progress toward long-term wellness goals.
        </p>

      </div>

    </div>
  );
}

export default WeightAnalysis;