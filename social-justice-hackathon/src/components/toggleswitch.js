import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
    props.onToggle()
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleSwitch;