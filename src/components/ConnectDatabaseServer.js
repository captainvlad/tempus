import React from "react";

function ConnectDatabaseServer() {
    const [merchants, setMerchants] = useState(false);

    useEffect(() => {
        getMerchant();
    }, []);

    function getMerchant() {
        fetch('http://localhost:9000')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setMerchants(data);
            });
    }

    function createMerchant() {
        let name = prompt('Enter user name');
        let surname = prompt('Enter user surname');
        let email = prompt('Enter user email');

        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt('Enter user id');

        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    return (
        <div>
            {merchants ? merchants : 'There is no user data available'}
            <br />
            <button onClick={createMerchant}>Add</button>
            <br />
            <button onClick={deleteMerchant}>Delete</button>
        </div>
    );
}

export default ConnectDatabaseServer