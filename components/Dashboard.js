"use client"

import { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_QUOTE } from "@/lib/queries"
import styles from '@/styles/dashboard.module.css'

const Dashboard = ({ data }) => {
  const [getRandomQuote] = useLazyQuery(GET_QUOTE, {
    fetchPolicy: 'no-cache',
    onCompleted: ({ getQuote }) => {
      const { quote, author } = getQuote
      setRes({ quote, author })
    }
  })

  const [res, setRes] = useState()

  return (
    <>
      <main className={styles.main}>
        { /* https://flowbite.com/docs/components/card/ */
          res && <figure className="flex flex-col items-center justify-center p-8 text-center bg-fuchsia border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Random Quote</h3>
                <p className="my-4">{ res.quote }</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div>{ res.author }</div>
                </div>
            </figcaption>    
        </figure>
      }
      </main>
      <div>
        {/* https://flowbite.com/docs/components/buttons/ */}
        <button type="button" onMouseDown={getRandomQuote} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          💬
        </button>
      </div>
      {data.data.sayHello}
    </>
  )
}

export default Dashboard