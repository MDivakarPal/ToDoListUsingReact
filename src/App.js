import { Component } from 'react';
import './App.css';
import Header from './screens/header';
import Pending from './screens/pending'
import Completed from './screens/completed'
import './screens/style.css'
class App extends Component {
  state={
    pending:[
      {task:'Wakeup' , time:'05:00 am', type:'Necessity' , color:'success'},
      {task:'Yoga' , time:'07:00 am to 08:00 am' ,type:'Necessity' , color:'success'}
      ],
    completed:[
      {task:'Sleep' , time:'05:00 am' ,type:'Necessity' , color:'success' }
    ]
  }

  taskHandler=(task)=>
  {
     let pending=[...this.state.pending];
      const completed=[...this.state.completed]
      const index=this.state.pending.indexOf(task)
      completed.push(this.state.pending[index])
      pending=this.state.pending.filter((c,i)=> i!==index)
      this.setState({pending});
      this.setState({completed})
      console.log(this.state.pending.length);
      console.log('I am ')
  }

  addTask=()=>{
    const task=document.getElementById('taskName').value;
    const time=document.getElementById('time').value;
    const type=document.getElementById('type').value;
    let clr=''
    if(task && time && type){
    if(type==='Necessity')
    clr='success'
    else
    clr='info'
    const pending=[...this.state.pending]
    pending.push({task:task,time:time,type:type,color:clr})
    this.setState({pending})}
    }
render() {
  return (
    <div className="container-fluid">
    <Header/>
    <div className='row'>
      <div className='col-sm-6'>
        <div >
          <h5 className='heading'>Add New Task</h5>
            <input placeholder='Task Name'  id='taskName'/>
            <input placeholder='Preferred Time' type='text' id='time' />
            <label >Type of task</label>
            <select  id='type'>
              <option >Necessity</option>
              <option >Optional</option>
            </select>
            <button onClick={this.addTask} className='btn btn-success m-2 btn-sm'>Add</button>
            </div>
        <h3 className='heading'>Pending task</h3>
        <Pending onTaskHandling={this.taskHandler}  task={this.state.pending}/>
        </div>
      <div className='col-sm-6'>
        <h3 className='heading'>Completed task</h3>
        <Completed  task={this.state.completed}/></div>
    </div>
  </div>
);
}

}
export default App;
