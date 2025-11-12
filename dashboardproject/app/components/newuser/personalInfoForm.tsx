import { Card, CardContent, Typography, Box } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import FormField from "./formField";


const PersonalInfoForm = ({ control, errors }) => {
  const fields = [
    {
      name: "name",
      label: "نام کامل",
      rules: {
        required: "نام کامل الزامی است",
        minLength: { value: 2, message: "نام باید حداقل 2 کاراکتر باشد" },
      },
      icon: PersonIcon,
    },
    {
      name: "username",
      label: "نام کاربری",
      rules: {
        required: "نام کاربری الزامی است",
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message: "نام کاربری فقط می‌تواند شامل حروف، اعداد و زیرخط باشد",
        },
      },
      icon: "AccountCircle",
    },
    {
      name: "email",
      label: "ایمیل",
      type: "email",
      rules: {
        required: "ایمیل الزامی است",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "فرمت ایمیل نامعتبر است",
        },
      },
      icon: "Email",
    },
    {
      name: "phone",
      label: "شماره تلفن",
      rules: {
        required: "شماره تلفن الزامی است",
        pattern: {
          value: /^[\d\s\-\+\(\)]+$/,
          message: "فرمت شماره تلفن نامعتبر است",
        },
      },
      icon: "Phone",
    },
    {
      name: "website",
      label: "وبسایت",
      rules: {
        pattern: {
          value: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "فرمت وبسایت نامعتبر است",
        },
      },
      icon: "Language",
    },
  ];

  return (
   <Card sx={{ 
  borderRadius: 3, 
  height: "100%",
  display: "flex",
  flexDirection: "column"
}}>
  <CardContent sx={{ 
    p: 4, 
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  }}>
    <Typography
      variant="h6"
      fontWeight="bold"
      color="primary"
      sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
    >
      <PersonIcon />
      اطلاعات شخصی
    </Typography>
    <Box sx={{ 
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={control}
          errors={errors}
          {...field}
        />
      ))}
    </Box>
  </CardContent>
</Card>
  );
};

export default PersonalInfoForm;
