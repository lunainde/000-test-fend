import React from "react";
import "./Footer.css";
import { Box, TextField, Button, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="divider m-top" />
      <Box className="footer-box-center" sx={{ p: 2, maxWidth: "1200px" }}>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "left", fontWeight: "bold", mt: 2, mb: 2 }}
        >
          Be the first to know about new insights and startups
        </Typography>
        
        <Box className="footer-box-center">
          <Box
            component="form"
            sx={{
              mb: 2,
              pb: 2,
              maxWidth: "1200px",
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="alita@battle-angel.io"
                  sx={{
                    "& .MuiOutlinedInput-root": { paddingRight: "0px" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    height: "56px",
                  }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Box>
          <div className="divider" />
        </Box>

        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", p: 2, maxWidth: "1200px" }}
        >
          <Grid item xs={12} sm={4}>
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

          <Grid item xs={12} sm={4}>
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

          <Grid item xs={12} sm={4}>
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

        <div className="divider" />

        <Box sx={{ my: 3, textAlign: "center" }}>
          <Typography variant="p" sx={{ textAlign: "center" }}>
            Copyright since ©2024 | GR33NTWEET | All rights reserved.
          </Typography>
        </Box>

      </Box>
      <div className="divider" />
    </div>
  );
}
