<template>
  <div class="container">
    <div class="form-container">
      <img src="/Logo.png" alt="Logo" class="logo" />
      <h1 class="welcome">Welcome Back,</h1>
      <form action="" class="form">
        <div class="input-group">
          <svg
            class="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
          >
            <path
              d="M1.42857 1.73997V13.1685C1.42857 13.5474 1.57908 13.9108 1.84699 14.1787C2.1149 14.4466 2.47826 14.5971 2.85714 14.5971H17.1429C17.5217 14.5971 17.8851 14.4466 18.153 14.1787C18.4209 13.9108 18.5714 13.5474 18.5714 13.1685V1.73997H1.42857ZM1.42857 0.311401H18.5714C18.9503 0.311401 19.3137 0.461911 19.5816 0.72982C19.8495 0.997729 20 1.36109 20 1.73997V13.1685C20 13.9263 19.699 14.653 19.1632 15.1888C18.6273 15.7247 17.9006 16.0257 17.1429 16.0257H2.85714C2.09938 16.0257 1.37266 15.7247 0.836838 15.1888C0.30102 14.653 0 13.9263 0 13.1685V1.73997C0 1.36109 0.15051 0.997729 0.418419 0.72982C0.686328 0.461911 1.04969 0.311401 1.42857 0.311401Z"
              fill="#36454F"
            />
          </svg>
          <input
            class="input-field"
            type="text"
            name="email"
            placeholder="Enter Email"
          />
        </div>

        <div class="input-group">
          <svg
            class="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
          >
            <path
              d="M9 18.2857C8.40326 18.2857 7.83097 18.04"
              fill="#36454F"
            />
          </svg>
          <input
            class="input-field"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>

        <div class="checkbox-container">
          <div>
            <input type="checkbox" name="rememberMe" value="rememberMe" />
            <label for="rememberMe">Remember me</label>
          </div>
          <div>
            <router-link to="/">Forgot Password?</router-link>
          </div>
        </div>

        <div class="login-btn-container">
          <button class="login-btn">Login</button>
        </div>
      </form>
    </div>
    <img
      src="/Frame 14.png"
      alt="Image"
      class="frame-img"
    />
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.logo {
  width: 200px;
  height: 70px;
}

.welcome {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 20px;
}

.form {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-icon {
  margin-top: 15px;
}

.input-field {
  background-color: white;
  width: 100%;
  border: none;
  border-bottom: 2px solid #6b7280;
  margin-top: 15px;
  padding-left: 10px;
}

.input-field:focus {
  outline: none;
  box-shadow: none;
}

.checkbox-container {
  display: flex;
  justify-content: space-between;
}

.login-btn-container {
  text-align: center;
}

.login-btn {
  background-color: #2b909d;
  color: white;
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
}

.frame-img {
  width: 50%;
  height: 100vh;
  display: block;
  object-fit: cover;
}
</style>
<!-- <template>
  <div class="">
    <h1>helo</h1>
    </div>
</template>
<script>
export default {
  name: "Login",
};
</script> -->
