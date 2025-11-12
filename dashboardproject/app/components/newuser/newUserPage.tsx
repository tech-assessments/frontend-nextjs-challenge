"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Container, Typography, Box, Button, Alert } from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { UserFormData } from "@/app/constants/type";

import PersonalInfoForm from "./personalInfoForm";
import AddressInfoForm from "./addressInfoForm";
import CompanyInfoForm from "./companyInfoForm";
import { defaultValues } from "@/app/constants/menuItems";

function NewUserPage() {
  const router = useRouter();
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserFormData>({ defaultValues });

  const onSubmit = async (data: UserFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, direction: "rtl" }}>
      <PageHeader router={router} />

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3, direction: "rtl" }}>
          کاربر با موفقیت ایجاد شد!
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSections control={control} errors={errors} />
        <FormActions isSubmitting={isSubmitting} reset={reset} />
      </form>
    </Container>
  );
}

const PageHeader = ({ router }) => (
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
    <Typography variant="h4" fontWeight="bold" color="primary">
      ایجاد کاربر جدید
    </Typography>
  </Box>
);

const FormSections = ({ control, errors }) => (
  <Box
    sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}
  >
    <Box sx={{ flex: 1 }}>
      <PersonalInfoForm control={control} errors={errors} />
    </Box>
    <Box sx={{ flex: 1 }}>
      <AddressInfoForm control={control} errors={errors} />
      <CompanyInfoForm control={control} errors={errors} />
    </Box>
  </Box>
);

const FormActions = ({ isSubmitting, reset }) => (
  <Box
    sx={{
      mt: 4,
      display: "flex",
      gap: 2,
      borderTop: "1px solid",
      borderColor: "divider",
      pt: 3,
    }}
  >
    <Button
      variant="contained"
      type="submit"
      disabled={isSubmitting}
      startIcon={<AddIcon />}
      size="large"
      sx={{ minWidth: 120 }}
    >
      {isSubmitting ? "در حال ایجاد..." : "ایجاد کاربر"}
    </Button>
    <Button
      variant="outlined"
      onClick={() => reset()}
      disabled={isSubmitting}
      size="large"
    >
      پاک کردن فرم
    </Button>
  </Box>
);

export default NewUserPage;
