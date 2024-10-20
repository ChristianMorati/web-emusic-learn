import React from 'react';
import './index.css';
import { Title } from '../../../../styled-components/text/title';

const TopicTitle = ({ sectionNumber, sectionParagraph }) => {
    return (
        <div className="title-container">
            <div>
                <Title className="section-number">{sectionNumber}</Title>
            </div>
            <div className="section-title">
                <Title>{sectionParagraph}</Title>
            </div>
        </div>
    );
};

export default TopicTitle;
