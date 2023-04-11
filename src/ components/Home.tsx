import {FormQr} from "./FormQr";
import {Alert, Divider, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {DownloadButton} from "./Download";
import {BasicStack} from "./BasicStack";

export const Home = () => {
    const [val, setVal] = useState('');
    const [margin, setMargin] = useState(0);
    const [size, setSize] = useState(150);
    const [color, setColor] = useState('#fff');
    const [background, setBackground] = useState('#000');
    const [name, setName] = useState('');


    const imgUrl = `https://quickchart.io/qr?text=${val}&margin=${margin}&size=${size}&light=${color.replace('#', '')}&dark=${background.replace('#', '')}`;
    const basicList = [
        `Text: ${val}`,
        `Margin: ${margin}`,
        `Dimension: ${size}`,
        `Color: ${background}`,
        `Background: ${color}`
    ];

    return (
        <div>
            <h1>QR GEN</h1>
            <div className={'container'}>
                <Grid container spacing={4} direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="caption" display="block" gutterBottom mt={1}>
                            QR CODE DATA
                        </Typography>
                        <FormQr setVal={setVal} setMargin={setMargin} setSize={setSize}
                            color={color} setColor={setColor} background={background}
                                setBackground={setBackground}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {val ? (
                            <>
                                <Typography variant="caption" display="block" gutterBottom mt={1}>
                                    Preview
                                </Typography>
                                <img src={imgUrl} alt={val} />
                            </>
                        ): (
                            <Alert severity="info">Insert the value please!</Alert>
                        )}
                    </Grid>
                </Grid>
            </div>
            {val && (
                <div className={'container mt-2'}>
                    <Grid container spacing={1} direction="row"
                          justifyContent="center"
                          alignItems="center">
                        <Grid item xs={8}>
                            <BasicStack list={basicList} />
                        </Grid>
                        <Grid item xs={4}>
                            {val && (
                                <>
                                    <Typography variant="caption" display="block" gutterBottom mt={1}>
                                        Download info
                                    </Typography>
                                    <Divider sx={{ m: 1 }} />
                                    <TextField margin="dense" id="img-name" label="Name of image" variant="standard" onChange={(e) => setName(e.target.value)} />
                                    <Divider sx={{ m: 1 }} />
                                    <DownloadButton imgUrl={imgUrl} name={name}/>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </div>
            )}
        </div>
    );
}