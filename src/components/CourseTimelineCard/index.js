import {AiFillClockCircle} from 'react-icons/all'

const CoureTimeLineCard = props => {
  const {projectDetails} = props
  const {courseTitle, description, tagsList, duration} = projectDetails

  return (
    <div>
      <h1>{courseTitle}</h1>
      <AiFillClockCircle />
      <p>{duration}</p>

      <p>{description}</p>
      {tagsList.map(each => (
        <p type="button">{each.name}</p>
      ))}
    </div>
  )
}
export default CoureTimeLineCard
