import Fouter from "./Fouter";
import img from "./assets/img.svg";
import { useFetchProjects } from "./fetchProjects";

function App() {
    const { isLoading, projects } = useFetchProjects();
    if (isLoading) {
        return (
            <section>
                <nav>
                    <ul>
                        <h3 className="logo">Bech</h3>
                    </ul>
                </nav>
                <main>
                    <div className="loading-parent">
                        <div className="loading "></div>
                    </div>
                </main>

                <Fouter />
            </section>
        );
    }
    return (
        <section>
            <nav>
                <ul>
                    <h3 className="logo">Bech</h3>
                </ul>
            </nav>
            <main>
                <div className="container">
                    <div className="main-left">
                        <h1 className="title">
                            Welcome to <br /> React Projects Hub! 🚀
                        </h1>
                        <p className="text">
                            Elevate your React skills through hands-on projects.{" "}
                            <br />
                            From dynamic UIs to API integrations, our curated
                            collection guides your learning journey. <br />{" "}
                            <br />
                            Boost your portfolio, solve real-world challenges,{" "}
                            <br /> and connect with a thriving community. Dive
                            in and code your success with React! 🚀👩‍💻👨‍💻
                        </p>
                        <h4>#ReactProjects </h4>
                        <h4>#CodingJourney </h4>

                        <button className="btn see-more">Learn More</button>
                    </div>
                    <div className="img-container">
                        <img loading="lazy" src={img} alt="" />
                    </div>
                </div>
            </main>
            <section className="content">
                <div className="display-projects">
                    <h1 className="">projects</h1>
                    <div className="items">
                        {projects.map((item) => {
                            return (
                                <a
                                    href={item.url}
                                    key={item.id}
                                    className="singleItem"
                                >
                                    <div className="img-container">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="paragraphe">
                                        <p>{item.title}</p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Fouter />
        </section>
    );
}

export default App;
