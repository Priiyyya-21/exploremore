import React, { useState } from "react"
import "./Tourism.css"
import Places from "./placeApi.js"
import Place from "./Place"
import Navbar from "./Navbar"

const uniqueList = [
  ...new Set(Places.map((curElem) => {
    return curElem.category
  })
  
  ),
  "All",
]
const Tourism = () => {
  // const myStyle = { color: "red" }; // creating object and using wherever needed
  const [menuData, setMenuData] = useState(Places);

//   const [menuList, setMenuList] = useState(uniqueList)
  const [menuList] = useState(uniqueList)
  
  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Places)
      return 
    }

    const updatedList = Places.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList)
  }
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/> 
      <Place menuData={menuData} />
    </>
  )
}

export default Tourism
