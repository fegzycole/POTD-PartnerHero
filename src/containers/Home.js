import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Arrow from '../components/Arrow';
import Spinner from '../components/Spinner';
import Info from '../components/Info';

const Home = ({ spinner }) => (
  <div>
    <Arrow
      innerClassName="fas fa-chevron-left"
      outerClassName="left"
    />
    <Arrow
      innerClassName="fas fa-chevron-right"
      outerClassName="right"
    />
    <div>
      { spinner ? <Spinner /> : <Info />}
    </div>
  </div>
);

const mapStateToProps = ({ spinner }) => ({
  spinner,
});

Home.propTypes = {
  spinner: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
