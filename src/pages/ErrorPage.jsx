import React from 'react'
import notFound from '../assets/notFound.png'

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center alert alert-warning error-div">
      <div className='p-3 m-auto' style={{height: "83vh"}}>
        <h1 className='text-danger text-center'>This Page is not required in the Task</h1>
        <p className='err-msg'>404</p>
      </div>
    </div>
  )
}

export default ErrorPage