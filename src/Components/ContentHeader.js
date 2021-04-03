import React from 'react';
import PropTypes from 'prop-types';


function ContentHeader(props) {
    return (
        <div className="resume-content-header-wrapper">
            <span className="resume-content-header-index text-accent"> {props.contentIndex}  </span>
            <span className="resume-content-header-title">{props.title} </span>
        </div>

    );
}

ContentHeader.propTypes = {
    contentIndex: PropTypes.string,
    title: PropTypes.string,
};

export default ContentHeader;