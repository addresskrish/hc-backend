require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "addresskrish",
  id: 192686824,
  node_id: "U_kgDOC3wq6A",
  avatar_url: "https://avatars.githubusercontent.com/u/192686824?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/addresskrish",
  html_url: "https://github.com/addresskrish",
  followers_url: "https://api.github.com/users/addresskrish/followers",
  following_url:
    "https://api.github.com/users/addresskrish/following{/other_user}",
  gists_url: "https://api.github.com/users/addresskrish/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/addresskrish/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/addresskrish/subscriptions",
  organizations_url: "https://api.github.com/users/addresskrish/orgs",
  repos_url: "https://api.github.com/users/addresskrish/repos",
  events_url: "https://api.github.com/users/addresskrish/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/addresskrish/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Krish",
  company: "@scrimba",
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Illuminati",
  twitter_username: "addresskrish",
  public_repos: 20,
  public_gists: 0,
  followers: 7,
  following: 8,
  created_at: "2024-12-24T07:55:16Z",
  updated_at: "2025-09-04T20:44:50Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/me", (req, res) => {
  res.send("<h1>Yo!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Just Daily Spidey</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
