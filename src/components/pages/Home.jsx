import PageNavbar from "../PageNavbar";
import pic from "../../assets/korea-acr-16-9-scaled-1.jpg"

export default function Home() {
    return <div className="page-container">
        <img 
        src= {pic} 
        alt="A picture of Seoul" 
        style={{ maxWidth: '100%', height: 'auto', width: '600px', borderRadius: '12px' }}
        />

        <br/>
        <p><strong>A picture of Seoul, South Korea</strong></p>
        <h1>Welcome to Sam Lee's website! </h1>
        <br/>
        <h2>This webpage was created with React</h2>
        <br/>
        <h3>This is my "first" webpage using my React knowledge</h3>
    </div>
}