import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

const activeUsers = [
  { name: "Martin", imagePath: "/img/martin.webp" },
  { name: "Justin", imagePath: "/img/justin.webp" },
  { name: "Rose", imagePath: "/img/rose.webp" },
  { name: "Nusret", imagePath: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active User</Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((user, index) => {
                  return (
                    <Card key={index} className="card">
                      <Box className="card-image-box">
                        <img
                          className="user-img "
                          src={user.imagePath}
                          alt=""
                        />
                      </Box>

                      <Box className="user-name-box">
                        <Typography className="user-name">
                          {user.name}
                        </Typography>
                      </Box>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
