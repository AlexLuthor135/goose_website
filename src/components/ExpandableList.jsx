import React, { useState } from 'react';
import '../css/ExpandableList.css';

const ExpandableList = ({ items }) => {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    return (
        <div className="expandable-list">
            {items.map((item, index) => (
                <div key={index} className="list-item">
                    <div className="list-title" onClick={() => toggleExpand(index)}>
                        <h3>{item.title}</h3>
                        <button className="toggle-button">
                            {expandedItem === index ? '-' : '+'}
                        </button>
                    </div>
                    {expandedItem === index && (
                        <div className="list-content">
                            <ul>
                                {item.content.map((contentItem, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: contentItem }} />
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ExpandableList;
