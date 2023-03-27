import React from "react";
import ReactCountryFlag from "react-country-flag";
type Props = {};

const LanguageSwitch = (props: Props) => {
  return (
    <div className="btn-ghost btn">
      <ReactCountryFlag
        svg
        countryCode="kr"
        style={{
          width: "1.4em",
          height: "1.4em",
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
