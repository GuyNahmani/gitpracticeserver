import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function GoalFrom() {
    const onSubmit = (e) => {
        e.preventDefualt();
    }
    return (
        <section className='form'>
            <form onSubmit={onSubmit}></form>
            GoalForm
        </section>
    )
}

export default GoalFrom
