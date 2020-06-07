/* 
 *  Copyright 2020 <Matthew Leahy>
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 *  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 *  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 *  DEALINGS IN THE SOFTWARE.
 */

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
                <Link href="/" as={process.env.BACKEND_URL + '/'}>
                    <LinkLabel>Home</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/chart1" as={process.env.BACKEND_URL + '/chart1'}>
                    <LinkLabel>Chart 1</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newVsTotal" as={process.env.BACKEND_URL + '/newVsTotal'}>
                    <LinkLabel>New vs Total</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/hospitalizationVsTotal" as={process.env.BACKEND_URL + '/hospitalizationVsTotal'} >
                    <LinkLabel>Hospitalizations vs Total</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/positiveTestRate" as={process.env.BACKEND_URL + '/positiveTestRate'} >
                    <LinkLabel>Positive Test Rate</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/dailyTests" as={process.env.BACKEND_URL + '/dailyTests'}>
                    <LinkLabel>Daily Tests</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/ageOfPatients" as={process.env.BACKEND_URL + '/ageOfPatients'}>
                    <LinkLabel>Age of Cases</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newCasesByAge" as={process.env.BACKEND_URL + '/newCasesByAge'}>
                    <LinkLabel>New Cases By Age</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newHospitalByAge" as={process.env.BACKEND_URL + '/newHospitalByAge'}>
                    <LinkLabel>New Hospitalizations By Age</LinkLabel>
                </Link>
            </FloatLi>
            <FloatLi>
                <Link href="/newDeathsByAge" as={process.env.BACKEND_URL + '/newDeathsByAge'}>
                    <LinkLabel>New Deaths By Age</LinkLabel>
                </Link>
            </FloatLi>
        </ListHolder>
    )

}

export default Links;