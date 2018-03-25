import React from 'react';

export default class NabBtn extends React.Component {


    render() {

        return(

            <div>

                {this.props.label}
                {this.props.children}

            </div>

        );

    };

}