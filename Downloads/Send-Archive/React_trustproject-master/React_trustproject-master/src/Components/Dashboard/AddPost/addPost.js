import React, { Fragment, useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import "./addPost.css";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    amountSpend: "",
  });

  const { title, description, imageUrl, amountSpend } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const url = "https://trustbackend.herokuapp.com/trust/postadd";

    await axios
      .post(url, formData)
      .then((res) => {
        NotificationManager.success(
          "Success message",
          "Post Added Successfully"
        );
        setFormData({
          title: "",
          description: "",
          imageUrl: "",
          amountSpend: "",
        });
      })
      .catch((err) => {
        NotificationManager.error("Error message", "Error adding the post");
      });
  };

  return (
    <Fragment>
      <div className="forvhandcenter">
        <div>
          <h1 className="large text-dark">Add Post</h1>
          <p className="lead">
            <i className="fa fa-clipboard" /> Let's add some Post for our Trust
            page
          </p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label for="exampleFormControlInput1">Title</label>
              <input
                font-weight-light
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="please enter the title"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Image</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="https://www.image.com"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Amount spent</label>
              <input
                font-weight-light
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="please enter the title"
                name="amountSpend"
                value={amountSpend}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="description"
                value={description}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <input type="submit" className="btn btn-primary my-1" />
          </form>
        </div>
        <NotificationContainer />
      </div>
    </Fragment>
  );
};

export default AddPost;
