import React from "react"
import Link from "./shared/Link"

export const vehicleAttachmentsColumns = [
  {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  },
  {
    label: "Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/vehicle-attachments/${tableMeta.rowData[0]}/`}>
          {value}
        </Link>
      ),
      sortDirection: "asc",
      filter: false,
    },
  },
  { label: "Price", name: "price" },
  { label: "HP", name: "hp" },
  { label: "Rarity", name: "rarity" },
  { label: "Index", name: "index", options: { filter: false } },
]
