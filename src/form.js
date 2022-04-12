import './App.css';
import addlogo from './addlogo.png';

function Form() {
    return (
        <div className="card-body">
            <form>
                <center><h1 className="heading text-muted mb-5">Form</h1></center>
                <div className="pl-lg-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-username">First Name</label>
                                <input type="text" id="name" className="form-control form-control-alternative" placeholder="First Name"
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-username">UserName</label>
                                <input type="text" id="name" className="form-control form-control-alternative" placeholder="Username"
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-username">Date of Birth</label>
                                <input type="date" id="name" className="form-control form-control-alternative" placeholder="DOB"
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">Email
                                    address</label>
                                <input type="email" id="email" className="form-control form-control-alternative" placeholder="abc@example.com" 
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">Phone Number</label>
                                <input name="phone"
                                    id="phone"
                                    type="phone"
                                    required className="form-control form-control-alternative" placeholder="+91 26283 26372"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">Country</label>
                                <input type="email" id="email" className="form-control form-control-alternative" placeholder="Country" 
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">State</label>
                                <input type="email" id="email" className="form-control form-control-alternative" placeholder="State" 
                                    required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="input-email">City</label>
                                <input type="email" id="email" className="form-control form-control-alternative" placeholder="City" 
                                    required />
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>
            <center> <button className="btn btn-info" >Submit</button> </center>
        </div>
    );
}

export default Form;
