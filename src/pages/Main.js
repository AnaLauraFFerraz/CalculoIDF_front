import styled from "styled-components"
import Input from "../components/Input"

export default function Main() {

    return (
        <Container>
            <Input />
            {/* <Report /> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vw;
    padding: 120px 50px 50px 50px;
    box-sizing: border-box;
`