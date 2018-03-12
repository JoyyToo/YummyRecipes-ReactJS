import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Icon } from 'semantic-ui-react';

class PaginationApp extends React.Component {
  // change page function
  changePage = (e, { activePage }) => {
    if (!!this.props.category_id) {
      this.props.changePage(this.props.category_id, { activePage }['activePage']);
    } else {
      this.props.changePage({ activePage }['activePage']);
    }
  }
  // render the pagination ui
  render() {
    const { paginationObject } = this.props;
    return (
      <div>
        <Pagination
          onPageChange={this.changePage}
          activePage={paginationObject['current page']}
          ellipsisItem={{ content: <Icon name="ellipsis horizontal" />, icon: true }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          pointing
          secondary
          totalPages={paginationObject['total pages']}
        />
      </div>
    );
  }
}

PaginationApp.propTypes = {
  paginationObject: PropTypes.object.isRequired,
};

export default PaginationApp;
