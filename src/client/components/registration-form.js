import React from 'react';

import ListGroup from './list-group';

export default class RegistrationForm extends React.Component {

    render() {

        return (

          <ListGroup>

              <form>
                  <div className="form-group row">

                      <label htmlFor="name">
                          Name
                      </label>
                      <input type="text" className="form-control"
                             id="name" aria-describedby="nameHelp" placeholder="Full name"/>

                  </div>
                  <div className="form-group row">

                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control"
                             id="email" aria-describedby="emailHelp" placeholder="Email"/>

                  </div>
                  <div className="form-group row">

                      <label htmlFor="organization">
                          Organization
                      </label>
                      <input type="text" className="form-control"
                             id="organization" aria-describedby="organizationHelp" placeholder="Organization"/>

                  </div>
                  <div className="form-group row">

                      <label htmlFor="title">
                          Title
                      </label>
                      <input type="text" className="form-control"
                             id="title" aria-describedby="titleHelp" placeholder="Title"/>

                  </div>
                  <div className="form-group row">

                      <button type="submit" className="btn btn-primary">Submit</button>

                  </div>

              </form>

          </ListGroup>

        );

    }

}