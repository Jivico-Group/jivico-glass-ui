import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { Header } from "./Header.js";
import { Sidebar } from "./Sidebar.js";
import { TableOfContents, TocItem } from "./TableOfContents.js";

interface DocLayoutProps {
  activeRoute: string;
  onRouteChange: (route: string) => void;
  tocItems?: TocItem[];
  onOpenSearch: () => void;
  children: React.ReactNode;
}

export const DocLayout: React.FC<DocLayoutProps> = ({
  activeRoute,
  onRouteChange,
  tocItems = [],
  onOpenSearch,
  children,
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <Header
        onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        onOpenSearch={onOpenSearch}
      />

      {/* Main Body Shell */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Left Sidebar */}
        <Sidebar
          activeId={activeRoute}
          onSelect={onRouteChange}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Center Main Content Area */}
        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0, // prevents flex overflow
            py: { xs: 3, md: 5 },
            px: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <Container
            maxWidth="lg"
            disableGutters
            sx={{ display: "flex", gap: 4 }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>

            {/* Right Sticky Table of Contents */}
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}
          </Container>
        </Box>
      </Box>
    </Box>
  );
};
