<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
        </a>
        <br/>
        <button @click="kakaoLogout">logout</button>
    </div>
</template>
<script>
    export default {
        name: 'KakaoView',
        methods: {
            kakaoLogin() {
                window.Kakao.Auth.login({
                    scope : 'profile_nickname, account_email',
                    success: this.getKakaoAccount,
                });
            },
            kakaoLogout() {
                window.Kakao.Auth.logout((response) => {
                    console.log(response);
                })
            },
            getKakaoAccount() {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success : res => {
                        const kakao_account = res.kakao_account;
                        const nickname = kakao_account.profile.nickname;
                        const email = kakao_account.email
                        console.log(kakao_account);
                        console.log('nickname', nickname);
                        console.log('email', email);
                        alert("로그인 성공");
                    },
                    fail : error => {
                        console.log(error)
                    }
                })
            }
        }
    }
</script>