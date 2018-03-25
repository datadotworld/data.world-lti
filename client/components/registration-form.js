import React from 'react';

import ListGroup from './list-group';

export default class RegistrationForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {name: '', email: '', organization: '', title: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({

            [name]: value

        });

    }

    handleSubmit(event) {

        event.preventDefault();

        let xhr = new XMLHttpRequest();

        xhr.open('POST', './register', true);
        xhr.onload = (e) => {

            console.log(xhr.response);

        };

        xhr.send(this.state);


    }

    render() {

        return (

          <ListGroup>

              <form onSubmit={this.handleSubmit}>
                  <div className="form-group row">

                      <label htmlFor="name">
                          Name
                      </label>
                      <input
                          aria-describedby="nameHelp"
                          className="form-control"
                          id="name"
                          onChange={this.handleChange}
                          name="name"
                          placeholder="Full name"
                          type="text"
                          value={this.state.name} />

                  </div>
                  <div className="form-group row">

                      <label htmlFor="email">Email</label>
                      <input
                          aria-describedby="emailHelp"
                          className="form-control"
                          id="email"
                          onChange={this.handleChange}
                          name="email"
                          placeholder="Email Address"
                          type="email"
                          value={this.state.email} />

                  </div>
                  <div className="form-group row">

                      <label htmlFor="organization">
                          Organization
                      </label>
                      <input
                          aria-describedby="organizationHelp"
                          className="form-control"
                          id="organization"
                          onChange={this.handleChange}
                          name="organization"
                          placeholder="Name of Organization"
                          type="text"
                          value={this.state.organization} />

                  </div>
                  <div className="form-group row">

                      <label htmlFor="title">
                          Title
                      </label>
                      <input
                          aria-describedby="titleHelp"
                          className="form-control"
                          id="title"
                          onChange={this.handleChange}
                          name="title"
                          placeholder="Your Organization Title"
                          type="text"
                          value={this.state.title} />

                  </div>
                  <div className="form-group row">

                      <button type="submit" className="btn btn-primary">Submit</button>

                  </div>

              </form>

          </ListGroup>

        );

    }

}