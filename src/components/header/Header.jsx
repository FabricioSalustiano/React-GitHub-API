import React, { useState } from "react";
import * as S from "./styled.jsx";
import useGithub from "../../hooks/GitHubHooks.jsx";

function Header() {
    const { getUser } = useGithub();
    const [userNameForSearch, setUserNameForSearch] = useState();

    const submitGetUser = () => {
        if (!userNameForSearch) return
        return getUser(userNameForSearch);
    }
    return (
        <header>
            <S.wrapper>
                <input type="text" placeholder="Digite o nome de usuario..." 
                    onChange={(e) => setUserNameForSearch(e.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </S.wrapper>
        </header>
    )
}

export default Header;