import React, { useEffect, useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";

import { BsSearch } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Card1 from "./menuCards/card1/Card1";
import axios from "axios";
import Card2 from "./menuCards/card2/Card2";
import { Button, Flex, Heading } from "@chakra-ui/react";
import MobSearch from "../../components/mobSearch/MobSearch";
import Loader from "../../components/loader/Loader";

const Menu = ({ setPurchase, purchase }) => {
  const [cardData, setCardData] = useState([]);
  const [rightNavClass, setRightNavClass] = useState("menu-childBox-left");

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mobile Menu Search
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get("https://kfc-2yef.onrender.com/menu")
      .then((res) => setCardData(res.data))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const combinedData = [];
  const peri = cardData.peri;
  const value = cardData.value;
  const chikenRolls = cardData.chikenRolls;
  const chikenBuckets = cardData.chikenBuckets;
  const biryaniBuckets = cardData.biryaniBuckets;
  const boxMeals = cardData.boxMeals;
  const burger = cardData.burger;
  const snacks = cardData.snacks;
  const beberages = cardData.beberages;
  if (peri) {
    combinedData.push(...peri);
    combinedData.push(...value);
    combinedData.push(...chikenBuckets);
    combinedData.push(...chikenRolls);
    combinedData.push(...biryaniBuckets);
    combinedData.push(...boxMeals);
    combinedData.push(...burger);
    combinedData.push(...snacks);
    combinedData.push(...beberages);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (searchInput === "") {
        window.scrollY >= 70 && window.scrollY <= 19450
          ? setRightNavClass("menu-childBox-left-fixed")
          : setRightNavClass("menu-childBox-left");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchInput]);

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    if (input !== "") {
      setSearchState(true);
    } else {
      setSearchState(false);
    }
    setSearchInput(input);
    debouncedSearch(input);
  };

  const search = (input) => {
    const results = combinedData.filter((item) => {
      return item.title.toLowerCase().includes(input.toLowerCase());
    });

    setSearchResults(results);
  };

  const debouncedSearch = debounce(search, 300);

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
              <Heading className='menu-linesText'>KFC MENU</Heading>

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
              <div className='menu-searchIconBox' onClick={handleOpenDrawer}>
                <BsSearch size={20} />
              </div>
              <MobSearch
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                searchInput={searchInput}
                handleSearchInputChange={handleSearchInputChange}
              />
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
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
              </div>
            </div>
            <div className='menu-menuCards-Section'>
              {searchState ? (
                <div id='value-snackers' className='menu-grandChild'>
                  <Flex gap={20}>
                    <Heading>
                      Searched Results : {searchResults.length}{" "}
                    </Heading>
                    <Button
                      colorScheme='whatsapp'
                      onClick={() => {
                        setSearchInput("");
                        setSearchState(false);
                      }}
                    >
                      Clear Results
                    </Button>
                  </Flex>
                  <div className='menu-childCards2'>
                    <div className='menu-childCards-box2'>
                      {searchResults?.map((card, index) => {
                        return (
                          <div className='value-snackers' key={index}>
                            <Card2
                              card={card}
                              setPurchase={setPurchase}
                              purchase={purchase}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : loading ? (
                Loader
              ) : (
                <>
                  {/*peri-peri-chicken  */}
                  <div
                    id='peri-peri-chicken'
                    className='menu-grandChild-withGrayBG'
                  >
                    <Heading style={{ paddingLeft: "20px" }}>
                      PERI PERI CHICKEN
                    </Heading>
                    <div className='menu-childCards'>
                      <div className='menu-childCards-box'>
                        {peri?.map((card, index) => {
                          return (
                            <div className='menu-periperi' key={index}>
                              <Card1
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* value-snackers */}
                  <div id='value-snackers' className='menu-grandChild'>
                    <Heading>VALUE SNACKERS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {value?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/*Chiken Rolls */}
                  <div id='chicken-rolls' className='menu-grandChild'>
                    <Heading>CHICKEN ROLLS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {chikenRolls?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Chiken Buckets */}
                  <div id='chicken-buckets' className='menu-grandChild'>
                    <Heading>CHICKEN BUCKETS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {chikenBuckets?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Biryani Buckets */}
                  <div id='biryani-buckets' className='menu-grandChild'>
                    <Heading>BIRYANI BUCKETS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {biryaniBuckets?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Box Meals */}
                  <div id='box-meals' className='menu-grandChild'>
                    <Heading>BOX MEALS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {boxMeals?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Burger */}
                  <div id='burgers' className='menu-grandChild'>
                    <Heading>BURGERS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {burger?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div id='snacks' className='menu-grandChild'>
                    <Heading>SNACKS</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {snacks?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div id='beverages' className='menu-grandChild'>
                    <Heading>BEVERAGES</Heading>
                    <div className='menu-childCards2'>
                      <div className='menu-childCards-box2'>
                        {beberages?.map((card, index) => {
                          return (
                            <div className='value-snackers' key={index}>
                              <Card2
                                card={card}
                                setPurchase={setPurchase}
                                purchase={purchase}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
