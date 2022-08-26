import { format } from "date-fns";

//TODO: this file should i put under table component ? im questioning the location of this file
export const COLUMNS = [
  { Header: "Id", accessor: "id" },
  { Header: "First Name", accessor: "first_name" },
  { Header: "Last Name", accessor: "last_name" },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyy");
    },
  },
  { Header: "Country", accessor: "country" },
  { Header: "Phone", accessor: "phone" },
];
