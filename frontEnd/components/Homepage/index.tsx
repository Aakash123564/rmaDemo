import React from 'react'
import Layout from '../Layout'
import Dashboard from '../Dashboard'

const Homepage = () => {
  return (
    <Layout meta={{title:"Home | NextJs CIS", description:"Demo NextJS Layout"}}>{<Dashboard/>}</Layout>
    
  )
}

export default Homepage