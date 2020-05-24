import React from 'react';
import PropTypes from 'prop-types';

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2 className='text-success'>Review Using Props with Stateless Functional Components</h2>
                <Camper />
                <Camper name='igor' />
            </div>
        );
    }
}
// change code below this line

const Camper = (props) => {
    return <p>{props.name}</p>;
};

Camper.propTypes = {
    name: PropTypes.string.isRequired,
};
Camper.defaultProps = {
    name: 'CamperBot ',
};

export default CampSite;
