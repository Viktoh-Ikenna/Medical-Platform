import React, { useRef, useState } from "react";
import { Box, Typography, Select, MenuItem, TextField, Button } from "@mui/material";
import useStyles from "./style";

const TermsAndAttachments: React.FC = () => {
     const classes = useStyles();
     const imageUploadRef = useRef(null);
     // State management for the form fields
     const [paymentTerms, setPaymentTerms] = useState("Net 30");
     const [shippingMethod, setShippingMethod] = useState("Courier Services");
     const [deliverySchedule, setDeliverySchedule] = useState("Immediate delivery");
     const [leadTime, setLeadTime] = useState(10);

     const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files && files.length > 0) {
               console.log("File selected:", files[0]);
          }
     };

     return (
          <Box className={classes.root}>
               <Typography variant="h6" className={classes.title}>
                    Terms and Attachments
               </Typography>
               <Typography variant="body2" className={classes.subTitle}>
                    Provide detailed information on payment and delivery terms
               </Typography>

               {/* Form Fields */}
               <Box className={classes.formSection}>
                    <Box className={classes.formGroup}>
                         <Box className={classes.formControl}>
                              <Typography variant="body2">Payment Terms</Typography>
                              <Select
                                   value={paymentTerms}
                                   onChange={(e) => setPaymentTerms(e.target.value)}
                                   fullWidth
                              >
                                   <MenuItem value="Net 30">Net 30</MenuItem>
                                   <MenuItem value="Net 60">Net 60</MenuItem>
                                   <MenuItem value="Net 90">Net 90</MenuItem>
                              </Select>
                         </Box>
                         <Box className={classes.formControl}>
                              <Typography variant="body2">Delivery Schedule</Typography>
                              <Select
                                   value={deliverySchedule}
                                   onChange={(e) => setDeliverySchedule(e.target.value)}
                                   fullWidth
                              >
                                   <MenuItem value="Immediate delivery">
                                        Immediate delivery
                                   </MenuItem>
                                   <MenuItem value="Scheduled delivery">
                                        Scheduled delivery
                                   </MenuItem>
                              </Select>
                         </Box>
                    </Box>

                    <Box className={classes.formGroup}>
                         <Box className={classes.formControl}>
                              <Typography variant="body2">Shipping Method</Typography>
                              <Select
                                   value={shippingMethod}
                                   onChange={(e) => setShippingMethod(e.target.value)}
                                   fullWidth
                              >
                                   <MenuItem value="Courier Services">Courier Services</MenuItem>
                                   <MenuItem value="Postal Service">Postal Service</MenuItem>
                                   <MenuItem value="Air Freight">Air Freight</MenuItem>
                              </Select>
                         </Box>
                         <Box className={classes.formControl}>
                              <Typography variant="body2">Lead Time</Typography>
                              <TextField
                                   type="number"
                                   value={leadTime}
                                   onChange={(e) => setLeadTime(parseInt(e.target.value))}
                                   fullWidth
                              />
                         </Box>
                    </Box>
               </Box>

               {/* File Upload Section */}
               <Box className={classes.fileUpload}>
                    <Typography variant="body2" className={classes.uploadText}>
                         Attach all necessary files or documents
                    </Typography>
                    <label htmlFor="file-upload" className={classes.uploadBox}>
                         <Typography variant="body2" className={classes.uploadText}>
                              Click to upload or drag and drop
                         </Typography>
                         <Typography variant="body2" className={classes.uploadSubtext}>
                              SVG, PNG, JPG or GIF (max. 800x400px)
                         </Typography>
                         <input
                              id="file-upload"
                              type="file"
                              className={classes.fileInput}
                              onChange={handleFileUpload}
                              ref={imageUploadRef}
                         />
                    </label>

                    <Button
                         className={classes.browseButton}
                         onClick={() => (imageUploadRef?.current as any)?.click()}
                         variant="outlined"
                    >
                         Browse Files
                    </Button>
               </Box>
          </Box>
     );
};

export default TermsAndAttachments;
