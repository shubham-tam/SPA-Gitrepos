# SPA for Github api 

A project based on github api created with React.js 

Live Demo : https://github-spa-project.netlify.app/


## Introduction 

This is a project that uses github’s public api. The user can search for a name and upon search the results are filtered on the basis of best match. On the user’s card we can also visit the user's github profile and also another page where we obtain the detailed page of the user. 


## Technologies

react 18.2

axios 1.1.3

react-moment 2.29.4

react-router 6.4.3

react-toastify 9.1.1

## API used in this project 

Gitbubs public API: https://api.github.com/

When pasting the url on chrome this is the result. 

![image](https://user-images.githubusercontent.com/105226707/201491438-e83d208c-8a75-400a-9671-5b674fce90e3.png)


  For my project I used the following URLs.
  
  "user_url": "https://api.github.com/users/{user}",

  "user_repositories_url": "https://api.github.com/users/{user}/repos" 
  
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
  
  user_search_url is used to fetch the user’s data array which contains various information including the user’s image (avatar_url), name (login), 
  id (id), github url   (html_url). 
  Names enclosed in brackets indicate the name as per github’s api.
  
  ```
  {
      "login": "reduxjs",
      "id": 13142323,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzMTQyMzIz",
      "avatar_url": "https://avatars.githubusercontent.com/u/13142323?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/reduxjs",
      "html_url": "https://github.com/reduxjs",
      "followers_url": "https://api.github.com/users/reduxjs/followers",
      "following_url": "https://api.github.com/users/reduxjs/following{/other_user}",
      "gists_url": "https://api.github.com/users/reduxjs/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/reduxjs/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/reduxjs/subscriptions",
      "organizations_url": "https://api.github.com/users/reduxjs/orgs",
      "repos_url": "https://api.github.com/users/reduxjs/repos",
      "events_url": "https://api.github.com/users/reduxjs/events{/privacy}",
      "received_events_url": "https://api.github.com/users/reduxjs/received_events",
      "type": "Organization",
      "site_admin": false,
      "score": 1.0
    }
  ```
  
  The user card looks like. 
  
  ![image](https://user-images.githubusercontent.com/105226707/201492019-5a493db2-18b1-4fc9-b95c-d6a38a1802a8.png)

  Clicking on the users name (avatar) takes you to the next page which looks like. 
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  user_url is used to build the detailed page of the user on the second page. 
  
  ```
  {
  "login": "Redux",
  "id": 565224,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjU2NTIyNA==",
  "avatar_url": "https://avatars.githubusercontent.com/u/565224?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Redux",
  "html_url": "https://github.com/Redux",
  "followers_url": "https://api.github.com/users/Redux/followers",
  "following_url": "https://api.github.com/users/Redux/following{/other_user}",
  "gists_url": "https://api.github.com/users/Redux/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Redux/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Redux/subscriptions",
  "organizations_url": "https://api.github.com/users/Redux/orgs",
  "repos_url": "https://api.github.com/users/Redux/repos",
  "events_url": "https://api.github.com/users/Redux/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Redux/received_events",
  "type": "Organization",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 24,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2011-01-14T19:43:31Z",
  "updated_at": "2016-02-26T23:46:41Z"
}
  ```
  
  
  ![image](https://user-images.githubusercontent.com/105226707/201492292-260c4315-553a-4a36-8cca-417108be094c.png)

  
  The first card has the detailed deesctiption of the user, all the informattion has been fetched from githubs api.
  
  The second card using  "user_repositories_url": "https://api.github.com/users/{user}/repos"  has the user's repositories  and each repository has it's forks, stars, watchers, branche, issues, last uptated. 
  
  A short description of the project. 
  
  Language used. 
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  In the first page, the user can change the no of users to be displayed per page (10, 20, 50 ,100). 
  
  The buttons at the right can be used to visit the first page, previous, next and finally the last page. 
  
  ![image](https://user-images.githubusercontent.com/105226707/201492566-23cbf348-18c2-4b5b-9e02-d77a17bfda0c.png)

  
  All the above pagination is done via the githubs API by passing the necessary arguments. 
  
  ```   
  q: query,                         //input
  sort: sort,                       //sorting
  order: "desc",                    //sorting order desc = descending 
  per_page: userLimit,              //setting the userLimit; userLimit is a function 
  page: pages,                      //pages 
```
  
  Finally the api has been hidden by creating a ```.env``` file in the root folder.
  
  Responsivity has been fixed for laptops and mobile phone. 
  
 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 To test the project you can git clone the repo. 
 
 ## npm install                      
 
 // downloads a package and it's dependencies
 
 ## npm start                        
 
 // used to execute the defined file in it without typing its execution command
 
 Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
 
 
 
 
