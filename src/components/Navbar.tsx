import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  Toolbar,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
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

const ResumeButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  width: "130px",
  [theme.breakpoints.down("md")]: {},
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
    <StyledAppbar color="transparent">
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
            <ResumeButton
              variant="contained"
              startIcon={<IoDocumentTextOutline />}
            >
              Resume
            </ResumeButton>
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
          <ResumeButton
            variant="outlined"
            startIcon={<IoDocumentTextOutline />}
          >
            Resume
          </ResumeButton>
        </LinksWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Navbar;
