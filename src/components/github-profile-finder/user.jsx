import React from "react";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;
  
  const createDate = new Date(created_at);
  console.log(avatar_url)

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
        User Joined on{" "}
        {`${createDate.getDate()} ${createDate.toLocaleDateString("en-us", {
          month: "short",
        })}${createDate.getFullYear()}`}
      </p>
      </div>
      
    </div>
  );
}