import React from "react";

function Switch() {
  return (
    <div class="switch">
      <label>
        Low
        <input type="checkbox" />
        <span class="lever"></span>
        High
      </label>
    </div>
  );
}

export default Switch;
