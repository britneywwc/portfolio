import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    fontFamily: 'PierSans',
    borderRadius: 28,
    backgroundColor: 'rgba(245,235,224, 0.5)',
    fontSize: 'calc(60% + .3vw)',
    minWidth: 'calc(10% + 1vw)',
    minWidth: 'max-content',
    whiteSpace: 'nowrap',
    // maxWidth: '7vw',
    // maxWidth: 'calc(100% + 7vw)',
    zIndex: 1,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.secondary,
    },
    }));

export default StyledButton;