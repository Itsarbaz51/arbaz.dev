import React from 'react'
import Ept from '../components/Ept'

function Project() {
  return (
    <div className='pt-12'>
      <Ept
        projectData={[
          // {
          //   id: 1,
          //   title: "Kingfish logistic",
          //   img: "https://portfolio-01-kappa.vercel.app/_next/image?url=%2Fkingfish.png&w=1200&q=75",
          //   tagLine: "using tools React, Tailwind CSS with Responsive.",
          //   link: "https://www.kingfishlogistics.in",
          // },
          {
            id: 2,
            title: "Blog Website",
            img: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
            tagLine:
              "Built with MERN Stack, Redux Toolkit, and Tailwind CSS. Fully responsive design with authentication and content management.",
            link: "#",
          },
          {
            id: 3,
            title: "Todo List API with Authentication",
            img: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
            tagLine:
              "Developed a secure RESTful API using Express.js, MongoDB, and NodeMailer for authentication and email notifications.",
            link: "#",
          },
        ]}
      />
    </div>
  )
}

export default Project