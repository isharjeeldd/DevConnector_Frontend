import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteEducation } from '../../actions/profile'

const Education = ({ education, deleteEducation }) => {
    const educations = education.map(exp => (
        <tr key={exp._id}>
            <td>{exp.school}</td>
            <td className='hide-sm'>{exp.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                    exp.to === null ? "Now" : <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                }
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => { deleteEducation(exp._id) }}>Delete</button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className='my-2'>Education Information</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Degree</th>
                        <th className='hide-sm'>Years</th>
                        <th className='hide-sm'>Actions</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);