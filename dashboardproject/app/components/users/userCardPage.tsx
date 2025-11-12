import {
  Card,
  CardContent,
  Box,
  Avatar,
  Chip,
  Typography,
} from "@mui/material";
import {
  Business as BusinessIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";

import { useRouter } from "next/navigation";

export default function UserCard({ user }: User) {
  const router = useRouter();

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card
    
      sx={{
        cursor: "pointer",
        borderRadius: 3,
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        height: "320px", 
        width: "100%",
        minWidth: "280px", 
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transform: "translateY(-4px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #3f51b5, #7986cb)",
        },
      }}
      onClick={() => router.push(`/users/${user.id}`)}
    >
      <CardContent
        sx={{ 
          p: 3, 
          flexGrow: 1, 
          display: "flex", 
          flexDirection: "column",
          height: "100%", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
            flexShrink: 0, 
          }}
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              background: "linear-gradient(135deg, #3f51b5 0%, #7986cb 100%)",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "600",
              boxShadow: "0 2px 8px rgba(63, 81, 181, 0.3)",
              flexShrink: 0,
            }}
          >
            {getInitials(user.name)}
          </Avatar>

          <Chip
            label={`#${user.id}`}
            size="small"
            variant="outlined"
            sx={{
              height: 26,
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#5f6368",
              borderColor: "#e0e0e0",
              background: "rgba(255,255,255,0.7)",
              flexShrink: 0,
            }}
          />
        </Box>

        <Box sx={{ 
          flexGrow: 1, 
          display: "flex", 
          flexDirection: "column",
          minHeight: 0,
        }}>
          <Typography
            variant="h6"
            fontWeight={700}
            color="#1a237e"
            sx={{
              mb: 1,
              fontSize: "1.15rem",
              lineHeight: 1.3,
              background: "linear-gradient(135deg, #1a237e, #303f9f)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              minHeight: "2.5rem", 
              display: "-webkit-box",
              WebkitLineClamp: 2, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {user.name}
          </Typography>

          <Typography
            variant="body2"
            color="#5f6368"
            sx={{
              mb: 2,
              fontSize: "0.9rem",
              lineHeight: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              minHeight: "1.5rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <BusinessIcon sx={{ fontSize: "1rem", color: "#7986cb", flexShrink: 0 }} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {user.company.name}
            </span>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minHeight: "1.5rem" }}>
              <EmailIcon sx={{ fontSize: "1rem", color: "#7986cb", flexShrink: 0 }} />
              <Typography
                variant="caption"
                color="#666"
                sx={{
                  fontSize: "0.8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                }}
              >
                {user.email}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minHeight: "1.5rem" }}>
              <LocationOnIcon sx={{ fontSize: "1rem", color: "#7986cb", flexShrink: 0 }} />
              <Typography
                variant="caption"
                color="#666"
                sx={{ 
                  fontSize: "0.8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flexGrow: 1,
                }}
              >
                {user.address.city}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "auto",
            pt: 2,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="caption"
            color="#999"
            sx={{ fontSize: "0.75rem" }}
          >
            برای مشاهده جزئیات کلیک کنید
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "0.8rem", color: "#7986cb" }} />
        </Box>
      </CardContent>
    </Card>
  );
}