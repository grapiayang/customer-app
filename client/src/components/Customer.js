import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customer = () => {
    const customers = [
        {
            id: "C001",
            name: "홍길동",
            email: "hong@example.com",
            phone: "010-1234-5678",
            birthday: "1990-01-01",
            gender: "남자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C002",
            name: "김영희",
            email: "kim@example.com",
            phone: "010-9876-5432",
            birthday: "1992-02-02",
            gender: "여자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C003",
            name: "이순신",
            email: "lee@example.com",
            phone: "010-1111-2222",
            birthday: "1985-03-03",
            gender: "남자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C004",
            name: "박지민",
            email: "park@example.com",
            phone: "010-3333-4444",
            birthday: "1995-04-04",
            gender: "여자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C005",
            name: "최민수",
            email: "choi@example.com",
            phone: "010-5555-6666",
            birthday: "1988-05-05",
            gender: "남자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C006",
            name: "정유진",
            email: "jeong@example.com",
            phone: "010-7777-8888",
            birthday: "1993-06-06",
            gender: "여자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C007",
            name: "김철수",
            email: "kimchulsoo@example.com",
            phone: "010-9999-0000",
            birthday: "1980-07-07",
            gender: "남자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C008",
            name: "이영희",
            email: "leeyounghee@example.com",
            phone: "010-2222-3333",
            birthday: "1991-08-08",
            gender: "여자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C009",
            name: "홍길자",
            email: "honggilja@example.com",
            phone: "010-4444-5555",
            birthday: "1987-09-09",
            gender: "남자",
            image: "https://via.placeholder.com/150"
        },
        {
            id: "C010",
            name: "김영수",
            email: "kimyoungsoo@example.com",
            phone: "010-6666-7777",
            birthday: "1994-10-10",
            gender: "여자",
            image: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div>
            <h2>고객 정보 bs5</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>생일</th>
                        <th>성별</th>
                        <th>사진</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender}</td>
                            <td>
                                <img src={customer.image} alt={`${customer.name}의 사진`} style={{ width: '50px', height: '50px' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Customer;