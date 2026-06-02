import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => {
      const row = params?.row || {};
      return `${row.firstName || ""} ${row.lastName || ""}`;
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  // Initialize print styles on component mount
  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) {
      alert("Print content not found");
      return;
    }

    const printWindow = window.open("", "_blank", "width=1200,height=900");

    if (!printWindow) {
      return;
    }

    const headMarkup = Array.from(
      document.querySelectorAll("style, link[rel='stylesheet']"),
    )
      .map((node) => node.outerHTML)
      .join("");

    const exportedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Print Report</title>
        ${headMarkup}
        <style>
          @page {
            size: A4;
            margin: 16mm;
          }
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            font-family: 'Arial', 'Helvetica', sans-serif;
            background: #ffffff;
            color: #1f2937;
          }

          .report-shell {
            padding: 28px;
          }
          
          .report-header {
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 1px solid #d1d5db;
          }
          
          .report-header h1 {
            margin: 0 0 6px;
            font-size: 28px;
            font-weight: 700;
          }
          
          .report-header p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.5;
          }
          
          .report-content .MuiCard-root {
            box-shadow: none !important;
            border: 1px solid #e5e7eb;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .report-content .MuiCardContent-root {
            padding: 20px;
          }
          
          .report-content svg {
            max-width: 100%;
          }
        </style>
      </head>
      <body>
        <main class="report-shell">
          <header class="report-header">
            <h1>Reports Summary</h1>
            <p>Analytics overview for generated reports, category breakdown, and current completion performance.</p>
            <p>Prepared on ${exportedAt}</p>
          </header>
          <section class="report-content">
            ${printContent.innerHTML}
          </section>
        </main>
      </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            Reports & Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Detailed analysis and data visualization of your system metrics.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Button variant="contained">Generate</Button>
          <Button variant="outlined" onClick={handlePrint}>
            Export
          </Button>
          <Button variant="outlined">Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Quarterly Performance
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This chart compares how many reports were generated and how many
              were completed quarterly.
            </Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: "Series 1" },
                { data: [51, 6, 49, 30], label: "Series 2" },
              ]}
              height={300}
              xAxis={[
                {
                  data: ["Q1", "Q2", "Q3", "Q4"],
                  scaleType: "band",
                  label: "Quarters",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Performance
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <BarChart
                  series={[
                    { data: [30, 45, 55, 40, 60, 55], label: "Revenue" },
                  ]}
                  height={300}
                  xAxis={[
                    {
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      scaleType: "band",
                    },
                  ]}
                  margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completion Rate
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The gauge highlights the current percentage of reports completed
                on time based on the latest reporting cycle.
              </Typography>
              <Box
                sx={{
                  minHeight: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Gauge width={180} height={180} value={78} />
              </Box>
            </CardContent>
          </Card>
        </Stack>
        <Card>
          <CardContent>
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;
