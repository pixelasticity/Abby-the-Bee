import { useEffect } from 'react';
// Components
import Header from '../components/Header'
import Meta from '../components/Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForumbee } from '@fortawesome/free-brands-svg-icons'
import { faCropSimple, faCodeBranch, faCode, faLaptopCode, faEye, faLink } from '@fortawesome/free-solid-svg-icons'

import Isotope from 'isotope-layout'

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
      <div id="about" class="container-xxl py-6">
        <Container>
          <Row className="g-5">
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div class="d-flex align-items-center mb-5">
                <div class="years flex-shrink-0 text-center me-4">
                  <h1 class="display-1 mb-0">#1</h1>
                  <h5 class="mb-0">books</h5>
                </div>
                <h3 class="lh-base mb-0">bilingual picture books for early readers </h3>
              </div>
              <p class="mb-4"><cite>Abby the Bee</cite> is a series of bilingual books to help children navigate speaking both English and Spanish. These books tells you the story in the two languages and it also teaches childrens words. This is perfect for them to find joy in learning at the same time they enjoy a greaat reading
              .</p>
              <p class="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Best for ages 3 through 8</p>
              <p class="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Stories in English &amp; Spanish</p>
              <p class="mb-3"><FontAwesomeIcon icon={faForumbee} className="text-primary me-3" />Easy to read and learn from</p>
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
              <div class="d-flex align-items-center mb-3">
                <h5 class="border-end pe-3 me-3 mb-0">Stays Home to Stop the Pandemic</h5>
                <h2 class="text-primary fw-bold mb-0" data-toggle="counter-up">2020</h2>
              </div>
              <p class="mb-4">Abby loves going to school and playing in the park with other bees, but a pandemic is spreading around the world and schools and parks are closed. Abby learns to have fun staying at home and how to help so less bees get sick.</p>
              <div class="d-flex align-items-center mb-3">
                <h5 class="border-end pe-3 me-3 mb-0">I'm Bee-lingual</h5>
                <h2 class="text-primary fw-bold mb-0" data-toggle="counter-up">2022</h2>
              </div>
              <p class="mb-0">Abby makes a new friend at the beach and shows him what it is to know two languages. They play together while learning words in English and Spanish.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Expertise Start */}
      <div class="container-xxl py-6 pb-5" id="skill">
        <Container>
          <Row className="g-5">
            <Col lg="6" class="wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="display-5 mb-5">Skills &amp; Experience</h1>
              <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.</p>
              <h3 class="mb-4">My Skills</h3>
              <Row className="align-items-center">
                <Col md="6">
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">HTML</h6>
                      <h6 class="font-weight-bold">95%</h6>
                    </div>
                    <ProgressBar now={95} />
                  </div>
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">CSS</h6>
                      <h6 class="font-weight-bold">85%</h6>
                    </div>
                    <ProgressBar now={85} variant="warning" />
                  </div>
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">PHP</h6>
                      <h6 class="font-weight-bold">90%</h6>
                    </div>
                    <ProgressBar now={90} variant="danger" />
                  </div>
                </Col>
                <Col md="6">
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">Javascript</h6>
                      <h6 class="font-weight-bold">90%</h6>
                    </div>
                    <ProgressBar now={90} variant="danger" />
                  </div>
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">Angular JS</h6>
                      <h6 class="font-weight-bold">95%</h6>
                    </div>
                    <ProgressBar now={95} variant="dark" />
                  </div>
                  <div class="skill mb-4">
                    <div class="d-flex justify-content-between">
                      <h6 class="font-weight-bold">Wordpress</h6>
                      <h6 class="font-weight-bold">85%</h6>
                    </div>
                    <ProgressBar now={85} />
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
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Product Designer</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Web Designer</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Apex Software Inc</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Apps Designer</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Apex Software Inc</h6>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="edu" className="p-0" title="Education" tabClassName="w-100 py-3 fs-5">
                  <Row className="gy-5 gx-4">
                    <Col sm="6">
                      <h5>UI Design Course</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>iOS Development</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Web Design</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Cambridge University</h6>
                    </Col>
                    <Col sm="6">
                      <h5>Apps Design</h5>
                      <hr class="text-primary my-2"/>
                      <p class="text-primary mb-1">2000 - 2045</p>
                      <h6 class="mb-0">Cambridge University</h6>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Expertise End */}

      {/* Service Start */}
      <Container fluid className="bg-light my-5 py-6" id="service">
        <Container>
          <Row className="g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 class="display-5 mb-0">My Services</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5" href="#">Hire Me</Button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div class="bg-icon flex-shrink-0 mb-3">
                  <FontAwesomeIcon icon={faCropSimple} className="fa-2x text-dark" />
                </div>
                <div class="ms-sm-4">
                  <h4 class="mb-3">Creative Design</h4>
                  <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div class="bg-icon flex-shrink-0 mb-3">
                  <FontAwesomeIcon icon={faCodeBranch} className="fa-2x text-dark" />
                </div>
                <div class="ms-sm-4">
                  <h4 class="mb-3">Graphic Design</h4>
                  <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div class="bg-icon flex-shrink-0 mb-3">
                <FontAwesomeIcon icon={faCode} className="fa-2x text-dark" />
                </div>
                <div class="ms-sm-4">
                  <h4 class="mb-3">Web Design</h4>
                  <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div class="bg-icon flex-shrink-0 mb-3">
                <FontAwesomeIcon icon={faLaptopCode} className="fa-2x text-dark" />
                </div>
                <div class="ms-sm-4">
                  <h4 class="mb-3">UI/UX Design</h4>
                  <h6 class="mb-3">Start from <span class="text-primary">$199</span></h6>
                  <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Service End */}

      {/* Projects Start */}
      <div class="container-xxl py-6 pt-5" id="project">
        <Container>
          <Row className="g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 class="display-5 mb-0">My Projects</h1>
            </Col>
            <Col lg="6" class="text-lg-end">
              <ul class="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li class="mx-3 active" data-filter="*">All Projects</li>
                <li class="mx-3" data-filter=".first">UI/UX Design</li>
                <li class="mx-3" data-filter=".second">Graphic Design</li>
              </ul>
            </Col>
          </Row>
          <Row id="portfolio-container" className="g-4 wow fadeInUp" data-wow-delay="0.1s">
            <Col lg="4" md="6" className="portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-1.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-1.jpg" data-lightbox="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-2.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-2.jpg" data-lightbox="portfolio">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#">
                    <FontAwesomeIcon icon={faLink} />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-3.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-3.jpg" data-lightbox="portfolio">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-4.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-4.jpg" data-lightbox="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item first">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-5.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-5.jpg" data-lightbox="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="portfolio-item second">
              <div class="portfolio-img rounded overflow-hidden">
                <Image fluid src="/img/project-6.jpg" alt="" />
                <div class="portfolio-btn">
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="/img/project-6.jpg" data-lightbox="portfolio"><FontAwesomeIcon icon={faEye} /></Button>
                  <Button variant="outline-secondary" size="lg-square" className="border-2 mx-1" href="#"><FontAwesomeIcon icon={faLink} /></Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Projects End */}
    </>
  )
}

export default Home
