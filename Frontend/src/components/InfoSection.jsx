import styles from "./InfoSection.module.css";
import { useState } from "react";
import LoginModal from "../pages/LoginModal";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";

function InfoSection() {

    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const handleGenerateReport = () => {
        const token = localStorage.getItem("token");

        if (!token || token === "undefined" || token === "null") {
            setShowLogin(true);
        } else {
            navigate("/report");
        }
    };

    // const handleGenerateReport = () => {
    //     console.log("Generate clicked")

    //     setShowLogin(true)   // force open modal
    // }

    const data = [
        { title: "Track Your Body. Transform Your Life", img: img1 },
        { title: "Know your BMI, Fat %, Muscle Mass & Graphs", img: img2 },
        { title: "Get detailed smart scale reports & insights", img: img3 },
        { title: "Get correct food intake according to your body", img: img4 },
        { title: "Lose or Gain Weight Effectively", img: img5 },
        { title: "Stop Demotivating & Encourage Yourself", img: img6 },
        { title: "Start Your Health Journey Today", img: img7 },
    ];

    return (
        <>
            <div className={styles.section}>

                <div className={styles.topContent}>
                    <h1>Understand Your Body Better</h1>
                    <p>Get your personalized health report in seconds</p>

                    <button onClick={handleGenerateReport}>
                        Generate Report
                    </button>
                </div>

                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index === data.length - 1 ? styles.lastCard : ""
                                }`}
                        >
                            <h1>{item.title}</h1>
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>

            </div>

            {/* Login Modal */}
            {showLogin && (
                <LoginModal
                    onClose={() => setShowLogin(false)}
                    onSuccess={() => {
                        setShowLogin(false);
                        navigate("/report");
                    }}
                />
            )}
        </>
    );
}

export default InfoSection;