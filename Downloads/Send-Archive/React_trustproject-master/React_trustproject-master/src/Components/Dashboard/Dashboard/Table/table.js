import React, { useState, useEffect } from "react";
import { fetchTableData } from "../../../api/index";
import Moment from "react-moment";

const Table = () => {
  const [tableValues, setTableValues] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTableValues(await fetchTableData());
    };

    fetchApi();
  }, [setTableValues]);

  const postData = tableValues.map((table) => (
    <tr key={table._id}>
      <td>{table.ipaddress}</td>
      <td>{table.location}</td>
      <td>
        <Moment format="HH:mm:ss">{table.date}</Moment>
      </td>
    </tr>
  ));
  return (
    <div class="container">
      <h3>
        <strong>Recent Visitors</strong>
      </h3>
      <br></br>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">IP ADDRESS</th>
            <th scope="col">LOCATION</th>
            <th scope="col">TIME</th>
          </tr>
        </thead>
        <tbody>{postData}</tbody>
      </table>
    </div>
  );
};

export default Table;
