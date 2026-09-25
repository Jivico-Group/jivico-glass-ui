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
import { CardsPage } from "./components/Pages/CardsPage.js";
import { AccordionPage } from "./components/Pages/AccordionPage.js";
import { PaperPage } from "./components/Pages/PaperPage.js";
import { FeedbackPage } from "./components/Pages/FeedbackPage.js";
import { AlertsPage } from "./components/Pages/AlertsPage.js";
import { TooltipsPage } from "./components/Pages/TooltipsPage.js";
import { ProgressPage } from "./components/Pages/ProgressPage.js";
import { TypographyPage } from "./components/Pages/TypographyPage.js";
import { SteppersPage } from "./components/Pages/SteppersPage.js";
import { DialogsPage } from "./components/Pages/DialogsPage.js";
import { BottomNavigationPage } from "./components/Pages/BottomNavigationPage.js";
import { ListPage } from "./components/Pages/ListPage.js";
import { TablePage } from "./components/Pages/TablePage.js";
import { MenusPage } from "./components/Pages/MenusPage.js";
import { ThemePage } from "./components/Pages/ThemePage.js";
import { ShowcasePage } from "./components/Pages/ShowcasePage.js";
import { RailsPage } from "./components/Pages/RailsPage.js";
import { SpotlightPage } from "./components/Pages/SpotlightPage.js";
import { VisualViewerPage } from "./components/Pages/VisualViewerPage.js";
import { GalleryPage } from "./components/Pages/GalleryPage.js";
import { StatusShowcasePage } from "./components/Pages/StatusShowcasePage.js";
import { TocItem } from "./components/Layout/TableOfContents.js";

const TOC_MAP: Record<string, TocItem[]> = {
  overview: [
    { id: "brand-kit", title: "Brand Kit Palette" },
    { id: "installation", title: "Installation" },
    { id: "setup", title: "Theme Setup" },
  ],
  rails: [
    { id: "interactive-rails", title: "Interactive Playground" },
    { id: "product-rail", title: "1. E-Commerce Product Rail" },
    { id: "editorial-item-width", title: "2. Editorial Peek Rail" },
  ],
  showcase: [
    { id: "interactive-showcase", title: "Interactive Playground" },
    { id: "image-only-showcase", title: "1. Pure Image-Only Mode" },
    { id: "title-desc-showcase", title: "2. Title & Description Mode" },
    { id: "glass-variant-showcase", title: "3. Frosted Glass Variant" },
  ],
  spotlight: [
    { id: "interactive-spotlight", title: "Interactive Playground" },
    { id: "spotlight-overlay", title: "1. Overlay Variant" },
    { id: "spotlight-split", title: "2. Split Grid Variant" },
    { id: "spotlight-minimal", title: "3. Minimal Variant" },
    { id: "nextjs-integration", title: "4. Next.js Integration" },
  ],
  "visual-viewer": [
    { id: "visual-viewer-playground", title: "Interactive Playground" },
    { id: "visual-viewer-left-thumbnail", title: "1. Left Rail — PDP" },
    { id: "visual-viewer-bottom-thumbnail", title: "2. Bottom Strip — Gallery" },
    { id: "visual-viewer-controlled", title: "3. Controlled Index" },
    { id: "visual-viewer-minimal", title: "4. Minimal Swipe-Only" },
    { id: "visual-viewer-arrows-only", title: "5. Arrows Only" },
    { id: "visual-viewer-nextjs", title: "6. Next.js Integration" },
  ],
  gallery: [
    { id: "gallery-playground", title: "Interactive Playground" },
    { id: "gallery-image-only", title: "1. Image-Only Grid" },
    { id: "gallery-ecommerce", title: "2. E-Commerce Product Card" },
    { id: "gallery-render-item", title: "3. Full Custom renderItem" },
    { id: "gallery-square", title: "4. Square Grid (1:1)" },
    { id: "gallery-nextjs", title: "5. Next.js Integration" },
  ],
  "status-showcase": [
    { id: "interactive-status-showcase", title: "Interactive Playground" },
    { id: "404-not-found", title: "1. 404 Not Found" },
    { id: "coming-soon", title: "2. Coming Soon & Drops" },
    { id: "server-error", title: "3. 500 System Error" },
    { id: "empty-state", title: "4. Empty Archive / Bag" },
    { id: "glass-surface", title: "5. Glass vs Standard Surface" },
    { id: "size-matrix", title: "6. Responsive Size Matrix" },
    { id: "props-reference", title: "7. Props Reference" },
  ],
  theme: [
    { id: "global-provider-setup", title: "Global Provider Setup" },
    { id: "standalone-no-setup", title: "Standalone / Zero Setup" },
    { id: "side-by-side-comparison", title: "Nested Theme Scope" },
    { id: "forced-dark-table", title: "Scoped Glass Table" },
    { id: "interactive-scope", title: "Interactive Target Toggle" },
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
  list: [
    { id: "glass-spotlight", title: "Frosted Glass Surface" },
    { id: "list-sizes", title: "List Scale Sizes" },
    { id: "list-colors", title: "Semantic Palette" },
    { id: "list-composition", title: "Rich Composition" },
  ],
  table: [
    { id: "glass-spotlight", title: "Frosted Glass Table" },
    { id: "table-sizes", title: "Table Sizes" },
    { id: "table-colors", title: "Semantic Color Themes" },
  ],
  menus: [
    { id: "glass-spotlight", title: "Frosted Glass Menu" },
    { id: "menu-sizes", title: "Menu Sizes" },
    { id: "menu-colors", title: "Semantic Color Accents" },
  ],
  "bottom-nav": [
    { id: "bottom-nav-surface", title: "Frosted Glass Surface" },
    { id: "bottom-nav-placements", title: "Screen Placements" },
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
    { id: "glass-spotlight", title: "Glass Spotlight" },
    { id: "avatar-shapes", title: "Avatar Shapes (Squircle)" },
    { id: "avatar-sizes", title: "Avatar Size Scale" },
    { id: "badges-colors", title: "Liquid Glass Badges" },
    { id: "status-dots", title: "Glowing Status Aura Dots" },
    { id: "tooltips", title: "Glass Tooltips" },
  ],
  surfaces: [
    { id: "glass-panel", title: "Glass Panel" },
    { id: "paper-surface", title: "Paper Overrides" },
  ],
  cards: [
    { id: "card-variants", title: "Card Variants" },
    { id: "card-colors", title: "Color System & Glass" },
    { id: "card-radius", title: "Corner Radius Options" },
    { id: "card-hover", title: "Interactive Hover Cards" },
    { id: "card-composition", title: "Rich Card Composition" },
  ],
  accordion: [
    { id: "basic-accordion", title: "Basic Accordion Stack" },
    { id: "controlled-accordion", title: "Controlled Single-Expand" },
    { id: "disabled-accordion", title: "Disabled & Static States" },
  ],
  paper: [
    { id: "default-paper", title: "Flat Paper Surface" },
    { id: "glass-paper", title: "Frosted Glass Container" },
    { id: "glass-footer-paper", title: "Glass Footer Variant" },
  ],
  dialogs: [
    { id: "confirmation-dialog", title: "Glass Dialogs" },
    { id: "bottom-sheet", title: "Bottom Sheet & Drawers" },
  ],
  alerts: [
    { id: "alert-severities", title: "Severity Levels" },
    { id: "alert-appearances", title: "Visual Appearances" },
    { id: "alert-colors", title: "Palette Color System" },
    { id: "alert-actions", title: "Actions & Radius Scale" },
  ],
  tooltips: [
    { id: "tooltip-variants", title: "Visual Variants" },
    { id: "tooltip-colors", title: "Color Palette System" },
    { id: "tooltip-placements", title: "Directional Placements" },
    { id: "tooltip-rich-content", title: "Rich Content Tooltips" },
  ],
  progress: [
    { id: "linear-progress-appearances", title: "Progress Appearances" },
    { id: "linear-progress-colors", title: "Palette & Glowing Aura" },
    { id: "linear-progress-sizes", title: "Progress Track Scale" },
    { id: "skeleton-placeholders", title: "Glass Skeleton Shimmer" },
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
      setCurrentRoute(hash || "overview");
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
      case "cards":
        return <CardsPage />;
      case "accordion":
        return <AccordionPage />;
      case "paper":
        return <PaperPage />;
      case "dialogs":
        return <DialogsPage />;
      case "bottom-nav":
        return <BottomNavigationPage />;
      case "list":
        return <ListPage />;
      case "table":
        return <TablePage />;
      case "menus":
        return <MenusPage />;
      case "showcase":
        return <ShowcasePage />;
      case "rails":
        return <RailsPage />;
      case "spotlight":
        return <SpotlightPage />;
      case "visual-viewer":
        return <VisualViewerPage />;
      case "gallery":
        return <GalleryPage />;
      case "status-showcase":
        return <StatusShowcasePage />;
      case "theme":
        return <ThemePage />;
      case "alerts":
        return <AlertsPage />;
      case "tooltips":
        return <TooltipsPage />;
      case "progress":
        return <ProgressPage />;
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
