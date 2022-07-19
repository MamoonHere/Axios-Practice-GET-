import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";

const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlAlbums = "https://jsonplaceholder.typicode.com/albums";
const urlPhotos = "https://jsonplaceholder.typicode.com/photos";

const Navbar = () => {
    const [display, setDisplay] = useState([]);
    const [content, setContent] = useState(0);
    const isMounted = useRef(false);
    useEffect(()=>{
        if (isMounted.current === false)
        {
            isMounted.current = true;
        }
        else 
        {
            console.log(display[0]);
        }
    }, [display])

    const Render =() => {
        if (content === 1) {
            return display.map((item) => 
            <div style={{borderStyle: 'solid', textAlign: "center"}} key = {item.id}>
                <h5>User ID:</h5>
                <h6>{item.userId}</h6>
                <h5>Title:</h5>
                <h6>{item.title}</h6>
                <h5>Body:</h5>
                <h6>{item.body}</h6>
            </div>)
        }
        else if (content === 2) {
            return display.map((item) => 
            <div style={{borderStyle: 'solid', textAlign: "center"}} key = {item.id}>
                <h5>User ID:</h5>
                <h6>{item.userId}</h6>
                <h5>Title:</h5>
                <h6>{item.title}</h6>
            </div>)
        }
        else if (content === 3) {
            return display.map((item) => 
            <div style={{borderStyle: 'solid', textAlign: "center"}} key = {item.id}>
                <h5>Album ID</h5>
                <h6>{item.albumId}</h6>
                <h5>URL:</h5>
                <img src={item.url} alt="Colors" width="200" height="200" style={{marginBottom: "5px"}}></img>
            </div>)
        }
    }

    const handlePosts = () => {
        axios.get(urlPosts)             // This is a Promise. When this promise is fullfilled, the .then portion will execute
        .then((response) => {           // On Success
            setDisplay(response.data);
            setContent(1);
        })
    }

    const handleAlbums = () => {
        axios.get(urlAlbums)             
        .then((response) => {           
            setDisplay(response.data);
            setContent(2);
        })
    }

    const handleUsers = () => {
        axios.get(urlPhotos)             
        .then((response) => {           
            setDisplay(response.data);
            setContent(3);
        })
    }

    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
            <li className="nav-item">
            <button type="button" className="btn btn-success" onClick={() => handlePosts()}>Show Posts</button>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-success" onClick={() => handleAlbums()} style={{marginLeft: "5%"}}>Show Albums</button>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-success" onClick={() => handleUsers()} style={{marginLeft: "10%"}}>Show Photos</button>
            </li>
        </ul>
        </nav>
        <div>
            <div>{Render()}</div>
        </div>
        </>
    );
}

export default Navbar