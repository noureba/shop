import React from "react";

function Search() {
  const show = "none"
  return (
    <div
      style={{
        display: show ,
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "rgb(0, 0, 0, 0.9)",
        top: "0",
        padding: "0",
        zIndex: "999",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search for ...."
        style={{
          Width: "400px",
          height: "50px",
          padding: "10px",
        }}
      />
      <button
        style={{
          Width: "100px",
          height: "50px",
          padding: "10px",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
