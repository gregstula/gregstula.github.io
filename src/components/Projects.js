import GitHub from 'github-api';
import {React, useState, useEffect} from 'react';



function Projects() {
    const [repos, setRepos] = useState(null);
    useEffect(() => {
        const gh = new GitHub();

        var user = gh.getUser('gregstula');

        var repos = user.listStarredRepos();
        repos.then(({data}) => {
            setRepos(data);
        })
    }, [])
    return (
        <>
        { repos ? repos.map(repo => <p>{repo.url}</p>) : "Loading..."}
        </>
    )
}

export default Projects;