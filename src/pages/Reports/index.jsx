import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto pb-[93px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 border-b border-deep_purple-A700 border-solid flex flex-col items-center justify-center p-[13px] w-full">
              <div className="flex flex-col items-center justify-center mt-2 w-[98%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mr-[18px] w-[99%] md:w-full">
                  <div
                    className="common-pointer md:h-[53px] h-[63px] relative w-[22%] sm:w-full"
                    onClick={() => navigate("")}
                  >
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
                    className="h-[81px] sm:mt-0 mt-[5px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
                <div className="flex flex-row font-montserrat gap-[70px] items-start justify-end md:ml-[0] ml-[1172px] mt-2.5 w-[16%] md:w-full">
                  <Img
                    className="h-[27px]"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="mt-[3px] text-sm text-white-A700"
                    size="txtMontserratRomanBold14"
                  >
                    KUMAR GAURAV
                  </Text>
                </div>
                <ul className="flex md:flex-col flex-row font-montserrat md:hidden items-center justify-start md:ml-[0] ml-[149px] mr-[154px] mt-[5px] w-[79%] md:w-full common-row-list">
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
                      <Text size="txtMontserratRomanBold17">UPCOMING CARS</Text>
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
            </div>
          </header>
          <div className="md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-center max-w-[976px] mt-28 mx-auto md:px-5 w-full">
            <Text
              className="bg-deep_purple-A700 flex-1 h-[29px] justify-center mb-[7px] pb-0.5 pl-3.5 pr-5 pt-[5px] rounded-[10px] text-[17px] text-white-A700 w-full"
              size="txtInterBold17"
            >
              CATEGORY ONE
            </Text>
            <Button className="bg-deep_purple-A700 cursor-pointer flex-1 font-bold leading-[normal] min-w-[169px] mt-1.5 py-1 rounded-[10px] text-base text-center text-white-A700 w-full">
              CATEGORY TWO
            </Button>
            <Button className="bg-deep_purple-A700 cursor-pointer flex-1 font-bold leading-[normal] mb-0.5 min-w-[169px] mt-[5px] py-[5px] rounded-[10px] text-[15px] text-center text-white-A700 w-full">
              CATEGORY THREE
            </Button>
            <Button className="bg-deep_purple-A700 cursor-pointer flex-1 font-bold leading-[normal] min-w-[169px] mt-[7px] py-1 rounded-[10px] text-base text-center text-white-A700 w-full">
              CATEGORY FOUR
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[186px] grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1230px] mt-[70px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[21%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-white-A700 w-max"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[21%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-white-A700 w-max"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-[13%]">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-start justify-start max-w-[1366px] mt-[9px] mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-[22px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[172px] h-[200px] mb-0.5 sm:ml-[0] relative w-full">
                <div className="md:h-[170px] h-[193px] m-auto w-[95%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[95%]">
                    <Line className="bg-white-A700 h-px w-full" />
                    <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[1%]">
                        <div className="bg-white-A700 h-1.5 md:ml-[0] ml-[3px] w-1/4"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          4
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          5
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          7
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-center justify-evenly left-[0] top-[0] w-[6%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          800
                        </Text>
                        <div className="bg-white-A700 h-px mb-2.5 mt-[3px] w-[18%]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          600
                        </Text>
                        <div className="bg-white-A700 h-px my-1.5 w-[18%]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-[25px] w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          400
                        </Text>
                        <div className="bg-white-A700 h-px my-1.5 w-[18%]"></div>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-evenly mt-[25px] w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          200
                        </Text>
                        <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[15px] mt-[25px] w-[56%] md:w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          0
                        </Text>
                        <div className="bg-white-A700 h-px ml-[5px] my-1.5 w-[32%]"></div>
                      </div>
                    </div>
                    <Line className="bg-white-A700 h-40 mb-[7px] mt-[3px] w-px" />
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat h-40 md:h-[152px] pt-[7px] px-[7px] right-[0] top-[2%] w-[90%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group207.svg')" }}
                >
                  <Img
                    className="absolute bottom-[0] h-[138px] left-[4%]"
                    src="images/img_group.svg"
                    alt="group"
                  />
                  <Img
                    className="absolute bottom-[0] h-[152px] right-[4%]"
                    src="images/img_group_blue_a200_01.svg"
                    alt="group_One"
                  />
                </div>
              </div>
              <div className="sm:h-[170px] md:h-[172px] h-[200px] sm:ml-[0] sm:mt-0 mt-0.5 relative w-full">
                <div className="md:h-[170px] h-[193px] m-auto w-[96%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[95%]">
                    <Line className="bg-white-A700 h-px w-[99%]" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                        <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          9
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-end justify-start w-[3%]">
                        <div className="bg-white-A700 h-1.5 mr-0.5 w-[8%]"></div>
                        <Text
                          className="text-center text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          12
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-center justify-evenly left-[0] top-[0] w-[7%]">
                    <div className="flex flex-col gap-5 items-end justify-start w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                        <Text
                          className="text-right text-white-A700 text-xs"
                          size="txtInterRegular12"
                        >
                          1000
                        </Text>
                        <div className="bg-white-A700 h-px mb-2.5 mt-[3px] w-[16%]"></div>
                      </div>
                      <div className="flex flex-col gap-[25px] items-start justify-start w-[85%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="text-right text-white-A700 text-xs"
                            size="txtInterRegular12"
                          >
                            750
                          </Text>
                          <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-evenly w-full">
                          <Text
                            className="text-right text-white-A700 text-xs"
                            size="txtInterRegular12"
                          >
                            500
                          </Text>
                          <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-evenly w-full">
                          <Text
                            className="text-right text-white-A700 text-xs"
                            size="txtInterRegular12"
                          >
                            250
                          </Text>
                          <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-end ml-3.5 md:ml-[0] w-[58%] md:w-full">
                          <Text
                            className="text-right text-white-A700 text-xs"
                            size="txtInterRegular12"
                          >
                            0
                          </Text>
                          <div className="bg-white-A700 h-px ml-[5px] my-1.5 w-[32%]"></div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-white-A700 h-40 mb-[7px] mt-[3px] w-px" />
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex p-[3px] right-[0] top-[2%] w-[90%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group208.svg')" }}
                >
                  <Img
                    className="h-[145px] ml-4"
                    src="images/img_group_light_blue_a200.svg"
                    alt="group"
                  />
                  <Img
                    className="h-[103px] ml-[-139.82px] mr-[104px] mt-[19px] z-[1]"
                    src="images/img_group_teal_400.svg"
                    alt="group_One"
                  />
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[90px] grid sm:grid-cols-1 grid-cols-4 md:ml-[0] ml-[53px] mt-[41px] w-[39%]"
              orientation="horizontal"
            >
              <div className="h-[13px] relative w-full">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-full">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[21%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-full">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-white-A700 w-max"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
              <div className="h-[13px] relative w-full">
                <div className="absolute bg-deep_purple-A700 h-[13px] inset-[0] justify-center m-auto rounded-md w-full"></div>
                <Text
                  className="absolute bottom-[0] left-[19%] text-[10px] text-white-A700"
                  size="txtInterBold10"
                >
                  FILTER{" "}
                </Text>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
              <div className="md:h-[170px] h-[200px] md:mt-0 mt-3.5 relative w-[49%] md:w-full">
                <div className="md:h-[170px] h-[193px] m-auto w-[96%] md:w-full">
                  <div className="md:h-[170px] h-[193px] m-auto w-full">
                    <div className="md:h-[170px] h-[193px] m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[95%]">
                        <Line className="bg-white-A700 h-px w-[99%]" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[1%]">
                            <div className="bg-white-A700 h-1.5 md:ml-[0] ml-[3px] w-1/4"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              1
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              2
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[58px] grid grid-cols-2 w-[13%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] w-full">
                              <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                3
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start sm:ml-[0] w-full">
                              <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                4
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              5
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              6
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 md:ml-[0] ml-[3px] w-[15%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              7
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              8
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-[2%]">
                            <div className="bg-white-A700 h-1.5 ml-1 md:ml-[0] w-[13%]"></div>
                            <Text
                              className="text-center text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              9
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-row items-center justify-evenly left-[0] top-[0] w-[7%]">
                        <div className="flex flex-col gap-5 items-end justify-start w-full">
                          <div className="flex flex-row gap-[5px] items-start justify-evenly w-full">
                            <Text
                              className="text-right text-white-A700 text-xs"
                              size="txtInterRegular12"
                            >
                              1000
                            </Text>
                            <div className="bg-white-A700 h-px mb-2.5 mt-[3px] w-[16%]"></div>
                          </div>
                          <div className="flex flex-col gap-[25px] items-start justify-start w-[85%] md:w-full">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Text
                                className="text-right text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                750
                              </Text>
                              <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-evenly w-full">
                              <Text
                                className="text-right text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                500
                              </Text>
                              <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-evenly w-full">
                              <Text
                                className="text-right text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                250
                              </Text>
                              <div className="bg-white-A700 h-px my-1.5 w-[19%]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-end ml-3.5 md:ml-[0] w-[58%] md:w-full">
                              <Text
                                className="text-right text-white-A700 text-xs"
                                size="txtInterRegular12"
                              >
                                0
                              </Text>
                              <div className="bg-white-A700 h-px ml-[5px] my-1.5 w-[32%]"></div>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-white-A700 h-40 mb-[7px] mt-[3px] w-px" />
                      </div>
                    </div>
                    <Img
                      className="absolute h-40 right-[1%] top-[2%]"
                      src="images/img_group207.svg"
                      alt="group"
                    />
                  </div>
                  <Img
                    className="absolute h-[134px] right-[0] top-[8%]"
                    src="images/img_group_lime_900.svg"
                    alt="group_One"
                  />
                </div>
                <Img
                  className="absolute h-[115px] right-[0] top-[8%]"
                  src="images/img_group_lime_600.svg"
                  alt="group_Two"
                />
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start p-3 w-[49%] md:w-full">
                <div className="h-52 md:h-[212px] mb-[5px] relative w-[37%]">
                  <div className="absolute md:h-20 h-40 inset-[0] justify-center m-auto w-40">
                    <div className="md:h-20 h-40 m-auto w-40">
                      <div className="absolute md:h-20 h-36 inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-20 inset-x-[0] mx-auto top-[0] w-[99%]">
                          <div className="absolute h-20 inset-y-[0] my-auto right-[0] w-[83%]">
                            <div className="absolute h-20 inset-y-[0] my-auto right-[0] w-[94%]">
                              <div className="absolute h-20 inset-y-[0] my-auto right-[0] w-[69%]">
                                <div className="absolute bottom-[0] h-[61px] right-[0] w-[96%]">
                                  <Img
                                    className="absolute bottom-[0] h-[58px] inset-x-[0] mx-auto"
                                    src="images/img_location_green_700.svg"
                                    alt="location_Two"
                                  />
                                  <Img
                                    className="absolute h-[61px] inset-y-[0] left-[0] my-auto"
                                    src="images/img_checkmark_green_700.svg"
                                    alt="checkmark"
                                  />
                                </div>
                                <Img
                                  className="absolute h-20 inset-y-[0] left-[0] my-auto"
                                  src="images/img_send.svg"
                                  alt="send"
                                />
                              </div>
                              <Img
                                className="absolute h-[79px] inset-y-[0] left-[0] my-auto"
                                src="images/img_checkmark_green_700.svg"
                                alt="checkmark_One"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[67px] left-[0]"
                              src="images/img_checkmark_green_700.svg"
                              alt="checkmark_Two"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[60px] left-[0]"
                            src="images/img_send.svg"
                            alt="send_One"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[77px] left-[0]"
                          src="images/img_location_green_700.svg"
                          alt="location_Three"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-20 left-[20%]"
                        src="images/img_location_green_700.svg"
                        alt="location_Four"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[1%] h-[77px] right-[3%]"
                      src="images/img_location_green_700.svg"
                      alt="location_Five"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[34%] h-[30px] right-[17%]"
                    src="images/img_checkmark_green_700.svg"
                    alt="checkmark_Three"
                  />
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-[94%] md:w-full">
                        <div className="flex flex-col justify-start w-[38%]">
                          <div className="md:h-[30px] h-[42px] ml-7 md:ml-[0] relative w-[65%]">
                            <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[0] w-[53%]">
                              <Text
                                className="text-green-700 text-right text-xs"
                                size="txtInterRegular12Green700"
                              >
                                374
                              </Text>
                              <Img
                                className="h-[19px] mt-[11px]"
                                src="images/img_checkmark_green_700_19x6.svg"
                                alt="checkmark_Four"
                              />
                            </div>
                            <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-[0] w-[57%]">
                              <Text
                                className="text-green-700 text-right text-xs"
                                size="txtInterRegular12Green700"
                              >
                                110
                              </Text>
                              <Img
                                className="h-4 mt-[11px]"
                                src="images/img_checkmark_green_700_19x6.svg"
                                alt="checkmark_Five"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[3px] w-[46%] md:w-full">
                            <Text
                              className="mb-1.5 text-green-700 text-right text-xs"
                              size="txtInterRegular12Green700"
                            >
                              521
                            </Text>
                            <Img
                              className="h-[9px] mt-[11px]"
                              src="images/img_checkmark_green_700_19x6.svg"
                              alt="checkmark_Six"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[9px] justify-start w-2/5">
                          <div className="md:h-[30px] h-[46px] mr-[30px] relative w-[66%]">
                            <div className="absolute bottom-[0] md:h-[15px] h-[26px] right-[0] w-[51%]">
                              <Img
                                className="absolute bottom-[0] h-3.5 left-[0] w-[13px]"
                                src="images/img_checkmark_green_700_19x6.svg"
                                alt="checkmark_Seven"
                              />
                              <Text
                                className="absolute right-[0] text-green-700 text-xs top-[0]"
                                size="txtInterRegular12Green700"
                              >
                                40
                              </Text>
                            </div>
                            <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[0] w-1/2">
                              <Img
                                className="h-[18px] mt-[11px]"
                                src="images/img_checkmark_green_700_19x6.svg"
                                alt="checkmark_Eight"
                              />
                              <Text
                                className="text-green-700 text-xs"
                                size="txtInterRegular12Green700"
                              >
                                567
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-end ml-12 md:ml-[0] w-[45%] md:w-full">
                            <Img
                              className="h-[7px] mt-[11px]"
                              src="images/img_checkmark_green_700_19x6.svg"
                              alt="checkmark_Nine"
                            />
                            <Text
                              className="mb-1 text-green-700 text-xs"
                              size="txtInterRegular12Green700"
                            >
                              613
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[33px] items-start justify-between w-full">
                        <div className="flex flex-row items-start justify-evenly mt-[18px] w-[18%]">
                          <Text
                            className="text-green-700 text-right text-xs"
                            size="txtInterRegular12Green700"
                          >
                            825
                          </Text>
                          <Img
                            className="h-[7px] mt-1"
                            src="images/img_checkmark_green_700_19x6.svg"
                            alt="checkmark_Ten"
                          />
                        </div>
                        <div className="flex flex-col gap-[38px] justify-start w-[69%]">
                          <div className="flex flex-row items-end justify-end md:ml-[0] ml-[120px] w-[26%] md:w-full">
                            <Img
                              className="h-[3px] mb-[3px] mt-2"
                              src="images/img_vector_green_700.svg"
                              alt="vector_Fifteen"
                            />
                            <Text
                              className="text-green-700 text-xs"
                              size="txtInterRegular12Green700"
                            >
                              289
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[67px] items-start justify-start mr-8 w-[81%] md:w-full">
                            <div className="flex flex-row items-end justify-evenly mt-[17px] w-[21%]">
                              <Text
                                className="mt-[7px] text-green-700 text-right text-xs"
                                size="txtInterRegular12Green700"
                              >
                                655
                              </Text>
                              <Line className="bg-green-700 h-[19px] mb-[3px] w-[3px]" />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[28%]">
                              <Img
                                className="h-[15px] mb-[3px]"
                                src="images/img_checkmark_green_700_19x6.svg"
                                alt="checkmark_Eleven"
                              />
                              <Text
                                className="mt-[3px] text-green-700 text-xs"
                                size="txtInterRegular12Green700"
                              >
                                706
                              </Text>
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
    </>
  );
};

export default ReportsPage;
