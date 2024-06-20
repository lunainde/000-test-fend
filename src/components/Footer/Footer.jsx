import React from "react";
import "./Footer.css";
import { Box, TextField, Button, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer-container">
    <div className="divider space" />
      <Box className="center" sx={{ p: 2, maxWidth: "1200px" }}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 2 }}
        >
          Be the first to know about new insights and startups
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            maxWidth: "1200px",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="alita@battle-angel.io"
            sx={{
              "& .MuiOutlinedInput-root": { paddingRight: "0px" },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              ml: 1,
              px: 6,
              height: "56px",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Box className="center" sx={{ textAlign: "center", maxWidth: "1200px" }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", p: 2 }}
        >
          <Grid item xs={4}>
            <Typography variant="subtitle1">LEGAL</Typography>
            <Link href="#" sx={{ display: "block" }}>
              Terms
            </Link>
            <Link href="#" sx={{ display: "block" }}>
              Imprint
            </Link>
            <Link href="#" sx={{ display: "block" }}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">RESOURCES</Typography>
            <Link href="#" sx={{ display: "block" }}>
              Insights
            </Link>
            <Link href="#" sx={{ display: "block" }}>
              Glossary
            </Link>
            <Link href="#" sx={{ display: "block" }}>
              Academy
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">SOCIAL</Typography>
            <Link
              href="https://www.linkedin.com/company/gr33nbase/"
              sx={{ display: "block" }}
            >
              Linkedin
            </Link>
            <Link href="https://x.com/gr33nbase" sx={{ display: "block" }}>
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/gr33nbase"
              sx={{ display: "block" }}
            >
              Instagram
            </Link>
          </Grid>
        </Grid>
      </Box>
      <div className="divider" />
      <Box sx={{ my: 3, textAlign: "center" }}>
        <Typography variant="p" sx={{ textAlign: "center" }}>
          Copyright ©2024 | GR33NTWEET | All rights reserved.
        </Typography>
      </Box>
      <div className="divider" />
    </div>
  );
}
