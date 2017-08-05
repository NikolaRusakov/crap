import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {/*Button, Form, FormGroup, Label, Input, FormText, Container,*/ Row, Col} from 'reactstrap';
import FormContent from "./formContent";

class FormGroupComp extends Component {
    defaultProps = {
        color: 'blue'

    };
    static propTypes = {
        objectContent: PropTypes.object.isRequired,
    };
    render = () => {
        const {objectContent} = this.props;
        return <Row class>
            <Col md={{size: 'auto', offset: 2}}>
                <FormContent

                    content={objectContent}
                />
            </Col>
        </Row>

    }
}

export default FormGroupComp;