import {Component} from "react";

class ByClass extends Component{

    state =
    {
        my_info:"react",
        my_mobile:8999123953

        }

        myFunction = () =>
        {
          this.setState(
              {
                  my_info:"Python"
              }
          )
        }
    
    render()
    {
        return(

            <div>
             <h1>
                My Name Is {this.state.my_info}
            </h1>
             <h1>
                My Mobile Is {this.state.my_mobile}
            </h1>

            <button onClick={this.myFunction}>
                Click Here
            </button>
            </div>
        );
           
            
    }
}
export default ByClass;