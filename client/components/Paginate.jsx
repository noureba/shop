import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Products from './Products';
import Blogs from './Blogs'
import {Box} from '@mui/material'


function PaginatedItems(props) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(props.items.length / props.itemsPerPage));
  }, [itemOffset, props.itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
   
    setItemOffset(newOffset);
  };

  return (
    <Box>
      <Box>
        {props.component == "products"?
          <Products 
            products ={props.items}
            start={itemOffset}
            end={itemOffset + props.itemsPerPage}
          /> :
          <Blogs
            blogs={props.items}
            start={itemOffset}
            end={itemOffset + props.itemsPerPage}
          />
        }
     
      </Box>
    
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="paginate"
        pageClassName="itemPaginate"
        previousClassName="previousPaginate"
        nextClassName="nextPaginate"
        activeClassName="activePaginate"
      />
    </Box>
  );
}

export default PaginatedItems