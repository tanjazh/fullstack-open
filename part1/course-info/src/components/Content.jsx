import PropTypes from 'prop-types';
import { Part } from './Part';

export const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
};
Content.propTypes = {
    parts: PropTypes.array.isRequired
};