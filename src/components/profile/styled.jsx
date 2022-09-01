import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 56px;
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    margim-bottom: 20px;
    div {
        margin: 8px;
        padding-top: 20px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }
    a {
        margin-left: 12px;
        color: blue;
        font-weight: bold; 
        font-size: 18px
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    heigth: auto;
    margin-left: 12px;
    height: 200px;
    h1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 0 8px;
`;