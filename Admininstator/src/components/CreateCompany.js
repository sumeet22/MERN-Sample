import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AdminHomeNavbar from "./AdminHomeNavbar";

const CreateCompany = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [typename, setTypename]  = useState("AM");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const jobs = {
      name,
      address,
      typename,
    };
      setName("");
      setAddress("");
      setTypename("");

    axios
      .post("/companies/add", jobs)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminHomeNavbar></AdminHomeNavbar>
      <CreateCompanyContainer>
        <div className="container">
          <h1>Create Company</h1>
          <span className="message">{message}</span>
          <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="job">Company Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="materials">Type</label>
              <select
                value={typename}
                onChange={(e) => setTypename(e.target.value)}
                className="form-control"
                placeholder="Type"
              >
                <option selected value="AM">
                  AM
                </option>
                <option value="Prod Design">Prod Design</option>
                <option value="QC">QC</option>
                <option value="Machining">Machining</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Address"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Job
            </button>
          </form>
        </div>
      </CreateCompanyContainer>
    </>
  );
};

export default CreateCompany;

const CreateCompanyContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 30rem;

  h1 {
    font-weight: 400;
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }

  .message {
    font-weight: 900;
    color: green;
    padding: 1rem 1rem 1rem 0;
  }
`;
