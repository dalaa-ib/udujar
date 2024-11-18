import Lesson from '../Lesson/Lesson'
import './PopularCourses.css'

export default function PopularCourses() {
    return (
        <div className='PopularCourses'>
            <div className="top">
                <h1>Popular Courses</h1>
                <div className='info'>
                    <p>Let’s join our best classes with our famous  instructor and institutes</p>
                    <div className="arrows">
                        <div className="left">
                            <img src="/images/left.svg" alt="" />
                        </div>
                        <div className="right">
                            <img src="/images/right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Lesson number="25x Lesson" p1="Design" label="Supervised Machine Learning: Regression and Classification"
                image="/images/1.png" color="#24D198"/>
                
                <Lesson number="16x Lesson" p1="Marketing" label="Programming for Everybody (Getting Started with Python)"
                image="/images/2.png" color="#00C1FF"/>
                
                <Lesson number="25x Lesson" p1="Programming" label="Supervised Machine Learning: Regression and Classification"
                image="/images/36.png" color="#F15568"/>
                
                <Lesson number="25x Lesson" p1="Design" label="Supervised Machine Learning: Regression and Classification"
                image="/images/4.png" color="#7F56D9"/>
                
                <Lesson number="25x Lesson" p1="Marketing" label="Supervised Machine Learning: Regression and Classification"
                image="/images/5.png" color="#FF6905"/>
                
                <Lesson number="25x Lesson" p1="Programming" label="Supervised Machine Learning: Regression and Classification"
                image="/images/36.png" color="#FAB437"/>
            </div>
            <div className="explore"><button>Explore Courses</button></div>
        </div>
    )
}
