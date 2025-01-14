import { Helmet } from "react-helmet";
import './App.css';

function App() {
    const imageURL = "https://pofsis-business.s3.amazonaws.com/biz/1675245859953.png";
    // const dynamicImage = "https://pofsis-business.s3.amazonaws.com/biz/1675245819673.png";
    // <meta name="og:image" content="https://pofsis-business.s3.amazonaws.com/biz/1675245819673.png" />
    return (
        <div>
            <Helmet>
                <meta property="og:image" content={imageURL} />
                <meta property="og:image:alt" content="Description of the image" />
                <meta property="og:title" content="Your Page Title" />
                <meta property="og:description" content="Your Page Description" />
            </Helmet>
            <h1>Rannie Testing revised application234</h1>
            <p>Check the Open Graph meta tags using a debugger tool.</p>
        </div>
    );
}

export default App;