import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #ffe5d9;
        color: #e63946;
        font-size: 20px;
    }

    ul {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    button {
        background-color: #ffd7ba;
        border-radius: 10px;
        padding: 5px;
        border: 1px solid #fec89a;
        color: #457b9d;
    }
`