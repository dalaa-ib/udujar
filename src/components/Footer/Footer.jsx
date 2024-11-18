import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div>
                <h1 className='logo'>Edu<span>jar</span></h1>
                <p className='info'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
                <p className='copyright'>© 2024 <span>edujar</span> - All Rights Reserved</p>
            </div>

            <div>
                <h1 className='label'>Quick links</h1>
                <ul>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>About us</li>
                    <li>Works</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div>
                <h1 className='label'>Legal</h1>
                <ul>
                    <li>Terms of use</li>
                    <li>Terms & conditions</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                </ul>
            </div>

            <div >
                <h1 className='label'>Quick links</h1>
                <input type="text" placeholder='Enter Email' />
                <button>Subscribe</button>
            </div>
        </footer>
    )
}
