import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Checkbox,
  Avatar,
  Chip,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import {
  MoreHorizontal,
  ArrowUpDown,
  Download,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  XCircle,
  ExternalLink,
} from "lucide-react";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

interface TransactionData {
  id: string;
  user: { name: string; email: string; avatar: string };
  amount: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  type: string;
}

const mockTransactions: TransactionData[] = [
  {
    id: "TX-9021",
    user: {
      name: "Sophia Martinez",
      email: "sophia@jivico.design",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    },
    amount: "$2,450.00",
    date: "Sep 22, 2026",
    status: "Completed",
    type: "Subscription",
  },
  {
    id: "TX-9022",
    user: {
      name: "Marcus Vance",
      email: "marcus@jivico.dev",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    amount: "$890.50",
    date: "Sep 21, 2026",
    status: "Pending",
    type: "API Usage",
  },
  {
    id: "TX-9023",
    user: {
      name: "Elena Rostova",
      email: "elena@jivico.ai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
    amount: "$5,120.00",
    date: "Sep 20, 2026",
    status: "Completed",
    type: "Enterprise",
  },
  {
    id: "TX-9024",
    user: {
      name: "Liam O'Connor",
      email: "liam@jivico.io",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    amount: "$120.00",
    date: "Sep 19, 2026",
    status: "Failed",
    type: "Add-on License",
  },
];

export const TablePage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  // Selection state
  const [selectedRows, setSelectedRows] = useState<string[]>(["TX-9021"]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [activeColor, setActiveColor] = useState<any>("accent");

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(mockTransactions.map((tx) => tx.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectOne = (id: string) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <Chip
            icon={<CheckCircle2 size={13} />}
            label="Completed"
            color="success"
            size="small"
            sx={{ fontWeight: 600, fontSize: "0.7rem", height: 22 }}
          />
        );
      case "Pending":
        return (
          <Chip
            icon={<Clock size={13} />}
            label="Pending"
            color="warning"
            size="small"
            sx={{ fontWeight: 600, fontSize: "0.7rem", height: 22 }}
          />
        );
      case "Failed":
        return (
          <Chip
            icon={<XCircle size={13} />}
            label="Failed"
            color="error"
            size="small"
            sx={{ fontWeight: 600, fontSize: "0.7rem", height: 22 }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ComponentPage
      title="Table & Data Grid"
      description="Frosted glassmorphic data tables (variant='glass') with 20px optical backdrop blur, tabular numeric alignment, selectable rows, and scale-adjusted sizes."
      category="Data Display"
      badges={[
        "variant='glass'",
        "size='small | medium'",
        "color palette",
        "Selectable Rows",
      ]}
    >
      {/* 1. Frosted Glass Spotlight */}
      <DemoBlock
        id="glass-spotlight"
        title="✨ Frosted Glass Table (variant='glass')"
        description="Luxury data table container rendered over a vibrant background with 20px backdrop blur, translucent cell dividers, and glowing selection highlights."
        code={`<TableContainer variant="glass">
  <Table variant="glass" color="accent">
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"><Checkbox /></TableCell>
        <TableCell>User</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow selected={isSelected}>
        <TableCell padding="checkbox"><Checkbox checked={isSelected} /></TableCell>
        <TableCell>Sophia Martinez</TableCell>
        <TableCell align="right">$2,450.00</TableCell>
        <TableCell><Chip label="Completed" color="success" /></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>`}
      >
        <Box
          sx={{
            position: "relative",
            p: { xs: 2, sm: 3 },
            borderRadius: "24px",
            overflow: "hidden",
            backgroundImage: isDark
              ? "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')"
              : "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: isDark
              ? "0 24px 60px rgba(0, 0, 0, 0.7)"
              : "0 20px 48px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Ambient Light Mesh Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 260,
              height: 260,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.65) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(236, 72, 153, 0.65) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <TableContainer
            data-glass="true"
            sx={{ position: "relative", zIndex: 2, borderRadius: "18px" }}
          >
            <Table variant="glass" color="accent">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selectedRows.length > 0 &&
                        selectedRows.length < mockTransactions.length
                      }
                      checked={
                        mockTransactions.length > 0 &&
                        selectedRows.length === mockTransactions.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Customer & Account</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {mockTransactions.map((row) => {
                  const isItemSelected = selectedRows.includes(row.id);
                  return (
                    <TableRow key={row.id} selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          onChange={() => handleSelectOne(row.id)}
                        />
                      </TableCell>

                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: "center" }}
                        >
                          <Avatar
                            src={row.user.avatar}
                            sx={{ width: 34, height: 34 }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                lineHeight: 1.1,
                              }}
                            >
                              {row.user.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ fontSize: "0.7rem", opacity: 0.65 }}
                            >
                              {row.user.email}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>

                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.82rem", fontWeight: 500 }}
                        >
                          {row.type}
                        </Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            fontVariantNumeric: "tabular-nums",
                            fontSize: "0.85rem",
                          }}
                        >
                          {row.amount}
                        </Typography>
                      </TableCell>

                      <TableCell>{getStatusChip(row.status)}</TableCell>

                      <TableCell align="center">
                        <IconButton size="small" sx={{ color: "inherit" }}>
                          <MoreHorizontal size={18} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={6} sx={{ p: 0 }}>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={mockTransactions.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={(_, newPage) => setPage(newPage)}
                      onRowsPerPageChange={(e) =>
                        setRowsPerPage(parseInt(e.target.value, 10))
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      </DemoBlock>

      {/* 2. Table Sizes (Small vs Medium) */}
      <DemoBlock
        id="table-sizes"
        title="Table Sizes (size='small' | 'medium')"
        description="Choose between compact 28px height rows (`size='small'`, padding `7px 10px`) and spacious standard rows (`size='medium'`, padding `11px 14px`)."
        code={`// Compact Table (size="small")
<Table size="small">
  <TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead>
</Table>

// Standard Table (size="medium")
<Table size="medium">
  <TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead>
</Table>`}
      >
        <Stack spacing={4}>
          {/* Small Size Table */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                opacity: 0.6,
                mb: 1.5,
                display: "block",
              }}
            >
              Compact Table (size="small")
            </Typography>

            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                borderRadius: "14px",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
                }`,
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockTransactions.slice(0, 3).map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell sx={{ fontWeight: 600 }}>{tx.id}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {tx.amount}
                      </TableCell>
                      <TableCell>{getStatusChip(tx.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Medium Size Table */}
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                opacity: 0.6,
                mb: 1.5,
                display: "block",
              }}
            >
              Medium Table (size="medium" — Default)
            </Typography>

            <TableContainer
              component={Paper}
              elevation={0}
              sx={{
                borderRadius: "16px",
                border: `1px solid ${
                  isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
                }`,
              }}
            >
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockTransactions.slice(0, 3).map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell sx={{ fontWeight: 600 }}>{tx.id}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>
                        {tx.amount}
                      </TableCell>
                      <TableCell>{getStatusChip(tx.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </DemoBlock>

      {/* 3. Semantic Palette Colors */}
      <DemoBlock
        id="table-colors"
        title="Semantic Color Themes (color='primary' | 'accent' | 'success' | 'warning' | 'error')"
        description="Apply custom color accents to header rows, selected row indicators, and hover states."
        code={`<Table color="accent">
  <TableHead>
    <TableRow><TableCell>Header</TableCell></TableRow>
  </TableHead>
</Table>`}
      >
        <Box sx={{ mb: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["primary", "accent", "success", "warning", "error"].map((color) => (
            <Chip
              key={color}
              label={color}
              color={color as any}
              variant={activeColor === color ? "filled" : "outlined"}
              onClick={() => setActiveColor(color)}
              sx={{ textTransform: "capitalize", fontWeight: 700 }}
            />
          ))}
        </Box>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: "16px",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
            }`,
          }}
        >
          <Table color={activeColor}>
            <TableHead>
              <TableRow>
                <TableCell>Item Code</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell>Stock State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow selected>
                <TableCell sx={{ fontWeight: 600 }}>
                  PROD-101 (Selected Row)
                </TableCell>
                <TableCell>Hardware</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  $1,299.00
                </TableCell>
                <TableCell>
                  <Chip label="In Stock" color={activeColor} size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>PROD-102</TableCell>
                <TableCell>Software</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  $499.00
                </TableCell>
                <TableCell>
                  <Chip label="Available" size="small" variant="outlined" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DemoBlock>
    </ComponentPage>
  );
};
