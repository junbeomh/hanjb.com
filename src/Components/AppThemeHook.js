import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const items = [<i className="social-icon far fa-sun" ></i> , <i className="social-icon far fa-moon"></i> ]

export default function ThemeButton() {
  const [toggled, setToggled] = useState(false);
  const [theme, setTheme] = useState('light');
  const transition = useTransition(items[+toggled], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  const toggleTheme = () => {
      setToggled(!toggled)
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


  return (
    <>
      <div className="simple-trans-main">
        {transition((values, item) => (
          <animated.div style={values} onClick={() => setToggled(!toggled)}>
            {item}
          </animated.div>
        ))}
      </div>
    </>
  )
}
