import { SketchPicker } from "react-color";
import { useState } from "react";
import { color } from "highcharts";

export default function ColorPicker() {
  let [currentColor, setCurrentColor] = useState("88F500");

  let handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  return (
    <div>
      <h2>ColorPicker</h2>
      <div
        style={{
          backgroundColor: currentColor,
          height: "75vh",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SketchPicker
          onChangeComplete={handleOnChange}
          color={currentColor}
        />
      </div>
    </div>
  );
}
