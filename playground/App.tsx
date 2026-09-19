import React, { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import { DocLayout } from "./components/Layout/DocLayout.js";
import { SearchDialog } from "./components/Common/SearchDialog.js";
import { OverviewPage } from "./components/Pages/OverviewPage.js";
import { ColorsPage } from "./components/Pages/ColorsPage.js";
import { ButtonsPage } from "./components/Pages/ButtonsPage.js";
import { ChipsPage } from "./components/Pages/ChipsPage.js";
import { TabsPage } from "./components/Pages/TabsPage.js";
import { InputsPage } from "./components/Pages/InputsPage.js";
import { SwitchesPage } from "./components/Pages/SwitchesPage.js";
import { DataDisplayPage } from "./components/Pages/DataDisplayPage.js";
import { SurfacesPage } from "./components/Pages/SurfacesPage.js";
import { FeedbackPage } from "./components/Pages/FeedbackPage.js";
import { TypographyPage } from "./components/Pages/TypographyPage.js";
import { SteppersPage } from "./components/Pages/SteppersPage.js";
import { TocItem } from "./components/Layout/TableOfContents.js";

const TOC_MAP: Record<string, TocItem[]> = {
  overview: [
    { id: "brand-kit", title: "Brand Kit Palette" },
    { id: "installation", title: "Installation" },
    { id: "setup", title: "Theme Setup" },
  ],
  colors: [
    { id: "brand-monochrome", title: "Brand Monochrome" },
    { id: "primary-secondary", title: "Primary & Secondary" },
    { id: "semantic-palette", title: "Semantic Palette" },
    { id: "surfaces-backgrounds", title: "Surfaces & Canvas" },
    { id: "glass-system", title: "Glass Tokens" },
    { id: "editorial-gradients", title: "Monochrome Gradients" },
  ],
  buttons: [
    { id: "variants", title: "Core Variants" },
    { id: "color-matrix", title: "Complete Color Matrix" },
    { id: "glass-spotlight", title: "Glass Spotlight" },
    { id: "sizes", title: "Sizes (30/36/44px)" },
    { id: "icons", title: "Buttons with Icons" },
    { id: "icon-buttons", title: "Icon Buttons" },
    { id: "fab", title: "Floating Action Buttons" },
    { id: "button-group", title: "Button Group & Split" },
    { id: "toggle-buttons", title: "Toggle Buttons" },
    { id: "complex-states", title: "Interactive & Full Width" },
  ],
  chips: [
    { id: "glass-spotlight", title: "Glass Spotlight" },
    { id: "chip-types", title: "Chip Types" },
    { id: "sizes", title: "Sizes (24/28/32px)" },
    { id: "color-matrix", title: "Color Matrix" },
  ],
  tabs: [
    { id: "compact", title: "Compact Control" },
    { id: "full-width", title: "Full Width" },
    { id: "frosted-glass", title: "Frosted Glass" },
  ],
  inputs: [
    { id: "text-fields", title: "Text Field Variants" },
    { id: "glass-inputs", title: "Glass Input Spotlight" },
    { id: "validation-colors", title: "Palette & Validation" },
    { id: "select", title: "Select Dropdowns" },
    { id: "autocomplete", title: "Autocomplete & Chips" },
    { id: "adornments", title: "Input Adornments" },
    { id: "sizes", title: "Sizes (36/48/56px)" },
    { id: "multiline", title: "Multiline & Textarea" },
  ],
  switches: [
    { id: "glass-spotlight", title: "Glass Spotlight" },
    { id: "switch-colors", title: "Switch Color Palette" },
    { id: "checkbox-colors", title: "Checkbox Color Palette" },
    { id: "radio-colors", title: "Radio Color Palette" },
    { id: "sizes-states", title: "Sizes & Selection States" },
    { id: "custom-icons", title: "Custom Icons & Placements" },
    { id: "sliders", title: "Glass & Palette Sliders" },
    { id: "form-group", title: "Form Group Preferences" },
  ],
  "data-display": [
    { id: "avatars", title: "Avatars" },
    { id: "badges", title: "Badges" },
    { id: "tooltips", title: "Tooltips" },
  ],
  surfaces: [
    { id: "glass-panel", title: "Glass Panel" },
    { id: "paper-surface", title: "Paper Overrides" },
  ],
  feedback: [
    { id: "alerts", title: "Severity Levels" },
  ],
  typography: [
    { id: "gradient-text", title: "Gradient Text" },
    { id: "headings", title: "Heading Scale" },
  ],
  steppers: [
    { id: "horizontal-stepper", title: "Horizontal Stepper" },
  ],
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, "");
    return hash || "overview";
  });
  const [searchOpen, setSearchOpen] = useState(false);

  // Sync hash on browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) {
        setCurrentRoute(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleRouteChange = (newRoute: string) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentToc = useMemo(() => TOC_MAP[currentRoute] || [], [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case "overview":
        return <OverviewPage />;
      case "colors":
        return <ColorsPage />;
      case "buttons":
        return <ButtonsPage />;
      case "chips":
        return <ChipsPage />;
      case "tabs":
        return <TabsPage />;
      case "inputs":
        return <InputsPage />;
      case "switches":
        return <SwitchesPage />;
      case "data-display":
        return <DataDisplayPage />;
      case "surfaces":
        return <SurfacesPage />;
      case "feedback":
        return <FeedbackPage />;
      case "typography":
        return <TypographyPage />;
      case "steppers":
        return <SteppersPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <DocLayout
        activeRoute={currentRoute}
        onRouteChange={handleRouteChange}
        tocItems={currentToc}
        onOpenSearch={() => setSearchOpen(true)}
      >
        {renderPage()}
      </DocLayout>

      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelect={handleRouteChange}
      />
    </Box>
  );
}
