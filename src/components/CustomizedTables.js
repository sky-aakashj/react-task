import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const ExpandableTableRow = ({ item }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    console.log(item)

    return (
        <>
            <TableHead >
                <TableRow colspan="1">
                    <StyledTableCell >{item.tableHeader}</StyledTableCell>
                    <StyledTableCell >
                        <TableCell padding="checkbox" align="right" style={{ borderBottomWidth: '0' }}>
                            <IconButton align="right" onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? <KeyboardArrowUpIcon style={{ color: 'white' }} /> : <KeyboardArrowDownIcon style={{ color: 'white' }} />}
                            </IconButton>
                        </TableCell>
                    </StyledTableCell>
                </TableRow>
            </TableHead>

            {isExpanded && (
                <TableBody>
                    {item.tableRow.map((row) => (
                        (row.type === "normal") ?
                            <StyledTableRow key={row.rowData}>
                                <StyledTableCell component="th" scope="row">
                                    {row.rowData}
                                </StyledTableCell>

                                <StyledTableCell align="right">{row.value}$</StyledTableCell>
                            </StyledTableRow> :

                            <>
                                <StyledTableRow key={row.subTable[0].subTableHeader}>
                                    <StyledTableCell >{row.subTable[0].subTableHeader}</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </StyledTableRow>
                                {row.subTable[0].subTableRow.map((row) => (
                                    <StyledTableRow sx={{ p: 4 }} key={row.rowData}>
                                        <StyledTableCell sx={{ pl: 5 }} component="th" scope="row">
                                            {row.rowData}
                                        </StyledTableCell>

                                        <StyledTableCell align="right">{row.value}$</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </>
                    ))}
                </TableBody>
            )}
        </>
    );
};



export default function CustomizedTables(props) {
    // console.log(props.data[0]);
    return <>

        {
            props.data[0].tableContent.map((item) => (
                !item.accordion ?
                    <TableContainer component={Paper} sx={{ m: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead >
                                <TableRow colspan="1">
                                    <StyledTableCell >{item.tableHeader}</StyledTableCell>
                                    <StyledTableCell ></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {item.tableRow.map((row) => (
                                    (row.type === "normal") ?
                                        <StyledTableRow key={row.rowData}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.rowData}
                                            </StyledTableCell>

                                            <StyledTableCell align="right">{row.value}$</StyledTableCell>
                                        </StyledTableRow> :

                                        <>
                                            <StyledTableRow key={row.subTable[0].subTableHeader}>
                                                <StyledTableCell >{row.subTable[0].subTableHeader}</StyledTableCell>
                                                <StyledTableCell align="right"></StyledTableCell>
                                            </StyledTableRow>
                                            {row.subTable[0].subTableRow.map((row) => (
                                                <StyledTableRow sx={{ p: 4 }} key={row.rowData}>
                                                    <StyledTableCell sx={{ pl: 5 }} component="th" scope="row">
                                                        {row.rowData}
                                                    </StyledTableCell>

                                                    <StyledTableCell align="right">{row.value}$</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </>



                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> :


                    <TableContainer component={Paper} sx={{ m: 2 }}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <ExpandableTableRow item={item}>

                            </ExpandableTableRow>
                        </Table>
                    </TableContainer>
            ))

        }


    </>

}
