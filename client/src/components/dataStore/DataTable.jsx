import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import "../../index.css";

const DataTable = ({ columns, data, title, actions }) => {
  const defaultMaterialTheme = createTheme();
  return (
    <div className="dataTable z-0 lg:w-full lg:h-full overflow-x-auto scrollbar">
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          actions={actions}
        />
      </ThemeProvider>
    </div>
  );
};

export default DataTable;
