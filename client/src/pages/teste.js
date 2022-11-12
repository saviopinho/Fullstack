const axios = require('axios');

(async () => {
    const getUserAuthInfo = async () => {
        const url = 'https://compliance-api.cubos.io/auth/code';
        const req_body = {
            email: 'saviopinhonunes@gmail.com',
            password: '2he22vBVeLA63rKoqw5J',
        };

        const response_data = await axios
            .post(url, req_body)
            .then((response) => response.data)
            .catch((error) => error.response);

        if (response_data.status === 503) {
            throw new Error(`User could not be authorized`);
        }

        return response_data.data.authCode;
    };

    const getAccessToken = async (authCode) => {
        const url = 'https://compliance-api.cubos.io/auth/token';
        const req_body = {
            authCode,
        };

        const response_data = await axios
            .post(url, req_body)
            .then((response) => response.data)
            .catch((error) => error.response);

        return response_data.data.accessToken;
    };

    const validateDocument = async (token, document) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const url = 'https://compliance-api.cubos.io/cpf/validate';

        const bodyRequest = {
            document,
        };

        const response_data = await axios
            .post(url, bodyRequest, config)
            .then((response) => response.data)
            .catch((error) => error.response);

        return response_data.data.status;
    };

    const authCode = await getUserAuthInfo();
    console.log('authCode:', authCode);

    const accessToken = await getAccessToken(authCode);
    console.log('accessToken:', accessToken);

    const cpf = '02934963314';
    const document = await validateDocument(accessToken, cpf);
    console.log('document:', document);
})();
