import React from 'react'
import PropTypes from 'prop-types'
import { Pagination , Icon } from 'semantic-ui-react'

class PaginationShorthand extends React.Component {

  changePage = (e, { activePage }) => { 
    if (!!this.props.category_id){
      this.props.changePage(this.props.category_id, { activePage }['activePage']) 
    } else {
      this.props.changePage({ activePage }['activePage']) 
    }
  }
  render() {
    const { paginationObject } = this.props;
    return (
      <div>
      <Pagination
      onPageChange={ this.changePage }
      activePage={paginationObject['current page']}
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={{ content: <Icon name='angle double left' />, icon: true }}
      lastItem={{ content: <Icon name='angle double right' />, icon: true }}
      pointing
      secondary
      totalPages={paginationObject['total pages']}
      />
    </div>
    )
  }
}

PaginationShorthand.propTypes = {
  paginationObject: PropTypes.object.isRequired, 
}

export default PaginationShorthand
