let ListAndKeyComponent = () => {

    let details = [
        {
            name: 'User',
            role: 'Web Dev'
        },
        {
            name: 'User 1',
            role: 'App Dev'
        },
        {
            name: 'User 2',
            role: 'React Dev'
        },
    ];

    // console.log(name);
    return (
        // details.map((value, index) => {
        //     console.log(index);
        //     console.log(value);
        // })

        // details.map((value, index) =>
        //     <div key={index}>{value.name}</div>
        // )

        <ul>
            {details.map((value, index) =>
                <div key={index}>
                    <li>{value.name}</li>
                    <li>{value.role}</li>
                    <br />
                </div>
            )}
        </ul>
    )
};

export default ListAndKeyComponent;