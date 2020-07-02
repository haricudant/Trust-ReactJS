import React, { Component } from "react";
import "./Body.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from "axios";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://trustbackend.herokuapp.com/trust/getallposts")
      .then((response) => {
        console.log(response);
        this.setState({ contents: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { contents } = this.state;
    return (
      <div>
        {contents.length
          ? contents.map((content) => (
              <div>
                <div className="container ">
                  <div className="Body">
                    <h1 className="text-center three" id="head">
                      <span>{content.title}</span>
                    </h1>

                    <div class="row">
                      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <img className = "sidepic img-responsive" 
                          src={content.imageUrl}
                        alt=""
                        
                          
                        />{" "}
                      </div>
                      <div class="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                        <p id="para">
                          <ReactReadMoreReadLess
                            charLimit={200}
                            readMoreText={
                              <p style={{ color: "blue", fontSize: "12px" }}>
                                Read more ▼{" "}
                              </p>
                            }
                            readLessText={
                              <p style={{ color: "blue", fontSize: "12px" }}>
                                Read less ▲
                              </p>
                            }
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {content.description}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }
}
