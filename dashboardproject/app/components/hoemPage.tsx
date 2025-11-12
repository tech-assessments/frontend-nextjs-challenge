"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import {
  People,
  Business,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { HomePageProps } from "../constants/type";
import DashboardCard from "./dashboard/dashboardCardPage";

export default function HomePage({ posts, users }: HomePageProps) {
  const router = useRouter();
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper
        sx={{
          p: 4,
          mb: 4,
          background: "linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)",
          color: "white",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <DashboardIcon sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          به داشبورد خوش آمدید
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          مدیریت کاربران و شرکت‌ها در یک نگاه
        </Typography>
      </Paper>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={People}
            title="تعداد کاربران"
            value={users.length}
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <DashboardCard
            icon={Business}
            title="تعداد شرکت‌ها"
            value={posts.length}
            color="secondary.main"
          />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/users")}
          startIcon={<People />}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            borderRadius: 2,
            "& .MuiButton-startIcon": {
              marginLeft: "2px",
            },
          }}
        >
          مشاهده کاربران
        </Button>
      </Box>
      <Paper sx={{ p: 3, mt: 4, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          از طریق این داشبورد می‌توانید به راحتی کاربران و شرکت‌های خود را
          مدیریت کنید
        </Typography>
      </Paper>
    </Container>
  );
}
