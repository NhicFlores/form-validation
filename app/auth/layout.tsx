import React from 'react'

//default: children are place left to right - so justify-center brings 
//the children components to the horizontal center of the screen 
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className='w-full'>
      <div className='h-screen flex items-center justify-center'>
        {children}
      </div>
    </section>
  )
}

export default AuthLayout
