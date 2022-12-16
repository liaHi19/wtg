import React from "react";

const MyInput = ({ register, error, ...props }) => {
  return (
    <div style={{ height: "55px" }}>
      <input {...register} {...props} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MyInput;
