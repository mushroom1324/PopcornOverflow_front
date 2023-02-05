import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

export default function Post ({setBackground}) {

    // const MAX_POST_CNT = 6;

    const [posts, setPosts] = useState([]);
    const [postLength, setPostLength] = useState(0);

    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:8080/posts/list");
        setPosts(result.data);
        setPostLength(result.data.length);
    }

    const page = {
        height: "95vh",
        marginLeft: "7%",
        marginRight: "7%",
        color: "snow",
        display: "flex",
        flexDirection: "column",


    }
    const block = {
        marginBottom: "5vh",

    }

    const pageContent = {
        backgroundColor: "snow",
        backgroundSize: "200vh",
        backgroundRepeat: "no-repeat",
        borderRadius: "10px",
        height: "80vh",
        color: "black",
        flexShrink: "0",

        // make the page container flex
        display: "flex",
        flexDirection: "column",
    }

    const postContent = {
        marginBottom: "30px",
        marginTop: "30px",
        height: "40px",

        // make the post container flex
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "nowrap",
        flexShrink: "0",

    }

    const font = {
        fontSize: "17px",
        color: "black",
        alignSelf: "center",
        width: "250px",
        textAlign: "center",
    }

    const post_top = {
        justifyContent: "end",

    }

    return (
        <div style={page}>
            <h1 style={block}>Posts</h1>
            <div style={pageContent}>
                <div style={{...postContent, ...post_top}}>
                    <Link to="/NewPost" className={"me-4"} style={{alignSelf: "center"}}>
                        <img src="/new_post.png" alt="ERR" style={{width:"30px", height:"30px"}}/>
                    </Link>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button className={"me-2"} variant="outline-secondary">Search</Button>
                    </Form>
                </div>
                {posts.map((item, index) => {
                    return (
                        <>
                        <div style={postContent}>
                                <h4 style={font}>{item.title}</h4>
                                <h4 style={font}>{item.description}</h4>
                            <div style={{alignSelf: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                                <h4 style={font}>{item.date}</h4>
                                <h4 style={font}>{item.author}</h4>
                            </div>
                        </div>
                        {index+1 !== postLength && <hr style={{
                            marginLeft: "10%",
                            marginRight: "10%",
                            marginTop: "0",
                            marginBottom: "0",
                        }}></hr>}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

