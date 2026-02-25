import React from 'react';
import Head from '../../../components/Helpers/Head/Head';
import useFetch from '../../../hooks/useFetch/useFetch';
import Loading from '../../../components/Helpers/Loading/Loading';
import Error from '../../../components/Helpers/Error/Error';
import { GET_STATS }  from '../../../routes/endpoints/endpoints';
const UserStatsGraphs = React.lazy(() =>
    import('../UserStatsGraphs/UserStatsGraphs')
);

const UserStatistics = () => {
    
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {

        if (typeof window === 'undefined') return;

        const getData = async() => {

            const token = window.localStorage.getItem('token');

            const { url, options } = GET_STATS(token);

            await request(url, options);

        };

        getData();

    },[ request ]);


    if (loading) return <Loading />

    if (error) return <Error error={error} />

    if (data)

        return (

            <React.Suspense fallback={<Loading />}>
 
                <Head
                    title={'Estatísticas'} 
                /> 
            
                <UserStatsGraphs data={data} />
            </React.Suspense>

        )

    else return null;
}

export default UserStatistics;
