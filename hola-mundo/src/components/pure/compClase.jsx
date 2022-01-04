import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompClase extends Component {
    render(props) {
        return (
            <div>
                <h2>ejemplo componente de clase</h2>
                <p>Hola, { this.props.nombre }</p>
                <p>Tu edad es { this.props.edad }</p>
            </div>
        );
    }
}

CompClase.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
};

export default CompClase;