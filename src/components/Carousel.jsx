import React, { useState, useEffect } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveSlideIndex(prevIndex => (prevIndex + 1) % 3);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      style={{
        maxWidth: '1440px',
        marginTop: '157px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        showNavigation={false}
        forwardBtn={null}
        backwardBtn={null}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 0,
          },
        ]}
        speed={400}
      >
        {/* Slide 1 */}
        <div style={{ position: 'relative' }}>
          <img src="../images/banner1.jpg" alt="slide 0" style={{ height: '430px' }} />
          {/* Content */}
          <div style={{ position: 'absolute', top: '160px', left: '110px', zIndex: 2 }}>
            <h2 style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginBottom: '12px', lineHeight: '55px' }}>Quality Assurance</h2>
            <p style={{ color: '#fff', fontSize: '18px', fontWeight: 400, fontFamily: 'Roboto, sans-serif', marginBottom: '30px',marginRight: '85px' }}>Free weighting Machine for our members.</p>
            <button type="button" style={{ backgroundColor: 'red', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
              Learn More
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div style={{ position: 'relative' }}>
          <img src="../images/banner2.jpg" alt="slide 1" style={{ height: '430px' }} />
          {/* Content */}
          <div style={{ position: 'absolute', top: '160px', left: '110px', zIndex: 2 }}>
            <h2 style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginBottom: '12px', lineHeight: '55px' }}>Simply Dummy Caption Here</h2>
            <p style={{ color: '#fff', fontSize: '18px', fontWeight: 400, fontFamily: 'Roboto, sans-serif', marginBottom: '30px',marginRight: '350px'  }}>Free weighting Machine for our members.</p>
            <button type="button" style={{ backgroundColor: 'red', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
              Call for Inquiry
            </button>
          </div>
        </div>
        {/* Slide 3 */}
        <div style={{ position: 'relative' }}>
          <img src="../images/banner3.jpg" alt="slide 2" style={{ height: '430px' }} />
          {/* Content */}
          <div style={{ position: 'absolute', top: '160px', left: '110px', zIndex: 2 }}>
            <h2 style={{ color: '#fff', fontSize: '50px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginBottom: '12px', lineHeight: '55px' }}>Quality Assurance</h2>
            <p style={{ color: '#fff', fontSize: '18px', fontWeight: 400, fontFamily: 'Roboto, sans-serif', marginBottom: '30px',marginRight: '85px' }}>Free weighting Machine for our members.</p>
            <button type="button" style={{ backgroundColor: 'red', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
              Call for Inquiry
            </button>
          </div>
        </div>
      </ReactSimplyCarousel>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {[0, 1, 2].map(index => (
          <div
            key={index}
            onClick={() => setActiveSlideIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: activeSlideIndex === index ? 'black' : 'lightgray',
              margin: '0 5px',
              cursor: 'pointer',
              marginTop:'-15px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ReactSimplyCarouselExample;
