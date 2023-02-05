import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import moment from 'moment';
import 'moment/locale/ko';

export default function NewPost() {

    let navigate = useNavigate()

    const [pageHeight, setPageHeight] = useState(800);

    const [newPost, setNewPost] = useState({
        title: "",
        description: "",
        author: "",
        date: "",
        image: "",
    });

    const [image, setImage] = useState("");

    const {title, description, author, date} = newPost;

    useEffect(() => {
        setNewPost({...newPost, author: 'Popcorn'});
    }, []);

    // change title with input
    const onTitleChange = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
    }

    // change description with input
    const onDescChange = (e) => {
        setNewPost({...newPost, description: e.currentTarget.textContent})
    }

    const onImageChange = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('image', e.target.files[0]);
        console.log(formData.get('file'));
        const response = await axios.post('/posts/new/image', formData);

    }

    // change current time when click submit button
    const onButtonClick = () => {
        const nowTime = moment().format('YYYY-MM-DD:hh:mm:ss');
        setNewPost({...newPost, date: nowTime});
    }

    // handle post method with axios
    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:8080/posts/new", newPost);
        navigate("/Post");
    }

    const page = {
        color: "snow",
        display: "flex",
        flexDirection: "column",
    }

    const pageContent = {
        backgroundColor: "snow",
        height: pageHeight,
        color: "black",
        flexShrink: "0",

        // make the page container flex
        display: "flex",
        flexDirection: "column",
    }

    const newTitle = {
        width: "100%",
        borderColor: "lightgrey",
        height: "50",
        fontSize: "20px",
        borderStyle: "groove",
        backgroundColor: "snow",

    }

    const newDescription = {
        width: "100%",
        borderColor: "grey",
        border: "1px solid",
        backgroundColor: "snow",
        marginBottom: "30px",

    }

    return (
        <div style={page}>
            <h1 style={{marginBottom: "5vh", marginLeft: "7%"}}>New Post</h1>
            <div style={pageContent}>
                <form style={{marginLeft: "7%", marginRight: "7%", marginTop: "4%"}} onSubmit={(e) => onSubmit(e)}>
                    <input style={newTitle} type={"text"} name={"title"} value={title} placeholder={"enter title.."}
                           onChange={(e) => onTitleChange(e)}/>
                    <hr/>
                    <div style={{textAlignLast: "end"}}>
                        <label for={"input-image"}>
                            <img className={"me-4"} src="" alt="insert image"/>
                            <input name={"image"} onChange={(e) => {
                                onImageChange(e)
                            }} type={"file"} id={"input-image"} accept={"image/*"} style={{display: "none"}}/>
                        </label>
                        <img className={"me-4"} src="" alt="bold"/>
                        <img className={"me-4"} src="" alt="tilt"/>
                        <img className={"me-4"} src="" alt="underline"/>
                        <img src="" alt="</>"/>
                    </div>
                    <img src={image} alt=""/>
                    <div contentEditable={"true"} style={newDescription} name="description" value={description}
                         placeholder="enter desc.." onInput={(e) => onDescChange(e)}></div>
                    <div style={{width: "100%", textAlignLast: "end"}}>
                        <Button className={"me-2"} variant={"outline-secondary"} type="submit" onClick={onButtonClick}>Submit</Button>
                        <Button variant={"outline-secondary"} type="submit">
                            <Link style={{color: "grey", textDecoration: "none"}} to={"/Post"}>Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
};

