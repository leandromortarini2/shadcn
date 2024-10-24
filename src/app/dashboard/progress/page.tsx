"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      {/* INDICATORCOLOR  ES UNA PROPIEDAD CREADA EN PROGRESS, QUE PERMITE PERSONALIZAR EL COLOR DE LA BARRA DE PROGRESO  */}
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-red-500": progress < 50,
          "bg-yellow-500": progress > 50 && progress < 80,
          "bg-green-500": progress > 80,
        })}
      />
    </div>
  );
}
