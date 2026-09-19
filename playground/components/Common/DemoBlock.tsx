import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Collapse,
  Button,
} from "@mui/material";
import { useThemeMode } from "../../../src/context/ThemeContext.js";
import { Code, Copy, Check } from "lucide-react";

interface DemoBlockProps {
  id?: string;
  title?: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}

export const DemoBlock: React.FC<DemoBlockProps> = ({
  id,
  title,
  description,
  code,
  children,
}) => {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box id={id} sx={{ mb: 5, scrollMarginTop: "90px" }}>
      {title && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.15rem",
            letterSpacing: "-0.01em",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, fontSize: "0.88rem", lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      )}

      {/* Frame Container */}
      <Box
        sx={{
          borderRadius: "16px",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(17, 17, 17, 0.08)"
          }`,
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.02)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          overflow: "hidden",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            borderColor: isDark
              ? "rgba(255, 255, 255, 0.16)"
              : "rgba(17, 17, 17, 0.15)",
          },
        }}
      >
        {/* Live Component Preview Area */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 4 },
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            alignItems: "center",
            justifyContent: "flex-start",
            minHeight: 120,
            position: "relative",
          }}
        >
          {children}
        </Box>

        {/* Action Toolbar (Show code / Copy code) */}
        {code && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              py: 0.8,
              px: 2,
              borderTop: `1px solid ${
                isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(17, 17, 17, 0.06)"
              }`,
              backgroundColor: isDark
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(0, 0, 0, 0.015)",
            }}
          >
            <Button
              size="small"
              onClick={() => setShowCode(!showCode)}
              startIcon={<Code size={14} />}
              sx={{
                textTransform: "none",
                fontSize: "0.76rem",
                color: "text.secondary",
                fontWeight: 500,
                mr: 1,
                "&:hover": {
                  color: "text.primary",
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              {showCode ? "Hide code" : "Show code"}
            </Button>

            <Tooltip title={copied ? "Copied!" : "Copy code"}>
              <IconButton
                size="small"
                onClick={handleCopy}
                sx={{
                  color: copied ? "success.main" : "text.secondary",
                  p: 0.6,
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {/* Collapsible Syntax Code Area */}
        {code && (
          <Collapse in={showCode}>
            <Box
              component="pre"
              sx={{
                m: 0,
                p: 2.5,
                fontSize: "0.78rem",
                fontFamily:
                  '"JetBrains Mono", "Fira Code", SFMono-Regular, Consolas, monospace',
                lineHeight: 1.55,
                backgroundColor: isDark
                  ? "rgba(10, 10, 10, 0.9)"
                  : "rgba(246, 245, 242, 0.85)",
                color: isDark ? "#ECEAE5" : "#1A1A1A",
                overflowX: "auto",
                borderTop: `1px solid ${
                  isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(17, 17, 17, 0.06)"
                }`,
              }}
            >
              <code>{code}</code>
            </Box>
          </Collapse>
        )}
      </Box>
    </Box>
  );
};
