import React from 'react';
import './index.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-title">
                    <h3>
                        Aprenda o Básico de Violão
                    </h3>
                </div>
                <div className="header-right">
                    <a className="header-button" href="#chords-section">
                        Acordes
                    </a>
                </div>
            </div>
        </div>
    );
}
