import Category from '../Category/Category'
import './Categories.css'

export default function Categories() {
    return (
        <div className="categories">
            <h1>Explore Top Categories </h1>
            <p className='click'>Click on the categories and explore all courses</p>
            <div className='content'>
                <img src="/udujar/images/left.png" alt="" className='left'/>
                <div>
                    <Category image="/udujar/images/art.png" desc="Art &Design "/>
                    <Category image="/udujar/images/communication.png" desc="Communication "/>
                    <Category image="/udujar/images/finance.png" desc="Finance & Bank"/>
                    <Category image="/udujar/images/marketing.png" desc="Marketing"/>
                    <Category image="/udujar/images/photography.png" desc="Photography"/>
                </div>
                <img src="/udujar/images/right.png" alt="" className='right' />
            </div>
        </div>
    )
}
