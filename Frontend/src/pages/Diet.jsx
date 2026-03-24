import MetricCard from "../components/MetricCard";

import eggImg from "../assets/foods/egg.jpg";
import chickenImg from "../assets/foods/chicken.jpg";
import paneerImg from "../assets/foods/paneer.jpg";
import tofuImg from "../assets/foods/tofu.jpg";
import lentilsImg from "../assets/foods/lentils.jpg";
import greekYogurtImg from "../assets/foods/greek yogurt.jpg";
import oatsImg from "../assets/foods/oats.jpg";
import almondsImg from "../assets/foods/almonds.jpg";
import peanutButterImg from "../assets/foods/peanut butter.jpg";
import salmonImg from "../assets/foods/salmon.jpg";
import chickpeasImg from "../assets/foods/chickpeas.jpg";
import quinoaImg from "../assets/foods/quinoa.jpg";
import brownRiceImg from "../assets/foods/brown rice.jpg";
import milkImg from "../assets/foods/milk.jpg";
import soybeansImg from "../assets/foods/soybeans.jpg";
import cottageCheeseImg from "../assets/foods/cottage cheese.jpg";
import sweetPotatoImg from "../assets/foods/sweet potato.jpg";
import broccoliImg from "../assets/foods/broccoli.jpg";
import bananaImg from "../assets/foods/banana.jpg";
import spinachImg from "../assets/foods/spinach.jpg";
import avocadoImg from "../assets/foods/avocado.jpg";

function BalancedDiet() {
  return (
    <div className="section-container">

      <h1 className="section-title">Balanced Diet & High Protein Foods</h1>

      <p className="section-intro">
        A balanced diet provides the body with essential nutrients including
        protein, carbohydrates, fats, vitamins, and minerals. These nutrients
        support muscle growth, energy production, immune function, and overall
        health.
      </p>

      <p className="section-intro">
        Protein-rich foods are especially important because they help repair
        tissues, build muscles, regulate hormones, and maintain metabolic
        balance. Combining protein with healthy fats and complex carbohydrates
        creates a complete diet suitable for weight loss, weight gain, and
        maintaining overall fitness.
      </p>

      {/* Egg */}

      <MetricCard
        title="Egg (Whole)"
        img={eggImg}
        description="Eggs are one of the most nutrient-dense protein foods. They contain high-quality complete protein along with healthy fats and essential vitamins."
        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 12.6g | Fat: 10.6g | Carbohydrates: 1.1g | Calories: 155 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin A, Vitamin D, Vitamin B12, Riboflavin, Selenium, and Choline." },
          { title: "Weight Loss", text: "2–3 boiled eggs at breakfast increase satiety and help reduce calorie intake." },
          { title: "Weight Gain", text: "3–5 eggs daily combined with rice, oats, or whole grains support muscle growth." },
          { title: "Maintain Fitness", text: "1–2 eggs daily provide balanced protein for maintaining health." },
          { title: "Best Time", text: "Breakfast or post-workout for optimal protein absorption." }
        ]}
      />

      {/* Chicken */}

      <MetricCard
        title="Chicken Breast"
        img={chickenImg}
        description="Chicken breast is one of the leanest and highest-quality protein sources widely used in fitness diets."
        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 31g | Fat: 3.6g | Carbohydrates: 0g | Calories: 165 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin B6, Niacin, Phosphorus, Selenium." },
          { title: "Weight Loss", text: "Grilled chicken with vegetables provides high protein with low fat." },
          { title: "Weight Gain", text: "Combine chicken with rice or potatoes to increase calorie intake." },
          { title: "Maintain Fitness", text: "150–200g chicken per day supports muscle maintenance." },
          { title: "Best Time", text: "Lunch or post-workout meal." }
        ]}
      />

      {/* Paneer */}

      <MetricCard
        title="Paneer"
        img={paneerImg}
        description="Paneer is a dairy-based protein food rich in casein protein which digests slowly and supports muscle recovery."
        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 18g | Fat: 20g | Carbohydrates: 1.2g | Calories: 265 kcal" },
          { title: "Vitamins & Minerals", text: "Calcium, Vitamin B12, Phosphorus." },
          { title: "Weight Loss", text: "Eat grilled or low-fat paneer with vegetables." },
          { title: "Weight Gain", text: "Combine paneer with roti or rice for higher calorie intake." },
          { title: "Maintain Fitness", text: "50–100g paneer daily supports protein intake." },
          { title: "Best Time", text: "Lunch or dinner." }
        ]}
      />

      {/* Tofu */}

      <MetricCard
        title="Tofu"
        img={tofuImg}
        description="Tofu is a plant-based protein made from soybeans and is widely used in vegetarian and vegan diets."
        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 8g | Fat: 4.8g | Carbohydrates: 1.9g | Calories: 76 kcal" },
          { title: "Vitamins & Minerals", text: "Iron, Calcium, Magnesium." },
          { title: "Weight Loss", text: "Low calorie tofu helps control weight while providing protein." },
          { title: "Weight Gain", text: "Cook tofu with healthy oils and grains to increase calories." },
          { title: "Maintain Fitness", text: "100–150g tofu supports balanced nutrition." },
          { title: "Best Time", text: "Lunch or dinner." }
        ]}
      />

      {/* Lentils */}

      <MetricCard
        title="Lentils (Dal)"
        img={lentilsImg}
        description="Lentils are a highly nutritious plant protein source rich in fiber, minerals, and complex carbohydrates."
        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 9g | Fat: 0.4g | Carbohydrates: 20g | Calories: 116 kcal" },
          { title: "Vitamins & Minerals", text: "Iron, Folate, Magnesium, Potassium." },
          { title: "Weight Loss", text: "High fiber keeps you full longer and controls appetite." },
          { title: "Weight Gain", text: "Combine lentils with rice for higher calorie intake." },
          { title: "Maintain Fitness", text: "1 bowl daily provides balanced nutrients." },
          { title: "Best Time", text: "Lunch or dinner." }
        ]}
      />

      <MetricCard
        title="Greek Yogurt"
        img={greekYogurtImg}
        description="Greek yogurt is a thick and creamy dairy product that contains high-quality protein and probiotics which support digestion, muscle recovery, and overall health."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 10g | Fat: 4g | Carbohydrates: 3.6g | Calories: 97 kcal" },
          { title: "Vitamins & Minerals", text: "Calcium, Vitamin B12, Potassium, Phosphorus, and probiotics for gut health." },
          { title: "Weight Loss", text: "Eat 150–200g Greek yogurt with fruits or oats to stay full longer and reduce calorie intake." },
          { title: "Weight Gain", text: "Combine Greek yogurt with nuts, honey, and granola to increase calories and protein." },
          { title: "Maintain Fitness", text: "1 bowl daily helps maintain protein intake and supports digestion." },
          { title: "Best Time", text: "Breakfast, snack time, or post-workout for muscle recovery." }
        ]}
      />

      <MetricCard
        title="Oats"
        img={oatsImg}
        description="Oats are a whole-grain food rich in complex carbohydrates, fiber, and moderate protein. They provide long-lasting energy, support heart health, and help maintain stable blood sugar levels."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 16.9g | Fat: 6.9g | Carbohydrates: 66.3g | Fiber: 10.6g | Calories: 389 kcal" },
          { title: "Vitamins & Minerals", text: "Iron, Magnesium, Phosphorus, Zinc, Vitamin B1 (Thiamine), and antioxidants." },
          { title: "Weight Loss", text: "Eat 40–50g oats with milk or yogurt at breakfast to stay full longer and reduce overeating." },
          { title: "Weight Gain", text: "Combine oats with milk, peanut butter, banana, and nuts to increase calories and support muscle gain." },
          { title: "Maintain Fitness", text: "A bowl of oats daily provides steady energy and balanced nutrition." },
          { title: "Best Time", text: "Best eaten at breakfast or before workouts for sustained energy." }
        ]}
      />

      <MetricCard
        title="Almonds"
        img={almondsImg}
        description="Almonds are nutrient-dense nuts rich in healthy fats, plant protein, fiber, and antioxidants. They support heart health, brain function, and provide sustained energy throughout the day."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 21.2g | Fat: 49.9g | Carbohydrates: 21.6g | Fiber: 12.5g | Calories: 579 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin E, Magnesium, Calcium, Iron, Potassium, and antioxidants." },
          { title: "Weight Loss", text: "Eat 20–25g (about a small handful) as a snack to reduce hunger and prevent overeating." },
          { title: "Weight Gain", text: "Add almonds to smoothies, oatmeal, or desserts to increase healthy calorie intake." },
          { title: "Maintain Fitness", text: "A small daily serving provides healthy fats and sustained energy." },
          { title: "Best Time", text: "Morning snack, between meals, or before workouts." }
        ]}
      />

      <MetricCard
        title="Peanut Butter"
        img={peanutButterImg}
        description="Peanut butter is a nutrient-rich spread made from ground peanuts. It provides a good balance of plant protein, healthy fats, and energy, making it popular in fitness and muscle-building diets."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 25.0g | Fat: 50.0g | Carbohydrates: 20.0g | Fiber: 6.0g | Calories: 588 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin E, Niacin (Vitamin B3), Magnesium, Potassium, and Phosphorus." },
          { title: "Weight Loss", text: "Consume 1 tablespoon with whole-grain bread or fruits to stay full longer and control cravings." },
          { title: "Weight Gain", text: "Add 2–3 tablespoons to smoothies, oats, or toast to increase calorie and protein intake." },
          { title: "Maintain Fitness", text: "1–2 tablespoons daily provide healthy fats and plant protein for balanced nutrition." },
          { title: "Best Time", text: "Breakfast, pre-workout snack, or with smoothies." }
        ]}
      />

      <MetricCard
        title="Salmon"
        img={salmonImg}
        description="Salmon is a highly nutritious fatty fish known for its high-quality protein and omega-3 fatty acids. It supports heart health, muscle recovery, brain function, and overall metabolic health."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 20.4g | Fat: 13.4g | Carbohydrates: 0g | Calories: 208 kcal | Omega-3: ~2.3g" },
          { title: "Vitamins & Minerals", text: "Vitamin D, Vitamin B12, Vitamin B6, Selenium, Potassium, and Omega-3 fatty acids." },
          { title: "Weight Loss", text: "Grilled or baked salmon with vegetables provides high protein while keeping calories controlled." },
          { title: "Weight Gain", text: "Pair salmon with rice, quinoa, or sweet potatoes to increase healthy calorie intake." },
          { title: "Maintain Fitness", text: "Eat salmon 2–3 times per week to support heart health and muscle recovery." },
          { title: "Best Time", text: "Lunch or dinner, especially after workouts for recovery." }
        ]}
      />

      <MetricCard
        title="Chickpeas (Chana)"
        img={chickpeasImg}
        description="Chickpeas are a highly nutritious legume packed with plant-based protein, fiber, and complex carbohydrates. They support digestion, provide sustained energy, and help maintain overall metabolic health."

        points={[
          { title: "Nutrition (per 100g cooked)", text: "Protein: 8.9g | Fat: 2.6g | Carbohydrates: 27.4g | Fiber: 7.6g | Calories: 164 kcal" },
          { title: "Vitamins & Minerals", text: "Folate (Vitamin B9), Iron, Magnesium, Potassium, and Zinc." },
          { title: "Weight Loss", text: "Eat 1 bowl of boiled chickpeas with vegetables or salad to stay full longer and control hunger." },
          { title: "Weight Gain", text: "Combine chickpeas with rice, roti, or tahini to increase calorie and protein intake." },
          { title: "Maintain Fitness", text: "1 bowl daily provides plant protein and fiber for balanced nutrition." },
          { title: "Best Time", text: "Lunch, dinner, or as a healthy snack like roasted chana." }
        ]}
      />

      <MetricCard
        title="Quinoa"
        img={quinoaImg}
        description="Quinoa is a nutrient-rich whole grain that provides complete plant protein, complex carbohydrates, and fiber. It supports muscle recovery, sustained energy, and overall metabolic health."

        points={[
          { title: "Nutrition (per 100g cooked)", text: "Protein: 4.4g | Fat: 1.9g | Carbohydrates: 21.3g | Fiber: 2.8g | Calories: 120 kcal" },
          { title: "Vitamins & Minerals", text: "Magnesium, Iron, Potassium, Phosphorus, Vitamin B6, and antioxidants." },
          { title: "Weight Loss", text: "Eat quinoa with vegetables and lean protein to stay full longer and maintain calorie control." },
          { title: "Weight Gain", text: "Combine quinoa with chicken, beans, or avocado to increase calories and protein intake." },
          { title: "Maintain Fitness", text: "1 bowl daily provides balanced protein, fiber, and energy." },
          { title: "Best Time", text: "Lunch or dinner as a healthy alternative to rice." }
        ]}
      />

      <MetricCard
        title="Brown Rice"
        img={brownRiceImg}
        description="Brown rice is a whole grain that provides complex carbohydrates, fiber, and moderate protein. It delivers steady energy and supports digestion, making it a staple in balanced and fitness-focused diets."

        points={[
          { title: "Nutrition (per 100g cooked)", text: "Protein: 2.6g | Fat: 0.9g | Carbohydrates: 23.0g | Fiber: 1.8g | Calories: 111 kcal" },
          { title: "Vitamins & Minerals", text: "Magnesium, Manganese, Phosphorus, Selenium, and B vitamins (especially B1 and B3)." },
          { title: "Weight Loss", text: "Pair 1 small bowl with vegetables and lean protein to maintain satiety while controlling calories." },
          { title: "Weight Gain", text: "Combine larger portions with protein foods like chicken, eggs, or lentils to increase calorie intake." },
          { title: "Maintain Fitness", text: "A moderate serving provides sustained energy for daily activities and workouts." },
          { title: "Best Time", text: "Lunch or post-workout meals for replenishing energy." }
        ]}
      />

      <MetricCard
        title="Milk"
        img={milkImg}
        description="Milk is a complete and highly nutritious food that provides high-quality protein, healthy fats, carbohydrates, and essential vitamins and minerals. It supports muscle growth, bone strength, and overall body development."

        points={[
          { title: "Nutrition (per 100ml)", text: "Protein: 3.4g | Fat: 3.6g | Carbohydrates: 5.0g | Calories: 61 kcal" },
          { title: "Vitamins & Minerals", text: "Calcium, Vitamin D, Vitamin B12, Potassium, Phosphorus, and Riboflavin (B2)." },
          { title: "Weight Loss", text: "Drink 1 glass of low-fat milk to provide protein and reduce hunger between meals." },
          { title: "Weight Gain", text: "Drink 2–3 glasses of whole milk daily or add milk to smoothies and oats to increase calories." },
          { title: "Maintain Fitness", text: "1 glass daily supports bone strength and balanced nutrition." },
          { title: "Best Time", text: "Morning, post-workout, or before bedtime for muscle recovery." }
        ]}
      />

      <MetricCard
        title="Soybeans"
        img={soybeansImg}
        description="Soybeans are one of the richest plant-based protein sources. They contain high-quality protein, healthy fats, and essential nutrients that support muscle growth, heart health, and overall metabolic function."

        points={[
          { title: "Nutrition (per 100g cooked)", text: "Protein: 16.6g | Fat: 9.0g | Carbohydrates: 9.9g | Fiber: 6.0g | Calories: 173 kcal" },
          { title: "Vitamins & Minerals", text: "Iron, Calcium, Magnesium, Potassium, Folate (Vitamin B9), and Vitamin K." },
          { title: "Weight Loss", text: "Soybeans provide high protein and fiber which help keep you full longer and reduce overeating." },
          { title: "Weight Gain", text: "Combine soybeans with rice, quinoa, or whole grains to increase calories and protein intake." },
          { title: "Maintain Fitness", text: "1 bowl of cooked soybeans or soy products helps maintain daily protein requirements." },
          { title: "Best Time", text: "Lunch or dinner as part of a balanced meal." }
        ]}
      />

      <MetricCard
        title="Cottage Cheese"
        img={cottageCheeseImg}
        description="Cottage cheese is a fresh dairy product rich in high-quality casein protein. It digests slowly, making it ideal for muscle repair, recovery, and maintaining long-lasting satiety."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 11.1g | Fat: 4.3g | Carbohydrates: 3.4g | Calories: 98 kcal" },
          { title: "Vitamins & Minerals", text: "Calcium, Vitamin B12, Phosphorus, Selenium, and Riboflavin (Vitamin B2)." },
          { title: "Weight Loss", text: "Low-fat cottage cheese with vegetables or fruit provides high protein with fewer calories." },
          { title: "Weight Gain", text: "Combine cottage cheese with whole grains, nuts, or toast to increase calorie intake." },
          { title: "Maintain Fitness", text: "100–150g daily helps maintain protein intake and supports muscle recovery." },
          { title: "Best Time", text: "Evening snack or before bedtime due to slow-digesting protein." }
        ]}
      />

      <MetricCard
        title="Sweet Potato"
        img={sweetPotatoImg}
        description="Sweet potatoes are nutrient-rich root vegetables packed with complex carbohydrates, fiber, and essential vitamins. They provide steady energy and support digestion, immunity, and overall health."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 1.6g | Fat: 0.1g | Carbohydrates: 20.1g | Fiber: 3.0g | Calories: 86 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin A (Beta-Carotene), Vitamin C, Vitamin B6, Potassium, and Manganese." },
          { title: "Weight Loss", text: "Boiled or baked sweet potatoes keep you full longer and provide low-fat energy." },
          { title: "Weight Gain", text: "Combine sweet potatoes with eggs, chicken, or peanut butter to increase calories." },
          { title: "Maintain Fitness", text: "1 medium sweet potato provides steady energy for workouts and daily activities." },
          { title: "Best Time", text: "Lunch, dinner, or pre-workout meal." }
        ]}
      />

      <MetricCard
        title="Broccoli"
        img={broccoliImg}
        description="Broccoli is a highly nutritious green vegetable packed with vitamins, minerals, fiber, and antioxidants. It supports immune function, digestion, and overall health while being very low in calories."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 2.8g | Fat: 0.4g | Carbohydrates: 7.0g | Fiber: 2.6g | Calories: 34 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin C, Vitamin K, Folate (Vitamin B9), Potassium, and antioxidants." },
          { title: "Weight Loss", text: "Low calories and high fiber help keep you full while reducing total calorie intake." },
          { title: "Weight Gain", text: "Combine broccoli with protein foods like chicken, eggs, or tofu in meals." },
          { title: "Maintain Fitness", text: "1 bowl of steamed broccoli daily supports immunity and balanced nutrition." },
          { title: "Best Time", text: "Lunch or dinner as part of a balanced meal." }
        ]}
      />

      <MetricCard
        title="Banana"
        img={bananaImg}
        description="Bananas are a natural energy-boosting fruit rich in carbohydrates, potassium, and essential vitamins. They support muscle function, digestion, and quick energy replenishment, making them popular among athletes and fitness enthusiasts."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 1.1g | Fat: 0.3g | Carbohydrates: 23.0g | Fiber: 2.6g | Calories: 89 kcal" },
          { title: "Vitamins & Minerals", text: "Potassium, Vitamin B6, Vitamin C, Magnesium, and antioxidants." },
          { title: "Weight Loss", text: "Eat 1 banana as a snack to control hunger and maintain energy levels." },
          { title: "Weight Gain", text: "Combine bananas with milk, peanut butter, or oats in smoothies to increase calories." },
          { title: "Maintain Fitness", text: "1 banana daily helps maintain energy levels and muscle function." },
          { title: "Best Time", text: "Pre-workout, breakfast, or post-workout for quick energy recovery." }
        ]}
      />

      <MetricCard
        title="Spinach"
        img={spinachImg}
        description="Spinach is a highly nutritious leafy green vegetable rich in vitamins, minerals, antioxidants, and fiber. It supports immunity, improves digestion, and contributes to overall body health while being very low in calories."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 2.9g | Fat: 0.4g | Carbohydrates: 3.6g | Fiber: 2.2g | Calories: 23 kcal" },
          { title: "Vitamins & Minerals", text: "Iron, Vitamin A, Vitamin C, Vitamin K, Folate, Magnesium, and Potassium." },
          { title: "Weight Loss", text: "Low in calories and high in fiber, spinach helps control hunger and supports fat loss diets." },
          { title: "Weight Gain", text: "Combine spinach with calorie-dense foods like eggs, paneer, or rice to increase nutrition and calories." },
          { title: "Maintain Fitness", text: "1 bowl of spinach regularly helps maintain strong immunity and overall health." },
          { title: "Best Time", text: "Lunch or dinner in salads, smoothies, soups, or cooked vegetable dishes." }
        ]}
      />

      <MetricCard
        title="Avocado"
        img={avocadoImg}
        description="Avocado is a nutrient-dense fruit rich in healthy monounsaturated fats, fiber, and essential vitamins. It supports heart health, provides sustained energy, and helps maintain balanced nutrition."

        points={[
          { title: "Nutrition (per 100g)", text: "Protein: 2.0g | Fat: 15.0g | Carbohydrates: 9.0g | Fiber: 7.0g | Calories: 160 kcal" },
          { title: "Vitamins & Minerals", text: "Vitamin K, Vitamin E, Vitamin C, Vitamin B6, Folate, Potassium, and Magnesium." },
          { title: "Weight Loss", text: "Half an avocado with meals increases satiety and helps control hunger." },
          { title: "Weight Gain", text: "Add avocado to smoothies, sandwiches, or salads to increase healthy calorie intake." },
          { title: "Maintain Fitness", text: "Moderate portions provide healthy fats that support energy levels and heart health." },
          { title: "Best Time", text: "Breakfast, lunch, or as part of salads and healthy snacks." }
        ]}
      />

      <div className="section-summary">

        <h2>Why Balanced Diet Matters</h2>

        <p>
          A balanced diet ensures the body receives all essential nutrients
          required for energy, muscle repair, immune function, and long-term
          health.
        </p>

        <p>
          Combining high-protein foods with healthy fats and complex
          carbohydrates helps achieve different goals such as weight loss,
          muscle gain, or maintaining a healthy lifestyle.
        </p>

      </div>

    </div>
  );
}

export default BalancedDiet;