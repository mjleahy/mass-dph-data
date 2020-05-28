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
                <Link href="/" passHref>
                    <LinkLabel>Home</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/chart1" passHref>
                    <LinkLabel>Chart 1</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newVsTotal" passHref>
                    <LinkLabel>New vs Total</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/positiveTestRate" passHref>
                    <LinkLabel>Positive Test Rate</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/dailyTests" passHref>
                    <LinkLabel>Daily Tests</LinkLabel>
                </Link>
            </FloatLi>
        </ListHolder>
    )

}

export default Links;