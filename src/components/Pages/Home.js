// import React, { useState, useEffect } from "react";
// import classes from "../assets/style/home.module.css";
// import axios from "../axios";
// import { GitUserData } from "./UI/GitUserData";
// import { Pages } from "./UI/Pages";
// import GoToTop from "./UI/GoToTop";
// import { PageButtonPlus } from "./UI/PageButtonPlus";
// import { PageButtonMinus } from "./UI/PageButtonMinus";

// export const Home = () => {
//   const [query, setQuery] = useState("");

//   const [users, setUsers] = useState([]); //fetching user from the API

//   //Page
//   const [page, setPage] = useState(1);

//   //user per page limit
//   const [userLimit, setUserLimit] = useState(10);

//   // total no of users,
//   const [totalUsers, setTotalUsers] = useState(0);

//   const handleQueryInput = (e) => {
//     // e.preventDefault();
//     const value = e.target.value;
//     setQuery(value);
//   };

//   const handlePreviousPage = () => {
//     setPage((page) => {
//       if (page === 1) {
//         return page;
//       } else {
//         return page - 1;
//       }
//     });
//   };

//   const handleNextPage = () => {
//     setPage((page) => page + 1);
//   };

//   const handlePageLimit = (e) => {
//     const value = e.target.value;
//     setUserLimit(parseInt(value));
//   };

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get(`/search/users?q=${query}`, {
//         params: {
//           page: page,
//           per_page: userLimit,
//         },
//       });
//       return data?.items;
//     } catch (err) {
//       console.log(err);
//       return null;
//     }
//   };

//   const totalUserCount = async () => {
//     try {
//       const { data } = await axios.get(`/search/users?q=${query}`);
//       console.log(data.total_count);
//       return data.total_count;
//     } catch (err) {
//       console.errord(err);
//       return null;
//     }
//   };

//   const handleSearchUser = async (e) => {
//     e.preventDefault();
//     if (query) {
//       const items = await fetchUsers();
//       setUsers(items);
//     } else {
//       console.error("Your query is empty...");
//     }
//   };

//   useEffect(() => {
//     const displayUserOnChange = async () => {
//       if (query) {
//         const items = await fetchUsers();
//         setUsers(items);
//         const total_count = await totalUserCount();
//         setTotalUsers(total_count);
//       }
//     };
//     displayUserOnChange();
//   }, [page, userLimit]);

//   // const pagenation = () => {
//   //   if (totalUsers === 0) {
//   //     return null;
//   //   } else {
//   //     let a = { userLimit };
//   //     let b = { setTotalUsers };
//   //     let finalPage = `${b % a}` + 1;
//   //     // return pageNo;
//   //     // console.log(b);
//   //     console.log(finalPage);
//   //   }
//   // };

//   return (
//     <div className="container">
//       <div className={classes["search-form"]}>
//         <h2> Github search user </h2>
//         <form>
//           <input
//             type="text"
//             value={query}
//             onChange={handleQueryInput}
//             placeholder="Enter the username"
//           />
//           <button onClick={handleSearchUser}> Search </button>
//         </form>
//       </div>
//       <div className={classes["page-options"]}>
//         <Pages onChange={handlePageLimit} />
//         <div className={classes.pagination}>
//           {/* <PageButtonPlus
//             onClick={(handlePreviousPage, handleNextPage)}
//             page={page}
//           /> */}
//           <PageButtonMinus onClick={handlePreviousPage} page={page} />
//           <PageButtonPlus onClick={handleNextPage} page={page} />
//         </div>
//       </div>
//       {/* {users ? (
//         users.map((user) => {
//           return (
//             <li className={classes.list} key={user.id}>
//               <GitUserData user={user} />
//             </li>
//           );
//         })
//       ) : (
//         <h2>There is nothing to display...</h2>
//       )} */}
//       {users?
//       (for (user of users ){

//       })
//       : ('') }
//       <GoToTop />
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import gitLogo60 from "..//..//assets/images/gitWhite60.png";
import classes from "..//..//assets/style/home.module.css";
import axios from "..//..//axios";
import { GitUserData } from "../UI/GitUserData";
import { Pages } from "../UI/Pages";
import GoToTop from "../UI/GoToTop";

export const Home = () => {
  const [query, setQuery] = useState("");

  const [users, setUsers] = useState([]); //fetching user from the API

  //Page
  const [page, setPage] = useState(1);
  let pageForRequest = page;

  //user per page limit
  const [userLimit, setUserLimit] = useState(10);

  const [searchFetchList, setSearchFetchList] = useState(false);

  // total no of users,
  const [totalUsers, setTotalUsers] = useState(0);

  const handleQueryInput = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    setQuery(value);
  };

  // const handlePages = async () => {
  //   if (query) {
  //     const { data } = await axios.get(
  //       // `/search/users?q=${query}`
  //       `/search/users`,
  //       {
  //         params: {
  //           q: query,
  //           page: page - 1,
  //           per_page: userLimit,
  //         },
  //       }
  //     );
  //     setUsers(data?.items);
  //     // setTotalUsers(data.total_count);
  //   }
  // };
  const handlePreviousPage = () => {
    setPage((page) => {
      if (page === 1) {
        return page;
      } else {
        return page - 1;
      }
    });
  };

  // const nxtPG = useCallback(() => {
  const handleNextPage = async () => {
    setPage((page) => page + 1);
    pageForRequest += 1;
    if (query) {
      const { data } = await axios.get(
        // `/search/users?q=${query}`
        `/search/users`,
        {
          params: {
            q: query,
            page: pageForRequest,
            per_page: userLimit,
          },
        }
      );
      setUsers(data?.items);
      // setTotalUsers(data.total_count);
    }
  };
  const handleFirstPage = async () => {
    setPage(1);
    pageForRequest = 1;
    if (query) {
      const { data } = await axios.get(
        // `/search/users?q=${query}`
        `/search/users`,
        {
          params: {
            q: query,
            page: pageForRequest,
            per_page: userLimit,
          },
        }
      );
      setUsers(data?.items);
      // setTotalUsers(data.total_count);
    }
  };
  const handleLastPage = async () => {
    console.log("TOTALUSES------", totalUsers);
    const maxPage = totalUsers > 1000 ? 1000 : totalUsers;
    console.log("Max Page", maxPage);
    setPage(Math.ceil(maxPage / userLimit));
    pageForRequest = Math.ceil(maxPage / userLimit);
    if (query) {
      const { data } = await axios.get(
        // `/search/users?q=${query}`
        `/search/users`,
        {
          params: {
            q: query,
            page: pageForRequest,
            per_page: userLimit,
          },
        }
      );
      setUsers(data?.items);
      // setTotalUsers(data.total_count);
    }
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setUserLimit(parseInt(value));
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (query) {
      const { data } = await axios.get(
        // `/search/users?q=${query}`
        `/search/users`,
        {
          params: {
            q: query,
            page: page,
            per_page: userLimit,
          },
        }
      );
      setUsers(data?.items);
      console.log(data?.items);
      setSearchFetchList(true);
      setTotalUsers(data.total_count);
    } else {
      alert("Your query is empty...");
    }
  };

  useEffect(() => {}, [userLimit]);

  return (
    <div className="container">
      <div className={classes["search-form"]}>
        <div className={classes.header}>
          <img src={gitLogo60} alt="" className={classes.gitLogo} />
          <h2 style={{ backgroundColor: "#333" }}> Github search user </h2>
          {/* <h2 style={{ backgroundColor: "#f5f5f5" }}> Github search user </h2> */}
        </div>
        <form style={{ backgroundColor: "#333" }}>
          {/* <form style={{ backgroundColor: "#f5f5f5" }}> */}
          <input
            type="text"
            value={query}
            onChange={handleQueryInput}
            placeholder="Enter the username"
          />
          <button onClick={handleSearchUser}> Search </button>
        </form>
      </div>
      {/* <div
        className={classes["page-options"]}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Pages onChange={handlePageLimit} />
        <div className={classes.pagination}>
       
          <PageButtonMinus onClick={handlePreviousPage} page={page} />
          <PageButtonPlus onClick={handleNextPage} page={page} />
        </div>
      </div> */}
      {users ? (
        users.map((user) => {
          return (
            <li className={classes.list} key={user.id}>
              <GitUserData user={user} />
            </li>
          );
          // }
        })
      ) : (
        <h2>There is nothing to display...</h2>
      )}

      {searchFetchList ? (
        <>
          <div
            className={classes["page-options"]}
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <Pages onChange={handlePageLimit} />
            <div className={classes.pagination}>
              <button onClick={handleFirstPage}> First Page</button>
              <button onClick={handlePreviousPage}> {page}</button>
              <button onClick={handleNextPage}> {page + 1}</button>
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
