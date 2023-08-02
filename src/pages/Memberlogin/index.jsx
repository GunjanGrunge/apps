import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const MemberloginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-inter gap-[25px] h-[1024px] items-start justify-start mx-auto p-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_memberlogin.png')" }}
      >
        <div
          className="common-pointer h-16 md:h-[52px] ml-3.5 md:ml-[0] md:px-5 relative w-[22%]"
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
            <Line className="bg-white-A700 h-px w-[98%]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 justify-start mb-[660px] md:ml-[0] ml-[9px] md:px-5 w-1/5 md:w-full">
          <div className="flex font-montserrat md:h-[158px] h-[161px] justify-end relative w-full">
            <Text
              className="common-pointer mt-auto mx-auto md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[5.46px]"
              size="txtMontserratRomanBold26"
              onClick={() => navigate("/reports")}
            >
              LOGIN
            </Text>
            <div className="absolute flex flex-col font-roboto h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="bg-white-A700 border border-solid border-white-A700 h-[35px] justify-center pl-[30px] pr-[35px] pt-1 sm:px-5 rounded-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700 w-[261px]"
                  size="txtRobotoRegular25"
                >
                  MemberShip-ID
                </Text>
                <div className="h-10 md:h-[70px] mt-[31px] relative w-full">
                  <div className="absolute bg-white-A700 border border-solid border-white-A700 h-[35px] inset-x-[0] mx-auto rounded-[17px] top-[0] w-full"></div>
                  <Text
                    className="absolute h-max inset-y-[0] left-[12%] my-auto sm:text-[29px] md:text-[31px] text-[33px] text-gray-700"
                    size="txtRobotoRegular33"
                  >
                    *********
                  </Text>
                </div>
                <div className="border-[3px] border-solid border-white-A700 h-[35px] mt-[18px] rounded-[17px] w-full"></div>
              </div>
            </div>
          </div>
          <a
            href="javascript:"
            className="ml-2 md:ml-[0] text-[15px] text-white-A700"
          >
            <Text size="txtRobotoRegular15">Forgot Password</Text>
          </a>
        </div>
      </div>
    </>
  );
};

export default MemberloginPage;
