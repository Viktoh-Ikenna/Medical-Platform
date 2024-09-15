import React from "react";
import {
     Box,
     Button,
     Typography,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Paper,
     Avatar,
} from "@mui/material";
import useStyles from "./style";
import { ReactComponent as CancelIcon } from "../../../../../assets/icons/cancel.svg";
import { ReactComponent as ClientIcon } from "../../../../../assets/icons/client.svg";
import { useNavigate } from "react-router-dom";

const items = [
     {
          name: "Oxygen Concentrator",
          variant: "Blue",
          quantity: "100 pieces",
          price: "$200.00",
          amount: "$2,000.00",
          expectedDelivery: "2024-08-07",
     },
     {
          name: "Mechanical Ventilator",
          variant: "NIL",
          quantity: "45 Kg",
          price: "$350.00",
          amount: "$2,500.00",
          expectedDelivery: "2024-08-07",
     },
     {
          name: "Patient Monitor",
          variant: "Blue",
          quantity: "30 Units",
          price: "$300.00",
          amount: "$1,500.00",
          expectedDelivery: "2024-08-07",
     },
     {
          name: "Mechanical Ventilator",
          variant: "Blue",
          quantity: "35 Units",
          price: "$200.00",
          amount: "$1,500.00",
          expectedDelivery: "2024-08-07",
     },
];

const QuoteDetails = () => {
     const classes = useStyles();
     const navigate = useNavigate();

     return (
          <Box className={classes.container}>
               {/* Header Section */}
               <Box className={classes.header}>
                    <div>
                         <Typography variant="h6" className={classes.headerTitle}>
                              Quote details
                         </Typography>
                         <Typography variant="body2" className={classes.createdDate}>
                              Created on Wed, 12th June 2022, 08:00am
                         </Typography>
                    </div>
                    <Box className={classes.headerActions}>
                         <Button
                              variant="contained"
                              color="primary"
                              style={{ backgroundColor: "#175CFF" }}
                              className={classes.actionButton}
                              onClick={() => navigate("/procurement/quotes/response/information")}
                         >
                              Respond
                         </Button>
                         <Button
                              variant="contained"
                              color="secondary"
                              style={{ backgroundColor: "#D42620" }}
                              className={classes.actionButton}
                         >
                              <CancelIcon /> Reject
                         </Button>
                    </Box>
               </Box>

               {/* Quote Information */}
               <Box className={classes.quoteInformation}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                         Quote Information
                    </Typography>
                    <div
                         style={{
                              marginTop: 40,
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                         }}
                    >
                         <Box className={classes.infoGrid}>
                              <div>
                                   <Typography variant="body2" className="title">
                                        Title
                                   </Typography>
                                   <Typography variant="body1">Request for Equipments</Typography>
                              </div>
                              <div>
                                   <Typography variant="body2" className="title">
                                        RFQ No
                                   </Typography>
                                   <Typography variant="body1">RQ #01234</Typography>
                              </div>
                              <div>
                                   <Typography variant="body2" className="title">
                                        Requestor
                                   </Typography>
                                   <Typography variant="body1">
                                        Jane Doe • Head Nurse, Paediatrics
                                   </Typography>
                              </div>
                              <div>
                                   <Typography variant="body2" className="title">
                                        Status
                                   </Typography>
                                   <Typography variant="body1" className={classes.status}>
                                        Awaiting
                                   </Typography>
                              </div>
                              <div>
                                   <Typography variant="body2" className="title">
                                        Department
                                   </Typography>
                                   <Typography variant="body1">Maternity</Typography>
                              </div>
                              {/* <div>
                              <Typography variant="body2">Expected Delivery Date</Typography>
                              <Typography variant="body1">2024-12-02</Typography>
                         </div> */}
                         </Box>
                         <Box style={{ width: "50%" }}>
                              <div className={classes.card}>
                                   <div>
                                        <ClientIcon /> Client
                                   </div>
                                   <Box className={classes.userInfo}>
                                        <Avatar
                                             src="/path/to/avatar.jpg"
                                             alt="Westend Hospital"
                                             className={classes.avatar}
                                             style={{ backgroundColor: "#FFECE5" }}
                                        />
                                        <Box>
                                             <Typography className={classes.userName}>
                                                  Westend Hospital
                                             </Typography>
                                             <Typography className={classes.userEmail}>
                                                  Clear street
                                             </Typography>
                                        </Box>
                                   </Box>
                              </div>
                         </Box>
                    </div>
               </Box>

               {/* Items Section */}
               <Box className={classes.itemsSection}>
                    <Typography variant="h6" className={classes.sectionTitle}>
                         Item(s)
                    </Typography>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                         <Table className={classes.table} aria-label="items table">
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
                                             <TableCell>{item.price}</TableCell>
                                             <TableCell>{item.amount}</TableCell>
                                             <TableCell>{item.expectedDelivery}</TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>
                    <Box className={classes.totalAmount}>
                         <div style={{ display: "flex" }}>
                              <span style={{ width: 100 }}>Sub Total:</span> <div> $8,000.00</div>
                         </div>
                         <div style={{ display: "flex" }}>
                              <span style={{ width: 100 }}>Total:</span>{" "}
                              <div style={{ fontWeight: 800 }}> $8,750.00</div>
                         </div>
                    </Box>
               </Box>

               <Box className={classes.termsSection}>
                    <div>
                         <Typography variant="h6" className={classes.sectionTitle}>
                              Terms and Attachments
                         </Typography>
                         <Typography variant="body2">Review payment and delivery terms</Typography>
                    </div>
               </Box>
          </Box>
     );
};

export default QuoteDetails;
