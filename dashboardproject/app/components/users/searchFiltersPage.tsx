import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Chip,
  Button,
} from "@mui/material";
import { Search, Business, LocationOn, Clear } from "@mui/icons-material";

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  companyFilter,
  setCompanyFilter,
  cityFilter,
  setCityFilter,
  users,
  onClearFilters,
}) {
  const hasActiveFilters = searchTerm || companyFilter || cityFilter;

  return (
    <Box
      sx={{
        p: 2,
        mb: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <TextField
          placeholder="جستجو کاربر..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{ minWidth: 200, flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          select
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          size="small"
          //={{ minWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business fontSize="small" />
              </InputAdornment>
            ),
          }}
        >
            
          <MenuItem value="">همه شرکت‌ها</MenuItem>
          {[...new Set(users.map((user) => user.company.name))].map((company) => (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          ))}
        </TextField>

        <TextField
        placeholder="فیلتر شهر"
          select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          size="small"
       // sx={{ minWidth: 150 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn fontSize="small" />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="">همه شهرها</MenuItem>
          {[...new Set(users.map((user) => user.address.city))].map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {hasActiveFilters && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {searchTerm && (
            <Chip
              label="پاک کردن جست و جو"
              onDelete={() => setSearchTerm("")}
              color="primary"
              size="small"
              sx={{
                padding: "8px 16px",
              }}
            />
          )}
          {companyFilter && (
            <Chip
              label={`شرکت: ${companyFilter}`}
              onDelete={() => setCompanyFilter("")}
              color="secondary"
              size="small"
                sx={{
                padding: "8px 16px",
              }}
            />
          )}
          {cityFilter && (
            <Chip
              label={`شهر: ${cityFilter}`}
              onDelete={() => setCityFilter("")}
              color="success"
              size="small"
                sx={{
                padding: "8px 16px",
              }}
            />
          )}
          <Button
            variant="text"
            onClick={onClearFilters}
            startIcon={<Clear />}
            size="small"
            sx={{ minWidth: "auto" }}
          >
            پاک کردن
          </Button>
        </Box>
      )}
    </Box>
  );
}
