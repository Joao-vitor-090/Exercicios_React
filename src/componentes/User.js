import React, { Component } from "react";
import  "./CSS/UserEstilo.css"

class User extends Component { 

    render(){ 

        return(

            <div className="User">

                <p className="Titular">
                   Nome : {this.props.name}

                </p>

            </div>

        );
    }
};

export default User;