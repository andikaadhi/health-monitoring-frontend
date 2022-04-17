import React from "react";
import { useHistory } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useHttpReqData from "../../hooks/useHttpReqData";
import { Button } from "@mui/material";

const PatientList = () => {
  const history = useHistory();

  const { data, isLoading } = useHttpReqData({
    baseUrl: "http://localhost:3000",
    path: "/patients",
  });

  return (
    <>
      <Button onClick={() => history.push("/patients/add")}>Add Patient</Button>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, maxWidth: 1200, margin: "auto" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Patient ID</TableCell>
              <TableCell align="right">Sensor ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="right">Birthdate</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                key={row.patient_id}
                onClick={() => history.push(`/patients/${row.patient_id}/detail`)}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {row.patient_id}
                </TableCell>
                <TableCell align="right">{row.sensor_id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="right">{row.birthdate}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PatientList;
