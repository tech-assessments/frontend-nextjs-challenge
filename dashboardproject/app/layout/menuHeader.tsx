import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { menuItems } from "../constants/menuItems";

function MenuHeader({ mobileOpen, setMobileOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          direction: "rtl",
        },
      }}
    >
      <Box sx={{ width: 250, pt: 2 }}>
        <Typography variant="h6" sx={{ mx: 2, mb: 2, textAlign: "right" }}>
          منو
        </Typography>
        <List>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <ListItemButton
                key={item.text}
                onClick={() => {
                  router.push(item.path);
                  setMobileOpen(false);
                }}
                selected={pathname === item.path}
                sx={{
                  mx: 1,
                  mb: 0.5,
                  borderRadius: 1,
                  justifyContent: "flex-end",
                }}
              >
                <ListItemText primary={item.text} sx={{ textAlign: "right" }} />
                <ListItemIcon sx={{ minWidth: "auto" }}>
                  <IconComponent />
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuHeader;
