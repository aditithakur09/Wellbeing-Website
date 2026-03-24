import MetricCard from "../components/MetricCard";

import bridge from "../assets/Exercise/1.bridge.gif";
import chairSquat from "../assets/Exercise/2.chair squat.gif";
import kneePushup from "../assets/Exercise/3.knee pushup.gif";
import frontLunge from "../assets/Exercise/4.front lunge.gif";
import donkeyKick from "../assets/Exercise/5.donkey kick.gif";
import crunches from "../assets/Exercise/6.crunches.gif";
import pushup from "../assets/Exercise/7.pushup.gif";
import singleLegBridge from "../assets/Exercise/8.single leg bridge with leg extended.gif";
import doubleCrunches from "../assets/Exercise/9.double crunches.gif";
import plank from "../assets/Exercise/10.plank.jpg";
import hipTwistPlank from "../assets/Exercise/11.hip twist plank.gif";
import squats from "../assets/Exercise/12.squats.gif";
import sidePlank from "../assets/Exercise/13.side plank.jpg";
import bicycleCrunches from "../assets/Exercise/14.bicycle crunches.gif";
import forwardBackwardLunge from "../assets/Exercise/15.forward and backward lunge.gif";

function Exercises() {
  return (
    <div className="section-container">

      <h1 className="section-title">Fitness Exercises</h1>

      <p className="section-intro">
        Regular exercise is essential for maintaining physical health,
        improving metabolism, strengthening muscles, and supporting
        cardiovascular fitness. Performing structured exercises helps
        regulate body weight, enhance endurance, and improve overall
        functional strength.
      </p>

      <p className="section-intro">
        The exercises below target multiple muscle groups and can be
        adapted for different goals including weight loss, muscle gain,
        and maintaining general fitness. Performing them consistently
        with correct technique maximizes results and reduces injury risk.
      </p>

      <MetricCard
        title="Glute Bridge"
        img={bridge}
        description="Glute bridge is a lower-body strengthening exercise that primarily targets the glutes and hips. It improves hip stability, strengthens the posterior chain, and supports better posture and lower back health."

        points={[
          { title: "Muscles Targeted", text: "Glutes, hamstrings, lower back, and core." },
          { title: "Benefits", text: "Strengthens glutes, improves hip mobility, reduces lower back pain, and enhances posture." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–20 repetitions with short rest to activate large lower body muscles and increase calorie burn." },
          { title: "Weight Gain", text: "Add resistance like dumbbells or a barbell and perform 4 sets of 10–12 reps to build muscle mass." },
          { title: "Maintain Fitness", text: "2–3 sets of 12–15 reps help maintain hip strength and core stability." },
          { title: "Best Time", text: "Best performed during lower-body workouts or after warm-up exercises." }
        ]}
      />

      <MetricCard
        title="Chair Squat"
        img={chairSquat}
        description="Chair squats are a beginner-friendly lower body exercise that helps build strength in the legs and glutes while improving balance and stability. Using a chair provides support and ensures proper squat depth."

        points={[
          { title: "Muscles Targeted", text: "Quadriceps, glutes, hamstrings, and core." },
          { title: "Benefits", text: "Improves lower body strength, enhances balance, and teaches correct squat form." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–20 repetitions with short rest to increase calorie burn." },
          { title: "Weight Gain", text: "Add resistance such as dumbbells and perform 4 sets of 10–12 reps for muscle growth." },
          { title: "Maintain Fitness", text: "2–3 sets of 12–15 reps help maintain leg strength and mobility." },
          { title: "Best Time", text: "Best included during lower body workouts or full-body routines." }
        ]}
      />

      <MetricCard
        title="Knee Push-Up"
        img={kneePushup}
        description="Knee push-ups are a modified version of the traditional push-up, designed to build upper body strength while reducing the load on the arms and shoulders."

        points={[
          { title: "Muscles Targeted", text: "Chest, shoulders, triceps, and core." },
          { title: "Benefits", text: "Builds upper body strength, improves arm endurance, and prepares beginners for full push-ups." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 12–15 reps with minimal rest to increase calorie burn." },
          { title: "Weight Gain", text: "Increase repetitions and sets gradually to build upper body muscle strength." },
          { title: "Maintain Fitness", text: "2–3 sets of 10–12 reps help maintain upper body endurance." },
          { title: "Best Time", text: "Ideal during upper body workouts or circuit training." }
        ]}
      />

      <MetricCard
        title="Front Lunge"
        img={frontLunge}
        description="Front lunges are a powerful lower-body exercise that improves leg strength, balance, and coordination by engaging one leg at a time."

        points={[
          { title: "Muscles Targeted", text: "Quadriceps, glutes, hamstrings, and calves." },
          { title: "Benefits", text: "Improves balance, strengthens legs, and enhances lower body coordination." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 12–15 reps per leg to increase calorie burn and improve endurance." },
          { title: "Weight Gain", text: "Use dumbbells or a barbell and perform 4 sets of 8–10 reps per leg for muscle growth." },
          { title: "Maintain Fitness", text: "2–3 sets of 10–12 reps per leg help maintain leg strength and stability." },
          { title: "Best Time", text: "Best included in leg workouts or full-body training sessions." }
        ]}
      />

      <MetricCard
        title="Donkey Kick"
        img={donkeyKick}
        description="Donkey kicks are an effective bodyweight exercise that targets the glutes and helps strengthen the hips and lower body."

        points={[
          { title: "Muscles Targeted", text: "Glutes, hamstrings, and core stabilizers." },
          { title: "Benefits", text: "Strengthens glutes, improves hip stability, and supports better lower body strength." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–20 reps per leg with short rest to keep muscles active." },
          { title: "Weight Gain", text: "Add ankle weights or resistance bands and perform 4 sets of 12–15 reps." },
          { title: "Maintain Fitness", text: "2–3 sets of 12–15 reps per leg help maintain glute strength." },
          { title: "Best Time", text: "Ideal during lower-body or glute-focused workouts." }
        ]}
      />

      <MetricCard
        title="Crunches"
        img={crunches}
        description="Crunches are a classic abdominal exercise that strengthens the core by targeting the abdominal muscles and improving overall core stability."

        points={[
          { title: "Muscles Targeted", text: "Rectus abdominis, obliques, and core stabilizers." },
          { title: "Benefits", text: "Strengthens core muscles, improves posture, and supports spinal stability." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–25 repetitions with short rest to keep the core engaged and support calorie burning workouts." },
          { title: "Weight Gain", text: "Increase resistance by holding a weight plate or slowing the movement to build stronger abdominal muscles." },
          { title: "Maintain Fitness", text: "2–3 sets of 15–20 reps help maintain core strength and endurance." },
          { title: "Best Time", text: "Ideal during core workouts or at the end of full-body training sessions." }
        ]}
      />

      <MetricCard
        title="Push-Up"
        img={pushup}
        description="Push-ups are a fundamental upper-body exercise that builds strength in the chest, shoulders, arms, and core using body weight resistance."

        points={[
          { title: "Muscles Targeted", text: "Chest, shoulders, triceps, and core." },
          { title: "Benefits", text: "Builds upper body strength, improves muscular endurance, and enhances core stability." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 12–20 repetitions with minimal rest to increase calorie burn." },
          { title: "Weight Gain", text: "Add weighted vests or perform slower reps to increase muscle strength and growth." },
          { title: "Maintain Fitness", text: "2–3 sets of 10–15 reps help maintain upper body strength." },
          { title: "Best Time", text: "Best included in upper body workouts or circuit training." }
        ]}
      />

      <MetricCard
        title="Single Leg Bridge (Leg Extended)"
        img={singleLegBridge}
        description="The single leg bridge with leg extended is an advanced glute exercise that strengthens the hips and core while improving balance and stability."

        points={[
          { title: "Muscles Targeted", text: "Glutes, hamstrings, lower back, and core." },
          { title: "Benefits", text: "Improves glute strength, enhances hip stability, and helps correct muscle imbalances." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 12–15 reps per leg to activate large lower body muscles and support calorie burn." },
          { title: "Weight Gain", text: "Increase resistance by adding ankle weights or holding the top position longer." },
          { title: "Maintain Fitness", text: "2–3 sets of 10–12 reps per leg help maintain hip strength and stability." },
          { title: "Best Time", text: "Ideal during glute or lower-body workouts." }
        ]}
      />

      <MetricCard
        title="Double Crunches"
        img={doubleCrunches}
        description="Double crunches are an advanced abdominal exercise that simultaneously lifts the upper body and legs to engage the entire core for improved strength and stability."

        points={[
          { title: "Muscles Targeted", text: "Rectus abdominis, lower abs, obliques, and core stabilizers." },
          { title: "Benefits", text: "Strengthens the entire abdominal region and improves core coordination." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–20 repetitions with short rest to keep the core active and support calorie burning workouts." },
          { title: "Weight Gain", text: "Slow down the movement or add ankle weights to increase core muscle strength." },
          { title: "Maintain Fitness", text: "2–3 sets of 12–15 reps help maintain strong abdominal muscles." },
          { title: "Best Time", text: "Ideal during dedicated core workouts or at the end of training sessions." }
        ]}
      />

      <MetricCard
        title="Plank"
        img={plank}
        description="Plank is a highly effective core stabilization exercise that strengthens the abdominal muscles, back, and shoulders while improving posture and endurance."

        points={[
          { title: "Muscles Targeted", text: "Core, shoulders, lower back, and glutes." },
          { title: "Benefits", text: "Improves core stability, strengthens posture muscles, and enhances endurance." },
          { title: "Weight Loss", text: "Hold for 30–60 seconds for 3–4 sets to engage multiple muscles and increase calorie burn." },
          { title: "Weight Gain", text: "Increase hold time or add resistance like a weight plate on the back." },
          { title: "Maintain Fitness", text: "2–3 sets of 30–45 seconds maintain core strength and stability." },
          { title: "Best Time", text: "Best included during core workouts or HIIT routines." }
        ]}
      />

      <MetricCard
        title="Hip Twist Plank"
        img={hipTwistPlank}
        description="Hip twist plank is a dynamic core exercise where the hips rotate side to side while holding a plank position, engaging the obliques and improving core control."

        points={[
          { title: "Muscles Targeted", text: "Obliques, abs, lower back, and shoulders." },
          { title: "Benefits", text: "Strengthens the oblique muscles and improves rotational core stability." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 20–30 twists to keep the core active and increase calorie burn." },
          { title: "Weight Gain", text: "Add ankle weights or slow the twisting movement to increase muscle engagement." },
          { title: "Maintain Fitness", text: "2–3 sets of 15–20 twists maintain strong core muscles." },
          { title: "Best Time", text: "Ideal during core or abdominal workout routines." }
        ]}
      />

      <MetricCard
        title="Squats"
        img={squats}
        description="Squats are one of the most effective compound exercises for building lower body strength and improving overall functional fitness."

        points={[
          { title: "Muscles Targeted", text: "Quadriceps, glutes, hamstrings, calves, and core." },
          { title: "Benefits", text: "Builds leg strength, improves balance, and increases overall lower body power." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 15–20 reps to engage large muscle groups and burn more calories." },
          { title: "Weight Gain", text: "Add weights like dumbbells or barbells and perform 4 sets of 8–12 reps." },
          { title: "Maintain Fitness", text: "2–3 sets of 12–15 reps help maintain strong and healthy legs." },
          { title: "Best Time", text: "Best included in leg day or full-body workout sessions." }
        ]}
      />

      <MetricCard
        title="Side Plank"
        img={sidePlank}
        description="Side plank is a core stabilization exercise that targets the oblique muscles and helps improve balance and spinal support."

        points={[
          { title: "Muscles Targeted", text: "Obliques, core stabilizers, shoulders, and hips." },
          { title: "Benefits", text: "Strengthens the side abdominal muscles and improves core balance." },
          { title: "Weight Loss", text: "Hold for 20–40 seconds per side for 3–4 sets to keep the core active." },
          { title: "Weight Gain", text: "Increase hold duration or add leg raises to increase muscle challenge." },
          { title: "Maintain Fitness", text: "2–3 sets of 20–30 seconds per side maintain strong obliques." },
          { title: "Best Time", text: "Ideal during core training or stability workouts." }
        ]}
      />

      <MetricCard
        title="Bicycle Crunches"
        img={bicycleCrunches}
        description="Bicycle crunches are a dynamic abdominal exercise that engages both the upper and lower abs while activating the oblique muscles through a cycling motion."

        points={[
          { title: "Muscles Targeted", text: "Rectus abdominis, obliques, hip flexors, and core stabilizers." },
          { title: "Benefits", text: "Strengthens the entire core, improves coordination, and enhances abdominal endurance." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 20–30 repetitions to keep the core active and increase calorie burn." },
          { title: "Weight Gain", text: "Slow down the movement or add ankle weights to increase muscle engagement." },
          { title: "Maintain Fitness", text: "2–3 sets of 15–20 reps help maintain strong abdominal muscles." },
          { title: "Best Time", text: "Ideal during core workouts or at the end of full-body training sessions." }
        ]}
      />

      <MetricCard
        title="Forward and Backward Lunge"
        img={forwardBackwardLunge}
        description="Forward and backward lunges are a dynamic lower body exercise that improves leg strength, balance, and coordination by moving the body both forward and backward."

        points={[
          { title: "Muscles Targeted", text: "Quadriceps, glutes, hamstrings, calves, and core." },
          { title: "Benefits", text: "Improves balance, strengthens legs, and enhances lower body coordination." },
          { title: "Weight Loss", text: "Perform 3–4 sets of 12–15 reps per leg to increase calorie burn and endurance." },
          { title: "Weight Gain", text: "Add dumbbells or resistance and perform 4 sets of 8–10 reps per leg for muscle growth." },
          { title: "Maintain Fitness", text: "2–3 sets of 10–12 reps per leg help maintain leg strength and stability." },
          { title: "Best Time", text: "Best included in lower-body workouts or full-body training routines." }
        ]}
      />

      <div className="section-summary">

        <h2>How to Use These Exercises</h2>

        <p>
          Combining cardiovascular exercises with strength training helps
          improve overall body composition. Exercises such as jumping jacks,
          mountain climbers, and burpees increase calorie expenditure,
          while squats, lunges, and push-ups build muscular strength.
        </p>

        <p>
          For weight loss, higher repetitions and shorter rest intervals
          are recommended. For muscle gain, focus on controlled repetitions
          with added resistance. Maintaining fitness requires balanced
          training with moderate intensity and consistency.
        </p>

        <p>
          Performing these exercises 3–5 times per week can significantly
          improve endurance, muscle tone, and metabolic health while
          supporting long-term physical wellbeing.
        </p>

      </div>

    </div>
  );
}

export default Exercises;