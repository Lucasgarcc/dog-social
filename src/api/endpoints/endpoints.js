export const API_URL = 'https://dogsapi.origamid.dev/json/';

/**
 * @description Função genérica para realizar requisições à API.
 * @param {*} route
 * @param {*} options
 * @param {*} body
 * @param {*} token
 * @returns 
 */
const request = ({route, method, body, token}) => {

    const options = {
        method,
        headers: {},
    };

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return {
        url: API_URL + route,
        options,
    };
 
};

/**
 * @description Endpoint para realizar o login do usuário.
 * @param {body}  
 */
export const TOKEN_POST = (body) => {

    return request ({
        route:'jwt-auth/v1/token',
        method: 'POST',
        body,  
    });
}

/**
 * @description Endpoint para resgatar o token do usuário.
 * @param {token} 
 */
export const USER_GET = (token) => {
    
    return request ({
        route:'api/user',
        method: 'GET',
        token,  
    });
   
}

/**
 * @description Endpoint para realizar a validação do Token 
 * @param {*} token 
 */
export const TOKEN_VALIDATION_POST = (token) => {
    return request({
      route: 'jwt-auth/v1/token/validate',
      method: 'POST',
      token,
    });
} 

/**
 * @description Endpoint para realizar o cadastro do usuário.
 * @param {body}  
 */
export const USER_POST = (body) => {

    return request ({
        route:'api/user',
        method: 'POST',
        body,  
    });
}
