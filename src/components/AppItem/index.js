// Write your code here

import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appId, appName, imageUrl} = appItem

  return (
    <div>
      <li className="list-container">
        <img src={imageUrl} alt={appName} className="image" />
        <h1 className="title">{appName}</h1>
      </li>
    </div>
  )
}

export default AppItem
