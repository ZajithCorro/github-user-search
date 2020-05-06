import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.code`
  margin-bottom: 15px;
  font-family: monospace;
  font-size: 2em;
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: monospace;
  width: 40%;
  padding: 0.6em 0.7em;
  background-color: #282c34;
  color: #fff;
  border-radius: 8px;
  border: 1px solid transparent;
  outline: none;
  font-size: 1.3em;
  max-width: 350px;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 3px solid rgba(40, 44, 52, 0.3);
  width: 50%;
  padding: 0.35em 0.5em;
  margin-bottom: 15px;
  outline: none;
  max-width: 450px;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Error = styled.div`
  color: red;
  margin: 10px auto;
  font-size: 0.8em;
  text-align: center;
  opacity: 0.5;
`;
