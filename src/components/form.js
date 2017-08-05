import React, {Component} from 'react';
import FormGroupComp from './formGroup';
import reducerFolder from '../folders/folders';
import {Container} from 'reactstrap';

class FormComp extends Component {
    state = {
        vocab: []
    };

    componentDidMount() {
        fetch('/drive')
            .then(res => {
                console.log(res);
                if (res.ok) {
                    console.log('done');
                    return res.json();
                }
            })
            .then(data => this.setState({vocab: data}));
    }

    render = () => {
        const {vocab} = this.state;
        return <div>

            <Container>
                {vocab && vocab.map((i) =>

                    <FormGroupComp
                        key={i.id}
                        objectContent={i}
                    />
                )
                }
            </Container>
        </div>
    }
}

export default FormComp;
