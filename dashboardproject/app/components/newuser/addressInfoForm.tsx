import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import FormField from "./formField";


const AddressInfoForm = ({ control, errors }) => {
  const fields = [
    { name: "address.street", label: "خیابان", rules: { required: "خیابان الزامی است" } },
    { name: "address.suite", label: "سوئیت / پلاک" },
    { name: "address.city", label: "شهر", rules: { required: "شهر الزامی است" } },
    { name: "address.zipcode", label: "کد پستی", rules: { pattern: { value: /^[\d\-]+$/, message: "فرمت کد پستی نامعتبر است" } } }
  ];

  return (
   <Card sx={{ borderRadius: 3, mb: 3 }}>
  <CardContent sx={{ p: 4 }}>
    <Typography variant="h6" fontWeight="bold" color="primary" sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}>
      <LocationOnIcon />
      اطلاعات آدرس
    </Typography>
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
      gap: 2,
      width: '100%' 
    }}>
      {fields.map((field) => (
        <Box key={field.name} sx={{ width: '100%' }}>
          <FormField 
            control={control} 
            errors={errors} 
            {...field} 
          />
        </Box>
      ))}
    </Box>
  </CardContent>
</Card>
  );
};

export default AddressInfoForm;