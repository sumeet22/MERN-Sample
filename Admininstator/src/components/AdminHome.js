import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdminHomeNavbar from "./AdminHomeNavbar";

const AdminHome = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("/companies")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deleteArticle = (id) => {
    axios
      .delete(`/companies/${id}`)
      .then((res) => {
        fetchPosts();
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminHomeNavbar></AdminHomeNavbar>
      <MainContainer>
        {posts.map((job, key) => (
          <div className="container" key={key}>
            <h2>{job.name}</h2>
            <p>Address: {job.address}</p>
            <p>Type: {job.typename}</p>
             <div className="row my-4">
              <div className="col-sm-4">
                <button
                  onClick={() => deleteArticle(job._id)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </MainContainer>
    </>
  );
};

export default AdminHome;

const MainContainer = styled.div`
  margin: 5rem auto;
  display: grid;
  max-width: 70rem;
  grid-gap: 1rem;

  @media (min-width: 36rem) {
     {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 55rem) {
     {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h2 {
    margin: 0 0 2rem;
  }
`;
