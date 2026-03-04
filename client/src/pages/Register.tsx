import Navbar from "../components/Navbar"
import Header from "../components/Header"

function Register() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="grid grid-cols-12 gap-6 p-6">
                <div className='col-span-12'>
                    <Header children={'Register a new account'}/>
                </div>
            </div>
        </div>
    )
}

export default Register