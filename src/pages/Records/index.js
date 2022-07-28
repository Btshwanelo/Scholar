import React from "react";
import "./style.css";
import { Navbar, Breadcrumb } from "../../components";

const Records = () => {
  return (
    <div className="records">
      <Navbar />
      <div className="main__content">
        <Breadcrumb />
        {/* <div className="card__wrapper">
      <div className="card">
        <div className="card__body">
          {icons.bookmarkIcon}
          <h4>PROFILE</h4>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          {icons.hourClassIcon}
          <h4>STUDENTS</h4>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          {icons.labelIcon}
          <h4>MODULES</h4>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          {icons.pictureIcon}
          <h4>COURSES</h4>
        </div>
      </div>
    </div> */}
    <div className="table__container">
        <div className="table-card">
          <div className="table-card__body">
            <h4>Table</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Progress</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
