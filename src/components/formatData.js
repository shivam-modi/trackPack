import React from 'react'

export default function DataFormat({data, id}) {
   console.log(data)
    return (
        <div>
        <table className="dataview" style={{width: "100%"}}>
           <tbody>
           <tr className="item">
                <th>Title</th>
                <th>{data[0]}</th>
            </tr>
            <tr className="item">
                <th>Description</th>
                <th>{data[1]}</th>
            </tr>
            <tr className="item">
                <th>Manufacturer Address</th>
                <th>{data[2]}</th>
            </tr>
            <tr className="item">
                <th>Locations</th>
                <th>{data[3]}</th>
            </tr>
            <tr className="item">
                <th>Currently at</th>
                <th>{data[4]}</th>
            </tr>
            <tr className="item">
                <th>Manufactured on</th>
                <th>{data[5]}</th>
            </tr>
           </tbody>
            </table> 
        </div>
    )
}
