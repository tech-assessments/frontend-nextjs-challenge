import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

function HeaderUserPage({
  setIsEditing,
  isEditing,
  editForm,
  setEditForm,
  users,
}) {
  const router = useRouter();

  const handleCancel = () => {
    setEditForm({
      name: users.name,
      username: users.username,
      email: users.email,
      phone: users.phone,
      address: { city: users.address.city },
      company: { name: users.company.name },
    });
    setIsEditing(false);
  };
  return (
    <Box sx={{ mb: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => router.push("/users")}
        sx={{
          mb: 2,
          "& .MuiButton-startIcon": {
            marginLeft: "2px",
          },
        }}
      >
        بازگشت
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          جزئیات کاربر
        </Typography>

        {!isEditing ? (
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => setIsEditing(true)}
            sx={{
              "& .MuiButton-startIcon": {
                marginLeft: "2px",
              },
            }}
          >
            ویرایش
          </Button>
        ) : (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              sx={{
                "& .MuiButton-startIcon": {
                  marginLeft: "2px",
                },
              }}
              onClick={handleCancel}
              color="error"
            >
              لغو
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                "& .MuiButton-startIcon": {
                  marginLeft: "2px",
                },
              }}
              onClick={() => setIsEditing(false)}
            >
              ذخیره
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default HeaderUserPage;
