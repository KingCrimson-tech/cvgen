import React, { useState } from 'react';
import './../styles/GeneralInfo.css';

function GeneralInfo({ setGeneralInfo }) {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    setGeneralInfo(info);
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={info.phone}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default GeneralInfo;
