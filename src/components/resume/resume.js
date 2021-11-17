const Resume = () => {
    return (
        <section id="resume" className="s-resume target-section">
            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Career</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">Software Engineer</h4>
                            <p className="resume-block__header-meta">
                                <span>Product Designer</span>
                                <span className="resume-block__header-date">
                                    August 2013 - Present
                                </span>
                            </p>
                        </div>
                        <p>
                            I work with third party products creating interfaces and to extend the capacity, influenced by devops I use automation tools, code analysis and vulnerabilities to provide a high quality product in performance and security.
                        </p>
                    </div>{" "}
                </div>
            </div>{" "}
            {/* s-resume__section */}
            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Education</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">University of Life</h4>
                            <p className="resume-block__header-meta">
                                <span>Master in Graphic Design</span>
                                <span className="resume-block__header-date">April 2015</span>
                            </p>
                        </div>
                        <p>
                            I am self taught, so I learned some languages ​​like react, angular, vuejs.
                        </p>
                    </div>{" "}
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">Universidad Hispanoamericana</h4>
                            <p className="resume-block__header-meta">
                                <span>Ingeniería Informaica</span>
                                <span className="resume-block__header-date">2006</span>
                            </p>
                        </div>
                        <p>
                        </p>
                    </div>{" "}
                </div>
            </div>{" "}
            {/* s-resume__section */}
            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Skills</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <p>
                            I consider my skills to be the following: 
                        </p>
                        <ul className="skill-bars-fat">
                            <li>
                                <div className="progress percent90" />
                                <strong>HTML</strong>
                            </li>
                            <li>
                                <div className="progress percent50" />
                                <strong>CSS</strong>
                            </li>
                            <li>
                                <div className="progress percent95" />
                                <strong>Javascript</strong>
                            </li>
                            <li>
                                <div className="progress percent80" />
                                <strong>React</strong>
                            </li>
                            <li>
                                <div className="progress percent85" />
                                <strong>Angular</strong>
                            </li>
                            <li>
                                <div className="progress percent90" />
                                <strong>Vuejs</strong>
                            </li>
                            <li>
                                <div className="progress percent80" />
                                <strong>Linux</strong>
                            </li>
                            <li>
                                <div className="progress percent70" />
                                <strong>Nodejs</strong>
                            </li>
                        </ul>
                    </div>{" "}
                </div>
            </div>{" "}
        </section>
    )
}

export default Resume;