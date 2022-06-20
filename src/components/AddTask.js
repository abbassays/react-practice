import React,{ useState } from "react";


const AddTask = ({ onAdd }) => {

    const [name, setName] = useState("");
    const [days, setDays] = useState("");
    const [reminder, setReminder] = useState(false);


    const formSubmit = (e) => {
        e.preventDefault();

        if (!name || !days) {
            alert('Please enter Task and Date!');
            return;
        }

        console.log(name)

        onAdd({ name, days, reminder });

        setName("");
        setDays("");
        setReminder(false);

    }
    return (
        <form className="add-form " onSubmit={formSubmit}>
            <div className="form-control">
                <label >Task</label>
                <input type="text" placeholder="Enter Task Name" id="Name" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label >Day & Time</label>
                <input type="datetime-local" id="dt" value={days}
                    onChange={(e) => setDays(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label >Set Reminder</label>
                <input type="checkbox" id="reminder" value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Add Task" className="btn btn-block" />

        </form>
    )
}

export default AddTask
