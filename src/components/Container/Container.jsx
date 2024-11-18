import './Container.css'

export default function Container() {
    return (
        <div className='container'>
            <div className='one gray'>
                <h1>60K+</h1>
                <p>Live Courses</p>
            </div>
            <div className='tow green'>
                <h1>35K+</h1>
                <p>Category</p>
            </div>
            <div className='three'>
                <div className='top'>
                    <img src="/images/star1.png" alt="" />
                    <h1>Trustpilot</h1>
                </div>
                <div className='bottom'>
                    <div>
                        <p>View our 1,602 reviews</p>
                    </div>
                    <div className='star'>
                        <p>4.9</p>
                        <img src="./images/star2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='four green'>
                <h1>25K+</h1>
                <p>Professionals</p>
            </div>
            <div className='five gray'>
                <h1>125K+</h1>
                <p>Students</p>
            </div>
        </div>
    )
}
