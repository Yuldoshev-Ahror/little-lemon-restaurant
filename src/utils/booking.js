export const availableTimesByDate = {
  default: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  weekend: ["16:00", "17:00", "18:30", "20:00", "21:30"],
};

export function getAvailableTimes(date) {
  if (!date) return availableTimesByDate.default;

  const d = new Date(date).getDay();

  return [5, 6, 0].includes(d)
    ? availableTimesByDate.weekend
    : availableTimesByDate.default;
}

export function validateBooking(formData) {
  const errors = {};

  if (!formData.firstName?.trim()) {
    errors.firstName = "Please enter your first name.";
  }

  if (!formData.lastName?.trim()) {
    errors.lastName = "Please enter your last name.";
  }

  if (!formData.phone?.trim()) {
    errors.phone = "Please enter your phone number.";
  } else {
    const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  if (!formData.date) {
    errors.date = "Please choose a reservation date.";
  }

  if (!formData.time) {
    errors.time = "Please choose a reservation time.";
  }

  const guests = Number(formData.guests);
  if (!formData.guests || Number.isNaN(guests) || guests < 1 || guests > 10) {
    errors.guests = "Number of guests must be between 1 and 10.";
  }

  if (!formData.occasion) {
    errors.occasion = "Please select an occasion.";
  }

  return errors;
}
