import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryChart, VictoryBar, VictoryPie } from 'victory';

const UserStatsGraphs = ({ data }) => {

    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {

        const graphData = data.map(item => {
            
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        } )

        setTotal(data.map(({ acessos }) => Number(acessos))
        .reduce((a, b) => a +  b, 0))

        setGraph(graphData);
    
    },[data]);

    if (data.length > 0)

        return (
            <section className={`${styles.graph} animeLeft container`}>

                <div className={`${styles.total} ${styles.graphItem}`}>
                    <p>Acessos: {total}</p>
                </div>

                <div className={styles.graphItem}>
                    <VictoryPie
                        data={graph}
                        innerRadius={50}
                        padding={{
                            Top: 20,
                            bottom: 20,
                            left: 80,
                            right: 80
                        }}
                        style={{
                            data: {
                                fillOpacity: .9,
                                stroke: '#fff',
                                strokeWidth: 2
                            },
                            labels: {
                                fontSize: 14,
                                fill: 'var(--color-dark)'
                            }
                        }}
                    />
                </div>
                <div className={styles.graphItem}>

                    <VictoryChart>
                        <VictoryBar
                            data={graph}
                            alignment={'start'}

                        />
                    </VictoryChart>

                </div>
            </section>

        )

    else return <>
        <p className={styles.message}>Nenhum dado encontrado.</p>
    </> 
    
}

export default UserStatsGraphs;
