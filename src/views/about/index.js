import React, { Component } from 'react'
import data from "./data";
import ViewTemplate from "../component/viewTemplate";
export default class About extends Component{
    render() {
        return (
            <ViewTemplate data={data} />
        )
    }
}