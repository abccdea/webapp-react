import React from 'react';
import HomeHeader from './HomeHeader';
import './index.less';
import actions from '../../store/actions/home';
import { connect } from 'react-redux';

class Home extends React.Component {
    changeType = (value) => {
        this.props.setCurrentLesson(value);
    }
    render() {
        return (
            <div>
                <HomeHeader changeType={this.changeType}/>
            </div>
        )
    }
}
export default connect((state)=>({...state.home}), actions)(Home)