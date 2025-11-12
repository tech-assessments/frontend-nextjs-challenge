"use client";

import { useState, useMemo } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

import { User } from "../constants/type";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import SearchFilters from "./users/searchFiltersPage";
import UserCard from "./users/userCardPage";

export default function UsersPage({ users }: User) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        !searchTerm ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCompany =
        !companyFilter || user.company.name === companyFilter;
      const matchesCity = !cityFilter || user.address.city === cityFilter;

      return matchesSearch && matchesCompany && matchesCity;
    });
  }, [users, searchTerm, companyFilter, cityFilter]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setCompanyFilter("");
    setCityFilter("");
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 2, mb: 4, px: { xs: 2, sm: 3 } }}>
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        companyFilter={companyFilter}
        setCompanyFilter={setCompanyFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        users={users}
        onClearFilters={clearAllFilters}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          mt: 4,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/users/newuser")}
          sx={{
            mb: 2,
            "& .MuiButton-startIcon": {
              marginLeft: "2px",
            },
          }}
        >
          ایجاد کاربر جدید
        </Button>
        <Typography variant="h6" fontWeight={700}>
          کاربران
          <Typography
            component="span"
            sx={{ mx: 0.5, color: "primary.main", fontWeight: 600 }}
          >
            ({filteredUsers.length})
          </Typography>
        </Typography>
      </Box>

      {filteredUsers.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            کاربری یافت نشد
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            لطفاً فیلترهای جستجو را تغییر دهید
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={6} width="100%">
          {filteredUsers.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
