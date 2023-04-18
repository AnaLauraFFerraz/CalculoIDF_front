import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Input from "../components/Input"

export default function Main() {

    // const [movie, setMovie] = useState([]);

    // useEffect(() => {
    //     const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
    //     promise.then((res) => setMovie(res.data))
    //     promise.catch((err) => window.location.reload);
    // }, []);

    return (
        <>
            <Input />
            <Container>
            
            </Container>
        </>
    )
}


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px 25px 30px;
`
