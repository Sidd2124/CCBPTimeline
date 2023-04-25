import {AiFillCalendar} from 'react-icons/all'

import './index.css'

const ProjectTimelineCard = props => {
  const {ProjectItems} = props
  const {
    projectTitle,
    imageUrl,
    projectUrl,
    description,
    duration,
  } = ProjectItems
  return (
    <div>
      <img className="img" src={imageUrl} alt="project" />
      <h1>{projectTitle}</h1>
      <p>{duration}</p>
      <AiFillCalendar />
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
