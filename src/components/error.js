import React, { Component } from 'react'
import "../assets/css/err.css";

export default class Error extends Component {
    render() {
        return (
            <div id="err">
                <div className="h65"></div>
                <div id="errbox">
                    <img src="src/assets/images/cry.png" alt="" />
                    <h3>找不到您的文件</h3>
                    <p>ERR_FILE_NOT_FIND</p>
                </div>
            </div>
        )
    }
}
