import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../style/style_copy.css';
import RequestRow from './RequestRow';

const RegistrationRequestHome = (props) => {
    const requests = [{
        name: 'Manthan Tolia',
        email: 'mmitesh@student.nitw.ac.in',
        branch: 'ECE',
        degree: 'BTech'
    }, {
        name: 'Sufiyan',
        email: 'sufiyan@student.nitw.ac.in',
        branch: 'CSE',
        degree: 'BTech'
    }, {
        name: 'Priyanshu',
        email: 'priyanshu@student.nitw.ac.in',
        branch: 'ECE',
        degree: 'BTech'
    }];
    console.log(requests)
    return (
        <div>
            <div className="banner_part mt-5">
                <div className="container">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <div className="col-md-6">
                                <h3>{requests.length} Request Received</h3>
                                <p>All Requests will be shown here.</p>
                                <p>Automated Mail will be sent to student notifying them about the action.</p>
                                <p>Please Scroll Down to verify requests.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="col align-self-center">
                        <div className="request">
                            <Table className="table">
                                <tr>
                                    <th>S No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Degree</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    requests.map((request, index) => (
                                        <RequestRow index={index + 1} user={request} />
                                    ))
                                }
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationRequestHome;