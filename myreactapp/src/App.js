import React, { Component } from 'react';  
import ReactTable from "react-table-v6";  
import "react-table-v6/react-table.css";
  
class App extends Component {  
  render() {  
     const data = [{  
        name: 'Cholesterollevels',  
        value: 26  
        },{  
         name: 'Bp_dia',  
         value: 22  
         },{  
         name: 'Bp_sys',  
         value: 40      
         },{  
         name: 'Triglycerides',  
         value: 30  
         },{  
         name: 'HDL',  
         value: 32  
         },{  
         name: 'Non_HDL',  
         value: 37  
         },{  
          name: 'LDL',  
          value: 32  
         },{  
          name: 'RBC',  
          value: 32  
         },{  
          name: 'Ketone',  
          value: 32  
         },{  
          name: 'ACR',  
          value: 32  
         },{  
          name: 'T3',  
          value: 32  
         },{  
          name: 'T4',  
          value: 32  
         },{  
          name: 'TSH',  
          value: 32  
         },{  
          name: 'Vitamin_d',  
          value: 32  
         },{  
          name: 'Calcium',  
          value: 32  
         },{  
          name: 'Phosphorous',  
          value: 32  
         },{  
          name: 'Bun',  
          value: 32  
         },{  
          name: 'Bilirubin_total',  
          value: 32  
         },{  
          name: 'Bilirubin_direct',  
          value: 32  
         },{  
          name: 'Bilirubin_indirect',  
          value: 32  
         },{  
          name: 'Alkaline_phosphatase',  
          value: 32  
         },{  
          name: 'Globulin',  
          value: 32  
         },{  
          name: 'AG_ratio',  
          value: 32  
         },{  
          name: 'Creatinine',  
          value: 32  
         },{  
          name: 'Uric_acid',  
          value: 32  
         },{  
          name: 'Total_protein',  
          value: 32  
         },{  
          name: 'Glucosevalues',  
          value: 32  
         },{  
          name: 'Total_Cholestrol',  
          value: 32  
         },{  
          name: 'cust_id',  
          value: 32  
         }]  
     const columns = [{  
       Header: 'Vitals',  
       accessor: 'name'  
       },{  
       Header: 'Value',  
       accessor: 'value'  
       }]  
    return (  
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4,100]}  
              />  
          </div>        
    )  
  }  
}  
export default App;  