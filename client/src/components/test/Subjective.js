import React from 'react';

const Subjective = (props) => {
    return (
        <div className="subhead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header content-center" style={{background: '#313348'}}>
                                <i className="icon text-white my-4 display-4"></i>
                                <p style={{color: 'white'}}><strong>Question No. 29 : </strong> What Do you mean by Photosynthesis? Explain with proper diagram and examples.<span className="badge badge-pill notification" >Subjective</span></p>
                            </div>
                            <div className="card-body text-dark">
                                Type Your Answer in the given box or Upload it here <input type="file" name="File" />
                                <br></br>

                            </div>
                            <textarea rows="10" columns="10"> </textarea>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-success">Save & Next</button> <button type="button" className="btn btn-warning">Next</button>
            </div>
        </div>
    )
}

export default Subjective;