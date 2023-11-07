"use strict";

// Tabelle beginnen
document.write("<table>");

// Tabelle Headerzeile beginnen mit th, colspan = 2 bewirkt, dass die ersten zwei Spalten verbunden werden
document.write("<tr><th colspan=2>Haushaltsbuch - Ausgaben</th>");

let ausgaben = 214;
let summe = 0;
// Für die Monatsnamen verwenden wir das Array, das die Monatsnamen beinhaltet. Ein Array ist eine Variable, welche eine Sammlung von Werten in einer bestimmten Reihenfolge enthaelt. Die Elemente werden unter einem gemeinsamen Namen organisiert, wodurch einfach auf sie zugegriffen werden kann. 
let monatsname = ["Januar", "Februar", "März", "April", "Mai", "Juni"];

// For-Schleife
for (let i = 1; i <= 6; i++) {
    document.write("<tr>");
    document.write("<td>" + monatsname[i - 1] + "</td>");
    // Die Verwendung von [i - 1] ist notwendig, da das Array-Indize in den meisten Programmiersprachen bei 0 beginnen. Das bedeutet, dass das erste Element des Arrays den Index 0 hat, das zweite Element den Index 1 usw. Da i bei 1 beginnt (für den ersten Monat), wird i - 1 verwendet, um den richtigen Index im Array zu ermitteln.
    document.write("<td>" + ausgaben + "</td>");
    document.write("</tr>");
    ausgaben = ausgaben + 34;
    summe = summe + ausgaben;
}

// Leere Zeile
document.write("<tr><td></td></tr>")

// Summe und Durchschnitt
document.write("<tr><td class='bold'>Summe</td><td>" + summe + "</td></tr>");
document.write("<tr><td class='bold'>Durchschnitt</td></td><td>" + summe / 6 + "</td></tr>")

// Tabelle beenden
document.write("</table>");
