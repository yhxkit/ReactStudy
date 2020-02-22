import React from "react";
import "./SassComponent.scss";

//실제 이렇게 하진 않지만 블로그대로 한번 따라 가본다
const SassComponent = () => {
  return (
    <div className="SassComponent">
      <div className="box red" />
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green" />
      <div className="box blue" />
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  );
};

export default SassComponent;
