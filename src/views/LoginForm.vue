<template>

  <body>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <div class="container">
      <div class="row justify-content-center">
        <div class="login-container" style="background: url('/images/background/login-container.jpg'), ;">
          <form @submit.prevent="signIn" class="login-form">
            <input type="username" class="form-control" v-model="username" placeholder="아이디" required>
            <input type="password" class="form-control" v-model="password" placeholder="비밀번호" required>
            <div v-if="error">
              <p class="error-message">아이디 또는 비밀번호를 다시 확인하세요.</p>
            </div>
            <button type="submit" class="btn btn-primary">로그인</button>
            <div class="center-align">
              <div class="form-check" style="display: inline-block; margin-top: 10px; padding-right: 20px">
                <input style="height: 18px; position: relative; bottom: 6px;" type="checkbox" class="form-check-input"
                  id="saveId" v-model="saveId">
                <label class="form-check-label" for="saveId">이메일 저장</label>
              </div>
              <div class="form-check" style="display: inline-block; margin-top: 10px;">
                <input style="height: 18px; position: relative; bottom: 6px;" type="checkbox" class="form-check-input"
                  id="keepLoggedInBtn" v-model="keepLoggedIn">
                <label class="form-check-label" for="keepLoggedInBtn">로그인 상태 유지</label>
              </div>
            </div>
            <div class="social-login">
              <a href="/oauth2/authorization/kakao" class="social-login-button kakao"><img class="social-logo"
                  src="/images/kakaoIco.png" alt="Kakao login"></a>
              <a href="/oauth2/authorization/naver" class="social-login-button naver"><img class="social-logo"
                  src="/images/naverIco.png" alt="Naver login"></a>
            </div>
            <hr>
            <div class="center-align">
              <a href="/register" class="login-form-link">비밀번호 찾기</a>
              <a href="/register" class="login-form-link">회원가입</a>
            </div>
            <div class="login-form-footer">
              ©WitchEnd. All rights reserved.
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      saveId: false,
      keepLoggedIn: false,
      error: false
    };
  },
  methods: {
    async signIn() {
      try {
        const payload = {
          username: this.username,
          password: this.password
        };
        const response = await axios.post(`http://localhost:3000/users/login`, payload);
        alert('Login successful! Response: ' + JSON.stringify(response.data));
      } catch (error) {
        alert('Login failed! Error: ' + error.response.data.message);
      }
    }

  },
  mounted() {
    if (localStorage.getItem("savedId")) {
      this.email = localStorage.getItem("savedId");
      this.saveId = true;
    }
  }
};
</script>

<style scoped>
/* App.vue 또는 최상위 컴포넌트의 스타일 */
.container {
  min-height: 100vh;
  /* Viewport 높이의 100% */
  min-width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/public/images/background/main.jpg');
  background-size: cover;
  color: white;
}

.login-container {
  border-radius: 10px;
  /* 테두리를 둥글게 설정 */
  border: 2px solid white;
  /* 테두리를 하얀색으로 설정 */
  /* 다른 스타일은 그대로 유지 */
  background-image: url("/public/images/background/login-container.jpg");
  background-size: cover;
  max-width: 500px;
  min-width: 400px;
  margin: 12% auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
}


.login-header,
.social-login-header {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
  /* 중세풍 헤더 폰트 크기 */
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
  /* 흰색 그림자 */
}

.login-form button {
  width: 100%;
  height: 48px;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  font-size: 1.2rem;
  /* 중세풍 버튼 폰트 크기 */
  border: none;
  transition: background-color 0.2s, transform 0.15s ease;
  background-image: linear-gradient(to right, #8b0000, #4b0082);
  /* 검붉은 계열 그라디언트 */
}

.login-form input {
  height: 48px;
  margin-bottom: 1rem;
  border: 1px solid #8b4513;
  /* 갈색 테두리 */
  border-radius: 0.25rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.login-form input:focus {
  border-color: #cd853f;
  /* 갈색 계열의 테두리 색상 */
  box-shadow: 0 0 0 0.2rem rgba(205, 133, 63, 0.25);
  /* 부드러운 갈색 그림자 */
}

.login-form button {
  background-color: #8b4513;
  /* 갈색 버튼 배경색 */
}

.social-login-buttons a {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
}

.login-form-link {
  text-align: center;
  display: block;
  margin-top: 2rem;
  transition: color 0.2s;
  text-decoration: none;
}

.login-form-footer {
  text-align: center;
  margin-top: 2rem;
}

.social-logo {
  width: 50px;
  height: auto;
  display: inline;
  margin: 0 auto 10px;
}

.social-login-buttons a {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
}

.login-form {
  margin-bottom: 1rem;
}

.login-form input {
  height: 48px;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.login-form input:focus {
  border-color: #38ef7d;
  /* 초록색 계열의 테두리 색상 */
  box-shadow: 0 0 0 0.2rem rgba(56, 239, 125, 0.25);
  /* 부드러운 초록색 그림자 */
}

.login-form button {
  background-color: #007bff;
  color: white;
}

.login-form-link {
  text-align: center;
  display: block;
  margin-top: 2rem;
  transition: color 0.2s;
  color: white;
}

.login-form-footer {
  text-align: center;
  margin-top: 2rem;
}

.social-login {
  text-align: center;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.form-check-input {
  margin-top: 10px;
  padding-bottom: -20px;
}

.center-align {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.center-align a:not(:first-child)::before {
  content: "•";
  margin-right: 8px;
}
</style>