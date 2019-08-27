import React from 'react';
import { connect } from 'react-redux'

const TaskList = (props) => {
    const dataown = props.list.map((list, index) => {
        return (
            <div className="card border-primary my-2" key={index}>

                <div className="card-body py-0">
                    <p className='lead mb-0 py-2'>{list}</p>
                </div>

            </div>
        )
    })
    return (
        <React.Fragment>
            {dataown}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(TaskList);