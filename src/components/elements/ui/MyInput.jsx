import React from "react";

const MyInput = ({ register, error, ...props }) => {
  return (
    <div>
      <input {...register} {...props} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default MyInput;
