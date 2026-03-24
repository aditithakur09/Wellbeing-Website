import { useState } from "react";
import { calculateReport } from "../utils/calculateReport";
import { generatePDF } from "../utils/generatePDF";
import styles from "./ReportForm.module.css";

function ReportForm() {
  const [form, setForm] = useState({ gender: "female", heightUnit: "cm" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const calculateAge = (dob) => {
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const validate = () => {
    const e = {};
    if (!form.name?.trim()) e.name = "Name is required";
    if (!form.dob) e.dob = "Date of birth is required";
    else if (calculateAge(form.dob) < 10 || calculateAge(form.dob) > 100)
      e.dob = "Please enter a valid date of birth";
    if (!form.height || isNaN(form.height) || +form.height <= 0)
      e.height = "Enter a valid height";
    if (!form.weight || isNaN(form.weight) || +form.weight < 20 || +form.weight > 300)
      e.weight = "Enter a valid weight (20–300 kg)";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    const age = calculateAge(form.dob);
    const data = calculateReport({ ...form, age });

    // small delay for UX feel
    await new Promise(r => setTimeout(r, 600));
    generatePDF(data);
    setDone(true);
    setLoading(false);

    // Save to localStorage for "Your Health Details" page
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.setItem("healthReport", JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        <div className={styles.header}>
          <div className={styles.dot} />
          <div>
            <h2>Generate Health Report</h2>
            <p>Fill in your details — your personalised PDF will download instantly</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>

          {/* Name */}
          <div className={styles.field}>
            <label>Full Name</label>
            <input
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              className={errors.name ? styles.inputErr : ""}
            />
            {errors.name && <span className={styles.err}>{errors.name}</span>}
          </div>

          {/* DOB */}
          <div className={styles.field}>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className={errors.dob ? styles.inputErr : ""}
            />
            {errors.dob && <span className={styles.err}>{errors.dob}</span>}
          </div>

          {/* Gender */}
          <div className={styles.field}>
            <label>Gender</label>
            <div className={styles.radioGroup}>
              {["male", "female"].map((g) => (
                <label
                  key={g}
                  className={`${styles.radioBtn} ${form.gender === g ? styles.radioBtnActive : ""}`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={form.gender === g}
                    onChange={handleChange}
                    hidden
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Height */}
          <div className={styles.field}>
            <label>Height</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="number"
                name="height"
                placeholder={form.heightUnit === "cm" ? "e.g. 167" : form.heightUnit === "feet" ? "e.g. 5.7" : "e.g. 65"}
                onChange={handleChange}
                className={errors.height ? styles.inputErr : ""}
                step="0.1"
                style={{
                  flex: "1",
                  minWidth: "0",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  fontSize: "15px",
                  color: "#fff",
                  outline: "none",
                  fontFamily: "inherit",
                  boxSizing: "border-box"
                }}
              />
              <select
                name="heightUnit"
                onChange={handleChange}
                value={form.heightUnit}
                style={{
                  width: "75px",
                  flexShrink: "0",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "10px",
                  padding: "12px 6px",
                  fontSize: "14px",
                  color: "#fff",
                  outline: "none",
                  fontFamily: "inherit",
                  cursor: "pointer",
                  boxSizing: "border-box"
                }}
              >
                <option value="cm">cm</option>
                <option value="inch">inch</option>
                <option value="feet">feet</option>
              </select>
            </div>
            {errors.height && <span className={styles.err}>{errors.height}</span>}
            <span className={styles.hint}>
              {form.heightUnit === "feet" && "Enter as decimal e.g. 5.7 for 5 ft 7 in"}
              {form.heightUnit === "inch" && "Enter total inches e.g. 67"}
              {form.heightUnit === "cm" && "Enter in centimetres e.g. 167"}
            </span>
          </div>

          {/* Weight */}
          <div className={styles.field}>
            <label>Weight <span className={styles.unit}>kg</span></label>
            <input
              type="number"
              name="weight"
              placeholder="e.g. 65"
              onChange={handleChange}
              className={errors.weight ? styles.inputErr : ""}
              step="0.1"
            />
            {errors.weight && <span className={styles.err}>{errors.weight}</span>}
          </div>

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading
              ? <><span className={styles.spinner} /> Calculating...</>
              : done
                ? "✓ Report Downloaded — Generate Again"
                : "Generate & Download Report →"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ReportForm;