import React from 'react';


const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">First Project : {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe aut culpa perspiciatis illum cupiditate expedita quibusdam facilis, omnis maiores sequi, quaerat animi in consequuntur vel mollitia eius, voluptatem facere.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by first user</div>
                    <div>16th December 7:20 pm</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
