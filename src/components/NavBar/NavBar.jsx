import './NaVBar.css'

export default function NavBar({  items, btn }) {
    return (
        <>
            <nav>
                <h1 className='logo'>Edu<span>jar</span></h1>
                <ul className="items">
                    {
                        items.map((element, index) => {
                            return (
                                <li key={index}>
                                    {element.text}
                                </li>
                            )
                        })
                    }
                </ul>
                <button>{btn}</button>

            </nav>
        </>
    )
}
