import MetricCard from "../components/MetricCard";
import fatMassImg from "../assets/fat mass.jpeg";
import leanFatImg from "../assets/lean fat.jpeg";
import muscleMassImg from "../assets/muscle mass.jpg";
import boneMassImg from "../assets/bone mass.jpg";

function BodyComposition() {
  return (
    <div className="section-container">

      <h1 className="section-title">Body Composition</h1>

      <p className="section-intro">
        Body composition describes what your body is made of. Instead of simply
        looking at total body weight, body composition breaks the body into
        several components such as fat, muscle, bone, and lean tissue. 
        Understanding these components provides a clearer picture of overall
        health, fitness level, and metabolic performance.
      </p>

      <p className="section-intro">
        Two people may weigh the same but have completely different body
        compositions. Someone with higher muscle mass and lower fat percentage
        generally has better metabolic health compared to someone with higher
        body fat levels. Tracking body composition helps monitor fitness
        progress, identify health risks, and create effective nutrition and
        training strategies.
      </p>

      <MetricCard
        title="Fat Mass"
        img={fatMassImg}
        description="Fat mass represents the total amount of fat stored in the body. It includes both essential fat required for normal physiological functions and stored fat that serves as an energy reserve."
        points={[
          { title: "Essential Fat", text: "Required for hormone production, brain function, and protecting vital organs." },
          { title: "Stored Fat", text: "Acts as an energy reserve and insulation for the body." },
          { title: "Healthy Range", text: "Varies by age and gender but generally 10–20% for men and 18–28% for women." },
          { title: "Too Low", text: "May lead to hormonal imbalance, fatigue, weakened immunity, and reproductive issues." },
          { title: "Too High", text: "Associated with obesity, cardiovascular disease, insulin resistance, and metabolic disorders." },
          { title: "How to Improve", text: "Maintain a balanced calorie intake, perform regular cardiovascular exercise, and include strength training to support fat loss." }
        ]}
      />

      <MetricCard
        title="Lean Mass"
        img={leanFatImg}
        description="Lean mass refers to all the components of the body except fat. This includes muscles, bones, organs, body fluids, and connective tissues."
        points={[
          { title: "Key Role", text: "Lean mass supports movement, metabolism, organ function, and overall strength." },
          { title: "Metabolic Impact", text: "Higher lean mass increases the number of calories your body burns at rest." },
          { title: "Low Lean Mass", text: "May result in reduced strength, lower metabolism, fatigue, and poor physical performance." },
          { title: "Healthy Levels", text: "Maintaining strong lean mass is essential for physical resilience and metabolic efficiency." },
          { title: "How to Improve", text: "Resistance training, adequate protein intake, and proper recovery help maintain and build lean mass." }
        ]}
      />

      <MetricCard
        title="Muscle Mass"
        img={muscleMassImg}
        description="Muscle mass represents the total weight of muscles in the body. Skeletal muscles play a crucial role in movement, posture, metabolism, and overall physical performance."
        points={[
          { title: "Metabolism Booster", text: "Muscle tissue burns more calories than fat tissue, even at rest." },
          { title: "Strength & Mobility", text: "Higher muscle mass improves physical strength, stability, and endurance." },
          { title: "Low Muscle Mass", text: "Can lead to weakness, slower metabolism, higher fat gain, and reduced mobility." },
          { title: "Age Factor", text: "Muscle mass naturally declines with age if not maintained through physical activity." },
          { title: "How to Build", text: "Strength training, progressive overload, adequate protein intake, and quality sleep are essential for muscle growth." }
        ]}
      />

      <MetricCard
        title="Bone Mass"
        img={boneMassImg}
        description="Bone mass indicates the total weight and density of bones in the body. Strong bones provide structural support, protect organs, and enable movement along with muscles."
        points={[
          { title: "Structural Support", text: "Bones form the framework that supports the entire body." },
          { title: "Mineral Storage", text: "Bones store essential minerals such as calcium and phosphorus." },
          { title: "Low Bone Mass", text: "Can increase the risk of fractures, osteoporosis, and bone weakness." },
          { title: "Age Impact", text: "Bone density naturally declines with age, especially without proper nutrition and activity." },
          { title: "How to Strengthen", text: "Weight-bearing exercises, adequate calcium intake, vitamin D, and balanced nutrition help maintain bone health." }
        ]}
      />

      <div className="section-summary">

        <h2>Why Body Composition Matters</h2>

        <p>
          Monitoring body composition provides a deeper understanding of your
          health beyond just body weight. It helps identify whether weight
          changes come from fat loss, muscle gain, or water fluctuations.
        </p>

        <p>
          Maintaining a healthy balance between fat mass, muscle mass, and lean
          tissue contributes to better metabolism, improved physical
          performance, stronger immunity, and reduced risk of chronic diseases.
        </p>

        <p>
          Regularly tracking body composition can guide lifestyle decisions,
          support fitness goals, and help build long-term sustainable health
          habits.
        </p>

      </div>

    </div>
  );
}

export default BodyComposition;