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
import PrefixLink from './prefixLink';

const listStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#333333'
};

const liStyle = {
    float: 'left'
}

const linkLabel = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '16px',
    textDecordation: 'none'
}


const Links = () => {
    return (
        <ul style={listStyle}>
            <li style={liStyle}>
                <PrefixLink href="/">
                    <a style={linkLabel}>Home</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/chart1">
                    <a style={linkLabel}>Chart 1</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/newVsTotal">
                    <a style={linkLabel}>New vs Total</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/hospitalizationVsTotal">
                    <a style={linkLabel}>Hospitalizations vs Total</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/positiveTestRate" as={process.env.BACKEND_URL + '/positiveTestRate'} >
                    <a style={linkLabel}>Positive Test Rate</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/dailyTests" as={process.env.BACKEND_URL + '/dailyTests'}>
                    <a style={linkLabel}>Daily Tests</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/ageOfPatients" as={process.env.BACKEND_URL + '/ageOfPatients'}>
                    <a style={linkLabel}>Age of Cases</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/newCasesByAge" as={process.env.BACKEND_URL + '/newCasesByAge'}>
                    <a style={linkLabel}>New Cases By Age</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/newHospitalByAge" as={process.env.BACKEND_URL + '/newHospitalByAge'}>
                    <a style={linkLabel}>New Hospitalizations By Age</a>
                </PrefixLink>
            </li>
            <li style={liStyle}>
                <PrefixLink href="/newDeathsByAge" as={process.env.BACKEND_URL + '/newDeathsByAge'}>
                    <a style={linkLabel}>New Deaths By Age</a>
                </PrefixLink>
            </li>
        </ul>
    )

}

export default Links;