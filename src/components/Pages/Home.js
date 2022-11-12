import React, { useState, useEffect } from "react";
import gitLogo60 from "..//..//assets/images/gitWhite60.png";
import classes from "..//..//assets/style/home.module.css";
import axios from "..//..//axios";
import { GitUserData } from "../UI/GitUserData";
import { Pages } from "../UI/PerPageButton";
import GoToTop from "../UI/GoToTop";
import { toast } from "react-toastify";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [maxPage, setMaxPage] = useState();
  let pageForRequest = page;
  const [userLimit, setUserLimit] = useState(10);
  const [searchFetchList, setSearchFetchList] = useState(false);

  const handleQueryInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setQuery(value);
  };

  const fetchUsers = async (pages = 1, sort = "best-match") => {
    if (query) {
      const { data, status } = await axios.get(`/search/users`, {
        params: {
          q: query,
          sort: sort,
          order: "desc",
          per_page: userLimit,
          page: pages,
        },
      });
      if (status !== 200) {
        toast.error("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      setUsers(data?.items);
      setSearchFetchList(true);
      const totalUsers = data?.total_count;
      const maxPage = totalUsers > 1000 ? 1000 : totalUsers;

      setMaxPage(Math.ceil(maxPage / userLimit));
    } else {
      toast("the field is empty");
    }
  };

  const handlePreviousPage = () => {
    if (page === 1) {
      setPage(page);
    } else {
      setPage((page) => page - 1);
      pageForRequest -= 1;
      fetchUsers(pageForRequest);
    }
    setIsLastPage(false);
  };

  const handleNextPage = async () => {
    setPage((page) => page + 1);
    pageForRequest += 1;
    fetchUsers(pageForRequest);
  };

  const handleFirstPage = async () => {
    setPage(1);
    pageForRequest = 1;
    fetchUsers(pageForRequest);
    setIsLastPage(false);
  };
  const handleLastPage = async () => {
    setIsLastPage(true);
    setPage(maxPage);
    pageForRequest = Math.ceil(maxPage / userLimit);
    fetchUsers(pageForRequest);
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setUserLimit(parseInt(value));
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        await fetchUsers();
      } catch (error) {
        toast.error("something wrong with the api");
      }
    } else {
      toast.error("Empty Query", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    query && fetchUsers();
  }, [userLimit]);

  const handleSort = async (e) => {
    let value = e.target.value;
    if (value === "Best Match") {
      value = "best-match";
    }
    const sortMethod = value.toLowerCase();
    await fetchUsers(page, sortMethod);
  };

  return (
    <div className="container">
      <div className={classes["search-form"]}>
        <div className={classes.header}>
          <img src={gitLogo60} alt="" className={classes.gitLogo} />
          <h2 style={{ backgroundColor: "#333" }}> Github search user </h2>
        </div>
        <form style={{ backgroundColor: "#333" }}>
          <input
            type="text"
            value={query}
            onChange={handleQueryInput}
            placeholder="Enter the username"
          />
          <button onClick={handleSearchUser}> Search </button>
        </form>
      </div>

      {searchFetchList ? (
        <div className={classes.sortBy}>
          <select onChange={handleSort}>
            <option>Best Match</option>
            <option>Stars</option>
            <option>Fork</option>
            <option>Updated</option>
          </select>
        </div>
      ) : (
        ""
      )}

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

      {searchFetchList ? (
        <>
          <div className={classes["page-options"]}>
            <Pages onChange={handlePageLimit} />
            <h4 className={classes.currentPage}>
              Currently at page No. {page}
            </h4>
            <div className={classes.pagination}>
              {page === 1 ? (
                <></>
              ) : (
                <button onClick={handleFirstPage}> First Page</button>
              )}

              <button onClick={handlePreviousPage}> {"<<"}</button>
              {isLastPage || page === maxPage ? (
                <></>
              ) : (
                <button onClick={handleNextPage}> {">>"}</button>
              )}
              <button onClick={handleLastPage}> Last Page</button>
            </div>
          </div>
          <GoToTop />
        </>
      ) : (
        <h2 className={classes.textPrompt}> Please type to find some users</h2>
      )}
    </div>
  );
};
