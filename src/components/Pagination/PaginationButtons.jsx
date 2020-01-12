import React from 'react';
import PropTypes from 'prop-types';

const PaginationButtons = ({
  chooseCurrentPage,
  currentPage,
  pages,
  arrOfPages,
}) => {
  const buttonDisabledStart = currentPage === 1 ? 'button--pagination_disabled' : '';
  const buttonDisabledEnd = currentPage === pages ? 'button--pagination_disabled' : '';

  return (
    <nav>
      <ul className="pagination__buttons">
        <li>
          <button
            type="button"
            className={`button button--pagination ${buttonDisabledStart}`}
            onClick={() => chooseCurrentPage(currentPage - 1)}
          >
            &#60;
          </button>
        </li>

        {
          arrOfPages.map((button, index) => (
            <li key={index}>
              <button
                type="button"
                className={`button button--pagination 
                  ${button === currentPage ? 'button--pagination_active' : ''}`}
                onClick={() => chooseCurrentPage(button)}
              >
                {button}
              </button>
            </li>
          ))
        }

        <li>
          <button
            type="button"
            className={`button button--pagination ${buttonDisabledEnd}`}
            onClick={() => chooseCurrentPage(currentPage + 1)}
          >
            &#62;
          </button>
        </li>
      </ul>
    </nav>
  );
};

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  choosePage: PropTypes.func.isRequired,
  arrOfPages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default PaginationButtons;
