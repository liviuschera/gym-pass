import styled from "styled-components";

export const Img = styled.img`
    display: block;
    width: 9.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
    margin: 0.5rem 0;
`;

export const Activity = styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    justify-self: start;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    color: var(--color-grey-500);
    line-height: 1.1;
    font-weight: 500;
`;

export const Price = styled.div`
    font-weight: 600;
`;

export const Discount = styled.div`
    font-weight: 500;
    color: var(--color-green-600);
`;

export const Percent = styled.span`
    font-weight: 700;
    color: var(--color-green-500);
`;
