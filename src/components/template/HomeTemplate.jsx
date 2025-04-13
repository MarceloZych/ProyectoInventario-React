import styled from "styled-components";

export function HomeTemplate() {
    return (
        <Container>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${( {theme} ) => theme.text};
`;