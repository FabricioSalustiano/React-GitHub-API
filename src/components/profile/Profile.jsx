import React from "react";
import useGitHub from "../../hooks/GitHubHooks.jsx"
import * as Styled from "./styled";

function Profile() {
    const { githubState } = useGitHub();

    return (
        <Styled.Wrapper>
          <Styled.WrapperImage src={githubState.user.avatar_url} alt="Avatar do usuario"></Styled.WrapperImage>
          <Styled.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <Styled.WrapperUserGeneric>
                        <h3>UserName: </h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
                            {githubState.user.login}
                        </a>
                    </Styled.WrapperUserGeneric>
                    <Styled.WrapperUserGeneric>
                        <h3>Company: </h3>
                        <span>{githubState.user.company}</span>
                    </Styled.WrapperUserGeneric>
                    <Styled.WrapperUserGeneric>
                        <h3>Location: </h3>
                        <span>{githubState.user.location}</span>
                    </Styled.WrapperUserGeneric>
                    <Styled.WrapperUserGeneric>
                        <h3>Blog: </h3>
                        <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>
                    </Styled.WrapperUserGeneric>
                </div>
                <Styled.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </Styled.WrapperStatusCount>
          </Styled.WrapperInfoUser>
        </Styled.Wrapper>
    )
}

export default Profile;