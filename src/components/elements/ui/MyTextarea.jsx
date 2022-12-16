import React from "react";

const MyTextarea = ({ register, error, ...props }) => {
  return (
    <div style={{ height: "118px" }}>
      <textarea {...register} {...props} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MyTextarea;
