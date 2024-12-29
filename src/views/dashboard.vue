<template>
  <header>

    <div class="wrapper">
      <Nav />
    </div>
  </header>

  <main style="background-color: #EFFDFF ;margin-left: 13.5rem;  position: relative; top:0px;">
    <div style="display: flex; width: 100%;">
      <div class="welcome">
        <div>
          <h1>Welcome Back to Patient Service <br>
            Management Dashboard</h1>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.18682 1.06563C7.73783 0.688409 11.3215 0.688409 14.8725 1.06563C16.8386 1.27683 18.4248 2.7607 18.6555 4.65157C19.0767 8.10328 19.0767 11.5903 18.6555 15.042C18.4248 16.9328 16.8386 18.4167 14.8725 18.6279C11.3215 19.0052 7.73782 19.0052 4.18682 18.6279C2.2207 18.4167 0.634495 16.9328 0.403795 15.042C-0.017411 11.5906 -0.017411 8.10401 0.403795 4.65267C0.520486 3.73404 0.957452 2.8801 1.64387 2.22924C2.3303 1.57838 3.22595 1.16875 4.18567 1.06673M9.52964 4.35457C9.75795 4.35457 9.9769 4.44149 10.1383 4.5962C10.2998 4.75092 10.3905 4.96076 10.3905 5.17956V9.02179H14.3996C14.6279 9.02179 14.8469 9.10871 15.0083 9.26342C15.1697 9.41814 15.2604 9.62797 15.2604 9.84677C15.2604 10.0656 15.1697 10.2754 15.0083 10.4301C14.8469 10.5848 14.6279 10.6718 14.3996 10.6718H10.3905V14.514C10.3905 14.7328 10.2998 14.9426 10.1383 15.0973C9.9769 15.2521 9.75795 15.339 9.52964 15.339C9.30134 15.339 9.08239 15.2521 8.92095 15.0973C8.75952 14.9426 8.66882 14.7328 8.66882 14.514V10.6718H4.65969C4.43139 10.6718 4.21244 10.5848 4.051 10.4301C3.88957 10.2754 3.79887 10.0656 3.79887 9.84677C3.79887 9.62797 3.88957 9.41814 4.051 9.26342C4.21244 9.10871 4.43139 9.02179 4.65969 9.02179H8.66882V5.17956C8.66882 4.96076 8.75952 4.75092 8.92095 4.5962C9.08239 4.44149 9.30134 4.35457 9.52964 4.35457Z"
                fill="#37B3C3" />
            </svg>
            Add Patient
          </button>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.18682 1.06563C7.73783 0.688409 11.3215 0.688409 14.8725 1.06563C16.8386 1.27683 18.4248 2.7607 18.6555 4.65157C19.0767 8.10328 19.0767 11.5903 18.6555 15.042C18.4248 16.9328 16.8386 18.4167 14.8725 18.6279C11.3215 19.0052 7.73782 19.0052 4.18682 18.6279C2.2207 18.4167 0.634495 16.9328 0.403795 15.042C-0.017411 11.5906 -0.017411 8.10401 0.403795 4.65267C0.520486 3.73404 0.957452 2.8801 1.64387 2.22924C2.3303 1.57838 3.22595 1.16875 4.18567 1.06673M9.52964 4.35457C9.75795 4.35457 9.9769 4.44149 10.1383 4.5962C10.2998 4.75092 10.3905 4.96076 10.3905 5.17956V9.02179H14.3996C14.6279 9.02179 14.8469 9.10871 15.0083 9.26342C15.1697 9.41814 15.2604 9.62797 15.2604 9.84677C15.2604 10.0656 15.1697 10.2754 15.0083 10.4301C14.8469 10.5848 14.6279 10.6718 14.3996 10.6718H10.3905V14.514C10.3905 14.7328 10.2998 14.9426 10.1383 15.0973C9.9769 15.2521 9.75795 15.339 9.52964 15.339C9.30134 15.339 9.08239 15.2521 8.92095 15.0973C8.75952 14.9426 8.66882 14.7328 8.66882 14.514V10.6718H4.65969C4.43139 10.6718 4.21244 10.5848 4.051 10.4301C3.88957 10.2754 3.79887 10.0656 3.79887 9.84677C3.79887 9.62797 3.88957 9.41814 4.051 9.26342C4.21244 9.10871 4.43139 9.02179 4.65969 9.02179H8.66882V5.17956C8.66882 4.96076 8.75952 4.75092 8.92095 4.5962C9.08239 4.44149 9.30134 4.35457 9.52964 4.35457Z"
                fill="#37B3C3" />
            </svg>
            Add Practices
          </button>
          <img src="/Vector (4).png" alt="" style="position: absolute;  left: 1.5%; margin-top: 12px;">
        </div>
        <div>
          <img src="/hero-banner.png" alt="">
        </div>
      </div>
      <div class="Total-Patient">
        <div>
          <h1>Total Patient</h1>
          <h1>1655</h1>
          <p>male:888</p>
          <p>female :00976</p>
          <button>View all Apointments</button>
        </div>
        <div>
          <img src="/doctors.png" alt="">
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; width: 1080px; ">
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); width: 360px; border-radius: 16px;">
        <div style="background: white; border-radius: 20px; ; padding: 10px;">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                style="margin-top: 19px;">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.55834 0.312131C8.50735 -0.104044 12.4926 -0.104044 16.4417 0.312131C18.6281 0.545134 20.3921 2.18222 20.6487 4.26833C21.1171 8.07645 21.1171 11.9235 20.6487 15.7316C20.3921 17.8177 18.6281 19.4548 16.4417 19.6878C12.4926 20.1041 8.50735 20.1041 4.55834 19.6878C2.37186 19.4548 0.607869 17.8177 0.351312 15.7316C-0.117104 11.9239 -0.117104 8.07726 0.351312 4.26955C0.481081 3.25607 0.967022 2.31395 1.73038 1.59589C2.49374 0.877823 3.48977 0.425894 4.55706 0.313344M10.5 3.94067C10.7539 3.94067 10.9974 4.03656 11.1769 4.20725C11.3564 4.37794 11.4573 4.60945 11.4573 4.85084V9.0898H15.9158C16.1697 9.0898 16.4132 9.18569 16.5927 9.35638C16.7722 9.52707 16.8731 9.75858 16.8731 9.99997C16.8731 10.2414 16.7722 10.4729 16.5927 10.6436C16.4132 10.8142 16.1697 10.9101 15.9158 10.9101H11.4573V15.1491C11.4573 15.3905 11.3564 15.622 11.1769 15.7927C10.9974 15.9634 10.7539 16.0593 10.5 16.0593C10.2461 16.0593 10.0026 15.9634 9.82308 15.7927C9.64355 15.622 9.54269 15.3905 9.54269 15.1491V10.9101H5.08422C4.83032 10.9101 4.58683 10.8142 4.4073 10.6436C4.22777 10.4729 4.12691 10.2414 4.12691 9.99997C4.12691 9.75858 4.22777 9.52707 4.4073 9.35638C4.58683 9.18569 4.83032 9.0898 5.08422 9.0898H9.54269V4.85084C9.54269 4.60945 9.64355 4.37794 9.82308 4.20725C10.0026 4.03656 10.2461 3.94067 10.5 3.94067Z"
                  fill="#37B3C3" />
              </svg>
              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all</button>
            </div>
          </div>
          <h1 style="text-align: center; color:#37B3C3;">Total</h1>
          <h1 style="text-align: center; color:#37B3C3;">4445</h1>
          <div style="display: flex ;justify-content: space-between; ">
            <div style="text-align: center; color: #36454F;">
              <h1>Simple</h1>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>
            <div style="text-align: center;  color: #36454F;">
              <h1>Complex</h1>
              <h3>4567</h3>
            </div>
          </div>

        </div>

      </div>
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); width: 360px; border-radius: 16px;">
        <div style="background: white; border-radius: 20px; ; padding: 10px;">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                style="margin-top: 19px;">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.55834 0.312131C8.50735 -0.104044 12.4926 -0.104044 16.4417 0.312131C18.6281 0.545134 20.3921 2.18222 20.6487 4.26833C21.1171 8.07645 21.1171 11.9235 20.6487 15.7316C20.3921 17.8177 18.6281 19.4548 16.4417 19.6878C12.4926 20.1041 8.50735 20.1041 4.55834 19.6878C2.37186 19.4548 0.607869 17.8177 0.351312 15.7316C-0.117104 11.9239 -0.117104 8.07726 0.351312 4.26955C0.481081 3.25607 0.967022 2.31395 1.73038 1.59589C2.49374 0.877823 3.48977 0.425894 4.55706 0.313344M10.5 3.94067C10.7539 3.94067 10.9974 4.03656 11.1769 4.20725C11.3564 4.37794 11.4573 4.60945 11.4573 4.85084V9.0898H15.9158C16.1697 9.0898 16.4132 9.18569 16.5927 9.35638C16.7722 9.52707 16.8731 9.75858 16.8731 9.99997C16.8731 10.2414 16.7722 10.4729 16.5927 10.6436C16.4132 10.8142 16.1697 10.9101 15.9158 10.9101H11.4573V15.1491C11.4573 15.3905 11.3564 15.622 11.1769 15.7927C10.9974 15.9634 10.7539 16.0593 10.5 16.0593C10.2461 16.0593 10.0026 15.9634 9.82308 15.7927C9.64355 15.622 9.54269 15.3905 9.54269 15.1491V10.9101H5.08422C4.83032 10.9101 4.58683 10.8142 4.4073 10.6436C4.22777 10.4729 4.12691 10.2414 4.12691 9.99997C4.12691 9.75858 4.22777 9.52707 4.4073 9.35638C4.58683 9.18569 4.83032 9.0898 5.08422 9.0898H9.54269V4.85084C9.54269 4.60945 9.64355 4.37794 9.82308 4.20725C10.0026 4.03656 10.2461 3.94067 10.5 3.94067Z"
                  fill="#37B3C3" />
              </svg>
              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all</button>
            </div>
          </div>
          <h1 style="text-align: center; color:#37B3C3;">Total</h1>
          <h1 style="text-align: center; color:#37B3C3;">4445</h1>
          <div style="display: flex ;justify-content: space-between; ">
            <div style="text-align: center; color: #36454F;">
              <h1>Simple</h1>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>
            <div style="text-align: center;  color: #36454F;">
              <h1>Complex</h1>
              <h3>4567</h3>
            </div>
          </div>

        </div>

      </div>
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); width: 320px; border-radius: 16px;">
        <div class="custom-scroll" style="background: white; border-radius: 20px; ; padding: 10px; height: 320px; ">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">

              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all
              </button>
            </div>

          </div>
          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div style="display: flex; margin-top: 12px;">
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); border-radius: 16px; width: 360px;">
        <div style="background: white;  height: 320px; border-radius: 16px; padding: 10px;">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">
              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all</button>
            </div>
          </div>
          <h1 style="text-align: center; color:#37B3C3;">Total</h1>
          <h1 style="text-align: center; color:#37B3C3;">4445</h1>
          <div style="display: flex ;justify-content: space-around; ">
            <div style="text-align: center; color: #36454F;">
              <h4>Simple</h4>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>
            <div style="text-align: center;  color: #36454F;">
              <h4>Complex</h4>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>

            <div style="text-align: center;  color: #36454F;">
              <h4>Complex</h4>
              <h3>4567</h3>
            </div>
          </div>

        </div>

      </div>
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); border-radius: 16px; width: 360px;">
        <div style="background: white; height: 320px; border-radius: 16px; ; padding: 10px;">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">
              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all</button>
            </div>
          </div>
          <h1 style="text-align: center; color:#37B3C3;">Total</h1>
          <h1 style="text-align: center; color:#37B3C3;">4445</h1>
          <div style="display: flex ;justify-content: space-around; ">
            <div style="text-align: center; color: #36454F;">
              <h4>Simple</h4>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>
            <div style="text-align: center;  color: #36454F;">
              <h4>Complex</h4>
              <h3>4567</h3>
            </div>
            <div style=" background-color: #ccedff; height: 80px; width: 2px ; border-radius: 20px;"></div>

            <div style="text-align: center;  color: #36454F;">
              <h4>Complex</h4>
              <h3>4567</h3>
            </div>
          </div>

        </div>

      </div>
      <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); border-radius: 16px; width: 320px;">
        <div class="custom-scroll" style="background: white; border-radius: 20px; ; padding: 10px; height: 320px; ">
          <div
            style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
            <h3>
              CCM patient
            </h3>
            <div style="display: flex; justify-content: space-around;">

              <button
                style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
                See all
              </button>
            </div>

          </div>
          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>

          <div
            style="display: flex; justify-content: space-around; background-color: #EFFDFF; margin-bottom: 2px; margin-top: 2px; border-radius: 12px;">
            <div style="display: flex; ">
              <img src="/user-squar.png" alt="user"
                style="width: 40px; height: 40px; margin-top: 20px ; margin-right: 5px;">
              <div>
                <p>Lorem, ipsum.</p>
                <p style="font-weight: 100; color: gray; margin-top: -10px;">lorem </p>
              </div>
            </div>
            <div>
              <img src="/tick.png" alt="">
              <img src="/eye.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>


  </main>

  <section style="margin-left: 13.5rem; background-color: #EFFDFF;">
    <div style="margin-left: 12px; box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.9); border-radius: 16px; width: 360px;">
      <div style="background: white;  height: 320px; border-radius: 16px; padding: 10px;">
        <div
          style="text-align: center; border-bottom: 2px solid  #37B3C3; display: flex; justify-content: space-between;  width: 300px;">
          <h3>
            CCM patient
          </h3>
          <div style="display: flex; justify-content: space-around;">
            <button
              style="height: 23px ; width: 70px; margin-top: 18px; font-size: 10px; color: white; background-color: #37B3C3 ; border: 0 ;border-radius: 6px">
              See all</button>
          </div>
        </div>

        <PieChart  :data="[80, 20]" :labels="['CCM Patient', 'RPM Patient']"
          :colors="['#FF9E95', '#7469E5']" />

      </div>

    </div>
  </section>


</template>
<script>

import Nav from '../components/Nav.vue'
import PieChart from '../components/pieChart.vue';


export default {
  name: 'Dashboard',
  components: {
    PieChart,
    Nav
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .welcome {
    color: white;
    background-color: #37B3C3;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    /* width: 70%; */
    border-radius: 26px;
    margin: 16px;
  }

  .Total-Patient {
    display: flex;
    background-color: #37B3C3;
    color: white;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    /* width: 30%; */
    border-radius: 26px;
    margin: 16px;
  }

  .Total-Patient img {
    position: relative;
    top: 120px;
    width: 200px;
  }

  /* Target the custom-scroll class */
  .custom-scroll {
    height: 300px;
    margin-right: 1px;
    /* Optional: Adjust based on your container */
    overflow-y: scroll;
    /* Enable vertical scrolling */
    overflow-x: hidden;
    /* Optional: Disable horizontal scrolling */


  }

  /* Customize the scrollbar for the custom-scroll class */
  .custom-scroll::-webkit-scrollbar {
    width: 6px;
    /* Adjust the scrollbar width */
  }

  /* Track (background of the scrollbar) */
  .custom-scroll::-webkit-scrollbar-track {
    background: white;
    border-radius: 16px;

    /* Default track color */
  }

  /* Handle (scrollbar thumb) */
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #888;
    /* Default thumb color */
    border-radius: 6px;
    /* Makes the scrollbar thumb rounded */
  }

  /* Handle hover effect */
  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background: #8de4ee;
    /* Darker shade on hover */
  }

  /* Optional: Set color dynamically via CSS variable */
  .custom-scroll {
    --scrollbar-thumb-color: #c7f5fa;
    /* Default thumb color */
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb-color);
    /* Use CSS variable for dynamic coloring */
  }
}
</style>
