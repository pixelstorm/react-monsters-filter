import React, { Component } from "react";

export const SearchBox = ({placeholder, handleChange}) => {

  return(

        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />

  )


}
