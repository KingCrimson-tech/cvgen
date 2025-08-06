import React from 'react';
import './../styles/GeneralInfo.css';

function GeneralInfo({ generalInfo, onChange }) {
  return (
    <div className="general-info">
      <h2>General Information</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={generalInfo.name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={generalInfo.email}
          onChange={onChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={generalInfo.phone}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default GeneralInfo;