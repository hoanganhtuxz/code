import React, { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
  const [rusOrEnd, setRusOrEnd] = useState(false);
  const [slide, setSlide] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    silider();
  }, [slide]);

  const silider = () => {
    if (slide < 3) {
      setTimeout(() => {
        return setSlide(slide + 1);
      }, 5000);
    } else {
      setTimeout(() => {
        return setSlide(0);
      }, 5000);
    }
  };

  const onSubmit = () => {
    const newdata = {
      email: userName,
      password: password,
    };
    if (newdata.email === "") {
      if (!rusOrEnd) {
        return setMessage("Please, set your login");
      } else {
        return setMessage("Укажите логин");
      }
    }
    if (newdata.password === "") {
      if (!rusOrEnd) {
        return setMessage("Please, set password");
      } else {
        return setMessage("Укажите пароль");
      }
    }

    if (newdata.email && newdata.password) {
      if (!rusOrEnd) {
        setMessage(
          "Your license is expired. Please update the license and login again"
        );
      } else {
        setMessage(
          "Срок действия вашей лицензии истек. Пожалуйста, обновите лицензию и войдите снова"
        );
      }
    }
  };

  const handleCLick = (value) => {
    if (!value) {
      setRusOrEnd(false);
      setPassword("");
      setMessage("");
      setMessage("");
    } else {
      setRusOrEnd(true);
      setPassword("");
      setMessage("");
      setMessage("");
    }
  };
  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full  md:flex flex-auto p-[40px] overflow-hidden Authorization--StartSide  bg-no-repeat  relative">
          <div className="">
            <div>
              <a className="jMhaxE">
                <span className="Authorization--Logo">
                  <svg
                    width="107"
                    height="16"
                    viewBox="0 0 107 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.01067C0 12.8533 3.08163 16 7.86684 16C12.511 16 15.2996 12.7787 15.2996 8.18133V7.04H8.37683L6.03305 9.68533H12.077C11.6972 12.128 10.1238 13.3227 7.86684 13.3227C4.89372 13.3227 3.04908 11.2747 3.04908 8.01067C3.04908 4.74667 4.89372 2.688 7.86684 2.688C9.84169 2.688 11.3717 3.744 11.8816 5.472H14.9958C14.3882 2.12267 11.6212 0 7.86684 0C3.08163 0 0 3.15733 0 8.01067ZM30.7838 8.01067C30.7838 12.8213 33.9305 16 38.6615 16C43.4033 16 46.5391 12.7893 46.5391 8.01067C46.5391 3.2 43.425 0 38.6615 0C33.9088 0 30.7838 3.17867 30.7838 8.01067ZM33.8328 8.01067C33.8328 4.74667 35.6992 2.72 38.6615 2.72C41.6129 2.72 43.4901 4.74667 43.4901 8.01067C43.4901 11.296 41.6346 13.2907 38.6615 13.2907C35.6992 13.2907 33.8328 11.264 33.8328 8.01067ZM48.0908 9.83467C48.0908 13.792 50.8035 16 54.916 16C58.9959 16 61.6977 13.792 61.6977 9.83467V0.32H58.6812V9.36533C58.6812 11.9787 57.2163 13.2587 54.9051 13.2587C52.5396 13.2587 51.0965 12 51.0965 9.36533V0.32H48.08V9.83467H48.0908ZM63.9764 15.68H66.9712V9.888H71.9192C74.9574 9.888 76.8672 7.94667 76.8672 5.088C76.8672 2.21867 74.9466 0.32 71.9192 0.32H63.9764V15.68ZM66.9712 7.104V3.072H71.5828C72.9934 3.072 73.8181 3.776 73.8181 5.07733C73.8181 6.37867 72.9934 7.09333 71.5828 7.09333H66.9712V7.104ZM78.2344 9.84533H86.3291V6.54933H78.2344V9.84533ZM101.618 12.96H96.7676V9.29067L101.694 9.26933C103.191 9.26933 103.951 9.83467 103.951 11.0613C103.962 12.3947 103.202 12.96 101.618 12.96ZM101.564 3.04C102.866 3.04 103.538 3.59467 103.538 4.71467C103.538 5.92 102.811 6.54933 101.564 6.54933H96.7676V3.04H101.564ZM105.09 7.776C106.012 7.04 106.631 5.888 106.631 4.46933C106.631 1.952 104.992 0.32 101.911 0.32H93.7727V15.68H101.933C105.025 15.68 107 13.9627 107 11.232C107.011 9.65333 106.273 8.50133 105.09 7.776ZM88.2822 15.68H91.2988V0.32H88.2822V15.68ZM16.873 15.68H19.8678V9.68533H23.0471L26.7473 15.68H30.3823L26.4543 9.48267C28.4508 8.864 29.8072 7.232 29.8072 5.01333C29.8072 2.21867 28.0277 0.330667 24.7399 0.330667H16.8839V15.68H16.873ZM19.8678 7.04V3.04H24.3709C25.9334 3.04 26.7473 3.78667 26.7473 5.056C26.7473 6.32533 25.9009 7.04 24.3709 7.04H19.8678Z"
                      fill="white"
                      fill-opacity="0.9"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="">
              <h1 className="Authorization--StartSide__title">
                {rusOrEnd ? "Продукты" : "Products"}
              </h1>
              <p className="Authorization--StartSide__description">
                {rusOrEnd ? (
                  <>
                    Экосистема решений для мониторинга, выявления и
                    предотвращения киберугроз, основанная на 17-летнем опыте
                    команды Group-IB, глубоком анализе целевых атак и самых
                    актуальных разведданных из мира киберпреступности.
                  </>
                ) : (
                  <>
                    Group-IB’s security ecosystem provides comprehensive
                    protection for your IT infrastructure based on our unique
                    cyber intelligence, in-depth attack analysis, and effective
                    incident response.
                  </>
                )}
              </p>
            </div>
            <div className="relative">
              <div className={`${slide === 0 ? "htLRdL relative" : ""}`}>
                <button
                  // onClick={() => handleCLick(0)}
                  className={`${slide === 0 ? "ezbwkG" : "hGiyau"}`}
                >
                  Threat Intelligence
                </button>
                {slide === 0 ? (
                  <>
                    <p className="jGLdVH">
                      {!rusOrEnd ? (
                        <>
                          Attribution-based Threat Intelligence for analyzing
                          and managing adversaries before they affect your
                          business.
                        </>
                      ) : (
                        <>
                          Киберразведка и атрибуция угроз для исследования и
                          управления атакующими до того, как они нанесут ущерб
                          вашему бизнесу.
                        </>
                      )}
                    </p>
                    <button className="text-white bg-blue-700 py-1 px-3 rounded-lg text-[14px]">
                      {rusOrEnd ? "Попробовать демо" : "Try demo"}
                    </button>
                  </>
                ) : null}
                {slide === 0 ? (
                  <>
                    <div className="timline" />
                    <div className="timline--go" />
                  </>
                ) : null}
              </div>
              <div className={`${slide === 1 ? "htLRdL relative" : ""}`}>
                <button
                  // onClick={() => handleCLick(1)}
                  className={`${slide === 1 ? "ezbwkG" : "hGiyau"}`}
                >
                  Managed XDR
                </button>
                {slide === 1 ? (
                  <>
                    <p className="jGLdVH">
                      {!rusOrEnd ? (
                        <>
                          The single solution for IT and OT environments that
                          detects unknown threats and targeted attacks; hunts
                          for threats both within and beyond the protected
                          perimeter; and helps investigate and respond to
                          cybersecurity incidents.
                        </>
                      ) : (
                        <>
                          Комплексное решение для защиты от сложных киберугроз в
                          корпоративных и технологических сетях, основанное на
                          технологиях слежения за киберпреступниками, их
                          инструментами и инфраструктурой.
                        </>
                      )}
                    </p>
                    <button className="text-white bg-blue-700 py-1 px-3 rounded-lg text-[14px]">
                      {rusOrEnd ? "Попробовать демо" : "Try demo"}
                    </button>
                  </>
                ) : null}
                {slide === 1 ? (
                  <>
                    <div className="timline" />
                    <div className="timline--go" />
                  </>
                ) : null}
              </div>
              <div className={`${slide === 2 ? "htLRdL relative" : ""}`}>
                <button
                  // onClick={() => handleCLick(2)}
                  className={`${slide === 2 ? "ezbwkG" : "hGiyau"}`}
                >
                  Fraud Protection
                </button>
                {slide === 2 ? (
                  <>
                    <p className="jGLdVH">
                      {!rusOrEnd ? (
                        <>
                          Protecting digital identity and preventing fraud in
                          real time.
                        </>
                      ) : (
                        <>
                          {" "}
                          Проактивная защита цифровой личности и предотвращения
                          мошенничества в режиме реального времени.
                        </>
                      )}
                    </p>
                    <button className="text-white bg-blue-700 py-1 px-3 rounded-lg text-[14px]">
                      {rusOrEnd ? "Попробовать демо" : "Try demo"}
                    </button>
                  </>
                ) : null}
                {slide === 2 ? (
                  <>
                    <div className="timline" />
                    <div className="timline--go" />
                  </>
                ) : null}
              </div>
              <div className={`${slide === 3 ? "htLRdL relative" : ""}`}>
                <button
                  // onClick={() => handleCLick(3)}
                  className={`${slide === 3 ? "ezbwkG" : "hGiyau"}`}
                >
                  Digital Risk Protection
                </button>
                {slide === 3 ? (
                  <>
                    <p className="jGLdVH">
                      {!rusOrEnd ? (
                        <>
                          AI-driven digital risk identification and mitigation
                          platform
                        </>
                      ) : (
                        <>
                          Выявление и устранение цифровых рисков на основе
                          искусственного интеллекта.
                        </>
                      )}
                    </p>
                    <button className="text-white bg-blue-700 py-1 px-3 rounded-lg text-[14px]">
                      {rusOrEnd ? "Попробовать демо" : "Try demo"}
                    </button>
                  </>
                ) : null}
                {slide === 3 ? (
                  <>
                    <div className="timline" />
                    <div className="timline--go" />
                  </>
                ) : null}
              </div>
              {slide === 0 ? (
                <>
                  <img
                    className="Authorization--product-img "
                    src="https://sso.group-ib.com/static/media/AI.3f16321e.png"
                    alt=""
                  />
                </>
              ) : null}
              {slide === 1 ? (
                <>
                  <img
                    className="Authorization--product-img "
                    src="https://sso.group-ib.com/static/media/TDS.32301d03.png"
                    alt=""
                  />
                </>
              ) : null}
              {slide === 2 ? (
                <>
                  <img
                    className="Authorization--product-img "
                    src="https://sso.group-ib.com/static/media/SB.4fdb23da.png"
                    alt=""
                  />
                </>
              ) : null}
              {slide === 3 ? (
                <>
                  <img
                    className="Authorization--product-img "
                    src="https://sso.group-ib.com/static/media/BP.f4e28b82.png"
                    alt=""
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="md:flex w-full sm:w-auto  Authorization--EndSide md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
          <div className="Authorization--Header">
            <div className="relative cus">
              <button
                className={`${
                  rusOrEnd ? "tabel-active" : "text-gray-300"
                }  mr-2`}
                onClick={() => handleCLick(true)}
              >
                Rus
              </button>
              <button
                className={`${
                  !rusOrEnd ? "tabel-active" : "text-gray-300"
                }  ml-2`}
                onClick={() => handleCLick(false)}
              >
                Eng
              </button>
              <div
                className={`${
                  !rusOrEnd ? "isActive-right" : "isActive-left"
                } box-check Tabs-Scroller `}
              />
            </div>
          </div>
          <div className="max-w-md w-full space-y-8 Authorization--LoginForm ">
            <div className="">
              <h3 className="font-semibold text-2xl text-gray-800 dAHnJY ">
                {!rusOrEnd ? "Sign in" : "Вход"}
              </h3>
              <p className="text-gray-500 dryRrI">
                {!rusOrEnd ? (
                  <>Please sign in using your organization SSO credentials.</>
                ) : (
                  <>
                    Войдите в систему, используя учетные данные SSO вашей
                    организации.
                  </>
                )}
              </p>
            </div>
            <div className="w-full max-w-lg mx-auto my-auto">
              <div className="flex flex-wrap ">
                <div className="w-full  input-data-1">
                  <input
                    value={userName}
                    className="TextField-Control input-1 block w-full text-[13px] text-gray-100 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray focus:border-teal-300"
                    type="email"
                    id="inpute"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <span className="bottom-1" />
                  <label
                    className={`tracking-wide text-gray-500 text-[12px] font-[500] ${
                      userName !== "" ? "isACtivelabel-1" : "cus-text-1"
                    } `}
                    htmlFor="inpute"
                  >
                    {!rusOrEnd ? "Login" : "Логин"}
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap ">
                <div className="w-full input-data-2">
                  <input
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    className=" TextField-Control input-2 block w-full text-[13px] text-gray-100 border border-gray-200 rounded-lg py-3 px-4  leading-tight focus:outline-none focus:bg-gray focus:border-teal-300"
                    type="password"
                    id="inputp"
                  />
                  <span className="bottom-2" />

                  <label
                    className={`tracking-wide text-gray-500 text-[12px] font-[500] ${
                      password !== "" ? "isACtivelabel-2" : "cus-text-2"
                    } `}
                    htmlFor="inputp"
                  >
                    {!rusOrEnd ? "Password" : "Пароль"}
                  </label>

                  <span className="boPkKw">
                    {message !== "" ? message : null}
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-end">
                  <div className="text-sm LoginForm__rememberMe ">
                    <a href="#" className="hover:text-blue-400 text-[#9bcbfa]">
                      {!rusOrEnd ? "Forgot password?" : "Забыли пароль?"}
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={() => onSubmit()}
                    className="w-full flex justify-center bg-blue-700 text-[13px] font-[600]  hover:bg-blue-500 text-white py-[6.5px]   rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    {!rusOrEnd ? "Sig in" : "Войти"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Authorization--Footer">
            <div className="Authorization--Footer__support">
              ${!rusOrEnd ? "+65 3159-4398" : "+7 (495) 984 33 64 ·"}
              <a
                className="sc-bdnylx jMhaxE"
                href="mailto:support@group-ib.com"
              >
                support@group-ib.com
              </a>
            </div>
            <div>
              © 2003 – 2022
              <a className="sc-bdnylx jMhaxE" href="https://group-ib.ru/">
                Group-IB
              </a>
              {!rusOrEnd ? (
                "is the leading provider of high-fidelity threat intelligence and anti-fraud solutions."
              ) : (
                <>
                  является ведущим поставщиком надежных решений для анализа
                  угроз и защиты от мошенничества.
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
