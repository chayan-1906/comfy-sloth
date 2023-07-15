import React from 'react'
import styled from 'styled-components'
import {PageHero} from '../components/index.jsx'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
    return <main>
        <PageHero title='about'/>
        <Wrapper className='page section section-center'>
            <img src={aboutImg} alt='nice desk'/>
            <article>
                <div className='title'>
                    <h2>our story</h2>
                    <div className='underline'></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies mi nec elit pretium porta.
                    Ut pellentesque mollis magna et molestie. In elementum nulla vel augue tempor non ultrices mauris
                    semper. Vestibulum nulla augue, volutpat at bibendum id, interdum ut ante.</p>
            </article>
        </Wrapper>
    </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem auto 0;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPage
