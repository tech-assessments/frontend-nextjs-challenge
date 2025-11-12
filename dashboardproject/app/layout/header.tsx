"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
} from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import MenuHeader from "./menuHeader";
import { menuItems } from "../constants/menuItems";


const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <AppBar position="fixed">
        <Toolbar sx={{ direction: "rtl" }}>
          <Typography variant="h6">سیستم مدیریت</Typography>
        </Toolbar>
      </AppBar>
    );
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ direction: "rtl" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                onClick={() => router.push(item.path)}
                sx={{
                  bgcolor:
                    pathname === item.path
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { md: "none" }, ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", direction: "ltr" }}>
            <Typography
              variant="h6"
              sx={{
                cursor: "pointer",
                mr: 1,
              }}
              onClick={() => router.push("/")}
            >
              سیستم مدیریت
            </Typography>

            <IconButton
              color="inherit"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            sx={{ direction: "rtl" }}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>پروفایل</MenuItem>
          </Menu>
        </Toolbar>
        <MenuHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </AppBar>
    </>
  );
};
export default Header;
