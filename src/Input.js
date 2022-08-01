import React, {useState} from 'react';
// import Select from "react-select";

function Input(){

    const paymentName = [
        {
            title: "신용카드",
            value: "creditcard"
        },
        {
            title: "인터넷뱅킹(금융결제원)",
            value: "banktransfer"
        },
        {
            title: "가상계좌",
            value: "virtualaccount"
        },
        {
            title: "휴대폰",
            value: "mobile"
        },
        {
            title: "도서문화상품권",
            value: "book"
        },
        {
            title: "문화상품권",
            value: "culture"
        },
        {
            title: "스마트문상",
            value: "smartculture"
        },
        {
            title: "해피머니상품권",
            value: "happymoney"
        },
        {
            title: "모바일팝",
            value: "mobilepop"
        },
        {
            title: "틴캐시",
            value: "teencash"
        },
        {
            title: "교통카드결제",
            value: "tmoney"
        },
        {
            title: "편의점캐시",
            value: "cvs"
        },
        {
            title: "에그머니",
            value: "eggmoney"
        },
        {
            title: "온캐시",
            value: "oncash"
        },
        {
            title: "폰빌",
            value: "phonebill"
        },
        {
            title: "캐시비",
            value: "cashbee"
        },
        {
            title: "카카오페이",
            value: "kakaopay"
        },
        {
            title: "페이코",
            value: "payco"
        },
        {
            title: "체크페이",
            value: "checkpay"
        },
        {
            title: "토스",
            value: "toss"
        },
        {
            title: "SSG페이",
            value: "ssgpay"
        },
        {
            title: "L.Pay",
            value: "lpay"
        },
        {
            title: "네이버페이",
            value: "naverpay"
        },
        {
            title: "삼성페이",
            value: "samsungpay"
        },
        {
            title: "차이",
            value: "chai"
        },
        {
            title: "스마일페이",
            value: "smailpay"
        },
    ]

    //input
    const [inputs, setInputs] = useState({
        id : "",
        nickname : "",
    });

    const {id, nickname} = inputs;

    const Text = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        })
    }

    const onReset = (e) => {
        setInputs({
            id : "",
            nickname: ""
        })
    }

    return (
        <div>
            <form>
                <select>
                    {
                        paymentName.map((pay) => {
                            return(
                                <option key={pay.title} value={pay.value}>
                                    {pay.title}
                                </option>
                        )
                        })
                    }
                </select>
                <input name='id' onChange={Text} value={id} placeholder='아이디' />
                <input name='nickname' onChange={Text} value={nickname} placeholder='닉네임' />
                <button onClick={onReset}>초기화</button>
                <b>값 : {id}({nickname})</b>
            </form>
        </div>
    );
}

export default Input;