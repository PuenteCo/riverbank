import { CustomCursor } from './components/ui';
import { Navbar, Footer } from './components/layout';
import {
  Hero,
  Problem,
  Method,
  AISection,
  Products,
  Targets,
  Credentials,
  CTA,
} from './components/sections';
import { useCustomCursor } from './hooks';

export default function App() {
  const { cursorRef, ringRef, cursorHandlers } = useCustomCursor();

  return (
    <>
      <CustomCursor cursorRef={cursorRef} ringRef={ringRef} />
      <Navbar cursorHandlers={cursorHandlers} />
      <Hero cursorHandlers={cursorHandlers} />
      <Problem />
      <Method cursorHandlers={cursorHandlers} />
      <AISection cursorHandlers={cursorHandlers} />
      <Products cursorHandlers={cursorHandlers} />
      <Targets cursorHandlers={cursorHandlers} />
      <Credentials />
      <CTA cursorHandlers={cursorHandlers} />
      <Footer cursorHandlers={cursorHandlers} />
    </>
  );
}
