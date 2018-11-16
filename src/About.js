import React, { Component } from 'react';
import './About.css';


export class About extends Component {
    render() {
        return <div className="container">
        <header>
        <h1 className='abt'>About Me</h1>
        <h3 className='abt-section'>Allow Me To Introduce Myself</h3>
        </header>
        <p>
            I love new technologies and sharing these technologies with the younger generation.
            <br></br><br></br>
            My focus is in project management and making products more accessible. During my 
            previous internship, I worked on making tech KPI dashboards more beautiful utilizing
            PowerBI, capacity management for the technology department, org charts and more.
            I currently work at University of Washington's Foster School of Business as an IT/AV
            Support Technician.
            <br></br><br></br>
            Approaching completion of my degree, I am in search of a project management/product 
            mangement full time position.
            <br></br><br></br>
            Whenever I find freetime, I like to try new restaurants around the PNW area and vlog!
        </p>
        <br></br>

        <section>
            <h2>Skills</h2>
            <ul>
                <li>Customer Service</li>
                <li>Project Management</li>
                <li>Resource Capacity Management</li>
                <li>Prototyping</li>
                <li>UX Research</li>
            </ul>
            <br></br>

            <h2>Experience</h2>
            <h5>Technology Operations Intern</h5>
            <h6>Sterling Talent Solutions</h6>
            <p>use reactstrap togglefade to release details of what i did</p>
            <br></br>
            <br></br>

            <h5>Customer Service Representative</h5>
            <h6>University of Washington - Michael G. Foster School of Business</h6>
            <p>use reactstrap togglefade to release details of what i did</p>
            <br></br>
            <br></br>

            <h5>Customer Service Representative</h5>
            <h6>State Farm</h6>
            <p>use reactstrap togglefade to release details of what i did</p>
            <br></br>
            <br></br>

        </section>
        </div>
    }
}