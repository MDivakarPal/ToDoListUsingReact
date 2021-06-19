import React, { Component } from 'react';
class Pending extends Component {
    
    render() { 
        return (  
            <div>
                <table className='table'>
                <tr>
                    <th>Sr No</th>
                    <th>Task Name</th>
                    <th>Expected Time</th>
                    <th>Type of Task</th>
                    <th>Action</th>
                </tr>  
                {this.props.task.map((c,i)=> 
                <tr>
                 <td>{++i}</td>
                 <td>{c.task}</td>
                 <td>{c.time}</td>
                 <td className={'btn btn-'+c.color}>{c.type}</td>

                 <td onClick={()=>this.props.onTaskHandling(c)} className='btn btn-warning m-2'>Complet</td>
                </tr>
                )}  
                </table>

                
            </div>
        );
    }
}
 
export default Pending;