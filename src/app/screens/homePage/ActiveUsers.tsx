import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import { retrieveTopUsers } from "./selector";

import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active User</Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((user: Member) => {
                  const imagePath = `${serverApi}/${user.memberImage}`;
                  return (
                    <Card key={user._id} className="card">
                      <Box className="card-image-box">
                        <img className="user-img " src={imagePath} alt="" />
                      </Box>

                      <Box className="user-name-box">
                        <Typography className="user-name">
                          {user.memberNick}
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
