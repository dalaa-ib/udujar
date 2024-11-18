import './Questions.css'

export default function Questions() {
    return (
        <div className='questions'>
            <div className="left">
                <p>Frequently Asked Questions</p>
                <h3>Any Questions? Find here.</h3>
                <button>Send Message</button>
                <img src="/images/person.png" alt="" />
            </div>
            <div className="right">
                <div>
                    <div className='flex'>
                        <p className='question'>Can Conversix sync my data to my CRM?</p>
                        <img src="/images/def.svg" alt="" />
                    </div>
                    <p className='answer'>Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.</p>
                </div>
                <div className='flex padding'>
                    <p className='question'>How much data will I receive?</p>
                    <img src="/images/plus.svg" alt="" />
                </div>
                <div className='flex padding'>
                    <p className='question'>Can marketers use Conversix data on behalf of client?</p>
                    <img src="/images/plus.svg" alt="" />
                </div>
                <div className='flex padding'>
                    <p className='question'>How accurate is my data?</p>
                    <img src="/images/plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
