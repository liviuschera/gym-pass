import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "../features/authentication/Logout";
import Tooltip from "./Tooltip";
import { useNavigate } from "react-router-dom";

const StyledMenuHeader = styled.div`
    display: flex;
    gap: 0.4rem;
`;

function HeaderMenu() {
    const navigate = useNavigate();

    return (
        <StyledMenuHeader>
            <li>
                <Tooltip text="Account">
                    <ButtonIcon onClick={() => navigate("/account")}>
                        <HiOutlineUser />
                    </ButtonIcon>
                </Tooltip>
            </li>
            <li>
                <Tooltip text="Logout">
                    <Logout />
                </Tooltip>
            </li>
        </StyledMenuHeader>
    );
}

export default HeaderMenu;
