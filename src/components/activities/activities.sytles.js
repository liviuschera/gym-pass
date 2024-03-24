import styled from "styled-components";

export const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.4rem 2.4rem;
    font-family: inherit;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

export const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

export const Description = styled.div`
    font-size: 1.1rem;
    color: var(--color-grey-500);
    line-height: 1.1;
    font-weight: 500;
`;

export const Activity = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
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
