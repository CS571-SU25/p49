import PageNavbar from "../PageNavbar"
import pic from '../../assets/IMG_7043.jpg'

export default function AboutMe() {
    return <>
            <img
            src={pic}
            alt="Picture of Sam Lee"
            style={{ maxWidth: '100%', height: 'auto', width: '300px', borderRadius: '12px' }}
            />
            <h1>Hi! My name is Sam and I'm currently a senior at UW-Madison majoring in Computer Science</h1>
        </>
}