import React from 'react'

const useFetch = () => {


    /**
     * @description Estados do hook useFetch
     *
     * - data: resposta (JSON) ou null
     * - error: mensagem de erro (string) ou null
     * - loading: booleano indicando se a requisição está em andamento
     */
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    
    /**
     * @description useFetch - hook para fazer requisições HTTP com estado e cancelamento.
     *
     * @param {string} url - Endpoint a ser consumido.
     * @param {object} [options] 
     *
     */
    const request = React.useCallback(async (url, options) => {

        let resp;
        let json;

        try {

            setError(null);
            setLoading(true);

            resp = await fetch(url, options);
            json = await resp.json();

            if (!resp.ok) {

                throw new Error(json.message);
            }

        }
        catch (err) {

            json = null;
            setError(err.message);

        }
        finally {

            setData(json);
            setLoading(false);

            return {
                resp,
                json
            }
        }

    }, [])

    return {
     
        data,
        loading,
        error,
        request
    }
}

export default useFetch
