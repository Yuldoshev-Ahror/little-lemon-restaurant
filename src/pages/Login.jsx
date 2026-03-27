import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
};

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate(data) {
    const err = {};

    if (!data.firstName.trim()) err.firstName = "First name is required.";
    if (!data.lastName.trim()) err.lastName = "Last name is required.";

    if (!data.phone.trim()) {
      err.phone = "Phone number is required.";
    } else {
      const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
      if (!phoneRegex.test(data.phone.trim())) {
        err.phone = "Please enter a valid phone number.";
      }
    }

    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate(formData);
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    navigate("/");
    setFormData(initialForm);
  }

  return (
    <>
      <Navbar />
      <section className={styles.loginPage}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1>Login</h1>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className={styles.error}>{errors.firstName}</p>
                )}
              </div>

              <div className={styles.field}>
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className={styles.error}>{errors.lastName}</p>
                )}
              </div>

              <div className={styles.field}>
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 90 123 45 67"
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
