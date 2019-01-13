import React from 'react';

function DeviceList(props)
{
    return <table>
    <thead>
        <tr>
            <td> Name </td>
            <td> Amount </td>
        </tr>
    </thead>

    <tbody>

   { props.devices.map( (device) => {
        return <tr key= { device.id }> 
            <td> { device.name } </td> 
            <td> { device.amount } </td> 
        </tr>
    })}

    </tbody>
    </table>;
}

export default DeviceList;