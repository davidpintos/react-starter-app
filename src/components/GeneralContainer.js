import { connect } from 'react-redux';
import { MainComponent } from './MainComponent';

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => ({
    handleClick: () => {
      console.log("Hola");
    }
});

export const GeneralContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
