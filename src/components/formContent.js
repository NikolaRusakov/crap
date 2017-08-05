import React,{Component} from 'react';
import PropTypes from 'prop-types';
class FormContent extends Component{
    static propTypes={
        content:PropTypes.object.isRequired,
    };
    render=()=>{
        const {content}=this.props;
        return <div classID={content.index} className={`folder`}>
            {content.name}
        </div>
    }
}
export default FormContent;