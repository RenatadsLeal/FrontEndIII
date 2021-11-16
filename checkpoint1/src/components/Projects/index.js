import croissant from './croissant.png';
import cardStock from './cardStock.png';
import ohMyTasks from './ohMyTasks.png';

import './style.scss';
import { Component } from 'react';

export default class Projects extends Component {

    projectsList = [
        {
            id: 0,
            name: "Is it about croissant?",
            image: croissant,
            description: "A React project. Here you can think about croissants, just like this dog. crois·sant - /k(r)wäˈsänt,k(r)wäˈsäN/ - noun - a French crescent-shaped roll made of sweet flaky pastry, often eaten for breakfast.",
            url: "https://carooooooll.vercel.app/",
            linkMessage: "Order a croissant here",
            codeLink: "https://github.com/RenatadsLeal/FrontEndIII/tree/main/aula5mesa"
        },
        {
            id: 1,
            name: "An inspiration board",
            image: cardStock,
            description: "Feeling inspired? Add it to the board! Saved eveything you saw thinking you would really check everything later? Save the good ones on your favorites! Too bright on your eyes? Switch to dark mode!",
            url: "https://renatadsleal.github.io/Front2Checkpoint/",
            linkMessage: "Pinterest who?",
            codeLink: "https://github.com/RenatadsLeal/Front2Checkpoint"
        },
        {
            id: 2,
            name: "A to do list",
            image: ohMyTasks,
            description: "A group project. Missing deadlines? Can't seem to remember everything you need to do? Forgot to feed the dog? Save your tasks and never forget them*! Unless you want to. *You still need to remember to open the website.",
            url: "https://helenaperdigueiro.github.io/CheckpointIIFrontEndII/",
            linkMessage: "☐ Click here",
            codeLink: "https://github.com/helenaperdigueiro/CheckpointIIFrontEndII"
        }
    ];

    render() {
        return (
            <div id="projects">
                {this.projectsList.map(({ id, name, image, description, url, linkMessage, codeLink }) => {
                    return (
                        <div key={id} className="insideCol">
                            <h5>{name}</h5>
                            <a href={url}><img className="projectImage" src={image} alt={name} /></a>
                            <p>{description}</p>
                            <a href={url}>{linkMessage}</a>
                            <a href={codeLink}><img width="24" height="24" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" /></a>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}