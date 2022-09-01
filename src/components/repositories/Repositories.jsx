import React, { useEffect, useState } from "react";
import * as S from "./styled.jsx";
import RepositoryItem from "../repositoryItem/RepositoryItem.jsx";
import useGitHub from "../../hooks/GitHubHooks.jsx";

function Repositories() {
    const {githubState, getUserRepos, getUserStarred} = useGitHub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(!!githubState.repositories)
    }, [githubState.user.login])

    return (
        <>
            {hasUserForSearchRepos ? (
                <section>
                    <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                        <S.WrapperTabList>
                            <S.WrapperTab>Repositories</S.WrapperTab>
                            <S.WrapperTab>Starred</S.WrapperTab>
                        </S.WrapperTabList>
                        <S.WrapperTabPanel>
                            <S.WrapperList>
                                {githubState.repositories.map((item) => { return (
                                    <RepositoryItem 
                                    key={item.id}
                                    name={item.name} 
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}/>
                                )})}
                            </S.WrapperList>
                        </S.WrapperTabPanel>
                        <S.WrapperTabPanel>
                            <S.WrapperList>
                                {githubState.starred.map((item) => { return (
                                    <RepositoryItem 
                                    key={item.id}
                                    name={item.name} 
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}/>
                                )})}
                            </S.WrapperList>
                        </S.WrapperTabPanel>
                    </S.WrapperTabs>
                </section>
            ) : (<> </>)}
        </>
    )
}

export default Repositories;