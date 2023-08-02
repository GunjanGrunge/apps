import React from "react";

const sizeClasses = {
  txtInterRegular12Green700: "font-inter font-normal",
  txtMontserratRomanBold17: "font-bold font-montserrat",
  txtInterRegular42: "font-inter font-normal",
  txtMontserratRomanBold14: "font-bold font-montserrat",
  txtMontserratRomanBold37: "font-bold font-montserrat",
  txtMontserratRomanBold26: "font-bold font-montserrat",
  txtMontserratRomanBold10: "font-bold font-montserrat",
  txtInterBold17: "font-bold font-inter",
  txtInterBold10: "font-bold font-inter",
  txtRobotoRegular25: "font-normal font-roboto",
  txtRobotoRegular15: "font-normal font-roboto",
  txtInterRegular12: "font-inter font-normal",
  txtRobotoRegular33: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
