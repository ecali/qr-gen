import {Box, Divider, Grid, Paper, Slider, TextField, Typography} from "@mui/material";
import ColorPicker from "material-ui-color-picker";

export const FormQr = (props: {
    setVal: (val: string) => void,
    setMargin: (val: number) => void,
    setSize: (val: number) => void,
    color: string,
    setColor: (val: string) => void,
    background: string,
    setBackground: (val: string) => void,
}) => {

    const handleMarginChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            props.setMargin(newValue);
        }
    };

    const handleSizeChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            props.setSize(newValue);
        }
    };

    return (
        <Box className={'box-input'} sx={{p: 1}}>
            <Paper elevation={3} sx={{p: 2}} >
                <TextField margin="dense" id="qr-data" label="QR text" variant="standard" onChange={(e) => props.setVal(e.target.value)} />
                <Divider sx={{ m: 1 }} />
                <Typography variant="caption" display="block" gutterBottom mt={1}>
                    Select the margin
                </Typography>
                <Slider
                    aria-label="Margin"
                    defaultValue={0}
                    step={1}
                    max={4}
                    valueLabelDisplay="on"
                    onChange={handleMarginChange}
                />
                <Divider sx={{ m: 1 }} />
                <Typography variant="caption" display="block" gutterBottom mt={1}>
                    Select size
                </Typography>
                <Slider
                    aria-label="dim"
                    defaultValue={150}
                    step={10}
                    max={500}
                    min={10}
                    valueLabelDisplay="on"
                    onChange={handleSizeChange}
                />
                <Divider sx={{ m: 1 }} />

                <Grid container>
                    <Grid item xs>
                        <Typography variant="caption" display="block" gutterBottom mt={1}>
                            COLOR
                        </Typography>

                        <ColorPicker name='background'
                                     inputProps={{ style: { backgroundColor: props.background } }}
                                     value={props.background}
                                     onChange={background => props.setBackground(background)} />
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                    </Divider>
                    <Grid item xs>
                        <Typography variant="caption" display="block" gutterBottom mt={1}>
                            BACKGROUND
                        </Typography>
                        <ColorPicker name='color'
                                     inputProps={{ style: { backgroundColor: props.color } }}
                                     value={props.color}
                                     onChange={color => props.setColor(color)} />
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    );
}