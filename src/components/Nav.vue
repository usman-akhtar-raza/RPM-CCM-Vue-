<template>
  <nav class="nav">
    <!-- Column 1 -->
    <div class="nav-col-1">
      <img src="/sun.png" alt="Current Weather" class="weather-icon" />
      <div>
        <h1 class="greeting-title">Good Morning</h1>
        <p class="greeting-date">Monday, 15 May 2024</p>
      </div>
    </div>

    <!-- Column 2 -->
    <div class="nav-col-2">
      <div class="search-bar">
        <input type="text" placeholder="Search" class="search-input" />
      </div>
    </div>

    <!-- Column 3 -->
    <div class="nav-col-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="19"
        viewBox="0 0 23 19"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.155038 6.16918C0.138672 6.84898 0.138672 7.61817 0.138672 8.49689V11.0147C0.138672 14.5749 0.138672 16.3562 1.24525 17.4615C2.35056 18.5681 4.1319 18.5681 7.69207 18.5681H15.2455C18.8056 18.5681 20.587 18.5681 21.6923 17.4615C22.7989 16.3562 22.7989 14.5749 22.7989 11.0147V8.49689C22.7989 7.61817 22.7989 6.84773 22.7825 6.16918L12.6912 11.7751C12.3172 11.9827 11.8965 12.0917 11.4688 12.0917C11.041 12.0917 10.6203 11.9827 10.2464 11.7751L0.155038 6.16918ZM0.444585 3.49905C0.551587 3.52521 0.654511 3.56587 0.750498 3.6199L11.4688 9.5745L22.1871 3.6199C22.2833 3.56641 22.3862 3.52578 22.493 3.49905C22.3293 2.90233 22.0775 2.43528 21.6923 2.05006C20.587 0.943482 18.8056 0.943481 15.2455 0.943481H7.69207C4.1319 0.943481 2.35056 0.943482 1.24525 2.05006C0.858763 2.43528 0.608242 2.90233 0.444585 3.49779"
          fill="#2B909D"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2353 0.586426C9.92789 0.586386 9.62406 0.649821 9.3444 0.772432C9.06473 0.895042 8.81579 1.07396 8.61442 1.29707C8.41305 1.52017 8.26396 1.78225 8.17727 2.06553C8.09058 2.34882 8.06831 2.64669 8.11197 2.93897C6.55766 3.37973 5.19351 4.2916 4.22323 5.53837C3.25296 6.78515 2.72862 8.29993 2.72853 9.85651V18.0966H1.65614C1.37172 18.0966 1.09895 18.2051 0.897838 18.3983C0.696725 18.5914 0.58374 18.8534 0.58374 19.1266C0.58374 19.3998 0.696725 19.6618 0.897838 19.8549C1.09895 20.0481 1.37172 20.1566 1.65614 20.1566H18.8145C19.0989 20.1566 19.3717 20.0481 19.5728 19.8549C19.7739 19.6618 19.8869 19.3998 19.8869 19.1266C19.8869 18.8534 19.7739 18.5914 19.5728 18.3983C19.3717 18.2051 19.0989 18.0966 18.8145 18.0966H17.7421V9.85651C17.742 8.29993 17.2177 6.78515 16.2474 5.53837C15.2771 4.2916 13.913 3.37973 12.3587 2.93897C12.4023 2.64669 12.38 2.34882 12.2933 2.06553C12.2067 1.78225 12.0576 1.52017 11.8562 1.29707C11.6548 1.07396 11.4059 0.895042 11.1262 0.772432C10.8466 0.649821 10.5427 0.586386 10.2353 0.586426ZM12.3801 22.2166C12.3801 22.4898 12.2671 22.7518 12.066 22.945C11.8649 23.1381 11.5921 23.2466 11.3077 23.2466H9.16291C8.8785 23.2466 8.60573 23.1381 8.40462 22.945C8.2035 22.7518 8.09052 22.4898 8.09052 22.2166C8.09052 21.9434 8.2035 21.6815 8.40462 21.4883C8.60573 21.2951 8.8785 21.1866 9.16291 21.1866H11.3077C11.5921 21.1866 11.8649 21.2951 12.066 21.4883C12.2671 21.6815 12.3801 21.9434 12.3801 22.2166Z"
          fill="#2B909D"
        />
      </svg>
      <div class="user-profile">
        <img src="/userprofilepic.png" alt="User Profile" class="profile-pic" />
        <div>
          <p class="user-name">User Name</p>

        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
}
</script>
<style scoped>
.nav {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  /*right: 0; */
  /* top: 0; */
  left: 26.6%;
  width: 1000px;
  padding: 0.75rem;
  background-color: white;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.nav-col-1 {
  grid-column: span 3;
  display: flex;
  align-items: center;
}

.weather-icon {
  margin-right: 0.5rem;
  width: 30px;
  height: 30px;
}

.greeting-title {
  font-weight: 500;
  margin: 0;
}

.greeting-date {
  font-size: 0.875rem;
  color: gray;
  margin: 0;
}

.nav-col-2 {
  grid-column: span 6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  width: 100%;
  padding: 0.5rem;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.875rem;
}

.nav-col-3 {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.icon {
  width: 20px;
  height: 20px;
  fill: #2b909d;
}

.user-profile {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background-color: #f5feff;
}

.profile-pic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.user-name {
  font-size: 0.875rem;
  font-weight: 600;
}
</style>
