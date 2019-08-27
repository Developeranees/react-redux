import React from 'react'
import { connect } from 'react-redux'

const AddTask = props => {
    return (
        <React.Fragment>
            <input type="text" value={props.value} onChange={props.onInputChange} />
            <button onClick={props.addtask} className="btn btn-primary btn-sm my-2" >Add Task</button>
        </React.Fragment>
    )
}

const addtask = e => {
    return {
        type: 'ADD_TASK'
    }
}

const onInputChange = e => {
    return {
        type: 'INPUT_CHANGE',
        payload: e.target.value
    }
}

const mapStateToProps = state => {
    return {
        value: state.newtask
    }
}

export default connect(mapStateToProps, { addtask, onInputChange })(AddTask);