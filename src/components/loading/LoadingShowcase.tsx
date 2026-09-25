"use client";
import React, { useEffect, useId, useRef, useState } from "react";

import { Box, LinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import type {
  LoadingShowcaseImage,
  LoadingShowcaseProps,
} from "./LoadingShowcase.types.js";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const clampProgress = (value: number) => {
  if (!Number.isFinite(value)) return 0;
  return Math.min(100, Math.max(0, value));
};

/**
 * Generates the next visual progress value.
 *
 * The progress intentionally slows down as it approaches 100%.
 *
 * This is visual progress only.
 * It does NOT claim to represent actual loading progress.
 */
const getNextProgress = (current: number) => {
  if (current < 25) {
    return current + 3;
  }

  if (current < 50) {
    return current + 2;
  }

  if (current < 70) {
    return current + 1.5;
  }

  if (current < 85) {
    return current + 0.8;
  }

  if (current < 92) {
    return current + 0.35;
  }

  if (current < 96) {
    return current + 0.15;
  }

  if (current < 98) {
    return current + 0.05;
  }

  return current;
};

/* -------------------------------------------------------------------------- */
/* Animations                                                                  */
/* -------------------------------------------------------------------------- */

const floatProduct = {
  "0%": {
    transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
  },

  "25%": {
    transform: "translate3d(0, -8px, 0) rotate(-0.5deg) scale(1.006)",
  },

  "50%": {
    transform: "translate3d(0, -15px, 0) rotate(0deg) scale(1.012)",
  },

  "75%": {
    transform: "translate3d(0, -7px, 0) rotate(0.5deg) scale(1.006)",
  },

  "100%": {
    transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
  },
};

const floatOrbitOne = {
  "0%": {
    transform: "translate(-50%, -50%) rotate(-16deg) scale(1)",
  },

  "50%": {
    transform: "translate(-50%, -50%) rotate(-12deg) scale(1.025)",
  },

  "100%": {
    transform: "translate(-50%, -50%) rotate(-16deg) scale(1)",
  },
};

const floatOrbitTwo = {
  "0%": {
    transform: "translate(-50%, -50%) rotate(18deg) scale(1)",
  },

  "50%": {
    transform: "translate(-50%, -50%) rotate(23deg) scale(1.035)",
  },

  "100%": {
    transform: "translate(-50%, -50%) rotate(18deg) scale(1)",
  },
};

/* -------------------------------------------------------------------------- */
/* Root                                                                        */
/* -------------------------------------------------------------------------- */

const Root = styled(Box)(({ theme }) => ({
  position: "relative",

  width: "100%",
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  boxSizing: "border-box",

  background: "transparent",

  color: theme.palette.text.primary,

  overflow: "hidden",

  padding: theme.spacing(4, 3),

  [theme.breakpoints.down("sm")]: {
    minHeight: "100svh",
    padding: theme.spacing(3, 2),
  },

  "@media (prefers-reduced-motion: reduce)": {
    "& *": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
    },
  },
}));

/* -------------------------------------------------------------------------- */
/* Content                                                                     */
/* -------------------------------------------------------------------------- */

const Content = styled(Box)(({ theme }) => ({
  position: "relative",

  zIndex: 1,

  width: "100%",
  maxWidth: 760,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textAlign: "center",

  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    maxWidth: 420,
  },
}));

/* -------------------------------------------------------------------------- */
/* Visual                                                                      */
/* -------------------------------------------------------------------------- */

const Visual = styled(Box)(({ theme }) => ({
  position: "relative",

  width: "min(540px, 66vw)",

  aspectRatio: "1 / 0.88",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: theme.spacing(2),

  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    width: "min(460px, 70vw)",
  },

  [theme.breakpoints.down("sm")]: {
    width: "min(350px, 82vw)",

    marginBottom: theme.spacing(1),
  },
}));

/* -------------------------------------------------------------------------- */
/* Product                                                                     */
/* -------------------------------------------------------------------------- */

const Product = styled(Box)(() => ({
  position: "relative",

  zIndex: 2,

  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  animation: "loading-showcase-product-float 6s ease-in-out infinite",

  willChange: "transform",

  "@keyframes loading-showcase-product-float": floatProduct,

  "& img": {
    display: "block",

    width: "100%",
    height: "100%",

    maxWidth: "100%",
    maxHeight: "100%",

    objectFit: "contain",
  },
}));

/* -------------------------------------------------------------------------- */
/* Orbit                                                                       */
/* -------------------------------------------------------------------------- */

const Orbit = styled("svg")(({ theme }) => ({
  position: "absolute",

  inset: "50% auto auto 50%",

  width: "115%",
  height: "58%",

  pointerEvents: "none",

  color: theme.palette.text.primary,

  transformOrigin: "center",

  opacity: 0.9,

  zIndex: 1,

  willChange: "transform",
}));

const OrbitOne = styled(Orbit)(() => ({
  transform: "translate(-50%, -50%) rotate(-16deg)",

  animation: "loading-showcase-orbit-one 9s ease-in-out infinite",

  "@keyframes loading-showcase-orbit-one": floatOrbitOne,
}));

const OrbitTwo = styled(Orbit)(() => ({
  transform: "translate(-50%, -50%) rotate(18deg)",

  opacity: 0.65,

  animation: "loading-showcase-orbit-two 11s ease-in-out infinite",

  "@keyframes loading-showcase-orbit-two": floatOrbitTwo,
}));

/* -------------------------------------------------------------------------- */
/* Title                                                                       */
/* -------------------------------------------------------------------------- */

const Title = styled(Typography)(({ theme }) => ({
  maxWidth: 620,

  margin: 0,

  color: theme.palette.text.primary,

  fontWeight: 300,

  letterSpacing: "-0.045em",

  lineHeight: 1.05,

  fontSize: "clamp(2.25rem, 4.2vw, 4.25rem)",

  textWrap: "balance",

  [theme.breakpoints.down("sm")]: {
    maxWidth: 340,

    fontSize: "clamp(2rem, 9vw, 3rem)",

    lineHeight: 1.08,
  },
}));

/* -------------------------------------------------------------------------- */
/* Progress Section                                                            */
/* -------------------------------------------------------------------------- */

const ProgressSection = styled(Box)(({ theme }) => ({
  width: "min(355px, 72vw)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  marginTop: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    width: "min(320px, 78vw)",

    marginTop: theme.spacing(3),
  },
}));

/* -------------------------------------------------------------------------- */
/* Progress Bar                                                                */
/* -------------------------------------------------------------------------- */

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  width: "100%",

  height: 3,

  borderRadius: 999,

  backgroundColor: theme.palette.action.disabledBackground,

  overflow: "hidden",

  "& .MuiLinearProgress-bar": {
    borderRadius: 999,

    backgroundColor: theme.palette.text.primary,

    transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
  },
}));

/* -------------------------------------------------------------------------- */
/* Progress Label                                                              */
/* -------------------------------------------------------------------------- */

const ProgressLabel = styled(Typography)(({ theme }) => ({
  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  gap: theme.spacing(1),

  marginTop: theme.spacing(1.75),

  color: theme.palette.text.secondary,

  fontSize: "0.62rem",

  fontWeight: 600,

  letterSpacing: "0.28em",

  lineHeight: 1.4,

  textTransform: "uppercase",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.58rem",

    letterSpacing: "0.22em",

    gap: theme.spacing(0.75),
  },
}));

const ProgressDot = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,

  opacity: 0.65,

  fontSize: "0.8rem",

  lineHeight: 1,
}));

/* -------------------------------------------------------------------------- */
/* Signature                                                                   */
/* -------------------------------------------------------------------------- */

const Signature = styled(Box)(({ theme }) => ({
  position: "absolute",

  right: theme.spacing(6),
  bottom: theme.spacing(5),

  zIndex: 2,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",

  color: theme.palette.text.primary,

  [theme.breakpoints.down("md")]: {
    right: theme.spacing(4),
    bottom: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    position: "relative",

    right: "auto",
    bottom: "auto",

    marginTop: theme.spacing(6),

    alignItems: "center",
  },
}));

/* -------------------------------------------------------------------------- */
/* Default Signature                                                           */
/* -------------------------------------------------------------------------- */

const DefaultSignatureScript = styled("span")(({ theme }) => ({
  fontFamily: '"Brush Script MT", "Segoe Script", "Snell Roundhand", cursive',

  fontSize: "1.65rem",

  fontWeight: 400,

  lineHeight: 1,

  letterSpacing: "-0.02em",

  color: theme.palette.text.primary,

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
}));

const DefaultSignatureCaption = styled("span")(({ theme }) => ({
  marginTop: theme.spacing(1),

  fontSize: "0.52rem",

  fontWeight: 600,

  letterSpacing: "0.32em",

  lineHeight: 1,

  color: theme.palette.text.secondary,

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.48rem",

    letterSpacing: "0.27em",
  },
}));

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export const LoadingShowcase: React.FC<LoadingShowcaseProps> = ({
  image,

  renderImage,

  loading = true,

  title = <>We’re getting things ready...</>,

  loadingLabel = "LOADING YOUR EXPERIENCE",

  signature = (
    <>
      <DefaultSignatureScript>Jivico Studio</DefaultSignatureScript>

      <DefaultSignatureCaption>JIVICO STUDIO</DefaultSignatureCaption>
    </>
  ),

  className,
}) => {
  /* ---------------------------------------------------------------------- */
  /* Progress state                                                         */
  /* ---------------------------------------------------------------------- */

  const [progress, setProgress] = useState(0);

  /*
   * Keeps the latest progress value available inside effects
   * without causing additional renders.
   */
  const progressRef = useRef(0);

  /* ---------------------------------------------------------------------- */
  /* Automatically advance visual progress                                 */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    /*
     * If loading has finished, smoothly complete the remaining
     * progress instead of instantly jumping to 100%.
     */
    if (!loading) {
      const completionTimer = window.setInterval(() => {
        setProgress((current) => {
          const next = Math.min(100, current + 2.5);

          progressRef.current = next;

          if (next >= 100) {
            window.clearInterval(completionTimer);
          }

          return next;
        });
      }, 40);

      return () => {
        window.clearInterval(completionTimer);
      };
    }

    /*
     * Loading is active.
     *
     * Progress advances automatically but intentionally slows
     * down near the end.
     */
    const timer = window.setInterval(() => {
      setProgress((current) => {
        const next = clampProgress(getNextProgress(current));

        progressRef.current = next;

        return next;
      });
    }, 180);

    return () => {
      window.clearInterval(timer);
    };
  }, [loading]);

  /* ---------------------------------------------------------------------- */
  /* SVG IDs                                                                */
  /* ---------------------------------------------------------------------- */

  const gradientId = useId();

  const orbitOneGradient = `loading-orbit-one-${gradientId}`;

  const orbitTwoGradient = `loading-orbit-two-${gradientId}`;

  /* ---------------------------------------------------------------------- */
  /* Image renderer                                                         */
  /* ---------------------------------------------------------------------- */

  const renderStatusImage = (imageProps: LoadingShowcaseImage) => {
    if (renderImage) {
      return renderImage(imageProps);
    }

    return (
      <Box
        component="img"
        src={imageProps.src}
        alt={imageProps.alt ?? ""}
        width={imageProps.width}
        height={imageProps.height}
        sx={{
          display: "block",

          width: "100%",
          height: "100%",

          maxWidth: "100%",
          maxHeight: "100%",

          objectFit: "contain",
        }}
      />
    );
  };

  return (
    <Root
      className={className}
      aria-busy={loading}
      aria-label={loading ? "Loading" : undefined}
    >
      <Content>
        {image && (
          <Visual>
            <OrbitOne viewBox="0 0 700 300" aria-hidden="true">
              <defs>
                <linearGradient
                  id={orbitOneGradient}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />

                  <stop
                    offset="30%"
                    stopColor="currentColor"
                    stopOpacity="0.32"
                  />

                  <stop
                    offset="55%"
                    stopColor="currentColor"
                    stopOpacity="0.7"
                  />

                  <stop
                    offset="80%"
                    stopColor="currentColor"
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="100%"
                    stopColor="currentColor"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <ellipse
                cx="350"
                cy="150"
                rx="290"
                ry="90"
                fill="none"
                stroke={`url(#${orbitOneGradient})`}
                strokeWidth="2.5"
              />
            </OrbitOne>
            <OrbitTwo viewBox="0 0 700 300" aria-hidden="true">
              <defs>
                <linearGradient
                  id={orbitTwoGradient}
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />

                  <stop
                    offset="25%"
                    stopColor="currentColor"
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="52%"
                    stopColor="currentColor"
                    stopOpacity="0.65"
                  />

                  <stop
                    offset="78%"
                    stopColor="currentColor"
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="100%"
                    stopColor="currentColor"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <ellipse
                cx="350"
                cy="150"
                rx="300"
                ry="105"
                fill="none"
                stroke={`url(#${orbitTwoGradient})`}
                strokeWidth="2"
              />
            </OrbitTwo>
            <Product>
              {renderStatusImage({
                ...image,
                width: image.width ?? 540,
                height: image.height ?? 540,
              })}
            </Product>
          </Visual>
        )}
        <Title>{title}</Title>
        <ProgressSection>
          <ProgressBar
            variant="determinate"
            value={progress}
            aria-label="Loading"
          />
          <ProgressLabel>
            <span>{loadingLabel}</span>
            <ProgressDot aria-hidden="true">·</ProgressDot>
            <span>{Math.round(progress)}%</span>
          </ProgressLabel>
        </ProgressSection>
      </Content>
      <Signature>{signature}</Signature>
    </Root>
  );
};

export default LoadingShowcase;
