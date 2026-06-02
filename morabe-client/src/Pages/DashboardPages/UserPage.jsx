import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import { createUser, fetchUsers, updateUser } from "../../services/UserService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("type");
    if (userType !== "admin") {
      navigate("/dashboard");
    }
  }, [navigate]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    address: "",
    type: "viewer",
    isActive: true,
  });
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleOpen = () => {
    setIsEditing(false);
    setNewUser({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      contactNumber: "",
      email: "",
      username: "",
      password: "",
      address: "",
      type: "viewer",
      isActive: true,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user._id === id);
    if (!userToEdit) return;
    setNewUser({ ...userToEdit, password: "" });
    setEditUserId(id);
    setIsEditing(true);
    setOpen(true);
  };

  const handleSaveUser = async () => {
    try {
      if (isEditing) {
        const updatedUser = { ...newUser };
        if (!updatedUser.password) {
          delete updatedUser.password;
        }
        await updateUser(editUserId, updatedUser);
      } else {
        await createUser(newUser);
      }
      await loadUsers();
      handleClose();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleToggleActive = async (id, isActive) => {
    try {
      await updateUser(id, { isActive: !isActive });
      await loadUsers();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const search = searchText.trim().toLowerCase();
      const matchesSearch =
        !search ||
        [
          user.firstName,
          user.lastName,
          user.email,
          user.username,
          user.contactNumber,
          user.address,
          user.type,
        ]
          .filter(Boolean)
          .some((value) => value.toString().toLowerCase().includes(search));

      const matchesType =
        filterType === "all" || user.type?.toLowerCase() === filterType;

      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "active" ? user.isActive : !user.isActive);

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [users, searchText, filterType, filterStatus]);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      sortable: true,
      renderCell: (params) =>
        `${params.row?.firstName || ""} ${params.row?.lastName || ""}`,
    },
    { field: "age", headerName: "Age", flex: 1, sortable: true },
    { field: "gender", headerName: "Gender", flex: 1, sortable: true },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "type", headerName: "Type", flex: 1, sortable: true },
    { field: "contactNumber", headerName: "Contact", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEdit(params.row._id)}
          >
            Edit
          </Button>
          <Switch
            checked={params.row.isActive}
            onChange={() =>
              handleToggleActive(params.row._id, params.row.isActive)
            }
            color="primary"
          />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        sx={{
          marginBottom: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Users
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
          sx={{ position: "fixed", right: "20px", top: "100px", zIndex: 1000 }}
        >
          Add User
        </Button>
      </Stack>

      <Box sx={{ mb: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
        >
          <TextField
            fullWidth
            label="Search users"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            variant="outlined"
          />

          <FormControl sx={{ minWidth: 160 }} variant="outlined">
            <InputLabel id="filter-type-label">Type</InputLabel>
            <Select
              labelId="filter-type-label"
              label="Type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <MenuItem value="all">All Types</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="editor">Editor</MenuItem>
              <MenuItem value="viewer">Viewer</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 160 }} variant="outlined">
            <InputLabel id="filter-status-label">Status</InputLabel>
            <Select
              labelId="filter-status-label"
              label="Status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <MenuItem value="all">All Statuses</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      <Box sx={{ height: 500, width: "100%", mb: 5 }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          getRowId={(row) => row._id}
          loading={loading}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          disableSelectionOnClick
        />
      </Box>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="add-user-modal"
        aria-describedby="add-user-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
            {isEditing ? "Edit User" : "Add User"}
          </Typography>

          <Stack
            id="transition-modal-description"
            direction="column"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <FormControl fullWidth variant="standard">
              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter first name"
                  variant="standard"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter last name"
                  variant="standard"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter age"
                  variant="standard"
                  value={newUser.age}
                  onChange={(e) =>
                    setNewUser({ ...newUser, age: e.target.value })
                  }
                />
              </Box>

              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={newUser.gender}
                    onChange={(e) =>
                      setNewUser({ ...newUser, gender: e.target.value })
                    }
                    label="Gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter mobile"
                  variant="standard"
                  value={newUser.contactNumber}
                  onChange={(e) =>
                    setNewUser({ ...newUser, contactNumber: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter address"
                  variant="standard"
                  value={newUser.address}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter email"
                  variant="standard"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </Box>

              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <FormControl fullWidth variant="standard">
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    labelId="type-label"
                    value={newUser.type}
                    onChange={(e) =>
                      setNewUser({ ...newUser, type: e.target.value })
                    }
                    label="Type"
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter username"
                  variant="standard"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <TextField
                  fullWidth
                  id="input-with-sx"
                  label="Enter password"
                  variant="standard"
                  type="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={newUser.isActive}
                      onChange={(e) =>
                        setNewUser({ ...newUser, isActive: e.target.checked })
                      }
                    />
                  }
                  label={newUser.isActive ? "Active" : "Inactive"}
                />
              </Box>

              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" onClick={handleSaveUser}>
                  {isEditing ? "Save Changes" : "Add"}
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default UsersPage;
