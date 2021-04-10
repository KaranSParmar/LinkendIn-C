import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const displayNews = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>

            {displayNews("PAPA React is back", "Top news - 9099 readers")}
            {displayNews("Covid-19 has got 57K cases!", "Top news - 9099 readers")}
            {displayNews("BT has recruited 500 employees!", "Top news - 9099 readers")}
            {displayNews("Share price drops!", "Top news - 9099 readers")}
            {displayNews("S&P500 crashes 50%!", "Top news - 9099 readers")}
            {displayNews("PAPA React is back", "Top news - 9099 readers")}

        </div>
    );
}

export default Widgets;
