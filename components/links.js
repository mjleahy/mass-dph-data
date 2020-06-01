import styled from 'styled-components'
import Link from 'next/link'


const Links = () => {

    const ListHolder = styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
    `;

    const FloatLi = styled.li` 
        float: left;
        `;

    const LinkLabel = styled.a`
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decordation: none;
    `;

    return (
        <ListHolder>
            <FloatLi>
                <Link href="/" >
                    <LinkLabel>Home</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/chart1" >
                    <LinkLabel>Chart 1</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newVsTotal" >
                    <LinkLabel>New vs Total</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/positiveTestRate" >
                    <LinkLabel>Positive Test Rate</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/dailyTests" >
                    <LinkLabel>Daily Tests</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/ageOfPatients">
                    <LinkLabel>Age of Cases</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newCasesByAge">
                    <LinkLabel>New Cases By Age</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newHospitalByAge">
                    <LinkLabel>New Hospitalizations By Age</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newDeathsByAge">
                    <LinkLabel>New Deaths By Age</LinkLabel>
                </Link>
            </FloatLi>
        </ListHolder>
    )

}

export default Links;