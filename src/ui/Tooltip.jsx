import { useState } from "react";
import styled, { css } from "styled-components";

const positions = {
    top: css`
        right: 0%;
        top: -150%;
    `,
    bottom: css`
        right: 0%;
        bottom: -150%;
    `,
    left: css`
        top: 0%;
        left: -120%;
    `,
    right: css`
        top: -11%;
        right: 120%;
    `,
};

const StyledTooltip = styled.div`
    position: relative;
    display: inline-block;

    & span {
        visibility: hidden;
        width: max-content;
        background-color: var(--color-silver-100);
        color: var(--color-silver-700);
        text-align: center;
        border-radius: 0.6rem;
        padding: 0.5rem;
        position: absolute;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s;
        ${(props) => positions[props.$position]};
    }

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`;

export default function Tooltip({ text, $position = "right", children }) {
    const [hover, setHover] = useState(false);

    return (
        <StyledTooltip
            $position={$position}
            onMouseEnter={() => setHover((hover) => !hover)}
            onMouseLeave={() => setHover((hover) => !hover)}
        >
            {children}
            {hover && <span>{text}</span>}
        </StyledTooltip>
    );
}
