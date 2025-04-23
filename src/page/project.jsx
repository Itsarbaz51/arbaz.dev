import React from 'react'
import Ept from '../components/Ept'
import { projectData } from '../dummyData/data'

function Project() {
  return (
    <div className='pt-12'>
      <Ept
        projectData={projectData}
      />
    </div>
  )
}

export default Project