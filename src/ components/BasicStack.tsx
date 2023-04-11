import {Box, Paper, Stack, styled} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export const BasicStack = (props: {list: String[]}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                {props.list.map((item, key) => {
                    return (<Item key={key}>{item}</Item>)
                })}
            </Stack>
        </Box>
    );
}