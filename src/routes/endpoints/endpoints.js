export const API_URL = 'https://dogsapi.origamid.dev/json/';

/**
 * @description Função genérica para realizar requisições à API.
 * @param {*} route
 * @param {*} options
 * @param {*} body
 * @param {*} token
 * @returns 
 */
const request = ({route, method, body, token, cache}) => {

    const options = {
        method,
        headers: {},
        ...(cache &&
            {cache}
        ),
    };

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (body) {
        if (body instanceof FormData) {
          options.body = body;
        } else {
          options.headers['Content-Type'] = 'application/json';
          options.body = JSON.stringify(body);
        }
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

/**
 * @description Endpoint para postagem de fotos.
 * @param {token}
 * @param {body} 
 */
export const PHOTO_POST = (body,token) => {
    
    return request ({
        route:'api/photo',
        method: 'POST',
        token, 
        body 
    });
   
}

/**
 * @description Endpoint para puxar as fotos de postagem.
 * @param {page}
 * @param {total}
 * @param {user} 
 */
export const PHOTOS_GET = ({page, total, user}) => {
    
    return request ({
        route: `api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        method: 'GET',
        cache: 'no-store'
    });
   
}


/**
 * @description Endpoint para puxar a foto usando id.
 * @param {id}
 */
export const PHOTO_GET = (id) => {
    
    return request ({
        route: `api/photo/${id}`,
        method: 'GET',
        cache: 'no-store'
    });
   
}

/**
 * @description Endpoint para comentar na foto.
 * @param {id}
 */
export const COMMENT_POST = (id, body, token) => {
    
    return request ({
        route: `api/comment/${id}`,
        method: 'POST',
        token,
        body,     
        cache: 'no-store'
    });
   
}
