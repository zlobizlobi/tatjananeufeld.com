import React from 'react'

import { useStaticQuery, graphql } from "gatsby"


export const ConcertSlice = () => {

  const prismicData = useStaticQuery(graphql`
  query MyQuery {
    prismicMainPage {
      data {
        body {
          primary {
            concert_name
            date_and_time_of_concert
            location_name
          }
        }
      }
    }
  }
  
    `)


  // const { prismicMainPage: {
  //   data: {
  //     body: body = []
  //   }
  // } } = prismicData

  console.log(prismicData)

  return <div></div>
}