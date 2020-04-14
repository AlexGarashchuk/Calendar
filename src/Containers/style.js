
import { makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    btnNav: {
        display: 'block',
        marginLeft: '10px!important',
        textTransform: 'upercase',
        color: '#000',
        borderRadius: '5px!important',
        border: '1px solid rgba(0, 0, 0, 0.23)!important',
        padding: '6.4px 16px!important',
        "& before": {
            content: 'Prew',
            color: "red!important",
            background: "rgba(255, 255, 255, .1)"
        },
        // '&:firth-child': {
        //     // '&::after':{
        //         content: 'Prew',
        //         fontSize: '16px',
        //         color: '#000'
        //     // },
        // },
    },
    // btnNav: {
    //     '& firth-child':{
    //         '& after':{
    //             content: 'Prew',
    //                 fontSize: '16px',
    //                 color: '#000'
    //         },
    //     },
    // },
//     btnNav:first-child::after{
//     content: 'Prew';
//     font-size: 16px;
//     color: #000;
// }
// .btnNav:nth-child(2n)::before{
//     content: 'Next';
//     font-size: 16px;
//     color: #000;
// }
    addButton: {
        position: "absolute",
        bottom: theme.spacing(1) * 3,
        right: theme.spacing(1) * 4,
    },
    container: {
        width: theme.spacing(68),
        padding: 0,
        paddingBottom: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2),
        paddingTop: 0
    },
    header: {
        overflow: "hidden",
        paddingTop: theme.spacing(0.5)
    },
    closeButton: {
        float: "right"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 2)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    picker: {
        marginRight: theme.spacing(2),
        "&:last-child": {
            marginRight: 0
        },
        width: "50%"
    },
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(1, 0)
    },
    icon: {
        margin: theme.spacing(2, 0),
        marginRight: theme.spacing(2)
    },
    textField: {
        width: "100%"
    }
}));


// .btnNav:first-child::after{
//     content: 'Prew';
//     font-size: 16px;
//     color: #000;
// }
// .btnNav:nth-child(2n)::before{
//     content: 'Next';
//     font-size: 16px;
//     color: #000;
// }