import { useEffect, useState, useRef } from 'react';
// Components
import Header from '../components/Header'
import Meta from '../components/Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForumbee, faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFeatherPointed, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

// import { Waypoint } from 'react-waypoint'
import CountUp from 'react-countup'
import Isotope from 'isotope-layout'
import Lightbox from "yet-another-react-lightbox";
import { WOW } from 'wowjs';
import 'animate.css';
import autosize from 'autosize';

const Home = () => {
  // page content
  const pageTitle = 'Abby the Bee'
  const pageDescription = 'a bilingual children’s book series for early readers'
  // init a ref to store the future isotope object
  const portfolioIsotope = useRef()
  // store the filter keyword in a state
  const [portfolioFilterKey, setPortfolioFilterKey] = useState('*');

  // initialize an Isotope object with configs
  useEffect(() => {
    new WOW({animateClass: 'animate__animated', live: false}).init();

    portfolioIsotope.current = new Isotope('#portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    setTimeout(() => {
      portfolioIsotope.current.arrange();
    }, 1500)

    // cleanup
    return () => portfolioIsotope.current.destroy()
  }, [])

  useEffect(() => {
    if (portfolioIsotope) {
      portfolioFilterKey === '*' ? portfolioIsotope.current.arrange({filter: `*`})
        : portfolioIsotope.current.arrange({filter: `.${portfolioFilterKey}`})
    }
  }, [portfolioIsotope, portfolioFilterKey])

  // const handleFilterKeyChange = key => () => setPortfolioFilterKey(key)

  const [open, setOpen] = useState(false);
  const [index] = useState(0);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    const ta = document.querySelector('textarea');
    autosize(ta)
  })

  return (
    <>
      <style type="text/css">
        {`
        :root {
          --bs-link-color: var(--bs-primary)
        }
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.1s">
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.5s">
              <Row className="g-3 mb-4">
                <Col sm="6">
                  <Image fluid className="rounded" src="/img/Abby_the_bee_cover.png" alt="Abby the Bee Stays Home to Stop the Pandemic book cover"/>
                </Col>
                <Col sm="6">
                  <Image fluid className="rounded" src="/img/Abby_the_Bee_makes_a_friend_at_the_beach_cover.jpg" alt="Abby the Bee Makes a Friend at the Beach book cover" />
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
                <h5 className="border-end pe-3 me-3 mb-0">Makes a Friend at the Beach</h5>
                <h2 className="text-primary fw-bold mb-0">
                  <CountUp start={1980} end={2023} delay={0} enableScrollSpy={true} redraw />
                </h2>
              </div>
              <p className="mb-0">Abby the Bee makes a new friend and shows him how fun it is to be bilingual. Abby and her friend learn new vocabulary by playing using words in English and Spanish.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Expertise Start */}
      { /*<div className="container-xxl py-6 pb-5" id="skill">
        <Container>
          <Row className="g-5">
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.1s">
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.5s">
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
      {/* <Container fluid className="bg-light my-5 py-6 d-none" id="service">
        <Container>
          <Row className="g-5 mb-5 wow animate__fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">My Services</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5" href="#">Hire Me</Button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.1s">
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.3s">
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.1s">
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
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.3s">
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
      </Container> */}
      {/* Service End */}

      {/* Projects Start */}
      {/* <div className="container-xxl py-6 pt-5" id="project">
        <Container>
          <Row className="g-5 mb-5 align-items-center wow animate__fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">Abby Gear</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li className="mx-3 active" data-filter="*">
                  <Button variant="link" className="p-0 text-decoration-none" onClick={handleFilterKeyChange('*')}>All Products</Button>
                </li>
                <li className="mx-3" data-filter=".first">
                  <Button variant="link" className="p-0 text-decoration-none" onClick={handleFilterKeyChange('first')}>Adult</Button>
                </li>
                <li className="mx-3" data-filter=".second">
                  <Button variant="link" className="p-0 text-decoration-none" onClick={handleFilterKeyChange('second')}>Kids</Button>
                </li>
              </ul>
            </Col>
          </Row>
          <Row id="portfolio-container" className="g-4 wow animate__fadeInUp" data-wow-delay="0.1s">
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
      </div> */}
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
          <Row className="g-5 mb-5 wow animate__fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">Author</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5" href="#">Contact Us</Button>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="4" md="6" className='wow animate__fadeInUp' data-wow-delay="0.1s">
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
            <Col lg="8" md="6" className='d-flex align-items-center wow animate__fadeInUp' data-wow-delay="0.1s">
              <p>Sandra Lena is a bilingual, passionate writer born in <a href="https://www.spain.info/gcc/en/" target="_blank" rel="noreferrer">Spain</a>. While studying in college and acting in a Spanish television show, she self-published her first book in 2013, a young adult book named <cite>Historias de Comienzo</cite> (Stories of beginning), which became a best seller on Amazon Spain for several weeks. With dual Bachelor's degrees in Journalism and Audiovisual Media, she moved to Los Angeles to perfect her English. In the past decade, she has worked in the entertainment industry and self-published two bilingual children's books, <cite>Travel Around the Words</cite> (2016) and <cite>Abby the Bee Stays Home to Stop the Pandemic</cite> (2020). She noticed a lack of bilingual books for early readers that were educational and entertaining. She made it her personal mission to be part of the change by starting a series of children's books featuring a bee named Abby. She just completed her second installment in the series <cite>Abby the Bee Learns She is Bilingual</cite>.</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Team End */}

      {/* Testimonial Start */}
      <Container fluid id="testimonial" className="bg-light py-5 my-5">
        <Container fluid className="py-5">
          <h1 className="display-5 text-center mb-5 wow animate__fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
          <Row className="justify-content-center">
            <Col lg="3" className="d-none d-lg-block">
              <div className="testimonial-left h-100">
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.1s" src="/img/abby-testimonial-2.png" alt="Abby the Bee children's book testimonial" />
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.3s" src="/img/abby-testimonial-4.png" alt="Abby the Bee kids' book review" />
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.5s" src="/img/abby-testimonial-3.png" alt="" />
              </div>
            </Col>
            <Col lg="6" className="wow animate__fadeInUp" data-wow-delay="0.5s">
              <Carousel className="testimonial-carousel">
                <Carousel.Item className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image fluid className="rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-2.jpg" alt="Nick from Los Angeles reviews Abby the Bee books" />
                    <div className="testimonial-icon">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-primary" />
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Entertaining, bilingual, easy to read, adorable bee character, helps explain the pandemic to young readers. A definite must for your child’s library!</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Nick</h5>
                  <span>Los Angeles, California</span>
                </Carousel.Item>
                <Carousel.Item className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image fluid className="rounded-circle border border-secondary p-2 mx-auto" src="img/testimonial-1.jpg" alt="Mari from Madrid reviews Abby the Bee books" />
                    <div className="testimonial-icon">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-primary" />
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">La abeja es super mona, y el libro es muy sencillo de leer.</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Mari</h5>
                  <span>Madrid, Spain</span>
                </Carousel.Item>
                <Carousel.Item className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <Image fluid className="rounded-circle border border-secondary p-2 mx-auto" src="/img/testimonial-3.jpg" alt="" />
                    <div className="testimonial-icon">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-primary" />
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <hr className="w-25 mx-auto" />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg="3" className="d-none d-lg-block">
              <div className="testimonial-right h-100">
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.1s" src="/img/abby-testimonial-4.png" alt="" />
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.3s" src="/img/abby-testimonial-5.png" alt="" />
                <Image fluid className="wow animate__fadeIn" data-wow-delay="0.5s" src="/img/abby-testimonial-6.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Testimonial End */}

      {/* Contact Start */}
      <div id="contact" className="container-xxl pb-5">
        <Container className="py-5">
          <Row className="g-5 mb-5 wow animate__fadeInUp" data-wow-delay="0.1s">
            <Col lg="6">
              <h1 className="display-5 mb-0">I'd 💗 to hear from you</h1>
            </Col>
            <Col lg="6" className="text-lg-end">
              <Button className="py-3 px-5">Say Hello</Button>
            </Col>
          </Row>
          <Row class="g-5">
            <Col class="col-md-6 wow animate__fadeInUp" data-wow-delay="0.1s">
              <p class="mb-2">My office:</p>
              <h3 class="fw-bold">Los Angeles, USA</h3>
              <hr class="w-100" />
              <p class="mb-2">Email me:</p>
              <h3 class="fw-bold">info@abbythebee.com</h3>
              <hr class="w-100" />
              <p class="mb-2">Inquiries:</p>
              <h3 class="fw-bold">press@abbythebee.com</h3>
              <hr class="w-100" />
              <p class="mb-2 d-none">Follow me:</p>
              <div class="d-flex d-none pt-2">
                <Button className="btn-square me-2" href="https://twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <Button className="btn-square me-2" href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Button>
                <Button className="btn-square me-2" href="https://www.youtube.com/">
                  <FontAwesomeIcon icon={faYoutube} />
                </Button>
                <Button className="btn-square me-2" href="https://www.linkedin.com/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Button>
              </div>
            </Col>
            <Col md="6" class="wow animate__fadeInUp" data-wow-delay="0.5s">
              <p class="mb-4">If you would like your experience reading <cite>Abby the Bee</cite> to be featured in the testimonial section, send me a quick note, and how you would like your name to appear. Then you will appear on the website!</p>
              <Form name="contact" noValidate validated={validated} onSubmit={handleSubmit} data-netlify="true">
                <div class="row g-3">
                  <Col md="6">
                    <FloatingLabel controlId="name" label="Your Name">
                      <Form.Control type="text" placeholder="David Cruz" />
                    </FloatingLabel>
                  </Col>
                  <Col md="6">
                    <FloatingLabel controlId="email" label="Your Email">
                      <Form.Control type="email" placeholder="name@example.com" required />
                      <Form.Control.Feedback type="invalid">Please provide a valid e-mail address.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel controlId="subject" label="Subject">
                      <Form.Control type="text" placeholder="RE: I love Abby the Bee!" />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel controlId="message" label="Message">
                      <Form.Control as="textarea" placeholder="Leave a message here" maxlength="640" required rows={1} style={{minHeight: '58px', resize: 'none'}} />
                      <Form.Control.Feedback type="invalid">Oops! You forgot to write a message.</Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <Button className="py-3 px-5" type="submit">Send Message</Button>
                  </Col>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Contact End */}
    </>
  )
}

export default Home
