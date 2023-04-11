import {Button} from "@mui/material";
import { saveAs } from "file-saver"

export const DownloadButton = (props: {imgUrl: string, name: string}) => {
    const downloadImage = () => {
        saveAs(props.imgUrl, `${props.name}.png`)
    }

    return (
        <Button variant="contained" disabled={!props.name} onClick={downloadImage}>Download QR Code Image</Button>
    );
}