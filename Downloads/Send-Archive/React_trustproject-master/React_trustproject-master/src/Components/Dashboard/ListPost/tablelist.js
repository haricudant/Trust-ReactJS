import React, { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "./listPost.module.css";

const Tablelist = ({ table }) => {
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const [display, setDisplay] = useState(true);

  const deletePost = async (id) => {
    await axios
      .delete(`https://trustbackend.herokuapp.com/trust/deleteapost/${id}`)
      .then((res) => {
        // let updatedValues = tableValues.filter((table) => table._id !== id);

        setDisplay(false);

        NotificationManager.success(
          "Success message",
          "Post Deleted Successfully"
        );
      })
      .catch((err) => {
        NotificationManager.error("Error message", "Error deleting the post");
      });
  };

  return display ? (
    <tr key={table._id}>
      <td>
        {currentlyEditing ? (
          <textarea className="form-control" name="title" value={table.title} />
        ) : (
          table.title
        )}
      </td>
      <td>
        {currentlyEditing ? (
          <textarea
            type="text"
            className="form-control"
            name="description"
            value={table.description}
          />
        ) : (
          table.description
        )}
      </td>
      <td>
        {currentlyEditing ? (
          <textarea
            type="text"
            className="form-control"
            name="amountSpend"
            value={table.amountSpend}
          />
        ) : (
          table.amountSpend
        )}
      </td>
      <td>
        {currentlyEditing ? (
          <textarea
            type="text"
            className="form-control"
            name="imageUrl"
            value={table.imageUrl}
          />
        ) : (
          table.imageUrl
        )}
      </td>
      <td>
        <a class="edit" title="Edit" onClick={() => setCurrentlyEditing(true)}>
          <i class="fas fa-pen"></i>
        </a>
        <a class="delete" title="Delete" onClick={() => deletePost(table._id)}>
          <i class="fas fa-trash"></i>
        </a>
      </td>
    </tr>
  ) : (
    ""
  );
};

export default Tablelist;
