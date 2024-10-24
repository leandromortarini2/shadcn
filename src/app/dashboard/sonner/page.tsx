"use client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: ` ${new Date()} `,
            position: "top-right",

            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>{" "}
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            description: ` ${new Date()} `,
            position: "top-right",

            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Custome Colors
      </Button>{" "}
    </div>
  );
}
