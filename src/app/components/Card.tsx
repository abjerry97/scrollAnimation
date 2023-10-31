import React from "react";

export const Card = React.forwardRef((props: any, ref: any) => {
  const { index, color } = props;
  return (
    <div
      ref={ref}
      className={` h-20 w-20 text-center border flex items-center justify-center`}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      {index}
    </div>
  );
});
