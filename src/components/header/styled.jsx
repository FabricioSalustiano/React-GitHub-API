import styled from "styled-components";

export const wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding: 35px;
    border-bottom: 0.5px solid #225ed9;

    input {
        border: 1px solid #00acee;
        border-radius: 15px;
        width: 500px;
        height: 30px;
        padding: 14px;
    }

    button {
        background-color: #225ed9;
        padding: 8px 16px;
        margin: 0 8px;
        border-radius: 15px;

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.3);
        }

        span {
            font-weight: bold;
            font-size: 16px;
            color: white;
        }
    }
`;