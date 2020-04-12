import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHeroes } from '../../models/heroes/actions';
import "./index.scss";

const HomePage = ({ list }) => {

  useEffect(() => {
    fetchHeroes();
  }, [])

  return (
    <div class="home-page">
      { JSON.stringify(list) }
    </div>
  );
}

const mapStateToProps = ({ heroes: { isFetching, list } }) => ({ isFetching, list });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchHeroes }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);