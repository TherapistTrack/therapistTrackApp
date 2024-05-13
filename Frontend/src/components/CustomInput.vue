<template>
    <div class="customInput">
      <input :placeholder="pholder"><img src="../assets/search-line.svg">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pholder: String
    }
  }
  </script>
  
  <style>
  .customInput {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: #E9E9E9;
    border: 0;
    border-radius: 2vh;
    padding: 1vh;
    color: #6E6E6E;
  }
  
  .customInput input {
    border: none;
    background: none;
  }
  
  .customInput img {
    height: 3vh;
  }
  </style>