import React, { useEffect, useState } from 'react'

const PromiseData = () => {
    const [fetchData, setFetchData] = useState(null);


    useEffect(() => {
        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let data = { name: "John", age: 30 };
                    resolve(data); // Simulates a successful API call
                }, 1000);
            });
        }

        fetchData()
            .then((response) => {
                console.log("Data received:", response);
                setFetchData(response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }, [])
    console.log(`fetched data: ${fetchData.name}`)

    return (
        <div>
            <h1>Fetched data: {fetchData?fetchData.name: fetchData}</h1>
        </div>
    )
}

export default PromiseData
