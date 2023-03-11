import { Component } from "react";
import feliz from './../../assets/img/feliz.png'

export default class Header extends Component {
    render() {
        return <div style={{ display: "flex", justifyContent: "center", alignItems:"center", height: "10rem"}}>
            <div className="Image">
                <img style={{width:'5rem', height: '5rem'}} src={feliz} alt="" />
            </div>
        </div>
    }
}