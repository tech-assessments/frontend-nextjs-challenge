import { Controller } from "react-hook-form";
import { TextField, InputAdornment } from "@mui/material";
import {
  Person as PersonIcon,
  Circle as AccountCircleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
} from "@mui/icons-material";
import { getError } from "@/app/constants/menuItems";


const iconComponents = {
  Person: PersonIcon,
  AccountCircle: AccountCircleIcon,
  Email: EmailIcon,
  Phone: PhoneIcon,
  Language: LanguageIcon,
};

const FormField = ({
  control,
  errors,
  name,
  label,
  rules = {},
  type = "text",
  icon,
  multiline,
  rows,
}) => {
  const IconComponent = icon && iconComponents[icon];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          fullWidth
          multiline={multiline}
          rows={rows}
          error={!!getError(errors, name)}
          helperText={getError(errors, name)?.message}
          sx={{ mb: 3, direction: "rtl" }}
          InputProps={
            IconComponent
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconComponent color="action" />
                    </InputAdornment>
                  ),
                }
              : {}
          }
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};

export default FormField;
