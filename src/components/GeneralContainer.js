import { connect } from 'react-redux';
import { MainComponent } from './MainComponent';

const mapStateToProps = state => {
  return {
    currentLanguage: state.langReducer
  };
};

const mapDispatchToProps = dispatch => ({
    handleChangeLanguage: ({currentTarget}) => {
      if (currentTarget.value === 'es') {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: 'es'});
      } else {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: 'en'});
      }
    }
});

export const GeneralContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
