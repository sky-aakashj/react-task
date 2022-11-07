import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomizedTables from './components/CustomizedTables';

// "header": {
//   mainHeader: "financial",
//   subHeader: "all data"
// },

var data = [

  {
    "header": {
      "mainHeader": "financial",
      "subHeader": "all data",
      "para": "something should come here"
    },


    "tableContent": [
      {
        "accordion": false,
        "tableHeader": "header 1",
        "tableRow": [
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.87"
          },
          {
            "type": "normal",
            "rowData": "somethinh 2",
            "value": "0.88"
          },
          {
            "type": "normal",
            "rowData": "somethinh 3",
            "value": "0.89"
          },
        ]

      },
      {
        "accordion": false,
        "tableHeader": "header 2",
        "tableRow": [
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.87"
          },
          {
            "type": "nested",
            "subTable": [
              {
                "subTableHeader": "sub heading 1",
                "subTableRow": [
                  {
                    "rowData": "sub row 1",
                    "value": "0.88"
                  },
                  {
                    "rowData": "sub row 2 ",
                    "value": "0.88"
                  },
                  {
                    "rowData": "sub row 3 ",
                    "value": "0.88"
                  },

                ]
              }
            ],

          },
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.89"
          },
        ]

      },
      {
        "accordion": true,
        "tableHeader": "header 3",
        "tableRow": [
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.87"
          },
          {
            "type": "nested",
            "subTable": [
              {
                "subTableHeader": "sub heading 1",
                "subTableRow": [
                  {
                    "rowData": "sub row 1",
                    "value": "0.88"
                  },
                  {
                    "rowData": "sub row 2 ",
                    "value": "0.88"
                  },
                  {
                    "rowData": "sub row 3 ",
                    "value": "0.88"
                  },

                ]
              }
            ],
          },
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.89"
          },

        ]

      },
      {
        "accordion": true,
        "tableHeader": "header 4",
        "tableRow": [
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.87"
          },
          {
            "type": "normal",
            "rowData": "somethinh 2",
            "value": "0.88"
          },
          {
            "type": "normal",
            "rowData": "somethinh 1",
            "value": "0.89"
          },

        ]

      }

    ]

  }







]










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
    <CustomizedTables data={data} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
