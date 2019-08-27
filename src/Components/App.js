import React from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'



class App extends React.Component {

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="container">
          <h1>My Todo App</h1>


          <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-body">
              <AddTask />
            </div>
          </div>

          <TaskList />

        </div>



      </React.Fragment>)
  }
}

export default App