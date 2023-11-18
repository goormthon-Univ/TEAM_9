import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { KAKAO_AUTH_URL } from "../../components/OAuth.jsx";
import kakaoLogin from "../../assets/kakaoLogin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [formData, setFormData] = useState({
    user_id: "",
    user_pw: "",
    rememberId: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onLoginClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const { user_id, user_pw, rememberId } = formData;

    try {
      const response = await axios.post(
        "/api/login",
        {
          user_id,
          user_pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response.data);

      response.data === "로그인 완료"
        ? alert("로그인 완료")
        : alert("로그인 실패");

      if (rememberId) {
        // TODO: Store the ID (e.g., in cookies or local storage)
      }

      // Navigate to the desired route
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <Typography
        variant={"h5"}
        fontWeight={"bold"}
        sx={{ mt: 8, borderBottom: "1px solid black" }}
      >
        로그인
      </Typography>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={onLoginClick}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            spacing={1}
            width={"400px"}
          >
            <TextField
              fullWidth
              label="아이디"
              variant="outlined"
              placeholder="아이디를 입력하세요"
              value={formData.user_id}
              name="user_id"
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              label="비밀번호"
              variant="outlined"
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={formData.user_pw}
              name="user_pw"
              onChange={handleInputChange}
            />

            <Box width={"100%"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.rememberId}
                    onChange={handleInputChange}
                    name="rememberId"
                  />
                }
                label="아이디저장"
              />
            </Box>

            <Button variant="contained" type="submit" fullWidth>
              로그인
            </Button>

            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link to={"/auth/signup"}>
                <Button>회원가입</Button>
              </Link>
            </Box>
          </Stack>
        </form>
        <a href={KAKAO_AUTH_URL} className="kakaobtn">
          <img src={kakaoLogin} alt="카카오 로그인" />
        </a>
      </Box>
    </Container>
  );
}

export default LoginPage;
