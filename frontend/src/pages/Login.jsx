import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData;
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    const onSubmit = (e) => { e.preventDefault() };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt />Login
                </h1>
                <p> log in  and start setting goals </p>
            </section>
            <secction className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" value={email} name='email' placeholder="enter your email" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" value={password} name='password' placeholder="enter your password" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>

                </form>
            </secction>
        </>
    )
}
