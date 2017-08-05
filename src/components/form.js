import React, {Component} from 'react';
import FormGroupComp from './formGroup';
import reducerFolder from '../reducers/reducer';
import {Container} from 'reactstrap';

class FormComp extends Component {
    state = {
        vocab: []
    };

    componentDidMount() {
        fetch('/slovicka')
            .then(res => {
                console.log(res);
                if (res.ok) {
                    console.log('done');
                    return res.json();
                }
            })
            .then(data => this.setState({vocab: data.vocab}));
    }

    render = () => {
        const {vocab} = this.state;
        return <div>

            <Container>
                {vocab.map((i) =>

                    <FormGroupComp
                        objectContent={i}
                    />
                )
                }
            </Container>
        </div>
    }
}

export default FormComp;
