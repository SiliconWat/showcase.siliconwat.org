import { FRONTEND } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${FRONTEND}/components/sw-main/sw-cohort/table.css">
    <link rel="stylesheet" href="components/sw-main/sw-home/sw-best/shadow.css">
    <table>
        <caption>Top Students</caption>
        <colgroup>
            <col span="1">
            <col span="1">
            <col span="1">
            <col span="1">
        </colgroup>
        <thead>
            <tr>
                <th scope="col">COHORT</th>
                <th scope="col">Best Startup</th>
                <th scope="col">Best Idea</th>
                <th scope="col">Best Code</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`;

export default template;