import React from 'react'
import "./pagination.css"

const Pagination = ( {logsPerPage, paginate, totalLogsNum, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLogsNum / logsPerPage); i++) {
        pageNumbers.push(i)
    }


  return (
    <div className='pagination__container'>
        {pageNumbers.map((number) => (
        <button
                key={number}
                className='pagination__container-button'
        //   className={
        //     currentPage === number
        //       ? `${styles.testimonials_pagination_buttons_button_active}`
        //       : `${styles.testimonials_pagination_buttons_button}`
        //   }
          onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination