export default () => `
    <div class="right-side-content">
        <div class="username">
            <input type="text" placeholder="Enter your email address" autofocus="" id="email">
        </div>

        <div class="password">
            <input type="password" placeholder="Password" autofocus="" id="pass" name="password" minlength="8" required="">
        </div>

        <div class="sign-in-button">
            <button>Sign in</button>
        </div>

        <div class="forgot-email">
            <a href="">Forgot Email</a>
        </div>

        <div class="forgot-password">
            <a href="">Forgot Password</a>
        </div>

    </div>
`;