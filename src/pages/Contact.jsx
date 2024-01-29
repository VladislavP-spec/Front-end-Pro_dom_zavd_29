import Link from "../components/Link.jsx";

function Contact() {
    return (
        <main>
            <h1>
                Name: Vladislav
                <br/>
                Surname: Pavlov
            </h1>
            <h2>
                Desired position: Junior Front-end Developer
                <br/>
                e-mail: vladislavp@ukr.net
                <br/>
                <Link href="tel:+380689876177">phone number: +380689876177</Link>
                <br/>
                <Link href="https://t.me/VladislavP777">telegram: @VladislavP777</Link>
                <br/>
                <Link href="https://www.linkedin.com/in/vladislav-pavlov-86b2361b2/7">Link to LinkedIn</Link>
                <br/>
                <Link href="https://github.com/VadislavP-spec">Link to GitHub</Link>
            </h2>
        </main>
    )

}
export default Contact;