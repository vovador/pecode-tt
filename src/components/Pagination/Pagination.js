import React, { useState } from 'react';
import Pagination from 'bulma-pagination-react';

export const Pager = ({ page, postsPerPage, totalPosts, handlePegination }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++ ) {
    pageNumbers.push(i);
  }

  return (
<Pagination
      pages={Math.ceil(totalPosts / postsPerPage)}
      currentPage={page}
      onChange={page => {handlePegination(page)} }
    />
  )
}