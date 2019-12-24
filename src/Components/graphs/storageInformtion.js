import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class StorageInformation extends Component
{
    state={
        graph:{
            labels:Object.keys(JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage).map(item=>item),
            datasets:[{
                data: [JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage.used, JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage.system,JSON.parse(localStorage.getItem("Response")).dasbhoardPage.storage.available],
                borderColor: "white",
                backgroundColor:["tomato",'aqua','lightgreen'],
                hoverBackgroundColor:["red",'aqua','green']
                }]
            }
    }

    render(){
        return(
        <div>
            <Pie
                options={{
                    responsive:true,
                    legend:{
                        labels:{fontColor:"#fff"}
                    }
                
                }
            }
                data={this.state.graph}
            />
        </div>
        )
    }
}

export default StorageInformation;