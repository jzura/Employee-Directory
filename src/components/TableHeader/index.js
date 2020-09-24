import React from "react";
import "./style.css";



const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                {getTableHeaders(props)}
            </tr>
        </thead>
    );
}

//create column names
function getTableHeaders(props) {
    const headers = [];
    props.colNames.forEach(element => {
        const header = <th className="header" onClick={props.handleEmployeeSort} key={element}>
            {getHeaderName(element)}            
        </th>
        headers.push(header);
    });
    return headers;
}
// easy to read columns 
function getHeaderName(element) {
    switch(element) {
        case "id":
            return "ID";
        case "name":
            return "Name";
        case "department":
            return "Department";
        case "email":
            return "Email";
        default:
            return element;
    }
}

export default TableHeader;