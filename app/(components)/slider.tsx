// components/Slider.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

interface SliderProps {
      children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
      const [index, setIndex] = useState(0);

      const { x } = useSpring({
            x: index * -100, // Adjust this value based on your content width
            config: { duration: 1000 }, // Duration of the animation
      });

      useEffect(() => {
            const interval = setInterval(() => {
                  setIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
            }, 3000); // Change the interval time as needed

            return () => clearInterval(interval);
      }, [children]);

      return (
            <div style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
                  <animated.div
                        style={{
                              display: 'flex',
                              width: '300%', // Adjust this value based on your content width
                              transform: x.interpolate((val) => `translate3d(${val}%, 0, 0)`),
                        }}
                  >
                        {React.Children.map(children, (child, i) => (
                              <div key={i} style={{ flex: '1 0 100%' }}>
                                    {child}
                              </div>
                        ))}
                  </animated.div>
            </div>
      );
};

export default Slider;
