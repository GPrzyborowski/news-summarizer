import Header from '../components/Header'
import Navbar from '../components/Navbar'

// Home.js
function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="grid grid-cols-12 gap-6 p-6">
                <div className='col-span-12'>
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Home
