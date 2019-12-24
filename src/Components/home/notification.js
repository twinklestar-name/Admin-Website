import React,{Component} from 'react';
import './notification.css'

class Notification extends Component{

    notification=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.notifications.map((item)=>{
        return(
                <div className="notification">
                    <img className="noti-images" src={item.pic}/>
                    <div>
                        <h4 className="message">{item.message}</h4>
                        <p className="time">{item.time}</p>
                    </div>
                </div>
        )
    })

    render(){
        return(
            <div>
                {this.notification}
            </div>
        )
    }

}

export default Notification;