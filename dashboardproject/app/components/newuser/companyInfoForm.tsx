import { Card, CardContent, Typography, Box } from "@mui/material";
import { Business as BusinessIcon } from "@mui/icons-material";
import FormField from "./formField";


const CompanyInfoForm = ({ control, errors }) => {
  const fields = [
    { name: "company.name", label: "نام شرکت", rules: { required: "نام شرکت الزامی است" } },
    { name: "company.catchPhrase", label: "شعار شرکت", multiline: true, rows: 2 },
    { name: "company.bs", label: "حوزه فعالیت" }
  ];

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6" fontWeight="bold" color="primary" sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
          <BusinessIcon />
          اطلاعات شرکت
        </Typography>
        <Box sx={{ space: 2 }}>
          {fields.map((field) => (
            <FormField key={field.name} control={control} errors={errors} {...field} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompanyInfoForm;