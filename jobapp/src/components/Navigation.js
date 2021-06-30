import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'




function Navigation() {


  return (
    <>
    <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Strona główna</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/form">Formularz</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/alljobs">Wszystkie aplikacje</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/rejectedjobs">Aplikacje odrzucone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/notes">Notatki</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navigation
