"use client";

import Intro from "@/ui/Intro/Intro";
import Menu from "@/ui/Menu/Menu";

import styled from "styled-components";
import Personal from "./Personal/Personal";
import Footer from "./Footer/Footer";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
const Responsive = styled.div`
  @media screen and (max-with: 1320px) {
  }

  @media screen and (max-width: 992px) {
    // ----------------------projects-------------------------
    // projects
    #projects {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }
    // title
    #projects > h2 {
      text-align: center;
      font-size: 3rem;
    }

    // cards
    #projects > div {
      display: flex;
      flex-direction: column;
    }

    // card
    #projects > div > div {
      width: 100%;
      height: 30rem;
      padding: 1rem 0;
    }

    // card content
    #projects > div > div > a > div:nth-child(1) {
      width: 45%;
    }

    // card img
    #projects > div > div > a > div:nth-child(2) {
      width: 55%;
    }

    //-----------------contact------------------------------

    #contact {
      flex-direction: column;
      height: auto;
    }

    // contact info
    #contact > div {
      width: 100%;
    }

    #contact > div:nth-child(1) {
      padding: 1.5rem;
      width: 58rem;
      margin: 0 auto;
    }

    // title
    #contact > div:nth-child(1) > h2 {
      font-size: 4.2rem;
      margin: 6rem 0 0;
    }

    #contact > div:nth-child(1) > div:nth-child(2) {
      margin: 2.5rem 0;
    }
    #contact > div:nth-child(1) > div:nth-child(3) {
      margin: 0 0 3rem;
    }

    #contact > div:nth-child(1) > div:nth-child(3) > a {
      width: 46%;
      flex-grow: 1;
      padding: 1.5rem;
    }

    // image
    #contact > div:nth-child(2) {
      height: 50rem;
    }

    #contact > div:nth-child(2) > img {
      clip-path: none;
    }

    // ------------------personal---------------------------

    #personal {
      width: 55rem;
    }

    #personal > div {
      font-size: 1.4rem;
    }

    #personal > div:nth-child(1) {
      font-size: 2rem !important;
    }

    //---------------------- menu custom--------------------

    #menu {
      top: 1.3rem;
      left: 1.3rem;
    }

    #menuTab > div {
      text-align: center;
    }
  }

  // desktop or laptop
  // @media screen and (min-width: 650px) and (max-width: 768px) {
  // }

  @media screen and (max-width: 600px) {
    // projects
    #projects {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    // card
    #projects > div > div {
      width: 100%;
      height: 24rem;
      padding: 1rem 0;
    }

    #contact > div:nth-child(1) {
      padding: 1.5rem;
      width: 95%;
    }

    #contact > div:nth-child(1) > h2 {
      font-size: 3rem;
    }

    // ------------------personal---------------------------

    #personal {
      width: 95%;
    }

    #personal > div {
      font-size: 1.4rem;
    }

    #personal > div:nth-child(1) {
      font-size: 2rem !important;
    }
  }

  // mobile
  @media screen and (max-width: 480px) {
    // ----------------------projects-------------------------
    // projects
    #projects {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    // title
    #projects > h2 {
      text-align: center;
      font-size: 3rem;
    }

    // cards
    #projects > div {
      display: flex;
      flex-direction: column;
    }

    // card
    #projects > div > div {
      width: 100%;
      height: 19.5rem;
    }

    // card content
    #projects > div > div > a > div:nth-child(1) {
      width: 45%;
    }

    // card img
    #projects > div > div > a > div:nth-child(2) {
      width: 55%;
    }

    //---------------------- menu custom--------------------

    #menu {
      top: 1.3rem;
      left: 1.3rem;
    }

    #menuTab > div {
      text-align: center;
    }

    #menuTab > div > a {
      font-size: 4.4rem;
    }

    // ------------------personal---------------------------

    #personal {
      width: 95%;
    }

    #personal > div {
      font-size: 1.4rem;
    }

    #personal > div:nth-child(1) {
      font-size: 2rem !important;
    }

    //-----------------contact------------------------------

    #contact {
      flex-direction: column;
      height: auto;
    }

    // contact info
    #contact > div {
      width: 100%;
    }

    #contact > div:nth-child(1) {
      padding: 1rem;
      width: 100%;
    }

    // title
    #contact > div:nth-child(1) > h2 {
      font-size: 3rem;
      margin: 6rem 0 0;
    }

    #contact > div:nth-child(1) > div:nth-child(2) {
      margin: 2.5rem 0;
    }
    #contact > div:nth-child(1) > div:nth-child(3) {
      margin: 0 0 3rem;
    }

    #contact > div:nth-child(1) > div:nth-child(3) > a {
      width: 46%;
      flex-grow: 1;
      padding: 1.2rem;
    }

    // image
    #contact > div:nth-child(2) {
      height: 45rem;
    }

    #contact > div:nth-child(2) > img {
      clip-path: none;
    }
  }
`;

export default function Home() {
  // const { isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait } =
  // Screen();

  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const resp = await axios.get("/api/fb", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       if (resp.status == 200) {
  //         const data = resp.data;
  //         setData(data);
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    <Responsive>
      <Intro />
      <Menu />
      <Personal />
      <Projects />
      <Contact />
      <Footer />
    </Responsive>
  );
}
