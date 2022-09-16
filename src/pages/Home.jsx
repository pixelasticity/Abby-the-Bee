import { useEffect, useState } from 'react';
// Components
import Header from '../components/Header'
import Meta from '../components/Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForumbee } from '@fortawesome/free-brands-svg-icons'
import { faCropSimple, faCodeBranch, faCode, faLaptopCode, faEye, faLink } from '@fortawesome/free-solid-svg-icons'

import { Waypoint } from 'react-waypoint'
import CountUp from 'react-countup'
import Isotope from 'isotope-layout'
import Lightbox from "yet-another-react-lightbox";

const Home = () => {
  // page content
  const pageTitle = 'Abby the Bee'
  const pageDescription = 'a bilingual children’s book series for early readers'

  useEffect(() => {
    var portfolioIsotope = new Isotope('#portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    const filters = document.querySelectorAll('#portfolio-flters li');
    const filterItems = [].slice.call(filters);
  
    filterItems.forEach(function (item) {
      item.addEventListener('click', function () {
        filterItems.forEach(function (item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
        
        var filterValue = this.getAttribute('data-filter');
        portfolioIsotope.arrange({
          filter: filterValue
        });
      });
    });
  }, [])

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <style type="text/css">
        {`
        .btn-primary,
        .nav-pills .nav-link.active {
          background-color: var(--bs-primary);
          --bs-btn-border-color: var(--bs-primary);
        }
        .progress-bar {
          --bs-progress-bar-bg: var(--bs-primary);
        }
        `}
      </style>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <div id="about" className="container-xxl py-6">
        <Container>
          <Row className="g-5">
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-5">
                <div className="years flex-shrink-0 text-center me-4">
                  <h1 className="display-1 mb-0">#1</h1>
                  <h5 className="mb-0">books</h5>
                </div>
                <h3 className="lh-base mb-0">bilingual picture books for early readers </h3>
              </div>
              <p className="mb-4"><cite>Abby the Bee</cite> is a series of bilingual books to help children navigate speaking both English and Spanish. These books tells you the story in the two languages and it also teaches childrens words. This is perfect for them to find joy in learning at the same time they enjoy a greaat reading
              .</p>
              <p className="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Best for ages 3 through 8</p>
              <p className="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Stories in English &amp; Spanish</p>
              <p className="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Easy to read and learn from</p>
              <Button variant="primary" className="py-3 px-5 mt-3" href="https://www.amazon.com/Abby-Stays-Home-Stop-Pandemic/dp/B088LKDK8W">Read More</Button>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.5s">
              <Row className="g-3 mb-4">
                <Col sm="6">
                  <Image fluid className="rounded" src="/img/Abby_the_bee_cover.png" alt="Abby the Bee Stays Home to Stop the Pandemic Book Cover"/>
                </Col>
                <Col sm="6">
                  <Image fluid className="rounded" src="/img/about-2.jpg" alt="" />
                </Col>
              </Row>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">Stays Home to Stop the Pandemic</h5>
                <h2 className="text-primary fw-bold mb-0">
                  <CountUp start={1980} end={2020} delay={0} enableScrollSpy={true} redraw />
                </h2>
              </div>
              <p className="mb-4">Abby loves going to school and playing in the park with other bees, but a pandemic is spreading around the world and schools and parks are closed. Abby learns to have fun staying at home and how to help so less bees get sick.</p>
              <div className="d-flex align-items-center mb-3">
                <h5 className="border-end pe-3 me-3 mb-0">I'm Bee-lingual</h5>
                <h2 className="text-primary fw-bold mb-0">
                  <CountUp start={1980} end={2022} delay={0} enableScrollSpy={true} redraw />
                </h2>
              </div>
              <p className="mb-0">Abby makes a new friend at the beach and shows him what it is to know two languages. They play together while learning words in English and Spanish.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Expertise Start */}
      { /*<div className="container-xxl py-6 pb-5" id="skill">
        <Container>
          <Row className="g-5">
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-5">Skills &amp; Experience</h1>
              <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
              <h3 className="mb-4">My Skills</h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">HTML</h6>
                      <h6 className="font-weight-bold">95%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation1 } topOffset="80%">
                      <ProgressBar now={95} ref={progressRef1} />
                    </Waypoint>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">CSS</h6>
                      <h6 className="font-weight-bold">85%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation3 } topOffset="80%">
                    <ProgressBar now={85} ref={progressRef3} variant="warning" />
                    </Waypoint>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">PHP</h6>
                      <h6 className="font-weight-bold">90%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation5 } topOffset="80%">
                      <ProgressBar now={90} ref={progressRef5} variant="danger" />
                    </Waypoint>
                  </div>
                </Col>
                <Col md="6">
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">Javascript</h6>
                      <h6 className="font-weight-bold">90%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation2 } topOffset="80%">
                      <ProgressBar now={90} ref={progressRef2} variant="danger" />
                    </Waypoint>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">Angular JS</h6>
                      <h6 className="font-weight-bold">95%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation4 } topOffset="80%">
                      <ProgressBar now={95} ref={progressRef4} variant="dark" />
                    </Waypoint>
                  </div>
                  <div className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">Wordpress</h6>
                      <h6 className="font-weight-bold">85%</h6>
                    </div>
                    <Waypoint onEnter={ progressBarAnimation6 } topOffset="80%">
                      <ProgressBar now={85} ref={progressRef6} />
                    </Waypoint>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.5s">
              <Tabs defaultActiveKey="exp" id="test" className="rounded-3 border border-2 border-primary mb-5" variant="pills" justify>
                <Tab eventKey="exp" className="p-0" title="Experience" tabClassName="w-100 py-3 fs-5">
                  <Row className="gy-5 gx-4">
                    <Col sm="6">
                      <h5>UI Designer</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Product Designer</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Web Designer</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Apps Designer</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Apex Software Inc</h6>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="edu" className="p-0" title="Education" tabClassName="w-100 py-3 fs-5">
                  <Row className="gy-5 gx-4">
                    <Col sm="6">
                      <h5>UI Design Course</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>iOS Development</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Web Design</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Apps Design</h5>
                      <hr className="text-primary my-2"/>
                      <p className="text-primary mb-1">2000 - 2045</p>
                      <h6 className="mb-0">Cambridge University</h6>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* Expertise End */}

      {/* Service Start */}
      <Container fluid className="bg-light my-5 py-6" id="service">
        <Container>
          <Row className="g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">My Services</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5" href="#">Hire Me</Button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                  <FontAwesomeIcon icon={faCropSimple} className="fa-2x text-dark" />
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">Creative Design</h4>
                  <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                  <FontAwesomeIcon icon={faCodeBranch} className="fa-2x text-dark" />
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">Graphic Design</h4>
                  <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                <FontAwesomeIcon icon={faCode} className="fa-2x text-dark" />
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">Web Design</h4>
                  <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-2x text-dark" />
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">UI/UX Design</h4>
                  <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Service End */}

      {/* Projects Start */}
      <div className="container-xxl py-6 pt-5" id="project">
        <Container>
          <Row className="g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">My Projects</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li className="mx-3 active" data-filter="*">All Projects</li>
                <li className="mx-3" data-filter=".first">UI/UX Design</li>
                <li className="mx-3" data-filter=".second">Graphic Design</li>
              </ul>
            </Col>
          </Row>
          <Row id="portfolio-container" className="g-4 wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="4" md="6" className="portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-1.jpg" alt="" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(0)}} data-gallery="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-2.jpg" alt="" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(1)}} data-gallery="portfolio">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#">
                    <FontAwesomeIcon icon={faLink} />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-3.jpg" alt="" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(2)}} data-gallery="portfolio">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-4.jpg" alt="" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(3)}} data-gallery="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-5.jpg" alt="Abby the Bee socks" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(4)}} data-gallery="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-6.jpg" alt="" />
                <div className="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1 lightbox-btn" onClick={() => {setOpen(true); setIndex(5)}} data-gallery="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Projects End */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={[
          {
            src: "/img/project-1.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          },
          {
            src: "/img/project-2.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          },
          {
            src: "/img/project-3.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          },
          {
            src: "/img/project-4.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          },
          {
            src: "/img/project-5.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          },
          {
            src: "/img/project-6.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560
          }
        ]}
      />

      {/* Team Start */}
      <div className="container-xxl py-6 pb-5" id="team">
        <Container>
          <Row className="g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">Author</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5" href="#">Contact Us</Button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="4" md="6" className='wow fadeInUp' data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <Image fluid className='rounded' src="/img/Sandra-Lena.jpg" alt="Author Sandra Lena" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>Sandra Lena</h5>
                    <span>Author &amp; Illustrator</span>
                  </div>
                  <FontAwesomeIcon icon={faFeatherPointed} className="fa-2x text-primary" />
                </div>
              </div>
            </Col>
            <Col lg="8" md="6" className='wow fadeInUp' data-wow-delay="0.1s">
              <p>Sandra Lena is a bilingual, passionate writer born in <a href="https://www.spain.info/gcc/en/" target="_blank" rel="noreferrer">Spain</a>. While studying in college and acting in a Spanish television show, she self-published her first book in 2013, a young adult book named "Historias de Comienzo" (Stories of beginning), which became a best seller on Amazon for several weeks. With dual Bachelor's degrees in Journalism and Audiovisual Media, she moved to Los Angeles to perfect her English. In the past decade, she has worked in the entertainment industry and self-published two bilingual children's books, "Travel Around the Words" (2016) and "Abby the Bee Stays Home to Stop the Pandemic" (2020). She noticed a lack of bilingual books for early readers that were educational and entertaining. She made it her personal mission to be part of the change by starting a series of children's books featuring a bee named Abby. She just completed her second book of the series "<cite>Abby the Bee: I am Bee-lingual</cite>".</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Team End */}
    </>
  )
}

export default Home
