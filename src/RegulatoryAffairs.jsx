import React from 'react';
import ExpandableList from './components/ExpandableList';
import './css/App.css';
import './css/Table.css';
import Reserved from './components/Reserved';
import LogoButton from './components/LogoButton';

export default function QualityCompliance() {

    return (
        <main className="learn-page">
            <Reserved />
            <LogoButton />
            <div className="table">
                <h1>LOREM IPSUM DOLOR</h1>
                <ExpandableList items={RegulatoryTable}/>
            </div>
        </main>
    );
}


const RegulatoryTable = [
    { 
        title: 'Under construction', 
        content: [
            '',
        ]
    },
]
