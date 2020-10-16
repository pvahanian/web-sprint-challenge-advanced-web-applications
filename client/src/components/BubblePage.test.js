import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth";
let colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba"
    },
    id: 6
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99"
    },
    id: 7
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99"
    },
    id: 8
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd"
    },
    id: 9
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca"
    },
    id: 10
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2"
    },
    id: 11
  }
];


test("Fetches data and renders the bubbles", async () => {
  render(<BubblePage />)
  window.localStorage.setItem("token", "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98");
  let colorHolder
  const getData = await axiosWithAuth()
  .get("/colors")
  .then(res => {
    colorHolder=res.data
    expect(colorHolder).toEqual(colors)
  })
  
});



// const getFirstAlbumTitle = require('./index');

// it('returns the title of the first album', async () => {
//   const title = await getFirstAlbumTitle();  // Run the function
//   expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
// });