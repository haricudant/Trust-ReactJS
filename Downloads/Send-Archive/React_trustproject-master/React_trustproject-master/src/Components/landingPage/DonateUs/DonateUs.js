import React from "react";
import "./DonateUs.css";
import Donate from "../../../img/donate-help-blog.jpg";

export default function DonateUs() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-12 ">
            <h3 class=" text-center mb-5 font-weight-light donate_us">
              <i className="fas fa-gift fa-1x" />
              <strong style={{fontFamily:'Lato', fontWeight:"bold", fontSize: 40}}> Donate </strong> to us
            </h3>
            <p class="display-5  text-center lead font-weight-light ">
              You can support our efforts through any of the following options
              that are available at the moment.
            </p>

            <li class="text-left">
              <p>
                <i class="fas fa-university " />
                <strong class="text_title"> Online Banking</strong>
              </p>
              <p class="text">
                Following is the account information to which you may transfer
                the amount you wish to
              </p>
              <p class="text">***information***</p>
            </li>
            <li class="text-left subtext">
              <p>
                <i class="fas fa-mobile-alt" />
                <strong class="text_title"> UPI Transfer</strong>
              </p>
              <p class="text">
                Following is the UPI ID to which you may transfer the amount you
                wish to
              </p>
              <p class="text">***Number***</p>
            </li>
          </div>
          <div class="col-lg-4  col-sm-12 ">
            <img
              src={Donate}
              class="img-responsive"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
