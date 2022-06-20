import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <p>V 1.0.0</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
