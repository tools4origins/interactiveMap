"use strict";
window.app = window.app || {};

window.app.companiesBySector = {
    aeronautique: {
        name: "Aéronautique",
        color: "red",
        companies: [
            {
                name: "Safran",
                logo: "safran.png",
                locationId: "B3"
            }, {
                name: "Thales",
                logo: "thales.png",
                locationId: "B27"
            }, {
                name: "Airbus Defense & Space",
                logo: "airbusdefense.png",
                locationId: "C22"
            }
        ]
    },
    auditConseil: {
        name: "Audit / Conseil",
        color: "green",
        companies: [
            {
                name: "Mazars",
                logo: "mazars.png",
                locationId: "C24"
            }, {
                name: "Accenture",
                logo: "accenture.png",
                locationId: "C21"
            }, {
                name: "Capgemini consulting",
                logo: "capgemini-consulting.png",
                locationId: "A31"
            }, {
                name: "Solucom",
                logo: "solucom.png",
                locationId: "C12"
            }, {
                name: "NetXP",
                logo: "netxp.png",
                locationId: "B17"
            }, {
                name: "EY",
                logo: "ernst_and_young.png",
                locationId: "A14"
            }, {
                name: "Beijaflore",
                logo: "beijaflore.png",
                locationId: "C6"
            }, {
                name: "Lavoix",
                logo: "lavoix.png",
                locationId: "B10"
            }, {
                name: "MC²I Groupe",
                logo: "mc2i.png",
                locationId: "A39"
            }, {
                name: "PwC",
                logo: "pwc.png",
                locationId: "C16"
            }, {
                name: "Setec IS",
                logo: "setec_is.png",
                locationId: "A11"
            }, {
                name: "T&T Consulting",
                logo: "t_and_t_consulting.png",
                locationId: "A2"
            }, {
                name: "Alten",
                logo: "alten.png",
                locationId: "A9"
            }, {
                name: "BearingPoint",
                logo: "bearingpoint.png",
                locationId: "C20"
            }, {
                name: "Sia Partners",
                logo: "sia_conseil.png",
                locationId: "A34"
            }, {
                name: "1000mercis",
                logo: "1000mercis.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Devoteam Consulting",
                logo: "devoteam.png",
                locationId: "B24"
            }, {
                name: "Altran",
                logo: "altran.png",
                locationId: "A43"
            }, {
                name: "Provadys",
                logo: "provadys.png",
                locationId: "A1"
            }, {
                name: "Cereza Conseil",
                logo: "cereza.png",
                locationId: "C2"
            }, {
                name: "Bluestone Consulting",
                logo: "bluestone.jpg",
                locationId: "B26"
            }, {
                name: "Ekimetrics",
                logo: "ekimetrics.jpg",
                locationId: "B31"
            }, {
                name: "KPMG",
                logo: "kpmg.png",
                locationId: "C23"
            }, {
                name: "Eurogroup Consulting",
                logo: "eurogroupconsulting.jpg",
                locationId: "A6"
            }, {
                name: "Octo Technology",
                logo: "octo.png",
                locationId: "C10"
            }, {
                name: "Artik",
                logo: "artik.jpg",
                locationId: "A35"
            }
        ]
    },
    banquesAssurances: {
        name: "Banques / Assurances",
        color: "blue",
        companies: [
            {
                name: "Société Générale",
                logo: "socgen.png",
                locationId: "B13"
            }, {
                name: "HSBC",
                logo: "hsbc.png",
                locationId: "B28"
            }, {
                name: "BNP Parisbas",
                logo: "bnp.png",
                locationId: "A48"
            }, {
                name: "Credit agricole",
                logo: "creditagricole.png",
                locationId: "A32"
            }
        ]
    },
    constructeurEquipement: {
        name: "Constructeurs d’équipements",
        color: "yellow",
        companies: [
            {
                name: "Alcatel-Lucent",
                logo: "alcatel.png",
                locationId: "C4"
            }, {
                name: "Sagemcom",
                logo: "sagem.png",
                locationId: "B30"
            }
        ]
    },
    electronique: {
        name: "Électronique / Micro-électronique",
        color: "gray",
        companies: [
            {
                name: "ARM",
                logo: "arm.png",
                locationId: "B33"
            }, {
                name: "Parrot SA",
                logo: "parrot.png",
                locationId: "C1"
            }, {
                name: "Keecker",
                logo: "keecker.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Withings",
                logo: "withings.jpg",
                locationId: "A37"
            }
        ]
    },
    energie: {
        name: "Énergie",
        color: "orange",
        companies: [
            {
                name: "EDF",
                logo: "edf.png",
                locationId: "B20"
            }, {
                name: "RTE",
                logo: "rte.png",
                locationId: "A10"
            }, {
                name: "EIFFAGE Energie",
                logo: "eiffage-energie.png",
                locationId: "A40"
            }
        ]
    },
    industrie: {
        name: "Industrie",
        color: "chocolate",
        companies: [
            {
                name: "Schlumberger",
                logo: "schlumberger.png",
                locationId: "C11"
            }, {
                name: "DCNS",
                logo: "dcns.png",
                locationId: "C25"
            }, {
                name: "Oberthur",
                logo: "oberthur.png",
                locationId: "B32"
            }, {
                name: "GE Health",
                logo: "ge_healthcare.png",
                locationId: "B18"
            }, {
                name: "PSA",
                logo: "peugeot.png",
                locationId: "C17"
            }, {
                name: "Setec IS",
                logo: "setec.png",
                locationId: "A11"
            }, {
                name: "Renault",
                logo: "renault.jpg",
                locationId: "A46"
            }
        ]
    },
    informatique: {
        name: "Informatique / Développement logiciel",
        color: "fuchsia",
        companies: [
            {
                name: "Murex",
                logo: "murex.png",
                locationId: "C5"
            }, {
                name: "Ubisoft",
                logo: "ubisoft.png",
                locationId: "B21"
            }, {
                name: "Microsoft engineering",
                logo: "microsoft.png",
                locationId: "A12"
            }, {
                name: "Amadeus",
                logo: "amadeus_new.png",
                locationId: "C19"
            }, {
                name: "Gemalto",
                logo: "gemalto.png",
                locationId: "C7"
            }, {
                name: "Dassault Systèmes",
                logo: "dassault.png",
                locationId: "B5"
            }, {
                name: "Theodo",
                logo: "theodo.png",
                locationId: "C8"
            }, {
                name: "Inovia Team",
                logo: "inovia.png",
                locationId: "C3"
            }, {
                name: "Yelp",
                logo: "yelp.jpg",
                locationId: "B29"
            }, {
                name: "Efront",
                logo: "efront.png",
                locationId: "B19"
            }, {
                name: "Sublime SKINZ",
                logo: "sublimeskinz.jpg",
                locationId: "Espace Start-Up"
            }, {
                name: "Jump Informatique",
                logo: "jumpinformatique.jpg",
                locationId: "A42"
            }, {
                name: "Bloomberg",
                logo: "Bloomberg.jpg",
                locationId: "A29"
            }, {
                name: "Melusyn",
                logo: "melusyn.jpg",
                locationId: "Espace Start-Up"
            }, {
                name: "Magency Digital",
                logo: "magency.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Addengo",
                logo: "addengo.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Pricematch",
                logo: "pricematch.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Mevia",
                logo: "mevia.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Linagora",
                logo: "linagora.gif",
                locationId: "B21"
            }, {
                name: "Upslide",
                logo: "upslide.jpg",
                locationId: "Espace Start-Up"
            }, {
                name: "BAM",
                logo: "bam.png",
                locationId: "Espace Start-Up"
            }, {
                name: "DxO",
                logo: "dxo.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Ubisoft",
                logo: "ubisoft.png",
                locationId: "B22"
            }
        ]
    },
    operateurTelecom: {
        name: "Opérateurs de Télécommunications",
        color: "tan",
        companies: [
            {
                name: "SFR",
                logo: "sfr.png",
                locationId: "B2"
            }, {
                name: "Orange",
                logo: "orange.png",
                locationId: "B23"
            }, {
                name: "Bouygues Télécom",
                logo: "bouygues.png",
                locationId: "B8"
            }, {
                name: "Numéricable",
                logo: "sfr.png",
                locationId: "B2"
            }, {
                name: "Outscale",
                logo: "outscale.png",
                locationId: "A30"
            }, {
                name: "TDF",
                logo: "tdf.jpg",
                locationId: "B1"
            }, {
                name: "Legos",
                logo: "legos.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Sopelec",
                logo: "scopelec.jpg",
                locationId: "A36"
            }
        ]
    },
    esn: {
        name: "ESN (ex-SSII)",
        color: "skyblue",
        companies: [
            {
                name: "Sopra Group",
                logo: "sopragroup.png",
                locationId: "B16"
            }, {
                name: "Klee Group",
                logo: "klee.png",
                locationId: "A7"
            }, {
                name: "Spie Commmunications",
                logo: "spie.png",
                locationId: "A33"
            }, {
                name: "Jems Partner",
                logo: "jems.png",
                locationId: "A5"
            }, {
                name: "Telindus",
                logo: "telindus.png",
                locationId: "B2"
            }, {
                name: "CGI",
                logo: "cgi.png",
                locationId: "B34"
            }, {
                name: "Capgemini",
                logo: "capgemini.png",
                locationId: "C13"
            }, {
                name: "SII",
                logo: "sii.png",
                locationId: "A3"
            }, {
                name: "Atos",
                logo: "atos.png",
                locationId: "A13"
            }, {
                name: "CS Système",
                logo: "cs.png",
                locationId: "A8"
            }, {
                name: "Arismore",
                logo: "arismore.png",
                locationId: "B25"
            }, {
                name: "Cap Fi",
                logo: "capFiGroupe.jpg",
                locationId: "A41"
            }, {
                name: "Protectic",
                logo: "protectic.jpg",
                locationId: "Espace Start-Up"
            }
        ]
    },
    transports: {
        name:"Transports",
        color:"springgreen",
        companies: [
            {
                name: "SNCF",
                logo: "sncf.png",
                locationId: "C15"
            }, {
                name: "RATP",
                logo: "ratp.png",
                locationId: "B6"
            }, {
                name: "Blablacar",
                logo: "blablacar.jpg",
                locationId: "Espace Start-Up"
            }
        ]
    },
    troisiemeCycle: {
        name: "3ème Cycle",
        color: "royalblue",
        companies: [
            {
                name: "Telecom Lille",
                logo: "telecom-lillep.png",
                locationId: "espaceEcoles"
            }, {
                name: "Eurecom",
                logo: "eurecom.png",
                locationId: "espaceEcoles"
            }, {
                name: "HEC",
                logo: "hec.png",
                locationId: "B11"
            }, {
                name: "Télécom SudParis",
                logo: "telecomsudparis.png",
                locationId: "espaceEcoles"
            }, {
                name: "Télécom Ecole de Management",
                logo: "tem.png",
                locationId: "espaceEcoles"
            }, {
                name: "Télécom ParisTech",
                logo: "paristech.png",
                locationId: "espaceEcoles"
            }, {
                name: "Télécom Bretagne",
                logo: "telecombretagne.png",
                locationId: "espaceEcoles"
            }
        ]
    },
    autres: {
        name:"Autres",
        color:"thistle",
        companies: [
            {
                name: "Canal+",
                logo: "canalplus.png",
                locationId: "A44"
            }, {
                name: "TF1",
                logo: "tf1.png",
                locationId: "B8"
            }, {
                name: "Sprint JE",
                logo: "sprint.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Telecom Etude",
                logo: "telecometude.png",
                locationId: "Espace Start-Up"
            }, {
                name: "Autorité des marchés financiers",
                logo: "amf.jpg",
                locationId: "B15"
            }, {
                name: "Télécom & Management Alumni",
                logo: "tma.png",
                locationId: "espaceEcoles"
            }, {
                name: "Télécom ParisTech Alumni",
                logo: "telecomparisalumni.png",
                locationId: "espaceEcoles"
            }, {
                name: "Danone",
                logo: "danone.jpg",
                locationId: "B9"
            }, {
                name: "Sogetrel",
                logo: "sogetrel.png",
                locationId: "A4"
            }, {
                name: "ANSSI",
                logo: "anssi.png",
                locationId: "C9"
            }, {
                name: "Alan Allman Associates",
                logo: "alan_allman_associates.png",
                locationId: "A45"
            }, {
                name: "AIESEC",
                logo: "aiesec.png",
                locationId: "B12"
            }, {
                name: "JobTeaser",
                logo: "jobteaser.png",
                locationId: "A38"
            }
        ]
    }
};

// Sort the list of exposant alphabetically
var alphaSortExponent = function(elem1, elem2) {
    if(elem1.name < elem2.name) {
        return -1;
    }
    if(elem1.name > elem2.name) {
        return 1;
    }
   return 0;
};
for(var sectorId in window.app.companiesBySector) {
    window.app.companiesBySector[sectorId].companies.sort(alphaSortExponent);
}

console.log(window.app.companiesBySector);

window.app.getCompanies = function() {
    var companies = [];
    for(var sectorId in this.companiesBySector) {
        var sectorCompanies = this.companiesBySector[sectorId].companies;
        for(var companyId in sectorCompanies) {
            companies.push(sectorCompanies[companyId]);
        }
    }
    return companies;
};

window.app.getCompaniesByLocation = function(locationId) {
    var returnedCompanies=[];
    for(var sectorId in this.companiesBySector) {
        var sectorCompanies = this.companiesBySector[sectorId].companies;
        for(var companyId in sectorCompanies) {
            var company = sectorCompanies[companyId];
            if(company.locationId==locationId) {
                returnedCompanies.push(company);
            }
        }
    }
    return returnedCompanies;
};