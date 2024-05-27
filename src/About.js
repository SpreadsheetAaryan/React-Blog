import { Link } from "react-router-dom";

const About = () => {
    return (
        <main className="About">
            <h2>About</h2>
            <p style={{ marginTop: "1rem" }}>
                This blog app is a review project in Web Development
            </p>
            <p style={{ marginTop: "1rem" }}>
                <Link to="/">Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default About