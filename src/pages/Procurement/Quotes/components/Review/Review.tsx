import React from "react";
import {
     Box,
     Typography,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Paper,
} from "@mui/material";
import useStyles from "./style";

const Review: React.FC = () => {
     const classes = useStyles();

     // Dummy data for review
     const items = [
          {
               name: "Oxygen Concentrator",
               variant: "Blue",
               quantity: "100 pieces",
               price: 200,
               amount: 2000,
               deliveryDate: "2024-08-07",
          },
          {
               name: "Mechanical Ventilator",
               variant: "NIL",
               quantity: "45 Kg",
               price: 350,
               amount: 2500,
               deliveryDate: "2024-08-07",
          },
          {
               name: "Patient Monitor",
               variant: "Blue",
               quantity: "30 Units",
               price: 300,
               amount: 1500,
               deliveryDate: "2024-08-07",
          },
          {
               name: "Mechanical Ventilator",
               variant: "Blue",
               quantity: "35 Units",
               price: 200,
               amount: 1500,
               deliveryDate: "2024-08-07",
          },
     ];

     const subTotal = items.reduce((total, item) => total + item.amount, 0);
     const total = subTotal + 750; // Assuming some fixed charges or tax for total

     return (
          <Box className={classes.root}>
               {/* Request Information */}
               <Box className={classes.section}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                         Request Information
                    </Typography>
                    <Box className={classes.infoContainer}>
                         <Box className={classes.infoRow}>
                              <Typography className={classes.infoLabel}>Title</Typography>
                              <Typography className={classes.infoValue}>
                                   Request for Equipments
                              </Typography>
                         </Box>
                         <Box className={classes.infoRow}>
                              <Typography className={classes.infoLabel}>RFQ No</Typography>
                              <Typography className={classes.infoValue}>#RQ01234</Typography>
                         </Box>
                         <Box className={classes.infoRow}>
                              <Typography className={classes.infoLabel}>Requestor</Typography>
                              <Typography className={classes.infoValue}>
                                   <Box className={classes.requestorBox}>
                                        <Box className={classes.requestorAvatar}>JD</Box>
                                        Jane Doe • Head Nurse, Paediatrics
                                   </Box>
                              </Typography>
                         </Box>
                         <Box className={classes.infoRow}>
                              <Typography className={classes.infoLabel}>Department</Typography>
                              <Typography className={classes.infoValue}>Maternity</Typography>
                         </Box>
                         <Box className={classes.infoRow}>
                              <Typography className={classes.infoLabel}>
                                   Expected delivery date
                              </Typography>
                              <Typography className={classes.infoValue}>2024-12-02</Typography>
                         </Box>
                    </Box>
               </Box>

               {/* Item(s) Section */}
               <Box className={classes.section}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                         Item(s)
                    </Typography>
                    <TableContainer component={Paper}>
                         <Table>
                              <TableHead>
                                   <TableRow>
                                        <TableCell>Items</TableCell>
                                        <TableCell>Variants</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Expected Delivery Date</TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody>
                                   {items.map((item, index) => (
                                        <TableRow key={index}>
                                             <TableCell>{item.name}</TableCell>
                                             <TableCell>{item.variant}</TableCell>
                                             <TableCell>{item.quantity}</TableCell>
                                             <TableCell>${item.price.toFixed(2)}</TableCell>
                                             <TableCell>${item.amount.toFixed(2)}</TableCell>
                                             <TableCell>{item.deliveryDate}</TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>

                    {/* Subtotal and Total */}
                    <Box className={classes.totalsContainer}>
                         <Box className={classes.totalRow}>
                              <Typography className={classes.totalLabel}>Sub Total</Typography>
                              <Typography className={classes.totalValue}>
                                   ${subTotal.toFixed(2)}
                              </Typography>
                         </Box>
                         <Box className={classes.totalRow}>
                              <Typography className={classes.totalLabel}>Total</Typography>
                              <Typography className={classes.totalValue}>
                                   ${total.toFixed(2)}
                              </Typography>
                         </Box>
                    </Box>
               </Box>

               {/* Terms and Attachments Section */}
               <Box className={classes.section}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                         Terms and Attachments
                    </Typography>
                    <Typography className={classes.termsText}>
                         Review payment and delivery terms
                    </Typography>
               </Box>
          </Box>
     );
};

export default Review;
