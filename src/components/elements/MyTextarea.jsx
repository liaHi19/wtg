import React from "react";

const MyTextarea = ({ register, error, ...props }) => {
  return (
    <div>
      <textarea {...register} {...props} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default MyTextarea;
