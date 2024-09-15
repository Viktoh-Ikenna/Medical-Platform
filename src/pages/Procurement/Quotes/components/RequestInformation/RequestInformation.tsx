import React, { useState } from "react";
import {
     Box,
     Typography,
     TextField,
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Paper,
     IconButton,
     Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useStyles from "./style";

// Define types for items
interface Item {
     name: string;
     variant: string;
     quantity: number;
     price: number;
     expectedDelivery: string;
     amount: number;
}

const RequestInformation: React.FC = () => {
     const classes = useStyles();

     // State for the list of items
     const [items, setItems] = useState<Item[]>([
          {
               name: "Oxygen Concentrator",
               variant: "Blue",
               quantity: 100,
               price: 12,
               expectedDelivery: "2023-12-02",
               amount: 1200,
          },
          {
               name: "Mechanical Ventilator",
               variant: "Blue",
               quantity: 100,
               price: 12,
               expectedDelivery: "2023-12-02",
               amount: 1200,
          },
          {
               name: "Patient Monitor",
               variant: "Blue",
               quantity: 100,
               price: 12,
               expectedDelivery: "2023-12-02",
               amount: 1200,
          },
          {
               name: "Mechanical Ventilator",
               variant: "Blue",
               quantity: 100,
               price: 12,
               expectedDelivery: "2023-12-02",
               amount: 1200,
          },
     ]);

     // State for subtotal
     const [subTotal, setSubTotal] = useState<number>(() => calculateSubTotal(items));

     // Function to calculate subtotal
     function calculateSubTotal(items: Item[]): number {
          return items.reduce((sum, item) => sum + item.amount, 0);
     }

     // Add new item
     const addItem = () => {
          const newItem: Item = {
               name: "",
               variant: "",
               quantity: 1,
               price: 0,
               expectedDelivery: "",
               amount: 0,
          };
          setItems([...items, newItem]);
     };

     // Remove item
     const removeItem = (index: number) => {
          const updatedItems = items.filter((_, idx) => idx !== index);
          setItems(updatedItems);
          setSubTotal(calculateSubTotal(updatedItems));
     };

     // Handle item field change
     const handleItemChange = (index: number, field: keyof Item, value: string | number) => {
          const updatedItems = items.map((item, idx) =>
               idx === index
                    ? { ...item, [field]: value, amount: item.quantity * item.price }
                    : item,
          );
          setItems(updatedItems);
          setSubTotal(calculateSubTotal(updatedItems));
     };

     return (
          <Box className={classes.container}>
               <Typography variant="h6" className={classes.title}>
                    Request for Quote
               </Typography>
               <Typography variant="body2" className={classes.subTitle}>
                    Fill out these details to send the RFQ
               </Typography>

               {/* Form Fields */}
               <Box className={classes.formSection}>
                    <Box className={classes.formGroup}>
                         <TextField
                              label="RFQ No"
                              className={classes.textInput}
                              defaultValue="RFQ-10234"
                              fullWidth
                         />
                         <TextField
                              label="Title"
                              className={classes.textInput}
                              defaultValue="Request for Equipments"
                              fullWidth
                         />
                    </Box>
                    <Box className={classes.formGroup}>
                         <TextField
                              label="Department"
                              defaultValue="Maternity"
                              fullWidth
                              className={classes.textInput}
                         />
                         <TextField
                              label="Expected Delivery Date"
                              defaultValue="2024-12-02"
                              fullWidth
                              type="date"
                              className={classes.textInput}
                         />
                    </Box>
               </Box>

               <hr style={{ marginBottom: 40 }} />
               {/* Items Table */}
               <Box>
                    <div style={{ color: "#1D2739", fontSize: 16, fontWeight: "700" }}>
                         Add Items
                    </div>
                    <TableContainer
                         component={Paper}
                         className={classes.tableContainer}
                         style={{ boxShadow: "none" }}
                    >
                         <Table>
                              <TableHead style={{ boxShadow: "none" }}>
                                   <TableRow style={{ boxShadow: "none", borderRadius: 16 }}>
                                        <TableCell className={classes.tableHeader}>Items</TableCell>
                                        <TableCell className={classes.tableHeader}>
                                             Variant
                                        </TableCell>
                                        <TableCell className={classes.tableHeader}>
                                             Quantity
                                        </TableCell>
                                        <TableCell className={classes.tableHeader}>Price</TableCell>
                                        <TableCell className={classes.tableHeader}>
                                             Expected Delivery Date
                                        </TableCell>
                                        <TableCell className={classes.tableHeader} colSpan={2}>
                                             Amount
                                        </TableCell>
                                   </TableRow>
                              </TableHead>
                              <TableBody style={{ boxShadow: "none" }}>
                                   {items.map((item, index) => (
                                        <TableRow style={{ boxShadow: "none" }} key={index}>
                                             <TableCell
                                                  style={{ boxShadow: "none" }}
                                                  className={classes.tableCell}
                                             >
                                                  <TextField
                                                       style={{ boxShadow: "none" }}
                                                       value={item.name}
                                                       onChange={(e) =>
                                                            handleItemChange(
                                                                 index,
                                                                 "name",
                                                                 e.target.value,
                                                            )
                                                       }
                                                       fullWidth
                                                       className={classes.textInputTable}
                                                  />
                                             </TableCell>
                                             <TableCell className={classes.tableCell}>
                                                  <TextField
                                                       value={item.variant}
                                                       onChange={(e) =>
                                                            handleItemChange(
                                                                 index,
                                                                 "variant",
                                                                 e.target.value,
                                                            )
                                                       }
                                                       fullWidth
                                                       className={classes.textInputTable}
                                                  />
                                             </TableCell>
                                             <TableCell className={classes.tableCell}>
                                                  <TextField
                                                       type="number"
                                                       value={item.quantity}
                                                       onChange={(e) =>
                                                            handleItemChange(
                                                                 index,
                                                                 "quantity",
                                                                 parseInt(e.target.value),
                                                            )
                                                       }
                                                       fullWidth
                                                       className={classes.textInputTable}
                                                  />
                                             </TableCell>
                                             <TableCell className={classes.tableCell}>
                                                  <TextField
                                                       type="number"
                                                       value={item.price}
                                                       onChange={(e) =>
                                                            handleItemChange(
                                                                 index,
                                                                 "price",
                                                                 parseFloat(e.target.value),
                                                            )
                                                       }
                                                       fullWidth
                                                       className={classes.textInputTable}
                                                  />
                                             </TableCell>
                                             <TableCell className={classes.tableCell}>
                                                  <TextField
                                                       type="date"
                                                       value={item.expectedDelivery}
                                                       onChange={(e) =>
                                                            handleItemChange(
                                                                 index,
                                                                 "expectedDelivery",
                                                                 e.target.value,
                                                            )
                                                       }
                                                       fullWidth
                                                       className={classes.textInputTable}
                                                  />
                                             </TableCell>
                                             <TableCell
                                                  className={classes.tableCell}
                                                  style={{
                                                       color: "#344054 !important",
                                                       fontFamily: "Satoshi !important",
                                                       fontWeight: 700,
                                                  }}
                                             >
                                                  ${item.amount.toFixed(2)}
                                             </TableCell>
                                             <TableCell className={classes.tableCell}>
                                                  <IconButton
                                                       onClick={() => removeItem(index)}
                                                       className={classes.deleteIcon}
                                                  >
                                                       <DeleteIcon />
                                                  </IconButton>
                                             </TableCell>
                                        </TableRow>
                                   ))}
                              </TableBody>
                         </Table>
                    </TableContainer>

                    {/* <Box className={classes.addItemButton}>
                         <Button onClick={addItem} startIcon={<AddIcon />} variant="outlined">
                              Add Item
                         </Button>
                    </Box> */}

                    {/* Sub Total */}
                    <Box className={classes.subTotal}>
                         <Typography variant="body1">Sub Total: ${subTotal.toFixed(2)}</Typography>
                    </Box>

                    {/* Notes */}
                    <TextField
                         label="Notes"
                         placeholder="Enter any notes here"
                         style={{ width: "60%" }}
                         multiline
                         rows={3}
                         className={classes.noteField}
                    />
               </Box>
          </Box>
     );
};

export default RequestInformation;
