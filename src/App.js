import Router from './router';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <>
      <ParallaxProvider>
        <Router />
      </ParallaxProvider>
    </>
  );
};

export default App;
