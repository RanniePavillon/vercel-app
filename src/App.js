import { Helmet } from "react-helmet";
import './App.css';

function App() {
    const dynamicImage = "https://example.com/dynamic-image.jpg";
    return (
        <div>
            <Helmet>
                <meta property="og:image" content={dynamicImage} />
                <meta property="og:title" content="Dynamic OG Image Example" />
                <meta property="og:description" content="This is a dynamically set Open Graph image." />
            </Helmet>
            <h1>React Open Graph Testing</h1>
            <p>Check the Open Graph meta tags using a debugger tool.</p>
        </div>
    );
}

export default App;