import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return <>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4"> Page not found </h2>
      <p className="mt-2">  Sorry, the page you are trying to reach does not exist. </p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Back to Home Page
      </Link>
    </div>

  </>
}
