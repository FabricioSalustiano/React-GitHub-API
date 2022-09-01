import React from "react";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Repositories from "./components/repositories/Repositories";
import useGithub from "./hooks/GitHubHooks.jsx";
import NoSearch from "./components/noSearch/NoSearch";

function App() {
  const { githubState } = useGithub();
  return (
    <>
      <Layout>
        {githubState.hasUser ? 
        <>
          {githubState.loading ? (<p>Loading...</p>) :
          (<>
              <Profile />
              <Repositories />
          </>)}
        </> : <NoSearch />}
      </Layout>
    </>
  );
}

export default App;
