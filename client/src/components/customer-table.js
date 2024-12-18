import React from 'react';


const CustomerTable = () => {
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
            <h2>고객 정보 테이블 base</h2>
            <div className="customer-row">
                {customers.map((customer) => (
                    <div className="customer-container" key={customer.id}>
                        <img src={customer.image} alt={`${customer.name}의 사진`} />
                        <div className="customer-info">
                            <p><strong>아이디:</strong> {customer.id}</p>
                            <p><strong>이름:</strong> {customer.name}</p>
                            <p><strong>이메일:</strong> {customer.email}</p>
                            <p><strong>전화번호:</strong> {customer.phone}</p>
                            <p><strong>생일:</strong> {customer.birthday}</p>
                            <p><strong>성별:</strong> {customer.gender}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerTable;