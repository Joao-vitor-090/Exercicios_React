import React, { Component } from "react";

class List extends Component { 

    render(){
            let List = [
                {
                    name: " João_Vitor",
                    email: "João.Vitor@exemplo.com.br"
                },
                {
                    name: "Felon_Street",
                    email:" Felon.Street@exemplo.com.br"
                }
            ]
        
            return(
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {List.map((item) => {
                            return (
                            <tr className="lista">
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                            </tr>
                        );
                        })
                        }
                    </table>
                </div>
            );

    }
}
export default List;