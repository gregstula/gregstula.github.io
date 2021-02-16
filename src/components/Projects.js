import GitHub from 'github-api';
import Requestable from 'github-api';

import {React, useState, useEffect} from 'react';
import './gh.css';

function Projects() {
    const [repos, setRepos] = useState(null);
    
    useEffect(() => {
        const gh = new GitHub({token: process.env.REACT_APP_AUTH_TOKEN});
        const name = 'gregstula'
        var user = gh.getUser(name);

        var starred = user.listStarredRepos();
        starred.then(({data}) => {
            var owned = data.filter((repo) => repo.owner.login === name );
            var details = owned.map((repo => {
                var res = {
                        url: repo.url,
                        title: repo.name,
                        description: repo.body,
                    };
                Requestable('GET', repo.languages_url).then(res.lang = (response) => Object.keys(response)[0])
                return res;
                
            }))
            setRepos(details);
        })
    }, [])

    function GitHubCard(props) {        
        return (
                <a href={props.url} className='github-card'>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <span className='github-card__meta'>
                        <span class="github-card__language-icon" >●</span> {props.lang}
                    </span>
                    <span class="github-card__meta">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span data-stars>
                            <i class="fa fa-spinner" aria-hidden="true"></i>
                        </span>
                    </span>
                    <span class="github-card__meta">
                        <i class="fa fa-code-fork" aria-hidden="true"></i>
                        <span data-forks>
                            <i class="fa fa-spinner" aria-hidden="true"></i>
                        </span>
                    </span>
                </a>
        )
    }
    
    return (
        <div className='github-cards'>
            { repos ? repos.map((repo) => <GitHubCard key={repo.title} title={repo.title} url={repo.url} description={repo.description} lang={repo.lang} />) : "Loading..." }
        </div>
    )
}

export default Projects;