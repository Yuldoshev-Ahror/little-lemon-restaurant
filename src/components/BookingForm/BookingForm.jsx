import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./BookingForm.module.css";
import { getAvailableTimes, validateBooking } from "../../utils/booking";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "Birthday",
  seating: "Indoor",
  notes: "",
};

export default function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const availableTimes = useMemo(
    () => getAvailableTimes(formData.date),
    [formData.date],
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      const next = { ...prev, [name]: value };

      if (name === "date" && !getAvailableTimes(value).includes(prev.time)) {
        next.time = "";
      }

      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateBooking(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    navigate("/confirmed", { state: { booking: formData } });
  }

  return (
    <section className="section" id="booking" aria-labelledby="booking-title">
      <div className={`container ${styles.layout}`}>
        <article className={styles.infoCard}>
          <p className={styles.eyebrow}>Reserve your table</p>
          <h1 id="booking-title" className="sectionTitle">
            Reserve a Table
          </h1>
          <p className={styles.text}>
            Select your date, preferred time and guest count. The form includes
            semantic labels, inline validation and a clean responsive layout
            suitable for your capstone project.
          </p>
          <ul className={styles.infoList}>
            <li>Accessible form labels and validation messages</li>
            <li>Responsive layout for desktop and mobile</li>
            <li>Semantic sections, form controls and buttons</li>
          </ul>
        </article>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
            />
            {errors.firstName && (
              <p id="firstName-error" className={styles.error}>
                {errors.firstName}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className={styles.error}>
                {errors.lastName}
              </p>
            )}
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={handleChange}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className={styles.error}>
                {errors.phone}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="date">Choose date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {errors.date && (
              <p id="date-error" className={styles.error}>
                {errors.date}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-describedby={errors.time ? "time-error" : undefined}
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p id="time-error" className={styles.error}>
                {errors.time}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="guests">Number of guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              aria-describedby={errors.guests ? "guests-error" : undefined}
            />
            {errors.guests && (
              <p id="guests-error" className={styles.error}>
                {errors.guests}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              aria-describedby={errors.occasion ? "occasion-error" : undefined}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
            {errors.occasion && (
              <p id="occasion-error" className={styles.error}>
                {errors.occasion}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="seating">Seating preference</label>
            <select
              id="seating"
              name="seating"
              value={formData.seating}
              onChange={handleChange}
            >
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="No preference">No preference</option>
            </select>
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="notes">Special requests</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Optional notes for the restaurant"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <div className={styles.actions}>
            <Button type="submit">Confirm Reservation</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
