import './Hero.css'

export default function Hero() {
    return (
        <div className='hero'>
            <div>
                <img src="/images/image1.png" alt="" />
            </div>
            <div className='info'>
                <h1>Learn with us anywhere with the best <span>experts</span> </h1>
                <p className='p1'>We collaborate with 275+ leading universities and companies</p>
                <div className='learn'>
                    <p className='p2'>Want do you want to learn?</p>
                    <button >Explore</button>
                </div>
            </div>
            <div>
                <img src="/images/image2.png" alt="" />
            </div>
        </div>
    )
}
