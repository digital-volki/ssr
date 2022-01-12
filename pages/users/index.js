import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../../Components/MainContainer";

const Index = (users) => {
    return (
        <div>
            <MainContainer>
                <h1>Список пользователей</h1>
                <ul>
                    {users.users.map(user =>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                            {user.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </MainContainer>
        </div>
    );
};

export default Index;

export async function getServerSideProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
