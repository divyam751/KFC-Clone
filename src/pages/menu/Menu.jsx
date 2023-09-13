import React, { useEffect, useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";

import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Card1 from "./menuCards/card1/Card1";
import axios from "axios";

const Menu = () => {
  const [cardData, setCardData] = useState([]);
  const [rightNavClass, setRightNavClass] = useState("menu-childBox-left");

  const fetchData = () => {
    axios
      .get("http://localhost:8080/peri-peri-chiken")
      .then((res) => setCardData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(cardData);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 70
        ? setRightNavClass("menu-childBox-left-fixed")
        : setRightNavClass("menu-childBox-left");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='menu-Body'>
      <div className='menu-headerSection'>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        <button className='menu-headerSection-button'>Start Now</button>
      </div>
      <div className='menu-parentBox'>
        <div className='menu-childBox'>
          <div className='menu-childBox-left-wrapper'>
            <div className={rightNavClass}>
              <img src={linesLogo} alt='' className='menu-linesLogo' />
              <h1 className='menu-linesText'>KFC MENU</h1>

              <ul className='menu-childBox-left-ul'>
                <ScrollLink
                  to='peri-peri-chicken'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  PERI PERI CHICKEN
                </ScrollLink>
                <ScrollLink
                  to='value-snackers'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  VALUE SNACKERS
                </ScrollLink>
                <ScrollLink
                  to='chicken-rolls'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  CHICKEN ROLLS
                </ScrollLink>
                <ScrollLink
                  to='chicken-buckets'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  CHICKEN BUCKETS
                </ScrollLink>
                <ScrollLink
                  to='biryani-buckets'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BIRYANI BUCKETS
                </ScrollLink>
                <ScrollLink
                  to='box-meals'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BOX MEALS
                </ScrollLink>
                <ScrollLink
                  to='burgers'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BURGERS
                </ScrollLink>
                <ScrollLink
                  to='snacks'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  SNACKS
                </ScrollLink>
                <ScrollLink
                  to='beverages'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BEVERAGES
                </ScrollLink>
              </ul>
            </div>
          </div>
          <div className='menu-childBox-right'>
            <div className='menu-mob-navbar'>
              <div className='menu-searchIconBox' onClick={() => {}}>
                <BsSearch size={20} />
              </div>

              <ul className='menu-childBox-left-ul'>
                <ScrollLink
                  to='peri-peri-chicken'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  PERI PERI CHICKEN
                </ScrollLink>
                <ScrollLink
                  to='value-snackers'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  VALUE SNACKERS
                </ScrollLink>
                <ScrollLink
                  to='chicken-rolls'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  CHICKEN ROLLS
                </ScrollLink>
                <ScrollLink
                  to='chicken-buckets'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  CHICKEN BUCKETS
                </ScrollLink>
                <ScrollLink
                  to='biryani-buckets'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BIRYANI BUCKETS
                </ScrollLink>
                <ScrollLink
                  to='box-meals'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BOX MEALS
                </ScrollLink>
                <ScrollLink
                  to='burgers'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BURGERS
                </ScrollLink>
                <ScrollLink
                  to='snacks'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  SNACKS
                </ScrollLink>
                <ScrollLink
                  to='beverages'
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={1000}
                  className='menu-childBox-left-links'
                >
                  BEVERAGES
                </ScrollLink>
              </ul>
            </div>
            <div className='menu-searchSection'>
              <div className='menu-searchBox'>
                <BsSearch size={20} />
                <input
                  type='search'
                  className='menu-search-input'
                  placeholder='Search our menu'
                />
              </div>
            </div>
            <div className='menu-menuCards-Section'>
              <div id='peri-peri-chicken' className='menu-grandChild'>
                <h2 style={{ paddingLeft: "20px" }}>PERI PERI CHICKEN</h2>
                <div className='menu-childCards'>
                  <div className='menu-childCards-box'>
                    {cardData.map((card, index) => {
                      return (
                        <div className='menu-periperi' key={index}>
                          <Card1 card={card} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div id='value-snackers' className='menu-grandChild'>
                <h1>VALUE SNACKERS</h1>
              </div>
              <div id='chicken-rolls' className='menu-grandChild'>
                <h1>CHICKEN ROLLS</h1>
              </div>
              <div id='chicken-buckets' className='menu-grandChild'>
                <h1>CHICKEN BUCKETS</h1>
              </div>
              <div id='biryani-buckets' className='menu-grandChild'>
                <h1>BIRYANI BUCKETS</h1>
              </div>
              <div id='box-meals' className='menu-grandChild'>
                <h1>BOX MEALS</h1>
              </div>
              <div id='burgers' className='menu-grandChild'>
                <h1>BURGERS</h1>
              </div>
              <div id='snacks' className='menu-grandChild'>
                <h1>SNACKS</h1>
              </div>
              <div id='beverages' className='menu-grandChild'>
                <h1>BEVERAGES</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
