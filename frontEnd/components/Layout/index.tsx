import Head from 'next/head'
import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout = ({
  children, meta
}: {
  children: React.ReactNode, meta: any
}) => {
  const { title, description } = meta
  return (
    <>
      <Head><title>{title}</title></Head>
      <meta
        name="description"
        content={description}
      />
      <div className='com-details-sec'>
        <Sidebar />
        <div className='details-box-sec'>
          <Header />
          <section className='main-form-box'>{children}</section>
        </div>
      </div>
    </>
  )
}

export default Layout

