import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  fetchArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../../services/ArticleService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 680,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const defaultArticle = {
  name: "",
  title: "",
  status: "Active",
  image: "",
  content: "",
};

const DashArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(defaultArticle);
  const [editArticleId, setEditArticleId] = useState(null);
  const [formError, setFormError] = useState("");

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data } = await fetchArticles();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error loading articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleOpen = () => {
    setFormError("");
    setCurrentArticle(defaultArticle);
    setEditArticleId(null);
    setIsEditing(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditArticleId(null);
    setIsEditing(false);
    setFormError("");
  };

  const handleEdit = (article) => {
    setFormError("");
    setCurrentArticle({
      name: article.name,
      title: article.title,
      status: article.status,
      image: article.image || "",
      content: (article.content || []).join("\n"),
    });
    setEditArticleId(article._id);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this article permanently?");
    if (!confirmed) return;
    try {
      await deleteArticle(id);
      await loadArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    if (
      !currentArticle.name ||
      !currentArticle.title ||
      !currentArticle.content
    ) {
      setFormError("Name, title, and content are required.");
      return;
    }

    const payload = {
      name: currentArticle.name,
      title: currentArticle.title,
      status: currentArticle.status,
      image: currentArticle.image,
      content: currentArticle.content,
    };

    try {
      if (isEditing && editArticleId) {
        await updateArticle(editArticleId, payload);
      } else {
        await createArticle(payload);
      }
      await loadArticles();
      handleClose();
    } catch (error) {
      setFormError(error.response?.data?.message || "Unable to save article.");
      console.error(error);
    }
  };

  const rows = useMemo(
    () =>
      articles.map((article) => ({
        id: article._id,
        slug: article.name,
        title: article.title,
        paragraphs: article.content?.length || 0,
        preview: (article.content?.[0] || "").slice(0, 120) + "...",
        status: article.status,
      })),
    [articles],
  );

  const filteredRows = useMemo(
    () =>
      rows.filter((row) => {
        const matchesSearch =
          row.slug.toLowerCase().includes(search.toLowerCase()) ||
          row.title.toLowerCase().includes(search.toLowerCase()) ||
          row.preview.toLowerCase().includes(search.toLowerCase());
        const matchesStatus =
          statusFilter === "All" || row.status === statusFilter;
        return matchesSearch && matchesStatus;
      }),
    [rows, search, statusFilter],
  );

  const columns = [
    { field: "slug", headerName: "Slug", width: 180 },
    { field: "title", headerName: "Title", flex: 1, minWidth: 220 },
    { field: "paragraphs", headerName: "Paragraphs", width: 140 },
    {
      field: "preview",
      headerName: "Preview",
      flex: 2,
      minWidth: 300,
      sortable: false,
    },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              handleEdit(articles.find((item) => item._id === params.row.id))
            }
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Articles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage dashboard article listings. These articles are stored in the
            articles collection.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ whiteSpace: "nowrap" }}
        >
          Add Article
        </Button>
      </Box>

      <Box
        sx={{
          mb: 3,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search Articles"
          variant="outlined"
          size="small"
          sx={{ minWidth: 240, flex: 1 }}
        />
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="status-filter-label">Status Filter</InputLabel>
          <Select
            labelId="status-filter-label"
            value={statusFilter}
            label="Status Filter"
            onChange={(e) => setStatusFilter(e.target.value)}
            size="small"
          >
            <MenuItem value="All">All Statuses</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Disabled">Disabled</MenuItem>
          </Select>
        </FormControl>
        <Button
          component={Link}
          to="/articles"
          variant="outlined"
          sx={{ whiteSpace: "nowrap" }}
        >
          Public Article List
        </Button>
      </Box>

      <Box sx={{ height: 560, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          disableSelectionOnClick
          density="comfortable"
          loading={loading}
        />
      </Box>

      <Modal open={open} onClose={handleClose} keepMounted>
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            {isEditing ? "Edit Article" : "Add Article"}
          </Typography>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              label="Slug (name)"
              value={currentArticle.name}
              onChange={(e) =>
                setCurrentArticle({ ...currentArticle, name: e.target.value })
              }
              fullWidth
              required
            />
            <TextField
              label="Title"
              value={currentArticle.title}
              onChange={(e) =>
                setCurrentArticle({ ...currentArticle, title: e.target.value })
              }
              fullWidth
              required
            />
            <TextField
              label="Image URL"
              value={currentArticle.image}
              onChange={(e) =>
                setCurrentArticle({ ...currentArticle, image: e.target.value })
              }
              fullWidth
            />
            <TextField
              label="Content"
              value={currentArticle.content}
              onChange={(e) =>
                setCurrentArticle({
                  ...currentArticle,
                  content: e.target.value,
                })
              }
              fullWidth
              required
              multiline
              minRows={4}
            />
            <FormControl fullWidth>
              <InputLabel id="article-status-label">Status</InputLabel>
              <Select
                labelId="article-status-label"
                label="Status"
                value={currentArticle.status}
                onChange={(e) =>
                  setCurrentArticle({
                    ...currentArticle,
                    status: e.target.value,
                  })
                }
                size="small"
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Disabled">Disabled</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {formError && (
            <Typography color="error" sx={{ mt: 2 }}>
              {formError}
            </Typography>
          )}

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 3, justifyContent: "flex-end" }}
          >
            <Button variant="outlined" onClick={handleClose} type="button">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              {isEditing ? "Save Changes" : "Create Article"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default DashArticleListPage;
