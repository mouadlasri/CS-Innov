import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            // <form>
            //     <div class="form-group">
            //         <label for="exampleInputEmail1">Email address</label>
            //         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            //         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            //     </div>
            //     <div class="form-group">
            //         <label for="exampleInputPassword1">Password</label>
            //         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="ID" />
            //     </div>
            //         <button type="submit" class="btn btn-primary">Submit</button>
            // </form>
            <form style={{ width: "500px", margin: "auto" }} action="https://formspree.io/mordein@gmail.com"
                method="POST" encType="text/plain">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="fullname" style={{ float: "left" }}>Name</label>
                            <input type="text" name="fullname" id="fullname" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="fullname" style={{ float: "left" }}>ID</label>
                            <input type="text" name="id" id="id" className="form-control" />
                        </div>
                    </div>
                </div>
               <div className="form-group">
                <label htmlFor="description" style={{ float: "left" }}>Brief Description (Year, Major, Interests..)</label>
                <textarea name="" id="" rows="5" className="form-control"></textarea>
               </div>
                <button type="submit" className="form-control btn btn-info">Submit</button>
                
            </form>
        )
    }
}

export default Form;