"use client";
import { User } from "@/app/constants/type";
import  { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Avatar,
  Chip,
} from "@mui/material";

import HeaderUserPage from "./headerUserPage";
import CardDetailUserPage from "./cardDetailUserPage";

function DetailUserPage({ users }: { users: User }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: users.name,
    username: users.username,
    email: users.email,
    phone: users.phone,
    address: { city: users.address.city },
    company: { name: users.company.name },
  });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setEditForm((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }));
    } else {
      setEditForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <HeaderUserPage
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editForm={editForm}
        setEditForm={setEditForm}
        users={users}
      />
      <Paper
        elevation={2}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(135deg, #3f51b5 0%, #7986cb 100%)",
            color: "white",
            p: 4,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "3px solid rgba(255,255,255,0.3)",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              {getInitials(users.name)}
            </Avatar>

            <Box>
              {isEditing ? (
                <TextField
                  name="name"
                  value={editForm.name}
                  onChange={handleInputChange}
                  variant="standard"
                  InputProps={{
                    style: {
                      color: "white",
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                    },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "rgba(255,255,255,0.5)",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgba(255,255,255,0.8)",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                  }}
                />
              ) : (
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                  {users.name}
                </Typography>
              )}

              <Chip
                label={`ID: ${users.id}`}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "600",
                }}
              />
            </Box>
          </Box>
        </Box>
        <CardDetailUserPage
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editForm={editForm}
          setEditForm={setEditForm}
          users={users}
          handleInputChange={handleInputChange}
        />
      </Paper>
    </Container>
  );
}

export default DetailUserPage;
