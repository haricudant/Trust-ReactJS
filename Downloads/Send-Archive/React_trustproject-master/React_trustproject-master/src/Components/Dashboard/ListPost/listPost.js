import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { fetchData } from "../../api/index";
import TableList from "./tablelist";

import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";

const url = " https://trustbackend.herokuapp.com/trust/getallposts";

const ListPost = () => {
  const [tableValues, setTableValues] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTableValues(await fetchData());
    };

    fetchApi();
  }, [setTableValues]);

  console.log(tableValues);

  const postData = tableValues.map((table) => <TableList table={table} />);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div class="container">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>
                  Posts <b>Details</b>
                </h2>
              </div>
              <div class="col-sm-4">
                {/* <Link to='/addPost' class="btn btn-info add-new"> <i class="fa fa-plus"></i>Add New</Link>  */}
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount spend</th>
                <th>image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{postData}</tbody>
          </table>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default ListPost;
