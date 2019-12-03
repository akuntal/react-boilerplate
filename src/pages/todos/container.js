import React, { useEffect } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { actionFetchTodos } from '../../actions/actionFetchTodos';
import { Todos } from './component';
import { selectTodos } from '../../selectors/selectTodos';

const mapDistpatchToProps = dispatch =>
  // eslint-disable-next-line implicit-arrow-linebreak
  bindActionCreators(
    {
      fetchTodos: actionFetchTodos
    },
    dispatch
  );

const mapStateToProps = state => ({
  todos: selectTodos(state)
});

const TodosContainer = ({ fetchTodos, ...restProps }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return <Todos {...restProps} />;
};

TodosContainer.propTypes = {
  fetchTodos: PropTypes.func.isRequired
};

export default compose(connect(mapStateToProps, mapDistpatchToProps))(
  TodosContainer
);
