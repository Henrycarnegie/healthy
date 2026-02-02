import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen scroll-smooth bg-stone-100">{children}</div>
  )
}

export default AuthLayout