import React from "react";

export default function SocialNetwork() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 text-center">
            <a href="#" class="lead font-weight-bold">
              <i class="fab fa-facebook" /> @trustname
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 text-center">
            <a href="#" class="lead font-weight-bold">
              <i class="fab fa-twitter" /> @trustname
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 text-center">
            <a
              href="#"
              class="lead font-weight-bold"
              style={{ color: "#bb3b79" }}
            >
              <i class="fab fa-instagram" style={{ color: "#bb3b79" }} />{" "}
              @trustname
            </a>
          </div>
        </div>
        <hr width="30%" />
      </div>
      <div class="container-fluid padding">
        <div class="row text-cente ">
          <div class="col-md-4 mx-auto foo">
            <p class="lead text-center w-responsive mx-auto mb-0 font-weight-light" style={{fontSize: '16px'}}>
              Tamil Nadu, INDIA
            </p>
					  <p class="lead text-center w-responsive mx-auto mb-0 font-weight-light" style={{ fontSize: '17px' }}>
						  &copy; **Name of the trust**
            </p>
					  <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
