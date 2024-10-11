"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(false);
  return (
    <div>
      <div className="items-top flex space-x-2">
        <Checkbox
          checked={items}
          onCheckedChange={(value: boolean) => setItems(value)}
          id="terms1"
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {items ? (
          <Badge variant={"success"}>Great !</Badge>
        ) : (
          <Badge variant="destructive">Warning</Badge>
        )}
      </div>
    </div>
  );
}
