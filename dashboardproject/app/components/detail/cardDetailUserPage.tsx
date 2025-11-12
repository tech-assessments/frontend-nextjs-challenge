import { Box, CardContent, Grid, TextField, Typography } from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";

function CardDetailUserPage({ isEditing, editForm, users, handleInputChange }) {
  const sections = [
    {
      title: "اطلاعات شخصی",
      icon: <PersonIcon />,
      fields: [
        {
          name: "username",
          label: "نام کاربری",
          value: editForm.username,
          displayValue: `@${users.username}`,
          fontWeight: "500",
        },
        {
          name: "email",
          label: "ایمیل",
          value: editForm.email,
          displayValue: users.email,
          icon: (
            <EmailIcon
              sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
            />
          ),
          type: "email",
        },
        {
          name: "phone",
          label: "تلفن",
          value: editForm.phone,
          displayValue: users.phone,
          icon: (
            <PhoneIcon
              sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
            />
          ),
        },
      ],
    },
    {
      title: "اطلاعات شرکت",
      icon: <BusinessIcon />,
      fields: [
        {
          name: "company.name",
          label: "نام شرکت",
          value: editForm.company.name,
          displayValue: users.company.name,
          fontWeight: "500",
        },
        {
          name: "address.city",
          label: "شهر",
          value: editForm.address.city,
          displayValue: users.address.city,
          icon: (
            <LocationOnIcon
              sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
            />
          ),
        },
      ],
    },
  ];

  return (
    <CardContent sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {sections.map((section) => (
          <Grid key={section.title} item xs={12} md={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              sx={{ mb: 3, display: "flex", alignItems: "center", gap: 1 }}
            >
              {section.icon}
              {section.title}
            </Typography>

            {section.fields.map((field) => (
              <Box key={field.name} sx={{ mb: 3 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 1 }}
                >
                  {field.icon} {field.label}
                </Typography>
                {isEditing ? (
                  <TextField
                    name={field.name}
                    value={field.value}
                    onChange={handleInputChange}
                    fullWidth
                    size="small"
                    type={field.type || "text"}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    fontWeight={field.fontWeight || "normal"}
                  >
                    {field.displayValue}
                  </Typography>
                )}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
}
export default CardDetailUserPage;
