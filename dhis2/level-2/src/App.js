import React, { useState } from "react";
import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui'
import styles from './App.module.css'

import { useDataQuery } from "@dhis2/app-runtime";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableCellHead,
    TableRow,
    TableRowHead,
  } from "@dhis2/ui-core";

  // Query
const query = (type) => ({
    programs: {
      resource: type,
      params: {
        fields: ["id", "name", "created"],
        paging: false,
      },
    },
  });
  
  const Details = ({ details }) => {
    return (
      <div>
        <h1>Details</h1>
        {details.id !== "" && (
          <Table dataTest="dhis2-uicore-table">
            <TableHead dataTest="dhis2-uicore-tablehead">
              <TableRowHead dataTest="dhis2-uicore-tablerowhead">
                <TableCellHead dataTest="dhis2-uicore-tablecellhead">
                  Key
                </TableCellHead>
                <TableCellHead dataTest="dhis2-uicore-tablecellhead">
                  Value
                </TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody dataTest="dhis2-uicore-tablebody">
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">ID</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.id}
                </TableCell>
              </TableRow>
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">name</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.name}
                </TableCell>
              </TableRow>
              <TableRow dataTest="dhis2-uicore-tablerow">
                <TableCell dataTest="dhis2-uicore-tablecell">Created</TableCell>
                <TableCell dataTest="dhis2-uicore-tablecell">
                  {details.created}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>
    );
  };
  
  const List = ({ programs }) => {
    const list =
      programs.programs !== undefined ? programs.programs : programs.dataSets;
    const [details, updateDetails] = useState({
      id: "",
      name: "",
      created: "",
    });
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h1>List</h1>
            <pre>
              {list.map((el) => (
                <div key={el.id}>
                  <MenuItem
                    label={i18n.t(el.name)}
                    dataTest="menu-programs"
                    onClick={() => {
                      updateDetails({ ...el });
                    }}
                  />
                </div>
              ))}
            </pre>
          </div>
          <Details details={details} />
        </div>
      </div>
    );
  };
const MyApp = () => {const queryProgramResult = useDataQuery(query("programs"));
const queryDatasetResult = useDataQuery(query("dataSets"));
const [queryResult, updateQueryResult] = useState(queryProgramResult);
return (
  <div className={styles.container}>
    <nav className={styles.menu} data-test-id="menu">
      <MenuSectionHeader label={i18n.t("Menu")} />
      <Menu>
        <MenuItem
          label={i18n.t("Programs")}
          dataTest="menu-list"
          onClick={() => {
            updateQueryResult(queryProgramResult);
          }}
        />
        <MenuItem
          label={i18n.t("Data sets")}
          dataTest="menu-dataSets"
          onClick={() => {
            updateQueryResult(queryDatasetResult);
          }}
        />
      </Menu>
    </nav>
    <div></div>
    <main className={styles.main}>
      {queryResult.loading && <span> ... </span>}
      {queryResult.error && (
        <span>{`ERROR: ${queryResult.error.message}`}</span>
      )}
      {queryResult.data && <List {...queryResult.data} />}
    </main>
  </div>
);
}

export default MyApp
