import './Category.css'

export default function Category({image,desc}) {
    return (
        <div className='category'>
            <img src={image} alt="" />
            <p>{desc}</p>
        </div>
    )
}
