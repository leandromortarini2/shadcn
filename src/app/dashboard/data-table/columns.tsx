/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Payment } from "@/data/payments.data";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant: any =
        {
          success: "success",
          pending: "info",
          processing: "secondary",
          failed: "destructive",
        }[status] ?? ("default" as any);
      return <Badge variant={variant}>{status}</Badge>;
    },
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
