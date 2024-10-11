"use client";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = React.useState<Date[] | undefined>(
    []
  );

  const smallDate = date?.toLocaleDateString("es-ES", {
    day: "numeric",
    weekday: "short",
    month: "long",
  });

  return (
    <div className="flex-col sm:flex sm:flex-row flex-wrap gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />{" "}
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />{" "}
      <div className="">
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>Seleccione una fecha para ver la informacion</p>
        <p>{smallDate}</p>
        <p>
          {multipleDate?.map((date) => date.toLocaleDateString()).join(", ")}
        </p>
      </div>
    </div>
  );
}
