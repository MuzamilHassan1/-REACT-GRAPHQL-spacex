import React, {useState} from 'react'
import CardList from './CardList';

const Pagination = ({ data, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  console.log(pages);
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
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
          />
        ))}
      </div>


      <div className="pagination">
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
