import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 border-b border-deep_purple-A700 border-solid flex flex-col items-center justify-center p-[17px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-[98%] md:w-full">
                <div className="flex flex-col justify-start w-[87%] md:w-full">
                  <div className="md:h-[53px] h-[63px] relative w-[26%]">
                    <Img
                      className="absolute h-[45px] left-[1%] top-[0]"
                      src="images/img_vector1.svg"
                      alt="vectorOne"
                    />
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                        size="txtInterRegular42"
                      >
                        <span className="text-red-A700 font-carterone text-left font-normal">
                          A
                        </span>
                        <span className="text-white-A700 font-carterone text-left font-normal">
                          uto
                        </span>
                        <span className="text-blue-700 font-carterone text-left font-normal">
                          I
                        </span>
                        <span className="text-white-A700 font-carterone text-left font-normal">
                          ntellecta
                        </span>
                      </Text>
                      <Line className="bg-white-A700 h-0.5 w-[98%]" />
                    </div>
                  </div>
                  <Img
                    className="h-[27px] md:ml-[0] ml-[1122px] mt-[15px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <ul className="flex md:flex-col flex-row font-montserrat md:hidden items-center justify-end md:ml-[0] ml-[99px] mt-[5px] w-[92%] md:w-full common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">NEW CARS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[51px] text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">
                          UPCOMING CARS
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[51px] text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">
                          EMI CALCULATOR
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[51px] text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">EVs</Text>
                      </a>
                    </li>
                    <li>
                      <a className="ml-[51px] text-[17px] text-white-A700">
                        <Text
                          className="common-pointer"
                          size="txtMontserratRomanBold17"
                          onClick={() => navigate("/memberlogin")}
                        >
                          REPORTS{" "}
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[51px] text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">COMMUNITY</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[88px] text-[17px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanBold17">LOCATION</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col font-montserrat gap-2.5 justify-start w-[8%] md:w-full">
                  <Img
                    className="h-10 md:ml-[0] ml-[33px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtMontserratRomanBold14"
                  >
                    MEMBERSHIP
                  </Text>
                </div>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-montserrat gap-6 items-start justify-end md:ml-[0] ml-[88px] mt-[9px] md:px-5 w-[93%] md:w-full">
            <div className="flex flex-col gap-2 items-start justify-start md:mt-0 mt-[131px] w-[47%] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] sm:text-[33px] md:text-[35px] text-[37px] text-white-A700 w-full"
                size="txtMontserratRomanBold37"
              >
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  Discover
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  {" "}
                  and{" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  compare
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  {" "}
                </span>
                <span className="text-deep_purple-A700 font-montserrat text-left font-bold">
                  the best cars in India with
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  {" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-bold">
                  AI-powered analysis
                </span>
              </Text>
              <Button
                className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[291px] py-[3px] rounded-[18px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                onClick={() => navigate("")}
              >
                LETS GO!
              </Button>
            </div>
            <Img
              className="h-[639px] sm:h-auto object-cover w-[52%] md:w-full"
              src="images/img_chrisliverani.png"
              alt="chrisliverani"
            />
          </div>
          <div className="font-montserrat h-[185px] md:h-[191px] mt-1.5 md:px-5 relative w-full">
            <div className="absolute flex flex-col items-center justify-start left-[10%] top-[23%] w-[7%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <a href="javascript:" className="text-sm text-white-A700">
                    <Text size="txtMontserratRomanBold14">CONTACT US</Text>
                  </a>
                </div>
              </div>
            </div>
            <Img
              className="h-px ml-[399px] mt-[63px]"
              src="images/img_group7.svg"
              alt="groupSeven"
            />
            <footer className="absolute bg-black-900 border-deep_purple-A700 border-solid border-t flex inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-center mb-2 ml-[137px] mr-[241px] mt-[38px] w-[74%]">
                <ul className="flex flex-col items-center justify-center w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <div className="flex flex-col gap-2 items-center justify-start w-[11%] md:w-full">
                          <a
                            href="javascript:"
                            className="text-sm text-white-A700"
                          >
                            <Text size="txtMontserratRomanBold14">
                              CONTACT US
                            </Text>
                          </a>
                          <Line className="bg-deep_purple-A700 h-[5px] w-full" />
                        </div>
                        <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[166px] w-[17%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRomanBold14"
                          >
                            Terms & Conditions
                          </Text>
                          <Line className="bg-deep_purple-A700 h-[5px] w-full" />
                        </div>
                        <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[360px] w-[18%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRomanBold14"
                          >
                            Our Clients & partners
                          </Text>
                          <Line className="bg-deep_purple-A700 h-[5px] w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <ul className="flex flex-col gap-[7px] items-start justify-start w-[43%] md:w-full common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-[82px] items-start justify-start">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtMontserratRomanBold14"
                                >
                                  emailusat@domain.com
                                </Text>
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtMontserratRomanBold14"
                                >
                                  Our Policy{" "}
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row items-center justify-between">
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtMontserratRomanBold14"
                                >
                                  feedback@domain.com
                                </Text>
                                <Text
                                  className="text-sm text-white-A700"
                                  size="txtMontserratRomanBold14"
                                >
                                  Subscription and Benefits{" "}
                                </Text>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-4 items-start justify-start">
                                <Img
                                  className="h-[15px]"
                                  src="images/img_camera.svg"
                                  alt="camera"
                                />
                                <Img
                                  className="h-[13px] mt-0.5"
                                  src="images/img_twitter.svg"
                                  alt="twitter"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                        <Img
                          className="h-[33px] md:ml-[0] ml-[325px]"
                          src="images/img_googlelogo.svg"
                          alt="googlelogo"
                        />
                        <div className="md:h-[23px] h-[26px] ml-7 md:ml-[0] relative w-[5%] md:w-full">
                          <div className="md:h-[23px] h-[26px] m-auto w-full">
                            <div className="md:h-[23px] h-[26px] m-auto w-full">
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] h-[23px] inset-x-[0] mx-auto w-[97%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group211.svg')",
                                }}
                              >
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group215.svg')",
                                  }}
                                >
                                  <div
                                    className="bg-cover bg-no-repeat h-[22px] relative w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group215.svg')",
                                    }}
                                  >
                                    <div className="h-[22px] m-auto w-full">
                                      <div className="absolute h-[22px] inset-[0] justify-center m-auto w-full">
                                        <Img
                                          className="absolute h-[22px] inset-[0] justify-center m-auto"
                                          src="images/img_eye.svg"
                                          alt="eye"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat bottom-[0] h-[19px] inset-x-[0] mx-auto w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_eye.svg')",
                                          }}
                                        >
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_eye.svg')",
                                            }}
                                          >
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[19px] items-center justify-start w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_eye.svg')",
                                              }}
                                            >
                                              <div
                                                className="bg-cover bg-no-repeat flex flex-col h-[19px] items-center justify-start w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_eye.svg')",
                                                }}
                                              >
                                                <div
                                                  className="bg-cover bg-no-repeat flex flex-col h-[19px] items-center justify-start w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_eye.svg')",
                                                  }}
                                                >
                                                  <Img
                                                    className="h-[19px]"
                                                    src="images/img_eye_blue_300.svg"
                                                    alt="eye_One"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_eye_blue_300.svg')",
                                            }}
                                          >
                                            <div
                                              className="bg-cover bg-no-repeat md:h-[18px] h-[19px] relative w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group224.svg')",
                                              }}
                                            >
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group224.svg')",
                                                }}
                                              >
                                                <div
                                                  className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group227.svg')",
                                                  }}
                                                >
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group227.svg')",
                                                    }}
                                                  >
                                                    <div
                                                      className="bg-cover bg-no-repeat h-[18px] relative w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group227.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        className="absolute h-[18px] inset-[0] justify-center m-auto"
                                                        src="images/img_group227.svg"
                                                        alt="eye_Two"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group230.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="h-[18px]"
                                                          src="images/img_group230.svg"
                                                          alt="eye_Three"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="absolute bg-cover bg-no-repeat h-[18px] inset-[0] justify-center m-auto w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group230.svg')",
                                                }}
                                              >
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group230.svg')",
                                                  }}
                                                >
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group233.svg')",
                                                    }}
                                                  >
                                                    <div
                                                      className="bg-cover bg-no-repeat h-[18px] relative w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group233.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        className="absolute h-[18px] inset-[0] justify-center m-auto"
                                                        src="images/img_group233.svg"
                                                        alt="eye_Four"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group235.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="h-[18px]"
                                                          src="images/img_group235.svg"
                                                          alt="eye_Five"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="absolute bg-cover bg-no-repeat h-[18px] inset-[0] justify-center m-auto w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group235.svg')",
                                                  }}
                                                >
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat h-[18px] inset-[0] justify-center m-auto w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group236.svg')",
                                                    }}
                                                  >
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group236.svg')",
                                                      }}
                                                    >
                                                      <div
                                                        className="bg-cover bg-no-repeat h-[18px] relative w-full"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group236.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="absolute h-[18px] inset-[0] justify-center m-auto"
                                                          src="images/img_group236.svg"
                                                          alt="eye_Six"
                                                        />
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group240.svg')",
                                                          }}
                                                        >
                                                          <div
                                                            className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group240.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              className="h-[18px]"
                                                              src="images/img_group240.svg"
                                                              alt="eye_Seven"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group240.svg')",
                                                      }}
                                                    >
                                                      <div
                                                        className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start w-full"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group240.svg')",
                                                        }}
                                                      >
                                                        <div
                                                          className="bg-cover bg-no-repeat md:h-[17px] h-[18px] relative w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group240.svg')",
                                                          }}
                                                        >
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group244.svg')",
                                                            }}
                                                          >
                                                            <div
                                                              className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group244.svg')",
                                                              }}
                                                            >
                                                              <div
                                                                className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group244.svg')",
                                                                }}
                                                              >
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group248.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    className="h-[17px]"
                                                                    src="images/img_group248.svg"
                                                                    alt="eye_Eight"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group248.svg')",
                                                            }}
                                                          >
                                                            <div
                                                              className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group248.svg')",
                                                              }}
                                                            >
                                                              <div
                                                                className="bg-cover bg-no-repeat h-[17px] relative w-full"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group250.svg')",
                                                                }}
                                                              >
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group250.svg')",
                                                                  }}
                                                                >
                                                                  <div
                                                                    className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group250.svg')",
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group250.svg')",
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group250.svg')",
                                                                        }}
                                                                      >
                                                                        <div
                                                                          className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                          style={{
                                                                            backgroundImage:
                                                                              "url('images/img_group256.svg')",
                                                                          }}
                                                                        >
                                                                          <Img
                                                                            className="h-[17px]"
                                                                            src="images/img_group256.svg"
                                                                            alt="eye_Nine"
                                                                          />
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group256.svg')",
                                                                  }}
                                                                >
                                                                  <div
                                                                    className="bg-cover bg-no-repeat h-[17px] relative w-full"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group256.svg')",
                                                                    }}
                                                                  >
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group256.svg')",
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group260.svg')",
                                                                        }}
                                                                      >
                                                                        <div
                                                                          className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                          style={{
                                                                            backgroundImage:
                                                                              "url('images/img_group261.svg')",
                                                                          }}
                                                                        >
                                                                          <div
                                                                            className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_group261.svg')",
                                                                            }}
                                                                          >
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group261.svg')",
                                                                              }}
                                                                            >
                                                                              <Img
                                                                                className="h-[17px]"
                                                                                src="images/img_group261.svg"
                                                                                alt="eye_Ten"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group259.svg')",
                                                                      }}
                                                                    >
                                                                      <div
                                                                        className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group259.svg')",
                                                                        }}
                                                                      >
                                                                        <div
                                                                          className="bg-cover bg-no-repeat md:h-4 h-[17px] relative w-full"
                                                                          style={{
                                                                            backgroundImage:
                                                                              "url('images/img_group259.svg')",
                                                                          }}
                                                                        >
                                                                          <div
                                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_group259.svg')",
                                                                            }}
                                                                          >
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group268.svg')",
                                                                              }}
                                                                            >
                                                                              <div
                                                                                className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_group268.svg')",
                                                                                }}
                                                                              >
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[17px] items-center justify-start w-full"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group268.svg')",
                                                                                  }}
                                                                                >
                                                                                  <Img
                                                                                    className="h-4"
                                                                                    src="images/img_eye_indigo_400.svg"
                                                                                    alt="eye_Eleven"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                          <div
                                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_eye_indigo_400.svg')",
                                                                            }}
                                                                          >
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group271.svg')",
                                                                              }}
                                                                            >
                                                                              <div
                                                                                className="bg-cover bg-no-repeat h-4 relative w-full"
                                                                                style={{
                                                                                  backgroundImage:
                                                                                    "url('images/img_group271.svg')",
                                                                                }}
                                                                              >
                                                                                <div
                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group273.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div
                                                                                    className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                    style={{
                                                                                      backgroundImage:
                                                                                        "url('images/img_group275.svg')",
                                                                                    }}
                                                                                  >
                                                                                    <div
                                                                                      className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_group275.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <div
                                                                                        className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group275.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group275.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <Img
                                                                                            className="h-4"
                                                                                            src="images/img_group275.svg"
                                                                                            alt="eye_Twelve"
                                                                                          />
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                                <div
                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group274.svg')",
                                                                                  }}
                                                                                >
                                                                                  <div
                                                                                    className="bg-cover bg-no-repeat h-4 relative w-full"
                                                                                    style={{
                                                                                      backgroundImage:
                                                                                        "url('images/img_group279.svg')",
                                                                                    }}
                                                                                  >
                                                                                    <div
                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_group280.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <div
                                                                                        className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group282.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group282.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group284.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div
                                                                                              className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group284.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <Img
                                                                                                className="h-4"
                                                                                                src="images/img_eye_indigo_400_16x49.svg"
                                                                                                alt="eye_Thirteen"
                                                                                              />
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                    <div
                                                                                      className="absolute bg-cover bg-no-repeat h-4 inset-[0] justify-center m-auto w-full"
                                                                                      style={{
                                                                                        backgroundImage:
                                                                                          "url('images/img_eye_indigo_400_16x49.svg')",
                                                                                      }}
                                                                                    >
                                                                                      <div
                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_eye_indigo_400_16x49.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_eye_indigo_400_16x49.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group289.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div
                                                                                              className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group290.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group291.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div
                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-4 items-center justify-start w-full"
                                                                                                  style={{
                                                                                                    backgroundImage:
                                                                                                      "url('images/img_group291.svg')",
                                                                                                  }}
                                                                                                >
                                                                                                  <Img
                                                                                                    className="h-4"
                                                                                                    src="images/img_group291.svg"
                                                                                                    alt="eye_Fourteen"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                      <div
                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                        style={{
                                                                                          backgroundImage:
                                                                                            "url('images/img_group291.svg')",
                                                                                        }}
                                                                                      >
                                                                                        <div
                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                          style={{
                                                                                            backgroundImage:
                                                                                              "url('images/img_group293.svg')",
                                                                                          }}
                                                                                        >
                                                                                          <div
                                                                                            className="bg-cover bg-no-repeat h-[15px] relative w-full"
                                                                                            style={{
                                                                                              backgroundImage:
                                                                                                "url('images/img_group294.svg')",
                                                                                            }}
                                                                                          >
                                                                                            <div
                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group294.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group297.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <div
                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                  style={{
                                                                                                    backgroundImage:
                                                                                                      "url('images/img_group297.svg')",
                                                                                                  }}
                                                                                                >
                                                                                                  <Img
                                                                                                    className="h-[15px]"
                                                                                                    src="images/img_group297.svg"
                                                                                                    alt="eye_Fifteen"
                                                                                                  />
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                            <div
                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                              style={{
                                                                                                backgroundImage:
                                                                                                  "url('images/img_group296.svg')",
                                                                                              }}
                                                                                            >
                                                                                              <div
                                                                                                className="bg-cover bg-no-repeat h-[15px] relative w-full"
                                                                                                style={{
                                                                                                  backgroundImage:
                                                                                                    "url('images/img_group299.svg')",
                                                                                                }}
                                                                                              >
                                                                                                <Img
                                                                                                  className="absolute h-[15px] inset-[0] justify-center m-auto"
                                                                                                  src="images/img_group299.svg"
                                                                                                  alt="eye_Sixteen"
                                                                                                />
                                                                                                <div
                                                                                                  className="absolute bg-cover bg-no-repeat h-[15px] inset-[0] justify-center m-auto w-full"
                                                                                                  style={{
                                                                                                    backgroundImage:
                                                                                                      "url('images/img_group299.svg')",
                                                                                                  }}
                                                                                                >
                                                                                                  <div
                                                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                    style={{
                                                                                                      backgroundImage:
                                                                                                        "url('images/img_group299.svg')",
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_group303.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group304.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div
                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                          style={{
                                                                                                            backgroundImage:
                                                                                                              "url('images/img_group305.svg')",
                                                                                                          }}
                                                                                                        >
                                                                                                          <div
                                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                            style={{
                                                                                                              backgroundImage:
                                                                                                                "url('images/img_group305.svg')",
                                                                                                            }}
                                                                                                          >
                                                                                                            <Img
                                                                                                              className="h-[15px]"
                                                                                                              src="images/img_eye_indigo_500.svg"
                                                                                                              alt="eye_Seventeen"
                                                                                                            />
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div
                                                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                    style={{
                                                                                                      backgroundImage:
                                                                                                        "url('images/img_eye_indigo_500.svg')",
                                                                                                    }}
                                                                                                  >
                                                                                                    <div
                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-full"
                                                                                                      style={{
                                                                                                        backgroundImage:
                                                                                                          "url('images/img_eye_indigo_500.svg')",
                                                                                                      }}
                                                                                                    >
                                                                                                      <div
                                                                                                        className="bg-cover bg-no-repeat h-[15px] relative w-full"
                                                                                                        style={{
                                                                                                          backgroundImage:
                                                                                                            "url('images/img_group308.svg')",
                                                                                                        }}
                                                                                                      >
                                                                                                        <div
                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                          style={{
                                                                                                            backgroundImage:
                                                                                                              "url('images/img_group308.svg')",
                                                                                                          }}
                                                                                                        >
                                                                                                          <div
                                                                                                            className="bg-cover bg-no-repeat h-[15px] relative w-full"
                                                                                                            style={{
                                                                                                              backgroundImage:
                                                                                                                "url('images/img_group308.svg')",
                                                                                                            }}
                                                                                                          >
                                                                                                            <div
                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                              style={{
                                                                                                                backgroundImage:
                                                                                                                  "url('images/img_group308.svg')",
                                                                                                              }}
                                                                                                            >
                                                                                                              <Img
                                                                                                                className="h-[15px]"
                                                                                                                src="images/img_eye_indigo_500_15x49.svg"
                                                                                                                alt="eye_Eighteen"
                                                                                                              />
                                                                                                            </div>
                                                                                                            <Img
                                                                                                              className="absolute h-[15px] inset-[0] justify-center m-auto"
                                                                                                              src="images/img_eye_indigo_500_15x49.svg"
                                                                                                              alt="eye_Nineteen"
                                                                                                            />
                                                                                                          </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                          style={{
                                                                                                            backgroundImage:
                                                                                                              "url('images/img_group310.svg')",
                                                                                                          }}
                                                                                                        >
                                                                                                          <div
                                                                                                            className="bg-cover bg-no-repeat md:h-3.5 h-[15px] relative w-full"
                                                                                                            style={{
                                                                                                              backgroundImage:
                                                                                                                "url('images/img_group310.svg')",
                                                                                                            }}
                                                                                                          >
                                                                                                            <div
                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                                              style={{
                                                                                                                backgroundImage:
                                                                                                                  "url('images/img_group314.svg')",
                                                                                                              }}
                                                                                                            >
                                                                                                              <div
                                                                                                                className="bg-cover bg-no-repeat h-3.5 relative w-full"
                                                                                                                style={{
                                                                                                                  backgroundImage:
                                                                                                                    "url('images/img_group316.svg')",
                                                                                                                }}
                                                                                                              >
                                                                                                                <div
                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                  style={{
                                                                                                                    backgroundImage:
                                                                                                                      "url('images/img_group317.svg')",
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <Img
                                                                                                                    className="h-3.5"
                                                                                                                    src="images/img_eye_indigo_600.svg"
                                                                                                                    alt="eye_Twenty"
                                                                                                                  />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                  style={{
                                                                                                                    backgroundImage:
                                                                                                                      "url('images/img_group318.svg')",
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <div
                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-3.5 items-center justify-start w-full"
                                                                                                                    style={{
                                                                                                                      backgroundImage:
                                                                                                                        "url('images/img_group318.svg')",
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <Img
                                                                                                                      className="h-3.5"
                                                                                                                      src="images/img_group318.svg"
                                                                                                                      alt="eye_TwentyOne"
                                                                                                                    />
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                              </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                              className="absolute bg-cover bg-no-repeat h-3.5 inset-[0] justify-center m-auto w-full"
                                                                                                              style={{
                                                                                                                backgroundImage:
                                                                                                                  "url('images/img_group318.svg')",
                                                                                                              }}
                                                                                                            >
                                                                                                              <div
                                                                                                                className="absolute bg-cover bg-no-repeat h-3.5 inset-[0] justify-center m-auto w-full"
                                                                                                                style={{
                                                                                                                  backgroundImage:
                                                                                                                    "url('images/img_group320.svg')",
                                                                                                                }}
                                                                                                              >
                                                                                                                <div
                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                  style={{
                                                                                                                    backgroundImage:
                                                                                                                      "url('images/img_group322.svg')",
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <Img
                                                                                                                    className="h-3.5"
                                                                                                                    src="images/img_group322.svg"
                                                                                                                    alt="eye_TwentyTwo"
                                                                                                                  />
                                                                                                                </div>
                                                                                                                <div
                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                  style={{
                                                                                                                    backgroundImage:
                                                                                                                      "url('images/img_group322.svg')",
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <div
                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-3.5 items-center justify-start w-full"
                                                                                                                    style={{
                                                                                                                      backgroundImage:
                                                                                                                        "url('images/img_group324.svg')",
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <Img
                                                                                                                      className="h-3.5"
                                                                                                                      src="images/img_eye_indigo_600_14x49.svg"
                                                                                                                      alt="eye_TwentyThree"
                                                                                                                    />
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                              </div>
                                                                                                              <div
                                                                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                style={{
                                                                                                                  backgroundImage:
                                                                                                                    "url('images/img_eye_indigo_600_14x49.svg')",
                                                                                                                }}
                                                                                                              >
                                                                                                                <div
                                                                                                                  className="bg-cover bg-no-repeat h-3.5 relative w-full"
                                                                                                                  style={{
                                                                                                                    backgroundImage:
                                                                                                                      "url('images/img_eye_indigo_600_14x49.svg')",
                                                                                                                  }}
                                                                                                                >
                                                                                                                  <div className="absolute h-3.5 inset-[0] justify-center m-auto w-full">
                                                                                                                    <div
                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                      style={{
                                                                                                                        backgroundImage:
                                                                                                                          "url('images/img_eye_indigo_600_14x49.svg')",
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <Img
                                                                                                                        className="h-3.5"
                                                                                                                        src="images/img_eye_14x49.svg"
                                                                                                                        alt="eye_TwentyFour"
                                                                                                                      />
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                      style={{
                                                                                                                        backgroundImage:
                                                                                                                          "url('images/img_eye_14x49.svg')",
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <div
                                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-3.5 items-center justify-start w-full"
                                                                                                                        style={{
                                                                                                                          backgroundImage:
                                                                                                                            "url('images/img_group329.svg')",
                                                                                                                        }}
                                                                                                                      >
                                                                                                                        <div
                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-3.5 items-center justify-start w-full"
                                                                                                                          style={{
                                                                                                                            backgroundImage:
                                                                                                                              "url('images/img_group330.svg')",
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <Img
                                                                                                                            className="h-3.5"
                                                                                                                            src="images/img_eye_indigo_700.svg"
                                                                                                                            alt="eye_TwentyFive"
                                                                                                                          />
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                  <div
                                                                                                                    className="absolute bg-cover bg-no-repeat h-3.5 inset-[0] justify-center m-auto w-full"
                                                                                                                    style={{
                                                                                                                      backgroundImage:
                                                                                                                        "url('images/img_eye_indigo_700.svg')",
                                                                                                                    }}
                                                                                                                  >
                                                                                                                    <Img
                                                                                                                      className="h-3.5 m-auto"
                                                                                                                      src="images/img_eye_indigo_700_14x48.svg"
                                                                                                                      alt="eye_TwentySix"
                                                                                                                    />
                                                                                                                    <div
                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                      style={{
                                                                                                                        backgroundImage:
                                                                                                                          "url('images/img_eye_indigo_700_14x48.svg')",
                                                                                                                      }}
                                                                                                                    >
                                                                                                                      <div
                                                                                                                        className="bg-cover bg-no-repeat h-3.5 md:h-[13px] relative w-full"
                                                                                                                        style={{
                                                                                                                          backgroundImage:
                                                                                                                            "url('images/img_eye_indigo_700_14x48.svg')",
                                                                                                                        }}
                                                                                                                      >
                                                                                                                        <div
                                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                                                          style={{
                                                                                                                            backgroundImage:
                                                                                                                              "url('images/img_group333.svg')",
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <div
                                                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                            style={{
                                                                                                                              backgroundImage:
                                                                                                                                "url('images/img_group335.svg')",
                                                                                                                            }}
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                              style={{
                                                                                                                                backgroundImage:
                                                                                                                                  "url('images/img_group335.svg')",
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <Img
                                                                                                                                className="h-[13px]"
                                                                                                                                src="images/img_eye_indigo_700_13x48.svg"
                                                                                                                                alt="eye_TwentySeven"
                                                                                                                              />
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                                                          style={{
                                                                                                                            backgroundImage:
                                                                                                                              "url('images/img_eye_indigo_700_13x48.svg')",
                                                                                                                          }}
                                                                                                                        >
                                                                                                                          <div
                                                                                                                            className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                            style={{
                                                                                                                              backgroundImage:
                                                                                                                                "url('images/img_group337.svg')",
                                                                                                                            }}
                                                                                                                          >
                                                                                                                            <div
                                                                                                                              className="bg-cover bg-no-repeat h-[13px] relative w-full"
                                                                                                                              style={{
                                                                                                                                backgroundImage:
                                                                                                                                  "url('images/img_group337.svg')",
                                                                                                                              }}
                                                                                                                            >
                                                                                                                              <div
                                                                                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                style={{
                                                                                                                                  backgroundImage:
                                                                                                                                    "url('images/img_group337.svg')",
                                                                                                                                }}
                                                                                                                              >
                                                                                                                                <div
                                                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group337.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                    style={{
                                                                                                                                      backgroundImage:
                                                                                                                                        "url('images/img_group337.svg')",
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                      style={{
                                                                                                                                        backgroundImage:
                                                                                                                                          "url('images/img_group343.svg')",
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group344.svg')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                          style={{
                                                                                                                                            backgroundImage:
                                                                                                                                              "url('images/img_group344.svg')",
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <Img
                                                                                                                                            className="h-[13px]"
                                                                                                                                            src="images/img_eye_13x48.svg"
                                                                                                                                            alt="eye_TwentyEight"
                                                                                                                                          />
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                              <div
                                                                                                                                className="absolute bg-cover bg-no-repeat h-[13px] inset-[0] justify-center m-auto w-full"
                                                                                                                                style={{
                                                                                                                                  backgroundImage:
                                                                                                                                    "url('images/img_eye_13x48.svg')",
                                                                                                                                }}
                                                                                                                              >
                                                                                                                                <div className="absolute h-[13px] inset-[0] justify-center m-auto w-full">
                                                                                                                                  <Img
                                                                                                                                    className="absolute h-[13px] inset-[0] justify-center m-auto"
                                                                                                                                    src="images/img_eye_13x48.svg"
                                                                                                                                    alt="eye_TwentyNine"
                                                                                                                                  />
                                                                                                                                  <div
                                                                                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                    style={{
                                                                                                                                      backgroundImage:
                                                                                                                                        "url('images/img_group346.svg')",
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                      style={{
                                                                                                                                        backgroundImage:
                                                                                                                                          "url('images/img_group346.svg')",
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group349.svg')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                          style={{
                                                                                                                                            backgroundImage:
                                                                                                                                              "url('images/img_group350.svg')",
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <Img
                                                                                                                                            className="h-[13px]"
                                                                                                                                            src="images/img_group350.svg"
                                                                                                                                            alt="eye_Thirty"
                                                                                                                                          />
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                                <div
                                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                  style={{
                                                                                                                                    backgroundImage:
                                                                                                                                      "url('images/img_group347.svg')",
                                                                                                                                  }}
                                                                                                                                >
                                                                                                                                  <div
                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                    style={{
                                                                                                                                      backgroundImage:
                                                                                                                                        "url('images/img_group347.svg')",
                                                                                                                                    }}
                                                                                                                                  >
                                                                                                                                    <div
                                                                                                                                      className="bg-cover bg-no-repeat md:h-3 h-[13px] relative w-full"
                                                                                                                                      style={{
                                                                                                                                        backgroundImage:
                                                                                                                                          "url('images/img_group352.svg')",
                                                                                                                                      }}
                                                                                                                                    >
                                                                                                                                      <div
                                                                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group352.svg')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start w-full"
                                                                                                                                          style={{
                                                                                                                                            backgroundImage:
                                                                                                                                              "url('images/img_group355.svg')",
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <div
                                                                                                                                            className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                            style={{
                                                                                                                                              backgroundImage:
                                                                                                                                                "url('images/img_group356.svg')",
                                                                                                                                            }}
                                                                                                                                          >
                                                                                                                                            <div
                                                                                                                                              className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                              style={{
                                                                                                                                                backgroundImage:
                                                                                                                                                  "url('images/img_group356.svg')",
                                                                                                                                              }}
                                                                                                                                            >
                                                                                                                                              <Img
                                                                                                                                                className="h-3"
                                                                                                                                                src="images/img_eye_indigo_800.svg"
                                                                                                                                                alt="eye_ThirtyOne"
                                                                                                                                              />
                                                                                                                                            </div>
                                                                                                                                          </div>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                      <div
                                                                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                        style={{
                                                                                                                                          backgroundImage:
                                                                                                                                            "url('images/img_group354.svg')",
                                                                                                                                        }}
                                                                                                                                      >
                                                                                                                                        <div
                                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                          style={{
                                                                                                                                            backgroundImage:
                                                                                                                                              "url('images/img_group354.svg')",
                                                                                                                                          }}
                                                                                                                                        >
                                                                                                                                          <div
                                                                                                                                            className="bg-cover bg-no-repeat h-3 relative w-full"
                                                                                                                                            style={{
                                                                                                                                              backgroundImage:
                                                                                                                                                "url('images/img_group359.svg')",
                                                                                                                                            }}
                                                                                                                                          >
                                                                                                                                            <div
                                                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                              style={{
                                                                                                                                                backgroundImage:
                                                                                                                                                  "url('images/img_group359.svg')",
                                                                                                                                              }}
                                                                                                                                            >
                                                                                                                                              <div
                                                                                                                                                className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                                style={{
                                                                                                                                                  backgroundImage:
                                                                                                                                                    "url('images/img_group354.svg')",
                                                                                                                                                }}
                                                                                                                                              >
                                                                                                                                                <div
                                                                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                                  style={{
                                                                                                                                                    backgroundImage:
                                                                                                                                                      "url('images/img_group363.svg')",
                                                                                                                                                  }}
                                                                                                                                                >
                                                                                                                                                  <div
                                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                                    style={{
                                                                                                                                                      backgroundImage:
                                                                                                                                                        "url('images/img_group364.svg')",
                                                                                                                                                    }}
                                                                                                                                                  >
                                                                                                                                                    <div
                                                                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start w-full"
                                                                                                                                                      style={{
                                                                                                                                                        backgroundImage:
                                                                                                                                                          "url('images/img_group364.svg')",
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <Img
                                                                                                                                                        className="h-3"
                                                                                                                                                        src="images/img_eye_indigo_800_12x47.svg"
                                                                                                                                                        alt="eye_ThirtyTwo"
                                                                                                                                                      />
                                                                                                                                                    </div>
                                                                                                                                                  </div>
                                                                                                                                                </div>
                                                                                                                                              </div>
                                                                                                                                            </div>
                                                                                                                                            <div
                                                                                                                                              className="absolute bg-cover bg-no-repeat bottom-[0] h-3 inset-x-[0] mx-auto w-full"
                                                                                                                                              style={{
                                                                                                                                                backgroundImage:
                                                                                                                                                  "url('images/img_eye_indigo_800_12x47.svg')",
                                                                                                                                              }}
                                                                                                                                            >
                                                                                                                                              <Img
                                                                                                                                                className="absolute h-3 inset-[0] justify-center m-auto"
                                                                                                                                                src="images/img_eye_indigo_800_12x47.svg"
                                                                                                                                                alt="eye_ThirtyThree"
                                                                                                                                              />
                                                                                                                                              <div
                                                                                                                                                className="absolute bg-cover bg-no-repeat h-[11px] inset-[0] justify-center m-auto w-full"
                                                                                                                                                style={{
                                                                                                                                                  backgroundImage:
                                                                                                                                                    "url('images/img_eye_indigo_800_12x47.svg')",
                                                                                                                                                }}
                                                                                                                                              >
                                                                                                                                                <div className="h-[11px] m-auto w-full">
                                                                                                                                                  <Img
                                                                                                                                                    className="absolute h-[11px] inset-[0] justify-center m-auto"
                                                                                                                                                    src="images/img_eye_indigo_800_12x47.svg"
                                                                                                                                                    alt="eye_ThirtyFour"
                                                                                                                                                  />
                                                                                                                                                  <Img
                                                                                                                                                    className="absolute h-[11px] inset-[0] justify-center m-auto"
                                                                                                                                                    src="images/img_eye_indigo_800_11x47.svg"
                                                                                                                                                    alt="eye_ThirtyFive"
                                                                                                                                                  />
                                                                                                                                                </div>
                                                                                                                                                <div
                                                                                                                                                  className="absolute bg-cover bg-no-repeat bottom-[0] md:h-2.5 h-[11px] inset-x-[0] mx-auto w-full"
                                                                                                                                                  style={{
                                                                                                                                                    backgroundImage:
                                                                                                                                                      "url('images/img_eye_indigo_800_11x47.svg')",
                                                                                                                                                  }}
                                                                                                                                                >
                                                                                                                                                  <div
                                                                                                                                                    className="absolute bg-cover bg-no-repeat md:h-2.5 h-[11px] inset-[0] justify-center m-auto w-full"
                                                                                                                                                    style={{
                                                                                                                                                      backgroundImage:
                                                                                                                                                        "url('images/img_eye_indigo_800_11x47.svg')",
                                                                                                                                                    }}
                                                                                                                                                  >
                                                                                                                                                    <Img
                                                                                                                                                      className="absolute h-2.5 inset-[0] justify-center m-auto"
                                                                                                                                                      src="images/img_eye_indigo_800_11x47.svg"
                                                                                                                                                      alt="eye_ThirtySix"
                                                                                                                                                    />
                                                                                                                                                    <div
                                                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                      style={{
                                                                                                                                                        backgroundImage:
                                                                                                                                                          "url('images/img_eye_indigo_800_11x47.svg')",
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <Img
                                                                                                                                                        className="h-2.5"
                                                                                                                                                        src="images/img_eye_indigo_900.svg"
                                                                                                                                                        alt="eye_ThirtySeven"
                                                                                                                                                      />
                                                                                                                                                    </div>
                                                                                                                                                  </div>
                                                                                                                                                  <div
                                                                                                                                                    className="absolute bg-cover bg-no-repeat bottom-[0] h-2.5 md:h-[9px] inset-x-[0] mx-auto w-full"
                                                                                                                                                    style={{
                                                                                                                                                      backgroundImage:
                                                                                                                                                        "url('images/img_eye_indigo_900.svg')",
                                                                                                                                                    }}
                                                                                                                                                  >
                                                                                                                                                    <div
                                                                                                                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                      style={{
                                                                                                                                                        backgroundImage:
                                                                                                                                                          "url('images/img_eye_indigo_900.svg')",
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <Img
                                                                                                                                                        className="h-[9px]"
                                                                                                                                                        src="images/img_eye_indigo_900_9x45.svg"
                                                                                                                                                        alt="eye_ThirtyEight"
                                                                                                                                                      />
                                                                                                                                                    </div>
                                                                                                                                                    <div
                                                                                                                                                      className="absolute bg-cover bg-no-repeat bottom-[0] h-[9px] inset-x-[0] mx-auto w-full"
                                                                                                                                                      style={{
                                                                                                                                                        backgroundImage:
                                                                                                                                                          "url('images/img_eye_indigo_900_9x45.svg')",
                                                                                                                                                      }}
                                                                                                                                                    >
                                                                                                                                                      <div
                                                                                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                        style={{
                                                                                                                                                          backgroundImage:
                                                                                                                                                            "url('images/img_eye_indigo_900_9x45.svg')",
                                                                                                                                                        }}
                                                                                                                                                      >
                                                                                                                                                        <Img
                                                                                                                                                          className="h-[9px]"
                                                                                                                                                          src="images/img_eye_indigo_900_9x44.svg"
                                                                                                                                                          alt="eye_ThirtyNine"
                                                                                                                                                        />
                                                                                                                                                      </div>
                                                                                                                                                      <div
                                                                                                                                                        className="absolute bg-cover bg-no-repeat bottom-[0] h-[9px] inset-x-[0] mx-auto w-full"
                                                                                                                                                        style={{
                                                                                                                                                          backgroundImage:
                                                                                                                                                            "url('images/img_eye_indigo_900_9x44.svg')",
                                                                                                                                                        }}
                                                                                                                                                      >
                                                                                                                                                        <Img
                                                                                                                                                          className="absolute h-[9px] inset-[0] justify-center m-auto"
                                                                                                                                                          src="images/img_eye_indigo_900_9x44.svg"
                                                                                                                                                          alt="eye_Forty"
                                                                                                                                                        />
                                                                                                                                                        <div
                                                                                                                                                          className="absolute bg-cover bg-no-repeat h-2 inset-[0] justify-center m-auto w-full"
                                                                                                                                                          style={{
                                                                                                                                                            backgroundImage:
                                                                                                                                                              "url('images/img_eye_indigo_900_9x44.svg')",
                                                                                                                                                          }}
                                                                                                                                                        >
                                                                                                                                                          <div
                                                                                                                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                            style={{
                                                                                                                                                              backgroundImage:
                                                                                                                                                                "url('images/img_eye_indigo_900_9x44.svg')",
                                                                                                                                                            }}
                                                                                                                                                          >
                                                                                                                                                            <div
                                                                                                                                                              className="bg-cover bg-no-repeat flex flex-col h-2 items-center justify-start w-full"
                                                                                                                                                              style={{
                                                                                                                                                                backgroundImage:
                                                                                                                                                                  "url('images/img_group378.svg')",
                                                                                                                                                              }}
                                                                                                                                                            >
                                                                                                                                                              <div
                                                                                                                                                                className="bg-cover bg-no-repeat flex flex-col h-2 items-center justify-start w-full"
                                                                                                                                                                style={{
                                                                                                                                                                  backgroundImage:
                                                                                                                                                                    "url('images/img_group378.svg')",
                                                                                                                                                                }}
                                                                                                                                                              >
                                                                                                                                                                <Img
                                                                                                                                                                  className="h-2"
                                                                                                                                                                  src="images/img_eye_indigo_900_8x41.svg"
                                                                                                                                                                  alt="eye_FortyOne"
                                                                                                                                                                />
                                                                                                                                                              </div>
                                                                                                                                                            </div>
                                                                                                                                                          </div>
                                                                                                                                                          <div
                                                                                                                                                            className="absolute bg-cover bg-no-repeat bottom-[0] h-[7px] inset-x-[0] mx-auto w-[96%]"
                                                                                                                                                            style={{
                                                                                                                                                              backgroundImage:
                                                                                                                                                                "url('images/img_eye_indigo_900_8x41.svg')",
                                                                                                                                                            }}
                                                                                                                                                          >
                                                                                                                                                            <div
                                                                                                                                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                              style={{
                                                                                                                                                                backgroundImage:
                                                                                                                                                                  "url('images/img_eye_indigo_900_8x41.svg')",
                                                                                                                                                              }}
                                                                                                                                                            >
                                                                                                                                                              <Img
                                                                                                                                                                className="h-[7px]"
                                                                                                                                                                src="images/img_eye_indigo_900_7x40.svg"
                                                                                                                                                                alt="eye_FortyTwo"
                                                                                                                                                              />
                                                                                                                                                            </div>
                                                                                                                                                            <div
                                                                                                                                                              className="absolute bg-cover bg-no-repeat bottom-[0] md:h-1.5 h-[7px] inset-x-[0] mx-auto w-[96%]"
                                                                                                                                                              style={{
                                                                                                                                                                backgroundImage:
                                                                                                                                                                  "url('images/img_eye_indigo_900_7x40.svg')",
                                                                                                                                                              }}
                                                                                                                                                            >
                                                                                                                                                              <div
                                                                                                                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                                style={{
                                                                                                                                                                  backgroundImage:
                                                                                                                                                                    "url('images/img_eye_indigo_900_7x40.svg')",
                                                                                                                                                                }}
                                                                                                                                                              >
                                                                                                                                                                <div
                                                                                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-1.5 items-center justify-start w-full"
                                                                                                                                                                  style={{
                                                                                                                                                                    backgroundImage:
                                                                                                                                                                      "url('images/img_eye_indigo_900_7x40.svg')",
                                                                                                                                                                  }}
                                                                                                                                                                >
                                                                                                                                                                  <div
                                                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-1.5 items-center justify-start w-full"
                                                                                                                                                                    style={{
                                                                                                                                                                      backgroundImage:
                                                                                                                                                                        "url('images/img_eye_indigo_900_7x40.svg')",
                                                                                                                                                                    }}
                                                                                                                                                                  >
                                                                                                                                                                    <Img
                                                                                                                                                                      className="h-1.5"
                                                                                                                                                                      src="images/img_eye_indigo_900_7x40.svg"
                                                                                                                                                                      alt="eye_FortyThree"
                                                                                                                                                                    />
                                                                                                                                                                  </div>
                                                                                                                                                                </div>
                                                                                                                                                              </div>
                                                                                                                                                              <div
                                                                                                                                                                className="absolute bg-cover bg-no-repeat bottom-[0] h-1.5 md:h-[5px] inset-x-[0] mx-auto w-[95%]"
                                                                                                                                                                style={{
                                                                                                                                                                  backgroundImage:
                                                                                                                                                                    "url('images/img_eye_indigo_900_7x40.svg')",
                                                                                                                                                                }}
                                                                                                                                                              >
                                                                                                                                                                <div
                                                                                                                                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                                  style={{
                                                                                                                                                                    backgroundImage:
                                                                                                                                                                      "url('images/img_group386.svg')",
                                                                                                                                                                  }}
                                                                                                                                                                >
                                                                                                                                                                  <Img
                                                                                                                                                                    className="h-[5px]"
                                                                                                                                                                    src="images/img_vector_indigo_900.svg"
                                                                                                                                                                    alt="vector"
                                                                                                                                                                  />
                                                                                                                                                                </div>
                                                                                                                                                                <div
                                                                                                                                                                  className="absolute bg-cover bg-no-repeat bottom-[0] h-[5px] inset-x-[0] mx-auto w-full"
                                                                                                                                                                  style={{
                                                                                                                                                                    backgroundImage:
                                                                                                                                                                      "url('images/img_vector_indigo_900.svg')",
                                                                                                                                                                  }}
                                                                                                                                                                >
                                                                                                                                                                  <div
                                                                                                                                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                                    style={{
                                                                                                                                                                      backgroundImage:
                                                                                                                                                                        "url('images/img_group388.svg')",
                                                                                                                                                                    }}
                                                                                                                                                                  >
                                                                                                                                                                    <Img
                                                                                                                                                                      className="h-[5px]"
                                                                                                                                                                      src="images/img_group388.svg"
                                                                                                                                                                      alt="vector_One"
                                                                                                                                                                    />
                                                                                                                                                                  </div>
                                                                                                                                                                  <div
                                                                                                                                                                    className="absolute bg-cover bg-no-repeat bottom-[0] h-[5px] inset-x-[0] mx-auto w-[95%]"
                                                                                                                                                                    style={{
                                                                                                                                                                      backgroundImage:
                                                                                                                                                                        "url('images/img_group388.svg')",
                                                                                                                                                                    }}
                                                                                                                                                                  >
                                                                                                                                                                    <Img
                                                                                                                                                                      className="absolute h-[5px] inset-[0] justify-center m-auto"
                                                                                                                                                                      src="images/img_vector_indigo_900_5x33.svg"
                                                                                                                                                                      alt="vector_Two"
                                                                                                                                                                    />
                                                                                                                                                                    <div
                                                                                                                                                                      className="absolute bg-cover bg-no-repeat bottom-[0] h-1 inset-x-[0] mx-auto w-full"
                                                                                                                                                                      style={{
                                                                                                                                                                        backgroundImage:
                                                                                                                                                                          "url('images/img_vector_indigo_900_5x33.svg')",
                                                                                                                                                                      }}
                                                                                                                                                                    >
                                                                                                                                                                      <div
                                                                                                                                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                                                                                                                                        style={{
                                                                                                                                                                          backgroundImage:
                                                                                                                                                                            "url('images/img_group391.svg')",
                                                                                                                                                                        }}
                                                                                                                                                                      >
                                                                                                                                                                        <div
                                                                                                                                                                          className="bg-cover bg-no-repeat flex flex-col h-1 items-center justify-start w-full"
                                                                                                                                                                          style={{
                                                                                                                                                                            backgroundImage:
                                                                                                                                                                              "url('images/img_group391.svg')",
                                                                                                                                                                          }}
                                                                                                                                                                        >
                                                                                                                                                                          <div
                                                                                                                                                                            className="bg-cover bg-no-repeat flex flex-col h-1 items-center justify-start w-full"
                                                                                                                                                                            style={{
                                                                                                                                                                              backgroundImage:
                                                                                                                                                                                "url('images/img_group391.svg')",
                                                                                                                                                                            }}
                                                                                                                                                                          >
                                                                                                                                                                            <Img
                                                                                                                                                                              className="h-1"
                                                                                                                                                                              src="images/img_vector_indigo_900_4x30.svg"
                                                                                                                                                                              alt="vector_Three"
                                                                                                                                                                            />
                                                                                                                                                                          </div>
                                                                                                                                                                        </div>
                                                                                                                                                                      </div>
                                                                                                                                                                      <div
                                                                                                                                                                        className="absolute bg-cover bg-no-repeat bottom-[0] h-[3px] inset-x-[0] mx-auto w-[91%]"
                                                                                                                                                                        style={{
                                                                                                                                                                          backgroundImage:
                                                                                                                                                                            "url('images/img_vector_indigo_900_4x30.svg')",
                                                                                                                                                                        }}
                                                                                                                                                                      >
                                                                                                                                                                        <div
                                                                                                                                                                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[3px] inset-x-[0] items-center justify-start mx-auto w-full"
                                                                                                                                                                          style={{
                                                                                                                                                                            backgroundImage:
                                                                                                                                                                              "url('images/img_group395.svg')",
                                                                                                                                                                          }}
                                                                                                                                                                        >
                                                                                                                                                                          <Img
                                                                                                                                                                            className="h-[3px]"
                                                                                                                                                                            src="images/img_group395.svg"
                                                                                                                                                                            alt="vector_Four"
                                                                                                                                                                          />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div
                                                                                                                                                                          className="absolute bg-cover bg-no-repeat bottom-[0] h-[3px] inset-x-[0] mx-auto w-[94%]"
                                                                                                                                                                          style={{
                                                                                                                                                                            backgroundImage:
                                                                                                                                                                              "url('images/img_group395.svg')",
                                                                                                                                                                          }}
                                                                                                                                                                        >
                                                                                                                                                                          <Img
                                                                                                                                                                            className="absolute bottom-[0] h-[3px] inset-x-[0] mx-auto"
                                                                                                                                                                            src="images/img_vector_indigo_900_3x27.svg"
                                                                                                                                                                            alt="vector_Five"
                                                                                                                                                                          />
                                                                                                                                                                          <div
                                                                                                                                                                            className="absolute bg-cover bg-no-repeat bottom-[0] h-0.5 inset-x-[0] mx-auto w-[93%]"
                                                                                                                                                                            style={{
                                                                                                                                                                              backgroundImage:
                                                                                                                                                                                "url('images/img_vector_indigo_900_3x27.svg')",
                                                                                                                                                                            }}
                                                                                                                                                                          >
                                                                                                                                                                            <div className="absolute bottom-[0] h-0.5 inset-x-[0] mx-auto w-full">
                                                                                                                                                                              <Img
                                                                                                                                                                                className="absolute h-0.5 inset-[0] justify-center m-auto"
                                                                                                                                                                                src="images/img_vector_indigo_900_2x25.svg"
                                                                                                                                                                                alt="vector_Six"
                                                                                                                                                                              />
                                                                                                                                                                              <Img
                                                                                                                                                                                className="absolute bottom-[0] h-0.5 inset-x-[0] mx-auto"
                                                                                                                                                                                src="images/img_vector_indigo_900_2x25.svg"
                                                                                                                                                                                alt="vector_Seven"
                                                                                                                                                                              />
                                                                                                                                                                            </div>
                                                                                                                                                                            <div
                                                                                                                                                                              className="absolute bg-cover bg-no-repeat bottom-[0] h-0.5 md:h-px inset-x-[0] mx-auto w-[89%]"
                                                                                                                                                                              style={{
                                                                                                                                                                                backgroundImage:
                                                                                                                                                                                  "url('images/img_vector_indigo_900_2x25.svg')",
                                                                                                                                                                              }}
                                                                                                                                                                            >
                                                                                                                                                                              <div
                                                                                                                                                                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-0.5 inset-x-[0] items-center justify-start mx-auto w-full"
                                                                                                                                                                                style={{
                                                                                                                                                                                  backgroundImage:
                                                                                                                                                                                    "url('images/img_group399.svg')",
                                                                                                                                                                                }}
                                                                                                                                                                              >
                                                                                                                                                                                <div
                                                                                                                                                                                  className="bg-cover bg-no-repeat flex flex-col h-px items-center justify-start w-full"
                                                                                                                                                                                  style={{
                                                                                                                                                                                    backgroundImage:
                                                                                                                                                                                      "url('images/img_group399.svg')",
                                                                                                                                                                                  }}
                                                                                                                                                                                >
                                                                                                                                                                                  <div
                                                                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-px items-center justify-start w-full"
                                                                                                                                                                                    style={{
                                                                                                                                                                                      backgroundImage:
                                                                                                                                                                                        "url('images/img_group401.svg')",
                                                                                                                                                                                    }}
                                                                                                                                                                                  >
                                                                                                                                                                                    <Img
                                                                                                                                                                                      className="h-px"
                                                                                                                                                                                      src="images/img_group401.svg"
                                                                                                                                                                                      alt="vector_Eight"
                                                                                                                                                                                    />
                                                                                                                                                                                  </div>
                                                                                                                                                                                </div>
                                                                                                                                                                              </div>
                                                                                                                                                                              <div
                                                                                                                                                                                className="absolute bg-cover bg-no-repeat bottom-[0] h-px inset-x-[0] mx-auto w-[79%]"
                                                                                                                                                                                style={{
                                                                                                                                                                                  backgroundImage:
                                                                                                                                                                                    "url('images/img_group401.svg')",
                                                                                                                                                                                }}
                                                                                                                                                                              >
                                                                                                                                                                                <div
                                                                                                                                                                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-px inset-x-[0] items-center justify-start mx-auto w-full"
                                                                                                                                                                                  style={{
                                                                                                                                                                                    backgroundImage:
                                                                                                                                                                                      "url('images/img_group402.svg')",
                                                                                                                                                                                  }}
                                                                                                                                                                                >
                                                                                                                                                                                  <Img
                                                                                                                                                                                    className="h-px"
                                                                                                                                                                                    src="images/img_group402.svg"
                                                                                                                                                                                    alt="vector_Nine"
                                                                                                                                                                                  />
                                                                                                                                                                                </div>
                                                                                                                                                                                <div
                                                                                                                                                                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-px inset-x-[0] items-center justify-start mx-auto w-[78%]"
                                                                                                                                                                                  style={{
                                                                                                                                                                                    backgroundImage:
                                                                                                                                                                                      "url('images/img_group403.svg')",
                                                                                                                                                                                  }}
                                                                                                                                                                                >
                                                                                                                                                                                  <div
                                                                                                                                                                                    className="bg-cover bg-no-repeat flex flex-col h-px items-center justify-start w-[86%] md:w-full"
                                                                                                                                                                                    style={{
                                                                                                                                                                                      backgroundImage:
                                                                                                                                                                                        "url('images/img_group403.svg')",
                                                                                                                                                                                    }}
                                                                                                                                                                                  >
                                                                                                                                                                                    <div
                                                                                                                                                                                      className="bg-cover bg-no-repeat flex flex-col h-px items-center justify-start w-[84%] md:w-full"
                                                                                                                                                                                      style={{
                                                                                                                                                                                        backgroundImage:
                                                                                                                                                                                          "url('images/img_group403.svg')",
                                                                                                                                                                                      }}
                                                                                                                                                                                    >
                                                                                                                                                                                      <div
                                                                                                                                                                                        className="bg-cover bg-no-repeat flex flex-col h-px items-center justify-start w-[70%] md:w-full"
                                                                                                                                                                                        style={{
                                                                                                                                                                                          backgroundImage:
                                                                                                                                                                                            "url('images/img_group406.svg')",
                                                                                                                                                                                        }}
                                                                                                                                                                                      >
                                                                                                                                                                                        <Img
                                                                                                                                                                                          className="h-px"
                                                                                                                                                                                          src="images/img_vector_indigo_900_1x5.svg"
                                                                                                                                                                                          alt="vector_Ten"
                                                                                                                                                                                        />
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                </div>
                                                                                                                                                                              </div>
                                                                                                                                                                            </div>
                                                                                                                                                                          </div>
                                                                                                                                                                        </div>
                                                                                                                                                                      </div>
                                                                                                                                                                    </div>
                                                                                                                                                                  </div>
                                                                                                                                                                </div>
                                                                                                                                                              </div>
                                                                                                                                                            </div>
                                                                                                                                                          </div>
                                                                                                                                                        </div>
                                                                                                                                                      </div>
                                                                                                                                                    </div>
                                                                                                                                                  </div>
                                                                                                                                                </div>
                                                                                                                                              </div>
                                                                                                                                            </div>
                                                                                                                                          </div>
                                                                                                                                        </div>
                                                                                                                                      </div>
                                                                                                                                    </div>
                                                                                                                                  </div>
                                                                                                                                </div>
                                                                                                                              </div>
                                                                                                                            </div>
                                                                                                                          </div>
                                                                                                                        </div>
                                                                                                                      </div>
                                                                                                                    </div>
                                                                                                                  </div>
                                                                                                                </div>
                                                                                                              </div>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <Img
                                                    className="absolute h-2 inset-x-[0] mx-auto object-cover top-[0] w-[92%]"
                                                    src="images/img_clippathgroup.png"
                                                    alt="clippathgroup"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-0.5 inset-x-[0] mx-auto object-cover top-[0] w-[92%]"
                                        src="images/img_clippathgroup_2x45.png"
                                        alt="clippathgroup_One"
                                      />
                                      <Img
                                        className="absolute h-2.5 inset-x-[0] mx-auto top-[0]"
                                        src="images/img_checkmark.svg"
                                        alt="checkmark"
                                      />
                                    </div>
                                    <div className="absolute bottom-[0] h-[11px] inset-x-[0] mx-auto w-[94%]">
                                      <Img
                                        className="h-[11px] m-auto object-cover w-full"
                                        src="images/img_clippathgroup_11x46.png"
                                        alt="clippathgroup_Two"
                                      />
                                      <Img
                                        className="absolute h-[11px] inset-[0] justify-center m-auto"
                                        src="images/img_checkmark.svg"
                                        alt="checkmark_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[23px] inset-[0] justify-center m-auto"
                                  src="images/img_search.svg"
                                  alt="search"
                                />
                              </div>
                              <div className="absolute h-[19px] left-[0] top-[0] w-[61%]">
                                <Img
                                  className="h-[19px] m-auto object-cover w-full"
                                  src="images/img_clippathgroup_19x31.png"
                                  alt="clippathgroup_Three"
                                />
                                <Img
                                  className="absolute h-3 inset-x-[0] mx-auto top-[11%]"
                                  src="images/img_location_gray_400.svg"
                                  alt="location_Two"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[22px] items-end justify-start right-[0] w-[89%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group212.svg')",
                              }}
                            >
                              <div className="flex flex-row gap-2 items-end justify-end w-[69%] md:w-full">
                                <div className="h-5 relative w-[42%]">
                                  <Img
                                    className="absolute h-5 inset-[0] justify-center m-auto object-cover w-full"
                                    src="images/img_clippathgroup_20x13.png"
                                    alt="clippathgroup_Four"
                                  />
                                  <Img
                                    className="absolute h-5 inset-[0] justify-center m-auto object-cover w-[16%]"
                                    src="images/img_clippathgroup_20x2.png"
                                    alt="clippathgroup_Five"
                                  />
                                  <Img
                                    className="absolute h-5 inset-[0] justify-center m-auto object-cover w-[31%]"
                                    src="images/img_clippathgroup_20x4.png"
                                    alt="clippathgroup_Six"
                                  />
                                </div>
                                <Img
                                  className="h-2.5 mt-[9px] w-2.5"
                                  src="images/img_vector.svg"
                                  alt="vector_Eleven"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] md:h-3.5 h-5 inset-x-[0] mx-auto p-0.5 w-[93%]"
                            style={{
                              backgroundImage: "url('images/img_group213.svg')",
                            }}
                          >
                            <div className="absolute md:h-3.5 h-[15px] inset-[0] justify-center m-auto w-[64%]">
                              <div className="absolute bottom-[0] h-3.5 md:h-[11px] inset-x-[0] mx-auto w-full">
                                <div className="h-3.5 md:h-[11px] m-auto w-full">
                                  <div className="md:h-2 h-3.5 m-auto w-full">
                                    <div className="md:h-2 h-3.5 m-auto w-full">
                                      <div className="md:h-2 h-3.5 m-auto w-full">
                                        <div className="md:h-2 h-3.5 m-auto w-full">
                                          <div className="absolute md:h-2 h-3.5 inset-y-[0] my-auto right-[0] w-full">
                                            <div className="absolute bottom-[0] md:h-2 h-[13px] right-[0] w-[90%]">
                                              <div className="absolute bottom-[0] md:h-2 h-[11px] right-[0] w-[85%]">
                                                <div className="absolute md:h-2 h-[11px] inset-y-[0] my-auto right-[0] w-[87%]">
                                                  <div className="absolute bottom-[0] h-[7px] left-[0] w-full">
                                                    <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[0] w-[79%]">
                                                      <div className="flex flex-row items-center justify-start w-[14%]">
                                                        <Img
                                                          className="h-1 md:h-auto object-cover w-full"
                                                          src="images/img_clippathgroup_4x2.png"
                                                          alt="clippathgroup_Seven"
                                                        />
                                                        <Img
                                                          className="h-1"
                                                          src="images/img_vector_gray_900.svg"
                                                          alt="vector_Twelve"
                                                        />
                                                      </div>
                                                      <div className="md:h-[5px] h-[7px] relative w-[74%]">
                                                        <div className="absolute h-[5px] right-[0] top-[0] w-[73%]">
                                                          <div className="absolute flex flex-row h-full inset-[0] items-start justify-center m-auto w-full">
                                                            <div className="flex flex-row items-start justify-start w-[13%]">
                                                              <Img
                                                                className="md:h-auto h-px object-cover w-px"
                                                                src="images/img_clippathgroup_1x1.png"
                                                                alt="clippathgroup_Eight"
                                                              />
                                                              <Img
                                                                className="h-px w-px"
                                                                src="images/img_vector_gray_900_1x1.svg"
                                                                alt="vector_Thirteen"
                                                              />
                                                              <Img
                                                                className="h-0.5 md:h-auto object-cover w-px"
                                                                src="images/img_clippathgroup_2x1.png"
                                                                alt="clippathgroup_Nine"
                                                              />
                                                              <Img
                                                                className="h-0.5 w-px"
                                                                src="images/img_vector_gray_900_2x1.svg"
                                                                alt="vector_Fourteen"
                                                              />
                                                            </div>
                                                            <div className="h-1 relative w-1/4">
                                                              <div className="flex flex-row h-full items-center justify-start ml-auto w-px">
                                                                <Img
                                                                  className="md:h-auto h-px object-cover w-px"
                                                                  src="images/img_clippathgroup_1.png"
                                                                  alt="clippathgroup_Ten"
                                                                />
                                                                <Img
                                                                  className="h-px w-px"
                                                                  src="images/img_vector_1x1.svg"
                                                                  alt="vector_Fifteen"
                                                                />
                                                              </div>
                                                              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                                                <Img
                                                                  className="h-1 md:h-auto object-cover w-full"
                                                                  src="images/img_clippathgroup_2.png"
                                                                  alt="clippathgroup_Eleven"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div className="flex flex-row h-px items-center justify-start w-px">
                                                              <Img
                                                                className="md:h-auto h-px object-cover w-px"
                                                                src="images/img_clippathgroup_3.png"
                                                                alt="clippathgroup_Twelve"
                                                              />
                                                              <Img
                                                                className="h-px w-px"
                                                                src="images/img_vector_2.svg"
                                                                alt="vector_Sixteen"
                                                              />
                                                            </div>
                                                          </div>
                                                          <Img
                                                            className="absolute bottom-[0] h-1 right-[0]"
                                                            src="images/img_vector_gray_900.svg"
                                                            alt="vector_Seventeen"
                                                          />
                                                        </div>
                                                        <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[55%]">
                                                          <Img
                                                            className="h-1 md:h-auto object-cover w-full"
                                                            src="images/img_clippathgroup_4x6.png"
                                                            alt="clippathgroup_Thirteen"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[0] h-1 left-[21%]"
                                                      src="images/img_vector_gray_900_4x6.svg"
                                                      alt="vector_Eighteen"
                                                    />
                                                    <div className="absolute bottom-[0] h-1 right-[0] w-[43%]">
                                                      <Img
                                                        className="h-1 m-auto object-cover w-full"
                                                        src="images/img_clippathgroup_4x8.png"
                                                        alt="clippathgroup_Fourteen"
                                                      />
                                                      <Img
                                                        className="absolute h-[3px] inset-x-[0] mx-auto top-[0]"
                                                        src="images/img_vector_gray_900_3x8.svg"
                                                        alt="vector_Nineteen"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="absolute flex flex-row items-start justify-evenly left-[16%] top-[27%] w-[37%]">
                                                    <div className="flex flex-row h-px items-center justify-start w-px">
                                                      <Img
                                                        className="md:h-auto h-px object-cover w-px"
                                                        src="images/img_clippathgroup_4.png"
                                                        alt="clippathgroup_Fifteen"
                                                      />
                                                      <Img
                                                        className="h-px w-px"
                                                        src="images/img_vector_3.svg"
                                                        alt="vector_Twenty"
                                                      />
                                                    </div>
                                                    <div className="flex flex-row items-start justify-start w-px">
                                                      <Img
                                                        className="h-0.5 w-px"
                                                        src="images/img_vector_gray_900.svg"
                                                        alt="vector_TwentyOne"
                                                      />
                                                      <Img
                                                        className="h-0.5 md:h-auto object-cover w-px"
                                                        src="images/img_clippathgroup_5.png"
                                                        alt="clippathgroup_Sixteen"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="absolute h-2 right-[0] top-[0] w-[22%]">
                                                    <Img
                                                      className="h-2 m-auto object-cover w-full"
                                                      src="images/img_clippathgroup_8x4.png"
                                                      alt="clippathgroup_Seventeen"
                                                    />
                                                    <Img
                                                      className="absolute h-2 inset-[0] justify-center m-auto"
                                                      src="images/img_vector_gray_900_8x4.svg"
                                                      alt="vector_TwentyTwo"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="absolute bottom-[0] h-1.5 left-[0] w-[41%]">
                                                  <Img
                                                    className="h-1.5 m-auto object-cover w-full"
                                                    src="images/img_clippathgroup_6x9.png"
                                                    alt="clippathgroup_Eighteen"
                                                  />
                                                  <Img
                                                    className="absolute h-1.5 inset-[0] justify-center m-auto"
                                                    src="images/img_checkmark_gray_900.svg"
                                                    alt="checkmark_Two"
                                                  />
                                                </div>
                                              </div>
                                              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[27%]">
                                                <Img
                                                  className="h-0.5 md:h-auto object-cover w-full"
                                                  src="images/img_clippathgroup_2x7.png"
                                                  alt="clippathgroup_Nineteen"
                                                />
                                              </div>
                                            </div>
                                            <div className="absolute bottom-[21%] flex flex-row items-center justify-start left-[0] w-[4%]">
                                              <Img
                                                className="h-[3px] md:h-auto object-cover w-full"
                                                src="images/img_clippathgroup_3x1.png"
                                                alt="clippathgroup_Twenty"
                                              />
                                              <Img
                                                className="h-[3px]"
                                                src="images/img_vector_gray_900.svg"
                                                alt="vector_TwentyThree"
                                              />
                                            </div>
                                            <div className="absolute flex flex-col items-center justify-start left-[10%] top-[0] w-1/4">
                                              <Img
                                                className="md:h-auto h-px object-cover w-full"
                                                src="images/img_clippathgroup_1x7.png"
                                                alt="clippathgroup_TwentyOne"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute h-[3px] left-[13%] top-[0]"
                                            src="images/img_vector_gray_900_3x7.svg"
                                            alt="vector_TwentyFour"
                                          />
                                          <div className="absolute bottom-[0] h-2 left-[0] w-[44%]">
                                            <Img
                                              className="h-2 m-auto object-cover w-full"
                                              src="images/img_clippathgroup_8x13.png"
                                              alt="clippathgroup_TwentyTwo"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto pb-[5px] px-[5px] w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group412.svg')",
                                              }}
                                            >
                                              <div className="flex flex-col items-center justify-start w-0.5 md:w-full">
                                                <Img
                                                  className="md:h-auto h-px object-cover w-0.5 sm:w-full"
                                                  src="images/img_clippathgroup_1x2.png"
                                                  alt="clippathgroup_TwentyThree"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-[7px] left-[17%] top-[0]"
                                          src="images/img_checkmark_gray_900_7x16.svg"
                                          alt="checkmark_Three"
                                        />
                                      </div>
                                      <div className="absolute flex flex-col items-center justify-start right-[23%] top-[0] w-2/5">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <Img
                                            className="md:h-auto h-px object-cover w-full"
                                            src="images/img_clippathgroup_1x12.png"
                                            alt="clippathgroup_TwentyFour"
                                          />
                                        </div>
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <Img
                                            className="h-[3px] md:h-auto object-cover w-full"
                                            src="images/img_clippathgroup_3x12.png"
                                            alt="clippathgroup_TwentyFive"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat h-1 md:h-px pt-0.5 px-0.5 right-[23%] top-[0] w-2/5"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group408.svg')",
                                      }}
                                    >
                                      <div className="absolute bottom-[0] flex flex-col h-px items-center justify-start left-1/2 w-px">
                                        <Img
                                          className="md:h-auto h-px object-cover w-px"
                                          src="images/img_clippathgroup_6.png"
                                          alt="clippathgroup_TwentySix"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-px left-1/2 w-px"
                                        src="images/img_vector_gray_900.svg"
                                        alt="vector_TwentyFive"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-[10%] w-[64%]">
                                    <div className="h-[3px] relative w-1">
                                      <Img
                                        className="h-[3px] m-auto object-cover w-1"
                                        src="images/img_clippathgroup_3x4.png"
                                        alt="clippathgroup_TwentySeven"
                                      />
                                      <Img
                                        className="absolute h-[3px] inset-[0] justify-center m-auto w-1"
                                        src="images/img_vector_gray_900.svg"
                                        alt="vector_TwentySix"
                                      />
                                    </div>
                                    <div className="flex flex-row items-center justify-start w-px">
                                      <Img
                                        className="h-0.5 w-px"
                                        src="images/img_vector_gray_900.svg"
                                        alt="vector_TwentySeven"
                                      />
                                      <Img
                                        className="h-0.5 md:h-auto object-cover w-px"
                                        src="images/img_clippathgroup_7.png"
                                        alt="clippathgroup_TwentyEight"
                                      />
                                    </div>
                                    <div className="h-2.5 relative w-[32%]">
                                      <Img
                                        className="absolute h-2.5 inset-[0] justify-center m-auto object-cover w-full"
                                        src="images/img_clippathgroup_10x6.png"
                                        alt="clippathgroup_TwentyNine"
                                      />
                                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[17%]">
                                        <Img
                                          className="h-2.5 md:h-auto object-cover w-full"
                                          src="images/img_clippathgroup_10x1.png"
                                          alt="clippathgroup_Thirty"
                                        />
                                      </div>
                                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[34%]">
                                        <Img
                                          className="h-2.5 md:h-auto object-cover w-full"
                                          src="images/img_clippathgroup_10x2.png"
                                          alt="clippathgroup_ThirtyOne"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-2.5 right-[0]"
                                  src="images/img_call.svg"
                                  alt="call"
                                />
                              </div>
                              <div className="absolute h-3.5 left-[20%] top-[0] w-[30%]">
                                <Img
                                  className="absolute h-3.5 inset-[0] justify-center m-auto object-cover w-full"
                                  src="images/img_clippathgroup_14x9.png"
                                  alt="clippathgroup_ThirtyTwo"
                                />
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[12%]">
                                  <Img
                                    className="h-3.5 md:h-auto object-cover w-full"
                                    src="images/img_clippathgroup_14x1.png"
                                    alt="clippathgroup_ThirtyThree"
                                  />
                                </div>
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[23%]">
                                  <Img
                                    className="h-3.5 md:h-auto object-cover w-full"
                                    src="images/img_clippathgroup_14x2.png"
                                    alt="clippathgroup_ThirtyFour"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-3.5 left-[15%] top-[10%]"
                              src="images/img_car.svg"
                              alt="car"
                            />
                          </div>
                        </div>
                        <Img
                          className="h-[26px] ml-7 md:ml-[0]"
                          src="images/img_tatalogo.svg"
                          alt="tatalogo"
                        />
                        <Img
                          className="h-[23px] ml-7 md:ml-[0] md:mt-0 mt-[3px]"
                          src="images/img_cut.svg"
                          alt="cut"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="md:ml-[0] ml-[456px] mt-[21px] text-[10px] text-white-A700"
                    >
                      <Text size="txtMontserratRomanBold10">
                        Copyright © 2023 TheAiChamp
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
