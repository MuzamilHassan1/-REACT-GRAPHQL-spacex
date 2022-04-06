import React, {useEffect, useState} from 'react'
import CardList from './CardList';

const Pagination = ({ data, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };


  return (
    <div>
      <div>
        {getPaginatedData().map(l => (
          <CardList
            key={l.id}
            title={l.mission_name}
            detail={l.details}
            id={l.id}
            date={l.launch_date_local}
          />
        ))}
      </div>

      <div className="pagination mb-4">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination
