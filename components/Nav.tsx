'use client';
import styled from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
`;
const StyledAnchor = styled.a`
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    font-size: calc(0.2em + 2vw);
    color: rgb(168,153,138);
    font-weight: bold;
`;

export default function Nav() {
    return (
        <StyledNav>
            <Link href="/" passHref legacyBehavior>
                <StyledAnchor>Home</StyledAnchor>
            </Link>
            <Link href="/about" passHref legacyBehavior>
                <StyledAnchor>About</StyledAnchor>
            </Link>
        </StyledNav>
    );
}