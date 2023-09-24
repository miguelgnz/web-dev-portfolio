import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { menuData } from "@/utils/data";
import { useState } from "react";

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const LinksWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "& > p": {
    fontSize: "16px",
    color: "#FFF",
  },
  "& :hover": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {},
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppbar position="fixed" sx={{ backgroundColor: "#011627" }}>
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ color: "#f0f0f0" }}>
          <FaCode />
        </IconButton>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            aria-label="menu"
            sx={{ color: "#f0f0f0" }}
            onClick={handleMenu}
            edge="end"
          >
            <FiMenu />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuData.menu.items.map((item) => {
              return <MenuItem key={item.id}>{item.text}</MenuItem>;
            })}
          </Menu>
        </Box>
        <LinksWrapper>
          {menuData.menu.items.map((item) => {
            return (
              <StyledLink key={item.id} href={item.url}>
                <Typography>{item.text}</Typography>
              </StyledLink>
            );
          })}
        </LinksWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
