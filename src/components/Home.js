import React, { useState, useEffect } from "react";
import classes from "../assets/style/home.module.css";
import axios from "../axios";
import { GitUserData } from "./UI/GitUserData";
import { Pages } from "./UI/Pages";
import GoToTop from "./UI/GoToTop";

export const Home = () => {
  const [query, setQuery] = useState("");

  const [users, setUsers] = useState([]); //fetching user from the API

  //Page
  const [page, setPage] = useState(1);

  //user per page limit
  const [userLimit, setUserLimit] = useState(10);

  // total no of users,
  const [totalUsers, setTotalUsers] = useState(0);

  const handleQueryInput = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    setQuery(value);
  };

  const handlePreviousPage = () => {
    setPage((page) => {
      if (page === 1) {
        return page;
      } else {
        return page - 1;
      }
    });
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setUserLimit(parseInt(value));
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`/search/users?q=${query}`, {
        params: {
          page: page,
          per_page: userLimit,
        },
      });
      return data?.items;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const totalUserCount = async () => {
    try {
      const { data } = await axios.get(`/search/users?q=${query}`);
      // console.log(data.total_count);
      return data.total_count;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Your query is empty...");
    }
  };

  useEffect(() => {
    const displayUserOnChange = async () => {
      if (query) {
        const items = await fetchUsers();
        setUsers(items);
        const total_count = await totalUserCount();
        setTotalUsers(total_count);
      }
    };
    displayUserOnChange();
  }, [page, userLimit]);

  const pagenation = () => {
    if (totalUsers === 0) {
      return null;
    } else {
      let a = { userLimit };
      let b = { setTotalUsers };
      let finalPage = `${b % a}` + 1;
      // return pageNo;
      // console.log(b);
      console.log(finalPage);
    }
  };

  return (
    <div className="container">
      <div className={classes["search-form"]}>
        <h2> Github search user </h2>
        <form>
          <input
            type="text"
            value={query}
            onChange={handleQueryInput}
            placeholder="Enter the username"
          />
          <button onClick={handleSearchUser}> Search </button>
        </form>
      </div>
      <div className={classes["page-options"]}>
        <Pages onChange={handlePageLimit} />
        <div className={classes.pagination}>
          <button onClick={handlePreviousPage}> {page}</button>
          <button onClick={handleNextPage}> {page + 1}</button>
          {/* {!totalUsers ? (
              ""
            ) : (
              <button onClick={handleNextPage}> {pagenation}</button>
            )} */}
        </div>
      </div>
      {users ? (
        users.map((user) => {
          return (
            <li className={classes.list} key={user.id}>
              <GitUserData user={user} />
            </li>
          );
        })
      ) : (
        <h2>There is nothing to display...</h2>
      )}
      <GoToTop />
    </div>
  );
};
