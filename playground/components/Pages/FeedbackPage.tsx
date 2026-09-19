import React from "react";
import { Box, Alert, AlertTitle, Button } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

export const FeedbackPage: React.FC = () => {
  return (
    <ComponentPage
      title="Alert & Feedback"
      description="An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."
      category="Feedback"
      badges={["Feedback", "Alerts", "Frosted Banners"]}
    >
      {/* 1. Alert Types */}
      <DemoBlock
        id="alerts"
        title="Severity Levels"
        description="Standard MUI alert severity states styled with translucent glass backgrounds and crisp borders."
        code={`<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — operation completed!</Alert>
<Alert severity="warning">This is a warning alert — check your settings!</Alert>
<Alert severity="error">This is an error alert — check your input!</Alert>`}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}>
          <Alert severity="info">
            <AlertTitle>Information</AlertTitle>
            This is an info alert with frosted glass backing — check out the details!
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Your changes were published successfully to the global design system.
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            Review component overrides before deploying to production.
          </Alert>
          <Alert
            severity="error"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            <AlertTitle>Error</AlertTitle>
            Unable to connect to upstream server — please try again.
          </Alert>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
