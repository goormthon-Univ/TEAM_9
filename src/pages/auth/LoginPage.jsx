import { KAKAO_AUTH_URL } from "../../components/OAuth.jsx";
import kakaoLogin from "../../assets/kakaoLogin.png";

function LoginPage() {
  return (
    <a href={KAKAO_AUTH_URL} className="kakaobtn">
      <img src={kakaoLogin} alt="카카오 로그인" />
    </a>
  );
}

export default LoginPage;
