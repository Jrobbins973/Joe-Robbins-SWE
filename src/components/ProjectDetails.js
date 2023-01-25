import React from 'react'

function ProjectDetails(props) {

    const newTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };



    const {project} = props
    return (
        <div>
            
            <div className='grid-items'>
                
                <img src ={project.image}/>
                <h2>{project.title}</h2>

            <div className='project-description'>
                <h4>{project.description}</h4>
            </div>

                <p><strong>Technology:</strong> {project.technology}</p>
                {project.video.length > 1 ? <button onClick={() => newTab(project.video)}>Video</button> : <button>Video Coming Soon!</button>}
                {/* <button onClick={() => newTab(project.video)}>Video</button> */}
                <button onClick={() => newTab(project.source)}>GitHub</button>
            </div>
            
        </div>
    )
}

export default ProjectDetails