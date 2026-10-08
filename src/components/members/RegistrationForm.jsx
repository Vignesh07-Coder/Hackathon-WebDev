import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    plan: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ formData });
  }

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h1>Register New Member</h1>

        <p className="form-description">
          Enter the details below to register a new gym member.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>

            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Plan */}
          <div className="form-group">
            <label htmlFor="plan">Membership Plan</label>

            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
            >
              <option value="">Select a plan</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Register Member
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;