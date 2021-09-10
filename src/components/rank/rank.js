import React from "react";
import "./rank.css"

class Rank extends React.Component{

    render(){
        return(
            <div className="rankContainer">
                <div>
                    Dayve is ranked....
                </div>
                <div>
                    {`#5`}
                </div>
            </div>
        )
    }
}

export default Rank