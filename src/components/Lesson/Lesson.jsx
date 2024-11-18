import './Lesson.css'

export default function Lesson({number,p1,label,image,color}) {
    return (
        <div className='lesson'>
            <div className='desc'>
                <div className='top2'>
                    <div className='numberOfLesson'>
                        <div className="polygon" style={{background: `${color}`}}>
                            <img src="/udujar/images/polygon.svg" alt="" />
                        </div>
                        <p className='number'>{number}</p>
                    </div>
                    <p className='p1'>{p1}</p>
                </div>
                <h3>{label}</h3>
                <p className='p2'>For athletes, high altitude produces two contradi effects on performance.</p>
            </div>
            <div className='join'>
                <button>join</button>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
