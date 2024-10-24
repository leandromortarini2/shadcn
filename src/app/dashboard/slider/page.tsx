/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState([10, 60]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={1}
        onValueChange={(v) => setSliderValue(v[0])}
      />
      <span>Range Value: {rangeValue.join(",")}</span>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={1}
        onValueChange={(v) => setRangeValue(v)}
      />
    </div>
  );
}
