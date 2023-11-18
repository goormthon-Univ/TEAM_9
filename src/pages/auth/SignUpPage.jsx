import { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  const onSignUpClick = () => {
    if (password !== confirmpassword) {
      alert("비밀번호가 일치하지 않습니다.");
      setPassword("");
      setconfirmPassword("");
      return;
    }
    navigate("/");
  };

  return (
    <Container>
      <Typography
        variant={"h5"}
        fontWeight={"bold"}
        sx={{ mt: 8, borderBottom: "1px solid black" }}
      >
        회원가입
      </Typography>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"} spacing={1}>
          <TextField
            fullWidth
            label="아이디"
            variant="outlined"
            placeholder="아이디를 입력하세요"
            helperText="영문, 숫자를 조합하여 4~16자 입력"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />

          <TextField
            fullWidth
            label="비밀번호"
            variant="outlined"
            placeholder="비밀번호를 입력하세요"
            type="password"
            helperText="영문자, 숫자, 특수문자 조합하여 9~20자 입력(대,소문자 구별)"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <TextField
            fullWidth
            label="비밀번호 재입력"
            variant="outlined"
            placeholder="비밀번호를 다시 입력하세요"
            type="password"
            helperText="영문자, 숫자, 특수문자 조합하여 9~20자 입력(대,소문자 구별)"
            value={confirmpassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />

          <Button variant="contained" fullWidth onClick={onSignUpClick}>
            회원가입
          </Button>

          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Link to={"/auth/login"}>
              <Button>로그인</Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default SignUpPage;
