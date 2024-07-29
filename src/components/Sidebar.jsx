import React from 'react'

function Sidebar(props) {
  const {handleToggleModal, data} = props
  return (
    <div className='sidebar'>
      <div className="bgOverlay" onClick={handleToggleModal} ></div>
      <div className="sidebarContents">
      <div>
          <h2>{data?.title}</h2>
          <p>{data?.date}</p>
          <p>{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModal} >
        {"-->"}
      </button>
      </div>
    </div>
  )
}

export default Sidebar