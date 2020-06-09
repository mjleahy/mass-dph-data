import Link from 'next/link'
import { FC } from 'react'

export interface PrefixLinkProps { href: string; as: string; children: Array<FC> }

const PrefixLink: FC = ({ href, as = href, children }: PrefixLinkProps) => {
    return (
        <Link href={href} as={`${process.env.linkPrefix}${as}`}>
            {children}
        </Link>
    )
}

export default PrefixLink;