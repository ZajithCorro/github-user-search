import styled from 'styled-components';

export const Card = styled.div`
    background-color: #282c34;
    margin: 20px 20px 20px;
    width: 280px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,.25);

    @media screen and (max-width: 680px) {
        width: 80%;
    }
`;

export const Avatar = styled.img`
    width: 120px;
    max-width: 100%;
    border-radius: 50%;
    margin-top: 20px;
`;

export const Name = styled.code`
    font-family: monospace;
    color: #ffff;
    font-size: 1.5em;
    font-weight: 700;
`;

export const Info = styled.div`
    text-align: center;
    margin: 15px 40px 10px;
`;

export const ItemInfo = styled.div`
    color: #ffff;
    margin: 10px 0 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const ItemInfoTitle = styled.label`
    color: #808080;
    font-weight: 500;
    margin-bottom: 5px;
`;
