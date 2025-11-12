import {
  Dashboard as DashboardIcon,
  Home as HomeIcon,
} from "@mui/icons-material";



export const menuItems = [
  { text: "صفحه اصلی", icon: HomeIcon, path: "/" },
  { text: "داشبورد", icon: DashboardIcon, path: "/users" },
];

export const defaultValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};


export const getError = (errors, fieldName) => {
  return fieldName.split(".").reduce((obj, key) => obj?.[key], errors);
};
