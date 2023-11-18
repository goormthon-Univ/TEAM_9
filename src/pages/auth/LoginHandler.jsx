import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandeler = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  //인가코드 백으로 보내는 코드
  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REDIRECT_URL}/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      }).then((res) => {
        console.log(res);
        // localStorage.setItem("name", res.data.account.kakaoName);
        // 로그인이 성공하면 이동할 페이지
        navigate("/home");
      });
    };
    kakaoLogin();
  }, [props.history]);

  return <Link to="/"></Link>;
};

export default LoginHandeler;
