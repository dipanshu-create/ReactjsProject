import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers,setFilteredUsers]=useState([])

  function handleChange(event){
    const query=event.target.value.toLowerCase()
    setSearchParam(query);
    if (query.length){
    const filteredData=users && users.length ? users.filter((item)=>item.toLowerCase().indexOf(query)>-1):[];
    setFilteredUsers(filteredData)
    setShowDropDown(true)
}else{
        setShowDropDown(false)
    }
    

  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((useritems) => useritems.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users,filteredUsers);

  return (
    <div className="search-autocomplete-container">
      <input
        vlaue={searchParam}
        name="search-users"
        placeholder="Searh Users here..."
        onChange={handleChange}
      />
      {showDropDown && <Suggestions data={filteredUsers}/>}
    </div>
  );
}
