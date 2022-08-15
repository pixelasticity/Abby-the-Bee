import Header from '../components/Header'
import Meta from '../components/Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForumbee } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  // page content
  const pageTitle = 'Abby the Bee'
  const pageDescription = 'a bilingual children’s book series for early readers'

  return (
    <>
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
    </>
  )
}

export default Home
