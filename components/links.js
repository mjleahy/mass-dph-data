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

const allLinks = [
    { href: "/", label: "Home" },
    { href: '/chart1', label: 'Chart 1'},
    {href: '/newVsTotal', label: 'New vs Total'},
    {href: '/hospitalizationVsTotal', label: 'Hospitalizations vs Total'},
    {href: '/positiveTestRate', label: 'Positive Test Rate'},
    {href: '/dailyTests', label: 'Daily Tests'},
    {href: '/ageOfPatients', label: 'Age of Cases'},
    {href: '/ageOfDeaths', label: 'Age of Deaths'},
    {href: '/newCasesByAge', label: 'New Cases By Age'},
    {href: '/newHospitalByAge', label: 'New Hospitalizations By Age'},
    {href: '/newDeathsByAge', label: 'New Deaths By Age'},
]


const Links = () => {
    return (
        <ul style={listStyle}>
            {allLinks.map((singleLink) => (
                <li key={singleLink.href} style={liStyle}>
                    <PrefixLink href={singleLink.href}>
                        <a style={linkLabel}>{singleLink.label}</a>
                    </PrefixLink>
                </li>
            ))}
        </ul>
    )

}

export default Links;