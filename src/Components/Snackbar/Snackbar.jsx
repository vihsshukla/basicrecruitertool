import { useSnackbar } from "notistack";
import { anchorOrigin } from "../../Constants/Snackbar";

export const Snackbar = ({ severity, displayText }) => {
    const { enqueueSnackbar } = useSnackbar();
    return (
        <>
            <div className="snackbar-main">
                {enqueueSnackbar(displayText, {
                    anchorOrigin: anchorOrigin,
                    variant: severity
                })}
            </div>
        </>

    );
}

export default Snackbar;